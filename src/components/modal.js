import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import Addtodo from './addToDo';




const Todomodal = ({onAdd, title}) => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    
    

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
        <>
         <Modal
                title="Please add Todo..."
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={null} 
            >
                <Addtodo inputValues='' onClicked={onAdd}  changeVisibal={handleCancel} title='Add' />
            </Modal>
            <Button className='addtodo-btn' type="link" onClick={showModal}>
                    {title}
           </Button>
        </>
    );
};

export default Todomodal;