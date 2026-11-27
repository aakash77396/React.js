import { createContext,useContext,useState } from "react"
import { useNavigate } from "react-router-dom";

const Authcontext = createContext();

export function AuthProvider({children}) {
    const [user, setUser] = useState(()=>{
        return localStorage.getItem("email") || null;
    });
    const navigate = useNavigate();

    const login = (email)=>{
        localStorage.setItem("email",email);
        setUser({email});
    }

    const logout = ()=>{
        localStorage.removeItem("email");
        setUser(null);
        navigate("/");
    }

    const isAuthenticated = Boolean(user);

  return (
    <Authcontext.Provider value={{user,isAuthenticated,login,logout}} >
        {children}
    </Authcontext.Provider>
  );
}

export function useAuth(){
    return useContext(Authcontext);
}