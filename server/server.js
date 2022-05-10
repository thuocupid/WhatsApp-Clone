//importing
import { Message } from '@mui/icons-material';
import express from 'express'
import mongoose from 'mongoose';
import Messages from './dbMessages.js'
import Pusher from 'pusher';
import cors from 'cors'

//app config
 const app = express();
 const port = process.env.PORT||9000

 const pusher = new Pusher({
    appId: "1406393",
    key: "3b1d4475f339e4ef947c",
    secret: "4cf614182e660955d180",
    cluster: "eu",
    useTLS: true
  });


  const db = mongoose.connection

  db.once('open', ()=>{
      console.log('DB is connected');

      const msgCollection = db.collection('messagecontents')
      const changeStream = msgCollection.watch();

      changeStream.on('change', (change)=>{
          console.log('A change occurred', change)

          if (change.operationType === 'insert'){
              const messageDetails = change.fullDocument;
              pusher.trigger('messages', 'inserted', {
                  name: messageDetails.name ,
                  message: messageDetails.message,
                  timestamp: messageDetails.timestamp
              });
          } else {
              console.log('Error occurred when triggering pusher');
          }

      });
  });

//middleware
app.use(express.json());
app.use(cors());



//DB Config
const connection_url = 'mongodb+srv://thuo:EQj2Oy9FiJosow9D@cluster0.fedhl.mongodb.net/WhatsApp-Clone?retryWrites=true&w=majority'

mongoose.connect(connection_url)

 //api routes
 app.get('/', (req, res)=>{
     res.status(200).send('App is running');
 })

 app.post('/api/v1/messages/new', (req, res)=>{
     const dbMessage = req.body;

     Messages.create(dbMessage, (err, data)=>{
         if(err){
             res.status(500).send('An error occured', err)
         } else {
             res.status(201).send(data)
         }
     })
 })

 app.get('/api/v1/messages/sync', (req, res)=>{
     Messages.find((err, data)=>{
         if (err) {
             res.status(500).send('An error occurred', err)
         } else{
             res.status(200).send(data)
         }
     })
 })


 //listen
 app.listen(port, ()=>{
     console.log(`Listening to port: ${port}`)
 })
