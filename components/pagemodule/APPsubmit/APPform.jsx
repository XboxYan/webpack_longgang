const React = require('react');
const Input = require('../../public/form/Input.jsx');

class APPform extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
            submit:[]
        };
    }
	
	onValidate(bool){
		console.log(bool)
	}
	
	handleSubmit(){
		alert(1)
	}
	
    render() {
        return (
            <form>
                <div className="app_section">
					<h2>APP应用提交</h2>
					<div className="section_tr clear">
						<span className="section_th"><strong className="red">*</strong>所有者：</span>
						<div className="section_td">
                            <Input className="input" type="text"
								onValidate={this.onValidate.bind(this)}
								placeholder="公司名称或个人姓名(不少于3位，不超过10位)" 
                                required={{ min:3,max:10,tip:'请输入公司名称或个人姓名'}}
                            />
                        </div>
					</div>
					<div className="section_tr clear">
						<span className="section_th"><strong className="red"></strong>邮箱地址：</span>
						<div className="section_td">
							<Input className="input" type="text" placeholder="邮箱" 
								onValidate={this.onValidate.bind(this)}
								email ={{tip: '邮箱格式不合法'}}
							/>
						</div>
					</div>
					<div className="section_tr clear">
						<span className="section_th"><strong className="red">*</strong>手机号：</span>
						<div className="section_td">
							<Input className="input" type="text" placeholder="手机号"
								onValidate={this.onValidate.bind(this)}
								required
								//max={11}
								phone
							/>
						</div>
					</div>
					<div className="section_tr clear">
						<span className="section_th"><strong className="red">*</strong>QQ号：</span>
						<div className="section_td">
							<Input className="input" type="text" placeholder="QQ号"
								onValidate={this.onValidate.bind(this)}
								required={{tip:'请输入qq号'}}
								pattern = {{test:/^[1-9][0-9]{4,9}$/,tip:'QQ号不合法'}}
							/>
						</div>
					</div>
					<div className="section_tr clear">
						<span className="section_th"><strong className="red">*</strong>密码：</span>
						<div className="section_td">
							<Input className="input" type="password" placeholder="密码"
								required={{tip:'请输入密码'}}
							/>
						</div>
					</div>
					<div className="section_tr clear">
						<span className="section_th"><strong className="red">*</strong>重复密码：</span>
						<div className="section_td">
							<Input className="input" type="password" placeholder="重复密码"
								required={{tip:'请输入重复密码'}}
								
							/>
						</div>
					</div>
					<div className="section_tr clear">
						<span className="section_th"><strong className="red">*</strong>应用全称：</span>
						<div className="section_td"><input className="input" type="text" placeholder="" /></div>
					</div>
					<div className="section_tr clear">
						<span className="section_th"><strong className="red">*</strong>应用分类：</span>
						<div className="section_td">
							<div className="select">
								<select>
									<option>能源开发</option>
									<option>能源开发2</option>
									<option>能源开发3</option>
								</select>
							</div>
						</div>
					</div>
					<div className="section_tr clear">
						<span className="section_th"><strong className="red">*</strong>应用图标：</span>
						<div className="section_td clear">
							<div className="upload_img"><span>图标预览</span></div>
							<div className="upload_text">
								<div className="btn_wrap"><a className="btn01" href="#">选择文件</a></div>
								<p>（应用图标支持JPG、PNG格式，图片不超过3M，大小为120*120px）</p>
							</div>
						</div>
					</div>
					<div className="section_tr clear">
						<span className="section_th"><strong className="red">*</strong>应用描述：</span>
						<div className="section_td"><textarea className="textarea" placeholder="请为您的APP编写完整的描述（描述不少于50个字，不超过300字）"></textarea></div>
					</div>
					<div className="section_tr clear">
						<span className="section_th"><strong className="red">*</strong>应用全称：</span>
						<ul className="section_td">
							<li>
								<input className="input" type="text" placeholder="请填写APP应用的官方下载地址" />
								<span>Android 版</span>
							</li>
							<li>
								<input className="input" type="text" placeholder="请填写APP应用的官方下载地址" />
								<span>iOS 版</span>
							</li>
							<li>
								<input className="input" type="text" placeholder="请填写APP应用的官方下载地址" />
								<span>Windows Phone 版</span>
							</li>
							<li>
								<input className="input" type="text" placeholder="请填写APP应用的官方下载地址" />
								<span>其他系统</span>
							</li>
							<li><span>（下载地址请至少填写一项到对应APP操作系统）</span></li>
						</ul>
					</div>
				</div>
				<div className="app_submit">
					<p><span className="red">您提交的资料不全，请完善相关信息后再提交！</span></p>
					<p className="btn_wrap2"><a className="btn02" href="javascript:;" onClick={this.handleSubmit.bind(this)}>提交</a><a className="btn03" href="#">取消</a></p>
				</div>
            </form>
        )
    }
}

module.exports = APPform;