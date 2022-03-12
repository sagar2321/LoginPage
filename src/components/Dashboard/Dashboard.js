import React, { useEffect, useState } from 'react';
import { ReactDOM } from 'react-dom';
import './Dashboard.css';
import { Button } from 'antd';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    handleLogOut = () => {
        sessionStorage.clear();
        window.location.reload();
    }


    render() {
        return (
            <div>
                <article>
                    <span>
                        <p id="clock"><i className="far fa-clock">  {this.props.date}</i>  <i class="far fa-trash-alt"></i></p>
                    </span>
                    <h3>{this.props.task}</h3>

                    <div
                        className="rect grey"></div>
                    <div
                        className="rect blue"></div>
                    <div
                        className="rect orange"></div>
                    <div
                        className="rect green"></div>

                    <hr />
                    <p>
                        <i class="fas fa-paperclip">  {this.props.edits}</i>
                        <i class="far fa-comment-dots">  {this.props.comments}</i>

                        <div
                            className="bubble bubble-adder">+</div>
                        <div
                            className="bubble bubble-lilac">1</div>
                        <div
                            className="bubble bubble-orange">2</div>
                        <div
                            className="bubble bubble-green">3</div>
                    </p>


                </article>
                <div>
                    <h2>You are now logged in.</h2>
                    <Button type="primary" onClick={this.handleLogOut}>Log Out</Button>
                </div>
            </div>

        )
    }
}

export default Dashboard;