import React from "react";
import ToDoItem from "./ToDoItem";
import { connect } from "react-redux";

const ToDoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, null)(ToDoList);
