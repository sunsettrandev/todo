import axios from "axios";
import React from "react";

import './ListUser.scss'
import getId from "../HOC/getId";

class ListUser extends React.Component {

  state = {
    listUsers: []
  }

  async componentDidMount() {
    // axios.get('https://reqres.in/api/users?page=1')
    //   .then(res => {
    //     console.log(res.data.data)
    //   })
    let res = await axios.get('https://reqres.in/api/users?page=1')
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : []
    })
  }

  handleOnClickDetailUser = (user) => {
    this.props.navigate(`./${user.id}`)
  }

  render() {

    let { listUsers } = this.state;
    return (
      <>
        <div>
          List User API from Reqres.in
        </div>
        <div className="list-user-container" >
          <table className="list-user-content">
            <tbody>
              {listUsers && listUsers.length > 0 &&
                listUsers.map((item, index) => {
                  return (
                    <tr className="listUser-child"
                      key={item.id}
                      onClick={() => this.handleOnClickDetailUser(item)}
                    >
                      <td>{item.id} -&nbsp;</td>
                      <td>{item.email}&nbsp;</td>
                      <td>{item.first_name} {item.last_name}&nbsp;</td>
                      <td><img className="user_image" src={item.avatar} alt="avatar"></img></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </>


    )
  }
}

export default getId(ListUser);