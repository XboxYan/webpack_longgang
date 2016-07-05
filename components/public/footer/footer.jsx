require('./footer.css');
const React = require('react');


class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="layoutMid">
                    <div className="copy_right clear">
                        <dl className="footer_list">
                            <dt>开放平台</dt>
                            <dd><a className="linkify" href="#">关于我们</a></dd>
                            <dd><a className="linkify" href="#">数据导航</a></dd>
                            <dd><a className="linkify" href="#">使用协议</a></dd>
                            <dd><a className="linkify" href="#">网站申明</a></dd>
                        </dl>
                        <dl className="footer_list">
                            <dt>合作单位</dt>
                            <dd><a className="linkify" href="#">经济促进局</a></dd>
                            <dd><a className="linkify" href="#">企业服务中心</a></dd>
                            <dd><a className="linkify" href="#">龙岗区社工委</a></dd>
                            <dd><a className="linkify" href="#">信息化管理办公室</a></dd>
                        </dl>
                        <dl className="footer_list">
                            <dt>友情链接</dt>
                            <dd><a className="linkify" href="#">龙岗民生网</a></dd>
                            <dd><a className="linkify" href="#">龙岗诚信网</a></dd>
                            <dd><a className="linkify" href="#">深圳之窗</a></dd>
                            <dd><a className="linkify" href="#">区委宣传部</a></dd>
                        </dl>
                        <div className="about">
                            <img src="../img/logo_footer.png" />
                            <p>
                                <a className="linkify" href="#">联系我们
                                </a>|<a className="linkify" href="#">免责声明
                                </a>|<a className="linkify" href="#">咨询建议
                                </a>|<a className="linkify" href="#">网站地图</a>
                            </p>
                            <p>版权所有：深州市龙岗区政府</p>
                            <p>技术支持：深州市永兴元科技有限公司</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Footer;