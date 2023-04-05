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
      } else {
        setAuthUser(null);
      }
    });

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
          <p>Signed In as {authuser.email}</p>
          <button onClick={userSignout}>Sign out</button>
        </>
      ) : (
        <p>signed out</p>
      )}
      <button className="link-btn">
        <Link to="/landing">CLICK ME TO BROWSE </Link>{" "}
      </button>
    </div>
  );
};

export default Auth;
