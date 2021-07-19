import React, { useEffect,useState } from 'react'
import SidebarChat from './SidebarChat'
import { Avatar} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search';
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {useStateValue} from './StateProvider'

import firebase from "./firebase";

function Sidebar() {
    const [rooms, setRooms] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(()=>{
        const ChatRoom = firebase.database().ref('name');
        ChatRoom.on("value",(snapshot) => {
            const chats = snapshot.val();
            const chatList = [];
            for(let id in chats){
                chatList.push(chats[id]);
            }
            setRooms(chatList);
        });
    }, []);
    return (
        <React.Fragment>
            <div className="sidebar">
                <div className="sidebar_header">
                    <Avatar src={user?.photoURL}/>
                    <div className="sidebar_headerRight">
                        <DonutLargeIcon />
                        <ChatIcon/>
                        <MoreVertIcon/>
                    </div>
                </div>
                <div className="sidebar_search">
                    <div className="sidebar_searchcontainer">
                        <SearchIcon/>
                        <input placeholder="Search or start new chat" type="text"/>
                    </div>
                </div>
                <div className="sidebar_chats">
                    <SidebarChat AddNewChat />
                    {rooms.map(room=>{
                        return(
        <SidebarChat key={room.name} name={room.chatName}/>
                        );
                    })}
                </div>
            {/* sidebar */}
            </div>
        </React.Fragment>
    )
}

export default Sidebar