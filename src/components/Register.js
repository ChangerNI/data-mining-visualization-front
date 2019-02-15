import React, { Component } from 'react';
import '../styles/css/style.css';
import '../styles/css/fontawesome-all.css';
import $ from 'jquery';

class Login extends Component {
    isLogin = (e) => {
        //提交之前判断输入的字段是否有错误
        e.preventDefault();

        let history = this.props.history;

        if($('#username').val() === "310001" && $('#password').val() === "123"&& $('input[type="checkbox"]').is(':checked')){
            history.push('/guide');
        }else {
            alert("请重新输入！")
        }
    }
  render() {
    return (
      <div className="App">
          <div id="bg" style={{"background": "#2196F3"}}>
              <canvas></canvas>
              <canvas></canvas>
              <canvas></canvas>
          </div>

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
                  <input type="submit" value="登录" onClick={this.isLogin} />
                  <input type="button" value="注册"  />
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
