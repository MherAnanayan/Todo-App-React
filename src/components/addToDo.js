import React, {useState} from 'react';
import {addTodoData} from '../store/action/action';
import { connect } from 'react-redux';
import { editLocalTodo } from '../store/action/action';
import './style.scss';

const Addtodo = ({ onClicked, changeVisibal, loading, title, onClikedin, todoArray, myID,editLocalTodo}) => {

    const [inputValue, setInputValue] = useState({name: '', email: '', title: '', status: false, errors: {}})
     const changeInput =  todoArray.filter(el=>el.id===myID)[0] || ''
         console.log(changeInput)
    const onAddTodo = () => {

        if (validate()) {
            onClicked(inputValue)
            changeVisibal()
            resetHandler()
        }
    }

    const changemyTodo = () => {
        
       editLocalTodo({
           name:changeInput.name,
           email:inputValue.email,
           title:inputValue.title,
           status: inputValue.status
       })
        changeVisibal()
        
    }
    const resetHandler = () => {
        setInputValue({name: '', email: '', title: '', status: false})
    }

    const handleChange = (evt) => {
        const value = evt.target.type === "checkbox"
            ? evt.target.checked
            : evt.target.value;
            
        
            title === 'Change' ? setInputValue({
                ...changeInput,
                [evt.target.name]: value
            }) : setInputValue({
                ...inputValue,
                [evt.target.name]: value
            }) }
        

    
    const validate = () => {

        let errors = {};
        let isValid = true;

        if (!inputValue.name || changeInput.name) {
            isValid = false;
            errors.name = "Please enter your name.";
        }

        if (!inputValue.email || changeInput.name ) {
            isValid = false;
            errors.email = "Please enter your email Address.";
        }

        
        if (!inputValue.title || changeInput.name ) {
            isValid = false;
            errors.title = "Please enter your Todo.";
        }

        title === 'Change' ? setInputValue({
            ...changeInput,
            errors: errors
        }) :setInputValue({ 
            ...inputValue,
            errors: errors});

        return isValid;
    }

    return (

        <div className='input-area'>
            <form className='addtodo-form'>
                <input
                    name='name'
                    type='text'
                    className='input-newtodo'
                    placeholder='Name'
                    onChange={handleChange}
                    value={title === 'Add'? inputValue.name : changeInput.name }/> {inputValue.errors
                    ? <div className="text-danger">{inputValue.errors.name}</div>
                    : null}
                <input
                    name='email'
                    className='input-newtodo'
                    placeholder='Email'
                    onChange={handleChange}
                    value={title === 'Add' ? inputValue.email : changeInput.email }/> {inputValue.errors
                    ? <div className="text-danger">{inputValue.errors.email}</div>
                    : null}
                <input
                    name='title'
                    className='input-newtodo'
                    placeholder='Todo'
                    onChange={handleChange}
                    value={title === 'Add' ? inputValue.title : changeInput.title }/> {inputValue.errors
                    ? <div className="text-danger">{inputValue.errors.title}</div>
                    : null}
                <div className='status-area'>
                    <p>{`статус: `}</p>
                    <input
                        name='status'
                        className='addtodo-chackbox'
                        type='checkbox'
                        onChange={handleChange}
                        checked={inputValue.status || (changeInput.status==='done'?true:false) || false}/>
                </div>
                {title === 'Change'
                    ? <button onClick={changemyTodo} type='button'>{title}</button>
                    : <button onClick={onAddTodo} type='button'>{title}</button>}

            </form>
        </div>
    )
}
const mapStateToProps = (state) => ({isAdmin: state.admin, todoArray: state.todos});
const mapDispatchToProps = {
    addTodoData,
    editLocalTodo
}
export default connect(mapStateToProps, mapDispatchToProps)(Addtodo);
