import '../styles/TodoItems.scss';
import React from 'react';

const TodoItem = props => {
    return (
        <div>
            {props.todos.map((el) => {
                return (
                    <div className="ui segment row todo-containers">
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
                                <i class="check icon"></i>
                            </button>
                            <button 
                                data-key={el.id} 
                                onClick={props.onDelete} 
                                className="circular ui icon inverted red button"
                            >
                                <i class="trash icon"></i>
                            </button>
                        </span>
                    </div>
                )
            })}
        </div>
    )}

export default TodoItem;