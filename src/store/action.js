const DELETE = "DELETE_AUTHOR";
const ADD = "ADD_AUTHOR";

export const deleteAuthor = payload => {
  return {
    type: DELETE,
    payload: payload
  };
};

export const addAuthor = () => {
  return {
    type: ADD
  };
};
