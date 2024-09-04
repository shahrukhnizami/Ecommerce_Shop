import { createContext, useState } from "react";

const context = createContext()
function AuthContextProvider(childern){
    const [User , setuser] = useState({
        islogin:false,
        userinfo:{}
    })
    return(
        <AuthContextProvider value={{User,setuser}}>
            {childern}
        </AuthContextProvider>
    )

}
export default AuthContextProvider;