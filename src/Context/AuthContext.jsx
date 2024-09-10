
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../pages/firebase/fire";

export const AuthContext = createContext()

function AuthContextProvider({ children }) {
    const [user, setUser] = useState({
        islogin: false,
        userinfo: {},
    })

    const [loading, setloading] = useState(true)

    function onAuthChanged(user) {
        console.log("user Data", user);
        if (user) {
            setUser({
                islogin: true, userinfo: {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }
            })
        }
        else {
            setUser({ islogin: false, userinfo: {} })
        }
        console.log("User Is Login");
        setloading(false);
    }

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, onAuthChanged);
        return subscriber; // unsubscribe on unmount
    }, []);


    return (


        <AuthContext.Provider value={{ user, setUser }}>
            {loading ? (<div className="container d-flex justify-content-center py-2">
                <div className="spinner-border text-danger " role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            ) :
                children

            }
        </AuthContext.Provider>

    )

}
export default AuthContextProvider;