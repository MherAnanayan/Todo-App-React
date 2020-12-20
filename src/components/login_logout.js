import React, {useState} from 'react';
import './style.scss';
import { Modal, Button } from 'antd';

const Login = (props) => {
    const [namePass, setNamePass] = useState({name: 'admin', password: '123'})
    const [admin, setAdmin] = useState(false)
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

    const handleChange = (evt) => {
           setNamePass({
            [evt.target.name]: evt.target.value
        })
        

    }
    const tryLogout = () => {
        setAdmin(false)
    }


    const tryLogin = () => {
        if (validate()) {
            setVisible(false)
            setAdmin(true)
        }
    }
    

   

    const validate = () => {
        let errors = {};
        let isValid = true;

        if (!namePass.name) {
            isValid = false;
            errors.name = "Please enter your name.";
        }

        if (!namePass.password) {
            isValid = false;
            errors.password = "Please enter your password.";
        }
        return isValid;
    }

    let loginorlogout = (
        <div>
            <Button onClick={showModal}>вход</Button>
        </div>
    )


    if (admin) {
        loginorlogout = (
            <div>
                <Button onClick={tryLogout}>выход</Button>
            </div>
        )
    }

    

    return (
        <div className='loginorlogout'>
            <Modal
            className='login-modal'
                title="Please add Todo..."
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={null}
            >
                <div className='input-area'>
                    <form className='addtodo-form'>
                        <input
                            name='name'
                            type='text'
                            className='input-newtodo'
                            placeholder='Name'
                            onChange={handleChange}
                            value={namePass.name || ''} />
                        {namePass.errors ? <div className="text-danger">{namePass.errors.name}</div> : null}
                        <input
                            name='password'
                            type='password'
                            className='input-newtodo'
                            placeholder='password'
                            onChange={handleChange}
                            value={namePass.password || ''} />
                        {namePass.errors ? <div className="text-danger">{namePass.errors.email}</div> : null}
                        <Button onClick={tryLogin}>вход</Button>
                    </form>
                </div>
            </Modal>
            {loginorlogout}
        </div>
    )
}

    export default Login;