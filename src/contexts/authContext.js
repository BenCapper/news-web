import React, { useState, createContext } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const [user, setUser] = useState('');
  const [fbCode, setFbCode] = useState("")
  const auth = getAuth();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();


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

  const loginGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //const credential = GoogleAuthProvider.credentialFromResult(result);
      //const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user))
      navigate("/")
    }).catch((error) => {

      //const errorCode = error.code;
      //const errorMessage = error.message;
      // The email of the user's account used.
      // The AuthCredential type that was used.
      //const credential = GoogleAuthProvider.credentialFromError(error);
    })
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
    if (errorCode === "auth/wrong-password") {
      setFbCode("Invalid Login Details");
    }
  }


  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        signout,
        loginGoogle,
        fbCode,
        user

      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;