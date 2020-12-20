import React from 'react';
import './style.scss';
import {AiFillDelete, AiFillEdit} from "react-icons/ai";

const Todo = (props) => {

    const onDelete = () => {
        props.delete(props.id)
    }
    
    return (
        <div className='todo-item-area'>
            <div key={props.id} className='todo-info-area'>
                <h4 className='todo-item-txt'>{`текст: ${props.title}`}</h4>
                <p>{`имя пользователя: ${props.name}`}</p>
                <p>{`email: ${props.email}`}</p>
                <p>{`статус: ${props.status}`}</p>
            </div>
            <div className='icon-area'>
                <AiFillDelete display='' onClick={onDelete} size={24} color='#8c373c'/>
                <AiFillEdit  size={24} color='#e3bc4f'/>
            </div>
        </div>
    )
}

export default Todo;
