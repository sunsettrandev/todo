import React from "react";
import { toast } from "react-toastify";

class AddToDo extends React.Component {
  state = {
    title: ''
  }

  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleOnClickCreate = () => {
    if (!this.state.title) {
      toast.error('Missing title !');
      return;
    }
    this.props.addNewToDo({
      id: 'todo' + Math.floor(Math.random() * 100),
      title: this.state.title
    })
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <div className="add-todo">
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.handleOnChangeTitle(event)}
        />
        <button
          type="button"
          className="add"
          onClick={() => this.handleOnClickCreate()}
        >Add</button>
      </div>
    )
  }
}
export default AddToDo;