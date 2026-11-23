import { createContext, useContext, useEffect, useState } from "react";
import UserService from "../services/UserService.jsx";

const AuthContext = createContext(null);


export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    async function checkAuthentication() {
        try {
            const response = await UserService.getCurrentUser();
            setUser(response.data);
        } 
        catch (error) {
            if (error.response?.status === 401) {
                setUser(null);
            } 
            else {
                console.error("Could not verify authentication:", error);
                setUser(null);
            }
        } 
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        checkAuthentication();
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated: user !== null,
            isLoading,
            checkAuthentication
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}