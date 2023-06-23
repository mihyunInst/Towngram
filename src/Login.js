import 'animate.css';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login({setUser}) {

    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    const changeLoginInfo = (event, mode) => {
        mode == 'id' ? setId(event.target.value) : setPwd(event.target.value);
    }

    const handleLogin = async() => {
        await axios.post(
            "/cardgram/login",
            { id : id, pwd : pwd },
            { withCredentials: true },
          ).then((res)=>{
            console.log(res.data);
            setUser(res.data);
          })
    }

    return (
        <div className="loginContainer">
            <h1 className='animate__animated animate__fadeIn'>Towngram</h1>
            <input className="idInput" onChange={(e) => changeLoginInfo(e, 'id')} placeholder="ID" value={id}/>
            <input type='password' className="pwInput" onChange={(e) => changeLoginInfo(e, 'pwd')} placeholder="PASSWORD" value={pwd}/>
            <button className="loginBtn" onClick={handleLogin}>LOGIN</button>
            <Link to='/signup'>
                <p>SIGN UP</p>
            </Link>
        </div>
    )
}

export default Login;