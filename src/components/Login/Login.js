import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import './Login.css';
import { Row, Col } from 'antd';
import Img from '../../assets/svimg.gif'
import { Input } from 'antd';
import { Typography } from 'antd';
import { Layout } from 'antd';
import { Checkbox } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';

async function loginUser(credentials) {
    return fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }) {
    const { Header, Footer, Sider, Content } = Layout;
    const { Title } = Typography;
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [errorMsg, setErrorMsg] = useState();
    const [autoCompleteSwitch, setautoCompleteSwitch] = useState("off");
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);
    
    const onChangeCheck = (e) => {
        if (e.target.checked) {
            setautoCompleteSwitch("on");
        } else {
            setautoCompleteSwitch("off");
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            "email": username,
            "password": password
        });
        if (token && token.error) {
            setErrorMsg(token.error)
        } else {
            setToken(token);
        }


    }

    return (
        <div >
            <Layout>
                <Header>
                    <Row>
                        <Col flex={2}>
                            <h2 className='logotext'>Auth.co</h2>
                        </Col>

                        <Col flex={3}>
                            <div className='freeTrial'>
                                <Button style={{ marginRight: "2%", background: "#FFFF00", textDecorationColor: "black" }} size="large"  >
                                    Start Free Trial
                                </Button>
                                <Button type="primary" size="large"  >
                                    Login
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Header>
                <Content> <Row>
                    <Col flex={2}>
                        <div className='form_container'>
                            <form onSubmit={handleSubmit} autoComplete={autoCompleteSwitch}>
                                <Title className='titletext' level={3}>Welcome Back</Title>
                                <label>

                                    {/* <input type="text" onChange={e => setUserName(e.target.value)} /> */}
                                    <Input size="large" placeholder="Username" prefix={<UserOutlined />} onChange={e => setUserName(e.target.value)} />
                                    <br />
                                    <br />
                                </label>
                                <label>

                                    <Input.Password
                                        placeholder="Input password"
                                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                        onChange={e => setPassword(e.target.value)}
                                        autoComplete={autoCompleteSwitch}
                                    />
                                    <br />
                                    <br />
                                </label>
                                <div>
                                    <Button type="primary" size="large" onClick={handleSubmit} block >
                                        Login
                                    </Button>
                                </div>
                                <div>
                                    <Row>
                                        <Col flex={3}>
                                            <Checkbox onChange={onChangeCheck}>Remember me</Checkbox>
                                        </Col>
                                        <Col flex={2}>
                                            <p><a href='#'>Forgot Password?</a></p>
                                        </Col>
                                    </Row>
                                </div>
                                {errorMsg &&
                                    <div><h2> {errorMsg}</h2></div>}
                            </form>
                        </div>
                    </Col>

                    <Col flex={3}>
                        {matches && <div className='img_container'>
                            <img src={Img} width="100%" height="400vh" ></img>
                        </div>}
                    </Col>
                </Row></Content>

            </Layout>





        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};
