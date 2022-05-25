import React from "react";
// import { withRouter } from "react-router"
import Color from "../HOC/Color";
import { connect } from "react-redux"

class Home extends React.Component {

  handleDeleteUser = (user) => {
    this.props.deleteUserRedux(user)
  }
  handleCreateUser = () => {
    this.props.createUserRedux()
  }

  render() {

    let listUser = this.props.dateRedux;
    return (

      <>
        <div >
          Hello world with React
        </div >
        <div>
          {
            listUser && listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name} <span onClick={() => { this.handleDeleteUser(item) }}>x</span>
                </div>
              )
            })
          }
          <button onClick={() => { this.handleCreateUser() }}>Create Random</button>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { dateRedux: state.users }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
    createUserRedux: () => dispatch({ type: 'CREATE_USER' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));