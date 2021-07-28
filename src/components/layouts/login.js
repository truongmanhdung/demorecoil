import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Checkbox } from 'antd';
import {atom, useRecoilState} from "recoil";
import userApi from "../../apis/user";
export const userState = atom({
    key: "user",
    default: []
})
function Login(props) {
    const [users, setUsers] = useRecoilState(userState);
    const {history} = props;
    useEffect(()=>{
        const fetchUserList = async () => {
            try {
                const response = await userApi.getAll();
                setUsers(response);
            }catch (error){
                console.log("error message", error);
            }
        }

        fetchUserList()
    },[])
    const onFinish = (values) => {
        const email = values.email;
        const password = values.password;
        for (let i = 0; i < users.length; i++) {
            if(email == users[i].email && password == users[i].password){
                // localStorage.setItem("email",email);
                // setUsers(users[i]);
                history.push("/")
            }
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 12 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input name="email" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password name="password" />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 12 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;
