import React, { useEffect, useState } from "react";
import auth from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const Auth = () => {
  const [authuser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        // localStorage.setItem("email", JSON.stringify(user.email));
      } else {
        setAuthUser(null);
      }
    });

    // localStorage.setItem("email", JSON.stringify(authuser.email));

    return () => {
      listen();
    };
  }, []);

  const userSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("signout succ");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="signincon">
      {authuser ? (
        <>
          <p>Welcome, {authuser.email}!</p>
          <p>Binge watching made easy ;)</p>
          {/* <button onClick={userSignout}>Sign out</button> */}
        </>
      ) : (
        <p>signed out</p>
      )}
      <Link to="/">
        <button>BROWSE MOVIES</button>
      </Link>
    </div>
  );
};

export default Auth;
