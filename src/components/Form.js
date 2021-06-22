import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-cool-form";
import Field from "./Field";
import { addTodo } from "../store/actions";

const Form = ({ addTodoItem }) => {
  const { form, use } = useForm({
    defaultValues: { title: "", completed: false },
    onSubmit: (values, { reset }) => {
      values.id = Date.now();
      addTodoItem(values);
      reset();
    },
  });

  const errors = use("errors");

  return (
    <form className="w-50 mx-auto" ref={form} noValidate>
      <Field
        label="Enter New Todo"
        name="title"
        id="title"
        type="text"
        required
        error={errors.title}
      />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodoItem: (data) => dispatch(addTodo(data)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
