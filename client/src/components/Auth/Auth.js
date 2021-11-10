import React from 'react';
import Signin from './Signin';
import Signup from './Signup';
import axios from 'axios';
import './Auth.css'
export default class Auth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: 'signin'
        }
    }

    signIn = (email, password) => {
        axios.post('/api/users/login', {email, password}).then(res=>{
            console.log(res);
        }).catch(er =>{
            console.log(er);
        })

    }

    signUp = ({firstName, lastName, email, password}) => {
        axios.post('/api/users/register', {firstName, lastName, email, password}).then(res => {
            console.log(res.data);
        }).catch(er => {
            console.log(er);
        })
    }

    changeTab = () => {
        this.setState({
            tab: this.state.tab === 'signup'?'signin' : 'signup'
        });
    }
    render(){
        let page = this.state.tab == 'signin' ? <Signin signIn={this.signIn} /> : <Signup signUp={this.signUp} />
        return (
            <div className="auth-wrapper">
                <div className="left">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbGcQjVI8p3I1JlQekFFBD_HEhDYAJCkmOksyWEmCN99K8fQe5XP6cA5URyycJQ-SPAjE&usqp=CAU"></img>
                </div>

                <div className="right">
                    <div className="header">PAA</div>

                    <div className="sub-header">Bienvenido a la Práctica para la PAA</div>
                    {page}
                    <button className="new" onClick={this.changeTab}>{this.state.tab==='signin'? '¿No tienes una cuenta? Crea una' : '¿Ya tienes una cuenta? Inicia sesión'}</button>
                </div>
            </div>

        )
    }
}