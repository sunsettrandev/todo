import React from "react";
import AddToDo from "./AddToDo";
import { toast } from "react-toastify";

import './ListToDo.scss';
import Color from "../HOC/Color";

class ListToDo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Learning React.js' },
            { id: 'todo2', title: 'Doing React.js' },
            { id: 'todo3', title: 'Runing React.js' }
        ],
        editTodo: {}
    }

    addNewToDo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success('Creat success!')
    }

    handleOnClickDelete = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos.filter(item => item.id !== todo.id)]
        })
        toast.success('Delete success!')
    }

    handleEditToDo = (todo) => {

        let { listTodos, editTodo } = this.state
        let isEmtyObj = Object.keys(editTodo).length === 0

        if (isEmtyObj === false && editTodo.id === todo.id) {

            let listTodosCopy = [...listTodos]
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id))
            listTodosCopy[objIndex].title = editTodo.title
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success('Update todo success')
            return;
        }

        this.setState({
            editTodo: todo
        })
    }

    handleOnChangeEditToDo = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {

        let { listTodos, editTodo } = this.state;
        let isEmtyObj = Object.keys(editTodo).length === 0

        return (
            <>
                <div>Todo Apps with Basic React.js</div>
                <div className="list-todo-container">
                    <AddToDo
                        addNewToDo={this.addNewToDo}

                    />
                    <table className="list-todo-content">
                        <tbody>
                            {listTodos && listTodos.length > 0 &&
                                listTodos.map((item, index) => {
                                    return (
                                        <tr className="todo-child" key={item.id}>
                                            <td>{index + 1}-</td>
                                            {isEmtyObj === true
                                                ?
                                                <td>{item.title}</td>
                                                :
                                                <>
                                                    {editTodo.id === item.id
                                                        ?
                                                        <td>
                                                            <input
                                                                type="text"
                                                                value={editTodo.title}
                                                                onChange={(event) => this.handleOnChangeEditToDo(event)}
                                                            />
                                                        </td>
                                                        :
                                                        <td>{item.title}</td>
                                                    }
                                                </>
                                            }

                                            <td><button
                                                className="edit"
                                                onClick={() => this.handleEditToDo(item)}
                                            >
                                                {isEmtyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                                            </button></td>
                                            <td>
                                                <button
                                                    className="delete"
                                                    onClick={() => this.handleOnClickDelete(item)}
                                                >Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </>

        );
    }
}

export default Color(ListToDo);