import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for stored user on mount
        const storedUser = localStorage.getItem("gym_user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Simulate API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email && password) {
                    // Mock user data
                    const mockUser = {
                        id: Date.now(),
                        name: email.split("@")[0],
                        email: email,
                        role: "member"
                    };
                    setUser(mockUser);
                    localStorage.setItem("gym_user", JSON.stringify(mockUser));
                    resolve(mockUser);
                } else {
                    reject("Invalid credentials");
                }
            }, 500); // Simulate delay
        });
    };

    const signup = (userData) => {
        // Simulate API Call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userData.email && userData.password) {
                    const mockUser = {
                        id: Date.now(),
                        name: userData.name,
                        email: userData.email,
                        role: "member"
                    };
                    setUser(mockUser);
                    localStorage.setItem("gym_user", JSON.stringify(mockUser));
                    resolve(mockUser);
                } else {
                    reject("Invalid data");
                }
            }, 500)
        })
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("gym_user");
    };

    const value = {
        user,
        login,
        signup,
        logout,
        loading,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
