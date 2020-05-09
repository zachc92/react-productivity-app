import '../styles/TodoItems.scss';
import React from 'react';

const TodoItem = props => {
    return (
        <div>
            {props.todos.map((el) => {
                return (
                    <div key={el.id} className="ui segment row todo-containers">
                        <p 
                            key={el.id} 
                            data-key={el.id}
                        >
                            {el.task}
                        </p>
                        <span data-key={el.id} className="button-container">
                            <button 
                                data-key={el.id} 
                                onClick={props.onComplete} 
                                className="circular ui icon inverted green button"
                            >
                                <i className="check icon"></i>
                            </button>
                            <button 
                                data-key={el.id} 
                                onClick={props.onDelete} 
                                className="circular ui icon inverted red button"
                            >
                                <i className="trash icon"></i>
                            </button>
                        </span>
                    </div>
                )
            })}
        </div>
    )}

export default TodoItem;