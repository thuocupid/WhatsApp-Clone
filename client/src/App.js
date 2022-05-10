import React, {useEffect} from "react";
import "./App.css";
import Chatcomponent from "./components/Chatcomponent";
import Sidebar from "./components/Sidebar";
import Pusher from 'pusher-js'

function App() {

useEffect(() => {
  first

  return () => {
    second
  }
}, [third])


useEffect(() => {
  const pusher = new Pusher('3b1d4475f339e4ef947c', {
    cluster: 'eu'
  });

  const channel = pusher.subscribe('messages');
  channel.bind('inserted', (data)=> {
    alert(JSON.stringify(data));
  });


}, [])

  
  

  return (
    <div className="app">
      <div className="app_body">
        {/* Sidebar */}
        <Sidebar />

        {/* Chat component */}
        <Chatcomponent />
      </div>
    </div>
  );
}

export default App;
