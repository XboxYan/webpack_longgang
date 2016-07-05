const React = require('react');

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value:'',
            tip:'',
            validated:true,
            prop:[]
        };
    }
    componentWillMount() {
        let props = this.props;
        let _prop = [];
        for(let e in props){ 
            _prop.push(e)
        }
        this.setState({
            prop:_prop   
        }) 
    }
    validate(ev){
        let props = this.props;
        let _prop = this.state.prop;
        let value = ev.target.value.trim();
        //必填
        if (_prop.indexOf('required') >= 0) {
            let l = value.length;
            let e = props.required;
            if (!e) return
            if (l === 0) {
                this.setState({
                    validated:false,
                    tip: e.tip||'请输入内容'
                })
                return;
            } else if (l < e.min) {
                this.setState({
                    validated:false,
                    tip: '内容长度小于' + e.min
                })
            } else if (l > e.max) {
                this.setState({
                    validated:false,
                    tip: '内容长度大于' + e.max
                })
            } else {
                this.setState({
                    validated:true,
                    tip: ''
                })
            }
        }else{
            let l = value.length;
            if (l === 0) {
                this.setState({
                    validated:true,
                    tip: ''
                })
                return;
            }
        }
        //允许输入最长字符串
        /*if (_prop.indexOf('max') >= 0) {
            let l = value.length;
            let e = props.max;
            if (l > e){
                this.setState({
                    value: this.state.value.substr(0,e)
                })
                return;
            } 
        }*/
        //判断邮箱格式
        if (_prop.indexOf('email') >= 0) {
            var pattern = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
            if (!pattern.test(value)) {
                this.setState({
                    validated:false,
                    tip: props.email.tip||'邮箱格式有误'
                })
            }else{
                this.setState({
                    validated:true,
                    tip: ''
                })
            }
        }
        //判断手机格式
        if (_prop.indexOf('phone') >= 0) {
            var pattern = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            if (!pattern.test(value)) {
                this.setState({
                    validated:false,
                    tip: props.phone.tip||'手机格式有误'
                })
            }else{
                this.setState({
                    validated:true,
                    tip: ''
                })
            }
        }
        //自定义
        if (_prop.indexOf('pattern') >= 0) {
            var pattern = props.pattern.test;
            if (!pattern.test(value)) {
                this.setState({
                    validated:false,
                    tip: props.pattern.tip
                })
            }else{
                this.setState({
                    validated:true,
                    tip: ''
                })
            }
        }
        return this.state.validated
         
    }
    
    handleFocus(){
        this.setState({
            validated:true,
            tip:''    
        })  
    }
    
    handleChange(ev){
        
        let value=this.state.value;
        this.setState({
            value:ev.target.value    
        })  
        this.validate(ev)
    }
    
    handleBlur(ev){
        this.validate(ev);
        console.log(this.state.validated)
        //this.props.onValidate(this.state.validated);
    }
    
    render() {

        return (
            <div>
                <input 
                    {...this.props}
                    onChange={this.handleChange.bind(this)}
                    value={this.state.value}
                    onBlur={this.handleBlur.bind(this)}
                    onFocus={this.handleFocus.bind(this)}
                    style={{borderColor:this.state.validated?'#7d9fe4':'red'}}
                />
                <i>{''+this.state.validated}</i>
                <span style={{width:'200px',position:'absolute',lineHeight:'42px',marginLeft:'10px',fontSize:'14px',color:'red'}}>{this.state.tip}</span>
             </div>
        )
    }
}

module.exports = Input;