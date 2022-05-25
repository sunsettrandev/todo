import axios from "axios";
import React from "react";
import getId from "../../HOC/getId";

class DetailUser extends React.Component {

  state = {
    user: {}
  }

  async componentDidMount() {

    if (this.props && this.props.getId && this.props.getId.params && this.props.getId.params.id) {
      let res = await axios.get(`https://reqres.in/api/users/${this.props.getId.params.id}`)
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {}
      })
    }
  }

  handleOnClickBack = () => {
    this.props.navigate('/listUser')
  }

  render() {
    let { user } = this.state
    let isEmtyObj = Object.keys(user).length === 0
    return (
      <>
        <div>User id {this.props.getId.params.id}</div>
        {
          isEmtyObj === false &&
          <>
            <div><img src={user.avatar} alt="Avatar " /></div>
            <div>User's Name: {user.first_name} {user.last_name}</div>
            <div>User's Email: {user.email}</div>
            <div><button type="button" onClick={() => this.handleOnClickBack()}>Back</button></div>
          </>
        }
      </>
    )

  }

}

export default getId(DetailUser);