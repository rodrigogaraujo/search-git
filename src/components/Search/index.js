import React, { Component } from "react";
export class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.onChange}
            placeholder="Procurar por usuários"
          />
          <input
            type="submit"
            value="Pesquisar"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
