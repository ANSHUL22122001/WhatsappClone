import React from 'react'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CallIcon from '@material-ui/icons/Call';
import { Control, Errors, LocalForm } from 'react-redux-form';
import firebase from 'firebase';
import {useStateValue} from './StateProvider'
import actionTypes from './Reducer';

function Login() {
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);
    const isNumber = (val) => !isNaN(Number(val));

    const [{}, dispatch] = useStateValue();
    const signIn=()=>{
        const provider = new firebase.auth.GoogleAuthProvider()
        
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: "SET_USER",
                user: result.user
            })
            // console.log(user)
        })
        .catch((error) => alert(error.message))

        // alert( JSON.stringify(values))
        // console.log( JSON.stringify(values))
    }
    return (
        <React.Fragment>
            <div className="login">
                <div className="login-box">
                    <div className="login-header">
                        <WhatsAppIcon />
                        <h3>Whatsapp Web</h3>
                    </div>
                    
                    <LocalForm className="login-body" 
                    // onSubmit={(values)=>signIn(values)}
                    >
                        <Control.text model='.Name' className="input"
                                    name="Name" id="Name" placeholder="Name" 
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors className="error" model=".Name" show="touched"
                                        messages={{
                                            required:'Required',
                                        }}
                                    />
                        <Control.text model=".ContactNumber" className="input" 
                                name="ContactNumber" id="ContactNumber" placeholder="Phone Number" 
                                    validators={{
                                        required,minLength:minLength(10),maxLength:maxLength(10),isNumber
                                    }}
                                />
                                <Errors className="error" model=".ContactNumber" show="touched"
                                    messages={{
                                        required:'Required',
                                        minLength:'Must be of 10 number',
                                        maxLength:'Must be of 10 number',
                                        isNumber:'Only Numbers'
                                    }}
                                />                        
                        <button type="submit">Submit</button>
                    </LocalForm>
                    <div className="login-footer">
                        <p>Login via</p><br/>
                        <button onClick={signIn}><CallIcon /></button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login
