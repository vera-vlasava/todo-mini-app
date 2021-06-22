import React from "react";
import { connect } from "react-redux";
import { setCompleted } from "../store/actions";
import { removeItem } from "../store/actions";

const ToDoItem = ({ todo, changeCompleted, deleteTodo }) => {
  const clickCompletedHandle = (event) => {
    event.preventDefault();
    changeCompleted(todo.id);
  };

  const clickDeleteHandle = (event) => {
    event.preventDefault();
    deleteTodo(todo.id);
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div
        className={
          todo.completed ? "text-danger text-decoration-line-through" : ""
        }
      >
        {todo.title}
      </div>
      <div>
        <button
          onClick={clickCompletedHandle}
          className="btn btn-outline-primary btn-sm mx-2"
        >
          <i className="bi bi-check2-square"></i> Check
        </button>

        <button
          onClick={clickDeleteHandle}
          className="btn btn-outline-danger btn-sm"
        >
          <i className="bi bi-trash"></i> Delete
        </button>
      </div>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCompleted: (id) => dispatch(setCompleted(id)),
    deleteTodo: (id) => dispatch(removeItem(id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDoItem);
