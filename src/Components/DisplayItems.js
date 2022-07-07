import "../Styles/DisplayItems.css";
import Container from "./Container";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
const DisplayItem = ({
  todoCollection,
  setTodoCollection,
  setCounter,
}) => {
  const [sortBy, setSortBy] = React.useState("date");
  const handleChange = (e) => {
    setSortBy(e.target.value);
    updateTodo((data) => {
      return [
        ...data.sort((a, b) =>
          a[e.target.value] > b[e.target.value] ? 1 : -1
        ),
      ];
    });
  };
  const sortOptions = [
    {
      value: "value",
      label: "Value",
    },
    {
      value: "date",
      label: "Date",
    },
    {
      value: "id",
      label: "ID",
    },
  ];
  const updateTodo = (e) => {
    setTodoCollection(e);
  };
  const updateCounter = (e) => {
    setCounter(e);
  };
  return (
    <>
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={sortBy}
          onChange={handleChange}
          helperText="Sort Todo Items By"
          variant="outlined"
        >
          {sortOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className="main_todo">
        <div className="todo">
          <Container
            todoCollection={todoCollection}
            updateTodo={(e) => updateTodo(e)}
            setCounter={(e)=>updateCounter(e)}
            title="inTodo"
            arrowAction="inProgress"
            titleText="Todo"
          />
        </div>
        <div className="inProgress">
          <Container
            todoCollection={todoCollection}
            updateTodo={(e) => updateTodo(e)}
            setCounter={(e)=>updateCounter(e)}
            title="inProgress"
            arrowAction="isCompleted"
            titleText="In Progress"
          />
        </div>
        <div className="Completed">
          <Container
            todoCollection={todoCollection}
            updateTodo={(e) => updateTodo(e)}
            setCounter={setCounter}
            title="isCompleted"
            titleText="Completed"
          />
        </div>
      </div>
    </>
  );
};
export default DisplayItem;
