import React from 'react';

const List = (props) => (
    <div>
        <ul>
            {props.todos.map((el) => <li key={el.id}>{el.task}<button>remove</button></li>)}
        </ul>
    </div>
)

export default List