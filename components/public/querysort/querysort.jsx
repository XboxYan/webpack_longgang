require('./querysort.css');
const React = require('react');

class Querysort extends React.Component {

    render() {
        let QueryList = this.props.QueryList;
        let select = this.props.select;
        return (
            <div>
                <dl className="result_list clear">
                    <dt>新闻列表  ></dt>
                    {
                        select.map(
                            (el, i) =>
                                <dd className={'result_sel' + (el === 0 ? ' hide ' : '') } key={QueryList[i].key}>
                                    <span>{QueryList[i].list[el].name}</span>
                                    <a href="javascript:;" onClick = {this.props.handleSelect.bind(this, i, 0) }></a>
                                </dd>
                        )
                    }
                </dl>
                <div className="result_box">
                    {
                        QueryList.map(
                            (el, i) =>
                                <p className="result_sort" key={el.key} >
                                    <span>{el.title}</span>
                                    {
                                        el.list.map(
                                            (item, j) => <a href='javascript:;' className = {select[i] === j ? 'on' : ''} key={item.key} onClick = {this.props.handleSelect.bind(this, i, j) } >{item.name}</a>
                                        )
                                    }
                                </p>
                        )
                    }
                </div>
            </div>
        )
    }
}

module.exports = Querysort;