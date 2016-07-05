require('./pager.css');
const React = require('react');

class Pager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageInput:null
        };
    }
    
    pageInput(ev){
        this.setState({
            pageInput:ev.target.value.trim()
        })
    }
    
    pageSet(num){
        this.props.pageChange(num);
        this.setState({
            pageInput:''
        })
    }
    
    render() {
        let $ = this.props.page;

        return (
            <div className="page">
                <a className="phonest" href="javascript:;" onClick={this.props.pageChange.bind(this, 1)}>首页</a>
                <a href="javascript:;" onClick={this.props.pageChange.bind(this, $.currentPage-1)}>上一页</a>
                <span className="phonest"><i>第</i>{$.currentPage}<i>/</i>{Math.ceil($.totalItems/$.perPages)}<i>页</i></span>
                <a href="javascript:;" onClick={this.props.pageChange.bind(this, ~~($.currentPage)+1)}>下一页</a>
                <a className="phonest" href="javascript:;" onClick={this.props.pageChange.bind(this, Math.ceil($.totalItems/$.perPages))}>尾页</a>
                <span className="phonest">跳到第</span>
                <input className="page_input phonest" type="text" value={this.state.pageInput} onChange={this.pageInput.bind(this)} />
                <span  className="phonest">页</span>
                <input className="page_go phonest" type="button" value="GO"  onClick={this.pageSet.bind(this, this.state.pageInput)} />
            </div>
        )
    }
}

module.exports = Pager;