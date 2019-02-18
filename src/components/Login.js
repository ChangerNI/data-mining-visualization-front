import React, { Component } from 'react';
import Bg from './Bg';
import '../styles/css/style.css';
import '../styles/css/fontawesome-all.css';
import $ from 'jquery';
import axios from 'axios';
import qs from 'qs';

class Login extends Component {
    super(props){

    }

    isLogin = (e) => {
        //提交之前判断输入的字段是否有错误
        e.preventDefault();
        let username = $('#username').val();
        let password = $('#password').val();
        // if($('#username').val() === "123" && $('#password').val() === "123"){
        //     this.props.history.push('/guide');
        // }
        if(username === ""){
            alert("用户名不能为空");
            this.props.history.push('/');
        }
        if(password === ""){
            alert("密码不能为空");
            this.props.history.push('/');
        }

        axios.post('http://10.202.0.6:8080/data-mining/u/login',qs.stringify({
            username: username,
            password: password
        })).then(res=>{
            if(res.status === 200) {
                this.props.history.push('/guide');
            }else {
                alert("用户名或密码错误，请重新输入！")
            }
        })

    }

    Register = () => {
        this.props.history.push('/register');
    }

  render() {
    return (
      <div className="App">
          <Bg />

          <h1 style={{"color": "#fff"}}>农产品流通和数据挖掘应用系统</h1>
          <div className="sub-main-w3">
              <form>
                  <h2 style={{"color": "#fff"}}>Login Now
                      <i className="fas fa-level-down-alt"></i>
                  </h2>
                  <div className="form-style-agile">
                      <label>
                          <i className="fas fa-user"></i>
                          Username
                      </label>
                      <input placeholder="Username" id="username" name="Name" type="text" />
                  </div>
                  <div className="form-style-agile">
                      <label>
                          <i className="fas fa-unlock-alt"></i>
                          Password
                      </label>
                      <input placeholder="Password" id="password" name="Password" type="password" />
                  </div>

                  <div className="wthree-text">
                      <ul>
                          <li>
                              <label className="anim">
                                  <input type="checkbox" className="checkbox" />
                                      <span>Stay Signed In</span>
                              </label>
                          </li>
                          <li>
                              <a href="http://www.baidu.com">Forgot Password?</a>
                          </li>
                      </ul>
                  </div>
                  <input type="submit" value="登录" onClick={this.isLogin.bind(this)} />
                  <input type="button" value="注册" onClick={this.Register} />
              </form>
          </div>

          <div className="footer">
              <p>Copyright &copy; 2018-2019.ZAFU.Chang.NI All rights reserved.</p>
          </div>

      </div>
    );
  }
}

export default Login;
