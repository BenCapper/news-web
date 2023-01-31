import React, { useState, createContext, useEffect, useContext } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const [user, setUser] = useState('');
  const [fbCode, setFbCode] = useState("")
  const auth = getAuth();
  const navigate = useNavigate();




  const register = (email,pass) => {
    createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user))
      navigate("/")
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode)
      errorCheck(errorCode)
    });
  };

  const login = (email, pass) => {
    signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user))
      navigate("/")
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode)
      errorCheck(errorCode)
    });
  };


  const signout = () => {
    if (user !== ''){
      signOut(auth).then(() => {
        localStorage.clear();
        setUser('');
        navigate("/login");
      }).catch((error) => {
        console.log(error);
      });
    }
    else{
      console.log("Not Logged In")
    }

  };



  const errorCheck = (errorCode) => {
    if (errorCode === "auth/email-already-in-use"){
      setFbCode("Account Already Exists");
    } 
    if (errorCode === "auth/invalid-email") {
      setFbCode("Invalid Email Address");
    } 
    if (errorCode === "auth/missing-email") {
      setFbCode("Enter an Email Address");
    } 
    if (errorCode === "auth/internal-error") {
      setFbCode("Invalid Password");
    }
  }


  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        signout,
        user

      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;