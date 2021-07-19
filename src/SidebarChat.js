import React,{useEffect, useState} from 'react';
import { Avatar} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom';
import firebase from "./firebase";

function SidebarChat(props) {
    const [seed, setSeed] = useState('');
    const createChat=()=>{ 
        let chatName = prompt('Enter Name');
        if(chatName!=="" && chatName){
            const ChatRoom = firebase.database().ref('name');
            const name = {
                chatName,
                view: false,
            }
            ChatRoom.push(name);
        }
    }
    useEffect(()=>{ 
        setSeed(Math.floor(Math.random() * 5000))
    }, []);
    return !props.AddNewChat ? (
        <Link to={'/rooms/'+props.name}>
            <div className="SidebarChat">
                <div className="profilepic">
                    <Avatar src={"https://avatars.dicebear.com/api/human/"+seed+".svg"}/>
                </div>
                <div className="SidebarChat_info">
                    {/* <h2>Chat</h2> */}
                    <h2>{props.name}</h2>
                    <p>Last message....</p>
                </div>
            </div>
        </Link>
        
    ):(
        <div className="AddSidebarChat" onClick={createChat}>
            <div className="Addprofilepic">
                <AddIcon/>
            </div>
            <div className="SidebarChat_info">
                <h2>Create new Chat</h2>
            </div>
        </div>
    )
}

export default SidebarChat
