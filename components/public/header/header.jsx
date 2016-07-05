require('./header.css');
const React = require('react');


class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <div className="layoutMid clear">
                    <h1 className="logo fl">龙岗区政务数据资源网<a href="#"><img src="../img/logo.png" /></a></h1>
                    <div className="nav fr">
                        <a className="nav_item on" href="#">首页</a>
                        <a className="nav_item" href="#">资源目录</a>
                        <a className="nav_item" href="#">APP应用</a>
                        <a className="nav_item" href="#">开发API</a>
                        <a className="login" href="#">登录</a>
                        <a className="regesiter" href="#">注册</a>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Header;