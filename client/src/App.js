import React, {useEffect, useState} from "react";
import "./App.css";
import Chatcomponent from "./components/Chatcomponent";
import Sidebar from "./components/Sidebar";
import Pusher from 'pusher-js'
import axios from './axios'


function App() {

const [messages, setMessages] = useState([])

useEffect(() => {
  axios.get('/api/v1/messages/sync')
    .then(res =>{
      setMessages(res.data)
    })
}, [])


useEffect(() => {
  const pusher = new Pusher('3b1d4475f339e4ef947c', {
    cluster: 'eu'
  });

  const channel = pusher.subscribe('messages');
  channel.bind('inserted', (newMessage)=> {
   // alert(JSON.stringify(newMessage));
    setMessages([...messages, newMessage])
  });

  return ()=>{
    channel.unbind_all();
    channel.unsubscribe();
  }

}, [messages])

  
  console.log(messages)

  return (
    <div className="app">
      <div className="app_body">
        {/* Sidebar */}
        <Sidebar />

        {/* Chat component */}
        <Chatcomponent messages={messages} />
      </div>
    </div>
  );
}

export default App;
