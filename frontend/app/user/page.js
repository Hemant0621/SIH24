"use client"
import React, {useEffect , useState} from 'react'
import axios from "axios";

function User() {

    const [email , setemail] = useState("");
    const [firstname , setfirstname] = useState("");
    const [lastname , setlastname] = useState("");
    const [password , setpassword] = useState("");

    const toggle = () => {
        container.classList.toggle('sign-in')
        container.classList.toggle('sign-up')
    }
    useEffect(()=>{
        let container = document.getElementById('container')
        setTimeout(() => {
            container?.classList.add('sign-up') 
        }, 200)
    },[])
    

    

    return (
            <div id="container" className="container">
                <div className="row">
                    <div className="col align-items-center flex-col sign-up">
                        <div className="form-wrapper align-items-center">
                            <div className="form sign-up">
                                <div className="input-group">
                                    <i className='bx bxs-user'></i>
                                    <input type="text" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}}/>
                                </div>
                                <div className="input-group">
                                    <i className='bx bx-mail-send'></i>
                                    <input type="email" placeholder="First name" onChange={(e)=>{setfirstname(e.target.value)}}/>
                                </div>
                                <div className="input-group">
                                    <i className='bx bxs-lock-alt'></i>
                                    <input type="password" placeholder="Last name" onChange={(e)=>{setlastname(e.target.value)}}/>
                                </div>
                                <div className="input-group">
                                    <i className='bx bxs-lock-alt'></i>
                                    <input type="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}/>
                                </div>
                                <button onClick={async ()=>{
                                    const response = await axios.post("http://localhost:3000/user/signup",{
                                        firstname,
                                        email,
                                        lastname,
                                        password
                                    })

                                    localStorage.setItem("token",response.data.token)
                                    toggle()
                                }}>
                                    Sign up
                                </button>
                                <p>
                                    <span>
                                        Already have an account?
                                    </span>
                                    <b onClick={() => toggle()} className="pointer">
                                        Sign in here
                                    </b>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col align-items-center flex-col sign-in">
                        <div className="form-wrapper align-items-center">
                            <div className="form sign-in">
                                <div className="input-group">
                                    <i className='bx bxs-user'></i>
                                    <input type="text" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}}/>
                                </div>
                                <div className="input-group">
                                    <i className='bx bxs-lock-alt'></i>
                                    <input type="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}} />
                                </div>
                                <button onClick={async ()=>{
                                    const response = await axios.post("http://localhost:3000/user/signin",{
                                        email,
                                        password
                                    })
                                    response.data.message?alert(response.data.message):localStorage.setItem("token",response.data.token);location.href = '/'
                                    
                                }}>
                                    Sign in
                                </button>
                                <p>
                                    <b>
                                        Forgot password?
                                    </b>
                                </p>
                                <p>
                                    <span>
                                        Don't have an account?
                                    </span>
                                    <b onClick={() => toggle()} className="pointer">
                                        Sign up here
                                    </b>
                                </p>
                            </div>
                        </div>
                        <div className="form-wrapper">

                        </div>
                    </div>
                </div>
                <div className="row content-row">
                    <div className="col align-items-center flex-col">
                        <div className="text sign-in">
                            <h2>
                                Welcome
                            </h2>

                        </div>
                        <div className="img sign-in">

                        </div>
                    </div>
                    <div className="col align-items-center flex-col">
                        <div className="img sign-up">

                        </div>
                        <div className="text sign-up">
                            <h2>
                                Join with us
                            </h2>

                        </div>
                    </div>
                </div>
            </div>

    )
}

export default User