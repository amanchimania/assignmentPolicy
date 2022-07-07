import { useEffect, useState } from "react";
import "./App.css";
import DisplayItem from "./Components/DisplayItems";
import Header from "./Components/Header";
import InputContainer from "./Components/InputContainer";

function App() {
  const [todoCollection, setTodoCollection] = useState([]);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log(todoCollection);
  }, [todoCollection]);
  return (
    <div className="App">
      <Header />
      <br />
      <InputContainer
        todoCollection={todoCollection}
        setTodoCollection={(e) => setTodoCollection(e)}
        counter={counter}
        setCounter={setCounter}
      />
      <br />
      <br />
      <DisplayItem
        todoCollection={todoCollection}
        setTodoCollection={(e) => setTodoCollection(e)}
        setCounter={(e)=>setCounter(e)}
      />
      <br />
      <div style={{ fontSize: "30px", fontWeight: "300" }}>
        Total items = {counter}
      </div>
    </div>
  );
}

export default App;
