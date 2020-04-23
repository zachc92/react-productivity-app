import React from 'react';
import List from './Components/List';
import './styles/styles.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [{
                task: 'Go grocery shopping',
                id: '1',
                completed: 'yes'
            },
            {
                task: 'Walk the dog',
                id: '2',
                completed: 'yes'
            }
        ],
            todo: {
                task: '',
                id: '',
                completed: ''
            }
        }
    
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
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
        this.setState(prevState => {
            let newState = { ...prevState.todo }
            newState.task = newTask;
            return { todo: newState }
        })
    }

    render() {
        return (
            <div className="container">
                <List todos={this.state.todos} />
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