import React, { Component } from 'react';
import Bg from './Bg';
import '../styles/css/style.css';
import '../styles/css/fontawesome-all.css';
import $ from 'jquery';
import axios from 'axios';
window.app = window.app || {};

class Login extends Component {

    isLogin = (e) => {
        //提交之前判断输入的字段是否有错误
        e.preventDefault();

        let history = this.props.history;
        console.log("1111111");
        let data = {username: "123", password: "123"};
        axios.post('http://10.202.0.6:8080/data-mining/u/login', data
        ).then(res => {
            console.log('res=>',res);
        });
        // $.ajax({
        //     type:"POST",
        //     url:"http://10.202.0.6:8080/data-mining/u/login",
        //     data:data,
        //     dataType:'json',
        //     success:function(msg){
        //         console.log(msg);
        //         console.log(data);
        //         if(msg.message == "登录成功"){
        //             // window.location.href = "{:U('Index/personal')}";
        //             // console.log("成功")
        //             alert("登录成功!");
        //         }else{
        //             alert("登录失败，请重试!");
        //         }
        //     }
        // });
    }

    Register = () => {
        let history = this.props.history;
        history.push('/register');
    }

  render() {
    return (
      <div className="App">
          <Bg />

          <h1 style={{"color": "#fff"}}>Effect Login Form</h1>
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
                  <input type="button" value="登录" onClick={this.isLogin} />
                  <input type="button" value="注册" onClick={this.Register} />
              </form>
          </div>

          <div className="footer">
              <p>Copyright &copy; 2018.Company name All rights reserved.</p>
          </div>

      </div>
    );
  }
}

export default Login;
