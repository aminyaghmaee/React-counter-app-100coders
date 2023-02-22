import Product from "./components/product/product";
import { useState } from "react";
function App() {
  const [count1, setCount1] = useState("Zero");
  const [count2, setCount2] = useState("Zero");
  const [count3, setCount3] = useState("Zero");
  const resetApp = () => {
    setCount1("Zero");
    setCount2("Zero");
    setCount3("Zero");
  };
  return (
    <>
      <div>
        <h1>counter app</h1>
        <button onClick={resetApp}>Reset</button>
      </div>
      <Product name={"phone"} count={count1} setCount={setCount1} />
      <Product name={"TV"} count={count2} setCount={setCount2} />
      <Product name={"pc"} count={count3} setCount={setCount3} />
    </>
  );
}

export default App;
