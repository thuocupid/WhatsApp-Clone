import mongoose from "mongoose";

const whatsappschema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received:Boolean
})


//collection
export default mongoose.model('messagecontents', whatsappschema)

