import React, { Component } from "react";
import * as actionCreators from "./store/action";
import { connect } from "react-redux";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";

class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">
            <AuthorsList authors={this.props.authors} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    authorId: state.newAuthorId,
    authors: state.authors
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addAuthor: () => dispatch(actionCreators.addAuthor()),
    deleteAuthor: () => dispatch(actionCreators.deleteAuthor())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
