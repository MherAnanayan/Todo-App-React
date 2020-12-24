import React, {useEffect, useState} from 'react';
import {List} from 'antd';
import './App.scss';
import axios from './axios';
import {connect} from 'react-redux'

import Header from './components/Header';
import Todo from './components/Todo';
import Todomodal from './components/modal';
import Spinner from './components/spinner';
import {addTodoData, getTodoData, loadData, deleteTodo} from './store/action/action';

function App({
    addTodoData,
    getTodoData,
    dataValues,
    loadData,
    loading,
    deleteTodo

}) {

    const fetchTodoes = async() => {
        loadData(true)
        const res = await axios
            .get(`/todos.json`)
            .then(el => el && el.data ? Object.entries(el.data) : []);
        setTimeout(() => {
            getTodoData(res);
        }, 1000);
    }
    

    useEffect(() => {
        fetchTodoes()
    }, [])

    const addTodoHandler = (props) => {

        addTodoData({
            id: Math
                .random()
                .toString(),
            title: props.title,
            name: props.name,
            status: props.status === false
                ? 'undone'
                : 'done',
            email: props.email,
            loading: true
        })

    }

    let Listorspinner = <List
        itemLayout="vertical"
        pagination={{
        position: 'both',
        pageSize: 3
    }}
        dataSource={dataValues}
        renderItem={item => (<Todo
        onDelete={deleteTodo}
        key={item.id}
        name={item.name}
        status={item.status}
        email={item.email}
        id={item.id}
        title={item.title}/>)}/>

    if (loading) {
        Listorspinner = <Spinner/>
    }

    return (
        <React.Fragment>
            <div className="App">
                <Header title="Todo Creater"/>
                <Todomodal onAdd={addTodoHandler} title='+ Add New Todo'/> {Listorspinner}
            </div>
        </React.Fragment>

    );
}

const mapStateToProps = (state) => ({dataValues: state.todos, loading: state.loading});

const mapDispatchToProps = {
    addTodoData,
    getTodoData,
    loadData,
    deleteTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
