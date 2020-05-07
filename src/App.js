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
            },
            completed: 0
        }
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onComplete = this.onComplete.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState(prevState => {
            let newTodo = prevState.todo
            prevState.todos.push(newTodo);
            return { todos: prevState.todos, todo: { task: '' } }
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

    onComplete(e) {
        let id = e.target.parentElement.getAttribute("data-key");
        this.setState(prevState => {
            // console.log(prevState.todos[0].id);
            let newState = prevState.todos.filter((el) => {
                return el.id !== id
            })
            return { todos: newState, completed: this.state.completed + 1 }
        })
    }

    onDelete(e) {
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
        <div>
            <div className="ui container" id="main-body">
                <div className="ui segment">
                    <Timer />
                </div>
                    <div className="ui right aligned grid">
                        <div className="left floated right aligned seven wide column">
                            <div >
                                <form onSubmit={this.handleSubmit}>
                                <div className="ui action input">
                                    <input 
                                        placeholder="Enter a todo" 
                                        value={this.state.todo.task}
                                        onChange={this.onInputChange}
                                    />
                                    <button className="ui button">Submit</button>
                                </div>    
                                </form>
                            </div>
                        </div>
                        <div className="right floated left aligned seven wide column">
                            <div className="ui segment" id="completed-tasks">
                                Completed Tasks: {this.state.completed}
                            </div>
                        </div>
                    </div>
                {this.state.todos.map((el) => {
                    return (
                        <div className="ui segment row todo-containers">
                            <p 
                                key={el.id} 
                                data-key={el.id}
                            >
                                {el.task}
                            </p>
                            <span className="button-container">
                                <button 
                                    data-key={el.id} 
                                    onClick={this.onComplete} 
                                    className="circular ui icon inverted green button"
                                >
                                    <i class="check icon"></i>
                                </button>
                                <button data-key={el.id} onClick={this.onDelete} className="circular ui icon inverted red button">
                                    <i class="trash icon"></i>
                                </button>
                            </span>
                        </div>
                    )
                    })}
            </div>
        </div>
        )
    }
}

export default App;

// <div className="ui segment"><p key={el.id} data-key={el.id}>{el.task}<button onClick={this.onRemove} className="ui inverted red button"><i class="trash icon"></i></button></p></div>