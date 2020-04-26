import React from 'react';
import Timer from './Components/Timer'
import './styles/styles.scss';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            todo: {
                task: '',
                id: ''
            }
        }
    
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
        this.onRemove = this.onRemove.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState(prevState => {
            let newTodo = prevState.todo
            prevState.todos.push(newTodo);
            return { todos: prevState.todos }
        })
    }

    onInputChange(e) {
        const newTask = e.target.value;
        const newId = uuidv4();
        this.setState(prevState => {
            let newState = { ...prevState.todo }
            newState.task = newTask;
            newState.id = newId;
            return { todo: newState }
        })
    }

    onRemove(e) {
        let id = e.target.parentElement.getAttribute("data-key");
        this.setState(prevState => {
            // console.log(prevState.todos[0].id);
            let newState = prevState.todos.filter((el) => {
                return el.id !== id
            })
            return { todos: newState }
        })
    }

    render() {
        return (
            <div className="container">
                <Timer />
                <div>
                    {this.state.todos.map((el) => <li key={el.id} data-key={el.id}>{el.task}<button onClick={this.onRemove}>Remove Task</button></li>)}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        placeholder="Enter a todo" 
                        onChange={this.onInputChange}
                        />
                    <button>Submit Form</button>
                </form>
            </div>
        )
    }
}

export default App