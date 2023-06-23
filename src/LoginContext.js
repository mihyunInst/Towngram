import { createContext } from "react";

export const LoginContext = createContext({
    loginUser : {
        userNo: 0,
        userName: '',
        userId: '',
        userRegion: '',
        userGender: '',
        enrollDate: '',
    },
    setLoginUser: () => {}
});