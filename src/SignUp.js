import axios from "axios";
import { useState } from "react";

function SignUp() {

    const [joinUser, setJoinUser] = useState({
        userId: '',
        userPwd : '',
        userName : '',
        userRegion : '',
        userGender : ''
    });

    const changeId = (e) => {
        setJoinUser({...joinUser, userId: e.target.value})
    }
    const changePwd = (e) => {
        setJoinUser({...joinUser, userPwd: e.target.value})
    }
    const changeName = (e) => {
        setJoinUser({...joinUser, userName: e.target.value})
    }
    const changeRegion = (e) => {
        setJoinUser({...joinUser, userRegion: e.target.value})
    }
    const changeGender = (e) => {
        setJoinUser({...joinUser, userGender: e.target.value})
    }

    const handleSignUp = async() => {
        console.log(joinUser)
        window.location.replace("/")
        await axios.post(
            "/cardgram/signUp",
            { user: joinUser },
            { withCredentials: true },
          ).then((res)=>{
            console.log(res.data);
            //window.location.replace("/")
          })
    }


    return (
        <div className="signUpContainer">
            <h1>SIGN UP</h1>
            <div className="signUpform">
                ID <input type="text" onChange={changeId}></input>
                PASSWORD <input type="password" onChange={changePwd}></input>
                NAME<input type="text" onChange={changeName}></input>
                REGION<input type="text" onChange={changeRegion}></input>

                GENDER
                <div>
                    <label><input type="radio" name="gender" value={'남자'}  onChange={changeGender}></input> 남자</label>
                    <label><input type="radio" name="gender" value={'여자'}  onChange={changeGender}></input> 여자</label>
                </div>
            </div>
            <button className="joinBtn" onClick={handleSignUp}>JOIN</button>
        </div>
    )
}   
export default SignUp;