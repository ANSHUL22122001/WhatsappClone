import React,{useState} from 'react';

import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login'
import{BrowserRouter, Switch, Route} from 'react-router-dom'
import {useStateValue} from './StateProvider'

function App(){
    // const [user, setUser] = useState(null)
    const [{ user }, dispatch] = useStateValue();
    // console.log(user);
    return(
        <React.Fragment>
            <div className="app">
                {!user ? (
                    <Login/>
                ):(
                    <BrowserRouter>
                            <Sidebar/>
                        <Switch>
                            <Route path="/rooms/:roomId">
                                <Chat/>
                            </Route>
                            <Route path="/">
                                <Chat/>
                            </Route>
                        </Switch>
                    </BrowserRouter>
                )}
            </div>
        </React.Fragment>
    );
}

export default App