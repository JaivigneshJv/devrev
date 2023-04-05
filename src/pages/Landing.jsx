import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

function Landing() {
  const { User, setUser } = useContext(DataContext);
  // console.log(User);
  return <div>MAIN PAGE AFTER login {User}</div>;
}

export default Landing;
