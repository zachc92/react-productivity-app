import React from 'react';
import Timer from './Components/Timer'
import './styles/styles.scss';
import { v4 as uuidv4 } from 'uuid';
import TodoItems from './Components/TodoItems';

class App extends React.Component {
    state = {
        todos: [],
        todo: {
            task: '',
            id: ''
        },
        completed: 0,
        timer: 1500,  // time in seconds
        intervalId: ''
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState(prevState => {
            let newTodo = prevState.todo
            prevState.todos.push(newTodo);
            return { todos: prevState.todos, todo: { task: '' } }
        })
    }

    onInputChange = e => {
        const newTask = e.target.value;
        const newId = uuidv4();
        this.setState(prevState => {
            let newState = { ...prevState.todo }
            newState.task = newTask;
            newState.id = newId;
            return { todo: newState }
        })
    }

    onComplete = e => {
        let id = e.target.parentElement.getAttribute("data-key");
        this.setState(prevState => {
            let newState = prevState.todos.filter((el) => {
                return el.id !== id
            })
            return { todos: newState, completed: this.state.completed + 1 }
        })
    }

    onDelete = e => {
        let id = e.target.parentElement.getAttribute("data-key");
        this.setState(prevState => {
            let newState = prevState.todos.filter((el) => {
                return el.id !== id
            })
            return { todos: newState }
        })
    }

    updateTime = () => {
        if(this.state.timer === 0) {
            console.log('at 0')
            return 0;
        }
        this.setState(() => {
            return { timer: this.state.timer - 1 }
        })
    }

    onReset = () => {
        clearInterval(this.state.intervalId);
        this.setState(({ timer: 1500, intervalId: '' }))
    }

    beginTimer = () => {
        if(!this.state.intervalId) {
            let intervalId = setInterval(() => this.updateTime(), 1000);
            this.setState(({ intervalId }));
        }
        
    }

     endTimer = () => {
        clearInterval(this.state.intervalId);
        this.setState(({ intervalId: '' }));
     }

    render() {
        return (
        <div>
            <div className="ui container" id="main-body">
                <div className="ui segment">
                    <Timer 
                        timer={this.state.timer}
                        updateTime={this.updateTime}
                        onReset={this.onReset}
                        beginTimer={this.beginTimer}
                        endTimer={this.endTimer}
                    />
                </div>
                    <div className="ui right aligned grid" id="form">
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
                <TodoItems 
                    todos={this.state.todos}
                    onComplete={this.onComplete}
                    onDelete={this.onDelete}
                />
            </div>
        </div>
        )
    }
}

export default App;