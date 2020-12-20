import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import './App.scss';
import axios from './axios';
import {useDispatch, connect} from 'react-redux'

import Header from './components/Header';
import Todo from './components/Todo';
import Todomodal from './components/modal';
import Spinner from './components/spinner';
import { addTodoData } from './store/action/action';



function App({addTodoData}) {

    const [todos, setTodos] = useState([])
    const [lastTodo, setLastTodo] = useState(todos)
    const [loading, setLoading] = useState(false)

const dispatch = useDispatch()

    useEffect(()=> {
      setLoading(true)
      axios.post('/todos.json', lastTodo)
          .then(setLoading(false))
          .catch(err => console.log(err))
    }, [lastTodo])
    
    const addTodoHandler = (props) => {
        setTodos(prev => [
            ...prev, {
                id: Math.random().toString(),
                title: props.title,
                name: props.name,
                status: props.status === false ? 'undone' : 'done',
                email: props.email
            }
        ])
        setLastTodo(
          {
               id: Math.random().toString(),
               title: props.title,
               name: props.name,
               status: props.status === false ? 'undone' : 'done',
               email: props.email
        })
        console.log('rendered');

      addTodoData({
        id: Math.random().toString(),
        title: props.title,
        name: props.name,
        status: props.status === false ? 'undone' : 'done',
        email: props.email
      })
    }
  

    const deleteHandler = (id) => {
      setTodos(item=> item.filter(el=> el.id!==id))
    }

    

  let Listorspinner = <List
    itemLayout="vertical"
    pagination={{
      position: 'both',
      pageSize: 3
    }}
    dataSource={todos}
    renderItem={item => (<Todo
      delete={deleteHandler}
      key={item.id}
      name={item.name}
      status={item.status}
      email={item.email}
      id={item.id}
      title={item.title} />)} />

      if (loading) {
        Listorspinner = <Spinner/>
      }

    return (
      <React.Fragment>
          <div className="App">
            <Header title="Todo Creater" />
            <Todomodal onAdd={addTodoHandler} />
            {Listorspinner}
          </div>
      </React.Fragment>
      
        
    );
} 

const mapDispatchToProps = {
  addTodoData,
}


export default connect(null, mapDispatchToProps)(App);
