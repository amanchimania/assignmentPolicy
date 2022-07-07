import { useEffect, useState } from "react";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
const InputComponent = ({
  todoCollection,
  setTodoCollection,
  counter,
  setCounter,
}) => {
  const [inputText, setInputText] = useState({
    id: 0,
    value: "",
    status: "",
    inProgress: false,
    isCompleted: false,
  });
  const [isUnique, setIsUnique] = useState(true);
  useEffect(() => {
    if (todoCollection.some((val) => val.value == inputText.value)) {
      setIsUnique(false);
    }
  }, [inputText.value]);
  const handleNewInput = () => {
    console.log(inputText.value.length);

    if (inputText.value.length != 0 && isUnique) {
      setCounter((count) => {
        return count + 1;
      });

      setTodoCollection((data) => {
        return [...data, inputText];
      });
      setInputText({
        id: 0,
        value: "",
        status: "",
        inProgress: false,
        isCompleted: false,
      });
    }
  };
  const handleInput = (e) => {
    setIsUnique(true);
    setInputText({
      id: counter,
      value: e.target.value,
      status: "inTodo",
      inProgress: false,
      isCompleted: false,
      date: new Date(),
    });
  };
  return (
    <>
      <TextField
        required
        id="outlined-required"
        value={inputText.value}
        variant="outlined"
        placeholder="Enter items to todo list"
        size="small"
        onChange={(e) => handleInput(e)}
      />
      <span>
        <AddIcon onClick={handleNewInput} fontSize="large" />
      </span>
      {!isUnique && <div style={{ color: "red" }}>Duplicates not allowed</div>}
    </>
  );
};
export default InputComponent;
