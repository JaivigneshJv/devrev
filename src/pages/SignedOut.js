import React from "react";
import { Link } from "react-router-dom";

function SignedOut() {
  return (
    <div className="signincon">
      <p>You have been signed out!</p>
      {/* <p>Binge watching made easy ;)</p> */}
      {/* <button onClick={userSignout}>Sign out</button> */}
      <Link to="/">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default SignedOut;
