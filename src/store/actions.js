import { ADD_NEW_ITEM, CHANGE_ITEM_STATUS, DELETE_ITEM } from "./typesList";

export const addTodo = (data) => {
  return async (dispatch) => {
    await dispatch(addItem(data));
  };
};

export const setCompleted = (id) => {
  return async (dispatch) => {
    await dispatch(makeCompleted(id));
  };
};

export const removeItem = (id) => {
  return async (dispatch) => {
    await dispatch(deleteItem(id));
  };
};

const addItem = (data) => {
  return {
    type: ADD_NEW_ITEM,
    payload: data,
  };
};

const makeCompleted = (id) => {
  return {
    type: CHANGE_ITEM_STATUS,
    payload: id,
  };
};

const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};
