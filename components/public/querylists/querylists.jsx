require('./queryLists.css');
const React = require('react');

class QueryLists extends React.Component {

    render() {

        let QueryResult = this.props.QueryResult;

        return (
            <div className="result_lists">
                <h3 className="result_title pr">为您提供{this.props.Length}条信息<a href="#" className="app_btn">申请公布APP应用 >></a></h3>
                <div style={this.props.Length?{display:'none'}:{}}>
                    没找到你所查询的信息~
                </div>
                <ul style={QueryResult.length?{}:{display:'none'}}>
                    {
                        QueryResult.map(
                            el => (
                                <li className="result_item" key = {el.key}>
                                    <h2><img src={el.sort.img} /><span>{el.sort.name}</span></h2>
                                    <dl className="result_item_wrap">
                                        <dt style={el.icon ?{}:{display:'none'}}><img src={el.icon} /></dt>
                                        <dd>
                                            <h3><a href={el.title.link}>{el.title.name}</a></h3>
                                            <h4>{el.date}</h4>
                                            <p>{el.text}</p>
                                            <div className="btn_wrap">
                                                {
                                                    el.download.map(
                                                        item => (
                                                            <a className="btn01" href={item.link} key={item.key}><span>{item.name}</span></a>
                                                        )
                                                    )
                                                }
                                            </div>
                                        </dd>
                                    </dl>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        )
    }
}

module.exports = QueryLists;