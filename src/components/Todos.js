import React from "react";
import Field from "./Field";
import Button from "./Button";
import TodoItem from "./TodoItem";

class Todos extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: []
        }
        this.AddTodo = this.AddTodo.bind(this)

    }


    AddTodo(newTodo) {
      this.setState(st=>({
        todos:[...st.todos,newTodo]
      }))
        console.log(this.state.todos)
    }

    render() {
        return (
            <div id="todo-container">
                <Field
                    id={this.state.todos.length}
                    value={this.AddTodo}
                />
                {" "}


                {
                    this.state.todos.length > 0?
                    <ol>{this.state.todos.map((todo, i) => {
                            return <li key={i}><TodoItem todo={todo.item} value={this.AddCheck} checked={todo.isChecked} /></li>
                        })}</ol>:
                    <h3>Todo list is empty. To change that add an item via the input field.</h3>
                }
            </div>
        )
    }
}

export default Todos;
