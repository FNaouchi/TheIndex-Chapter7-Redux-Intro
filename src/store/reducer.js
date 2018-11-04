import authors from "../data";

const initialState = {
  authors: authors,
  newAuthorId: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AUTHOR":
      let newAuthor = {
        first_name: "Author",
        last_name: `${state.newAuthorId}`,
        imageUrl:
          "https://www.netz.de/images/2016-11-21-firefox-focus-header-58cfedd908c25_500_300.jpg",
        books: [
          {
            title: "Anonymous book",
            color: "mysterious color"
          }
        ]
      };
      return {
        ...state,
        authors: state.authors.concat(newAuthor),
        newAuthorId: state.newAuthorId + 1
      };
    case "DELETE_AUTHOR":
      console.log(action.payload);
      return {
        ...state,
        authors: state.authors.filter(author => author !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
