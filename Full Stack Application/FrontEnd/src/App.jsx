import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import axios from "axios";
function App() {
  const [follower, setfollower] = useState(0)
  useEffect(() => {
    axios
      .get("/api/myInfo")
      .then((data) => {
        console.log(data);
        setfollower(data.data.followers);
      })
      .catch((errer) => {
        console.log(errer);
      });
  }, []);

  return (
    <>
      <h1>Hello Ak</h1>
      <h3>Follower : {follower}</h3>
    </>
  );
}

export default App;
