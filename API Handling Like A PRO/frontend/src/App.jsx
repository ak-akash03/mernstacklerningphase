import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/products");
      console.log(response.data);
    })()
  }, []);

  return (
    <>
      <h1>Api In React</h1>
      <h2>Number of products are : {products.length}</h2>
    </>
  );
}

export default App;
