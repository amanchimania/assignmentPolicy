import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "../Styles/Container.css";
import { Tooltip } from "@material-ui/core";
const Container = ({
  todoCollection,
  setCounter,
  updateTodo,
  title,
  arrowAction,
  titleText,
}) => {
  const moveToDesiredList = (item) =>
    function () {
      let tempTodo = todoCollection.find((data) => data.value == item);
      tempTodo = {
        ...tempTodo,
        status: arrowAction,
        inProgress: true,
        date: new Date(),
      };

      todoCollection = todoCollection.filter((data) => data.value !== item);
      todoCollection.push(tempTodo);
      updateTodo((data) => {
        return [...todoCollection];
      });
    };
  const deleteItem = (i) =>
    function () {
      updateTodo((items) => items.filter((val) => val.value !== i));
      setCounter((count) => setCounter(count - 1));
    };

  return (
    <div className="container">
      <h2>{titleText}</h2>
      {todoCollection
        .filter((val) => val.status == title)
        .map((data) => (
          <div key={data.id} className="value-container">
            <span id="title-container">{data.value}</span>
            <span id="title-container-date">
              {" "}
              ({data.date.toDateString()}){" "}
            </span>

            <span>
              <Tooltip title="Delete">
                <IconButton
                  aria-label="delete"
                  onClick={deleteItem(data.value)}
                >
                  <DeleteIcon color="secondary" fontSize="large" />
                </IconButton>
              </Tooltip>

              <span>
                {titleText != "Completed" && (
                  <Tooltip title={`Move to ${arrowAction}`}>
                    <ArrowForwardIcon
                      fontSize="large"
                      onClick={moveToDesiredList(data.value)}
                    />
                  </Tooltip>
                )}
              </span>
            </span>
          </div>
        ))}
    </div>
  );
};
export default Container;
