import React,{useEffect, useState} from 'react';import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Avatar} from '@material-ui/core'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import{useParams} from 'react-router-dom'


function Chat() {
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");

    useEffect(()=>{
        setRoomName(roomId);
    }, [roomId]);

    useEffect(()=>{ 
        setSeed(Math.floor(Math.random() * 5000))
    }, []);
    
    const sendMessage=(e)=>{ 
        e.preventDefault();
        alert(input);
        setInput("");
    }
    return (
        <React.Fragment>
            <div className="chat">
                <div className="chat_header">
                    <Avatar src={"https://avatars.dicebear.com/api/human/"+seed+".svg"}/>
                    <div className="chat_header_info">
                        <h3>{roomName}</h3>
                        <p>last seen at ...</p>
                    </div>
                    <div className="chat_headerRight">
                        <SearchIcon />
                        <AttachFileIcon/>
                        <MoreVertIcon/>
                    </div>
                </div>
                <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_message_name">John Dunk</span>
                    Hey
                    <span className="chat_message_timestamp">3:22 PM</span>
                </p>
                <p className="chat_message chat_message_reciever">
                    <span className="chat_message_name">Vick Sente</span>
                    Hello guys you know me
                    <span className="chat_message_timestamp">3:24 PM</span>
                </p>

                </div>
                <div className="chat_footer">
                    <InsertEmoticonIcon/>
                    <form className="chat-footer-input">
                        <input type="text" placeholder="Type a message" value={input} onChange={(e) => setInput(e.target.value)} />
                        <button type="submit" onClick={sendMessage}>Enter</button>
                    </form>
                    <MicIcon/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Chat