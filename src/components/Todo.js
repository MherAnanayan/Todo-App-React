import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Addtodo from './addToDo';
import {changeTodo} from '../store/action/action';
import 'antd/dist/antd.css';
import './style.scss';


const Todo = ({ onDelete, id, title, name, email, status, isAdmin, todoArray, changeTodo}) => {

    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [admin, setAdmin] = useState(isAdmin)
    
console.log(id)

    useEffect(()=> {
        setAdmin(isAdmin)
    },[isAdmin])
    
    
    const onRemove = () => {
        onDelete(id)
    }

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setVisible(false);
    };
    
    return (
        <div className='todo-item-area'>
            <div key={id} className='todo-info-area'>
                <h4 className='todo-item-txt'>{`текст: ${title}`}</h4>
                <p>{`имя пользователя: ${name}`}</p>
                <p>{`email: ${email}`}</p>
                <p>{`статус: ${status}`}</p>
            </div>
            <div className='icon-area'>
                <Modal
                    title="Please change Todo..."
                    visible={visible}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <Addtodo onClikedin={()=>changeTodo(todoArray.filter(el=>el.id===id))}  myID={id} changeVisibal={handleCancel}  title='Change'/>
                </Modal>
                <AiFillDelete cursor='pointer' display={admin} onClick={onRemove} size={24} color='#8c373c'/>
                <AiFillEdit cursor='pointer' display={admin} onClick={showModal}  size={24} color='#e3bc4f'/>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({isAdmin: state.admin , todoArray: state.todos });
const mapDispatchToProps = {
    changeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);


