import React, {useState} from 'react';
import './style.scss';


const Addtodo = ({ onClicked, changeVisibal, loading}) => {

    const [inputValue, setInputValue] = useState({
        name: '',
        email: '',
        title: '',
        status: false,
        errors: {},
    })

    const onAddTodo = () => {

        if(validate()) {
            onClicked(inputValue)
            changeVisibal()
            resetHandler()
        } 
        
    }
    const resetHandler = () => {
        setInputValue({
            name: '',
            email: '',
            title: '',
            status: false
        })
    }

    const handleChange = (evt) => {
        const value = evt.target.type === "checkbox"
            ? evt.target.checked
            : evt.target.value;
        setInputValue({
            ...inputValue,
            [evt.target.name]: value
        })
        
    }
    const validate = () => {
        
        let errors = {};
        let isValid = true;

        if (!inputValue.name) {
            isValid = false;
            errors.name = "Please enter your name.";
        }

        if (!inputValue.email) {
            isValid = false;
            errors.email = "Please enter your email Address.";
        }

        if (typeof inputValue.email !== "undefined") {

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(inputValue.email)) {
                isValid = false;
                inputValue.email = "Please enter valid email address.";
            }
        }

        if (!inputValue.title) {
            isValid = false;
            errors.title = "Please enter your Todo.";
        }

        setInputValue({
            errors: errors
        });

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
                    value={inputValue.name||''}/>
                {inputValue.errors ? <div className="text-danger">{inputValue.errors.name}</div> : null}
                <input
                    name='email'
                    className='input-newtodo'
                    placeholder='Email'
                    onChange={handleChange}
                    value={inputValue.email||''}/>
                {inputValue.errors ? <div className="text-danger">{inputValue.errors.email}</div> : null}
                <input
                    name='title'
                    className='input-newtodo'
                    placeholder='Todo'
                    onChange={handleChange}
                    value={inputValue.title||''}/>
                {inputValue.errors ? <div className="text-danger">{inputValue.errors.title}</div> : null}
                <div className='status-area'>
                    <p>{`статус: `}</p>
                    <input
                        name='status'
                        className='addtodo-chackbox'
                        type='checkbox'
                        onChange={handleChange}
                        checked={inputValue.status||false}/>
                </div>
                <button onClick={onAddTodo} type='button'>Add</button>
            </form>
        </div>
    )
}

export default Addtodo;