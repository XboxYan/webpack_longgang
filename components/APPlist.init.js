require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

const React = require('react');
const ReactDOM = require('react-dom');
const _ = require('lodash');
const Header = require('./public/header/header.jsx');
const Footer = require('./public/footer/footer.jsx');
const Querysort = require('./public/querysort/querysort.jsx');
const QueryLists = require('./public/querylists/querylists.jsx');
const Pager = require('./public/pager/pager.jsx');

var QueryList = [
    {
        key: 1,
        title: '资源分类：',
        list: [
            { key: '11', name: '教育培训' },
            { key: '12', name: '金融消费' },
            { key: '13', name: '水陆气候' },
            { key: '14', name: '医疗健康' },
            { key: '15', name: '农林生态' },
            { key: '16', name: '工业制造' },
            { key: '17', name: '医疗健康' },
            { key: '18', name: '公共安全' },
            { key: '19', name: '道路交通' },
            { key: '110', name: '能源开发' },
        ]
    },
    {
        key: 3,
        title: '操作系统：',
        list: [
            { key: '31', name: 'iOS' },
            { key: '32', name: 'Android' },
            { key: '33', name: 'Windows Phone' },
            { key: '34', name: '其他' }
        ]
    },
]

var link = {
    '教育培训': '../../img/dot01.png',
    '能源开发': '../../img/dot02.png',
    '医疗健康': '../../img/dot03.png',
    '农林生态': '../../img/dot04.png',
    '公共安全': '../../img/dot05.png',
    '金融消费': '../../img/dot06.png',
    '科学研究': '../../img/dot07.png',
    '水陆气候': '../../img/dot08.png',
    '工业制造': '../../img/dot09.png',
    '道路交通': '../../img/dot10.png',
}

var QueryResult = [
    {
        key: 1,
        sort: {
            img: link['道路交通'],
            name: '道路交通'
        },
        icon: '../../img/app01.png',
        title: {
            link: '###1',
            name: '2015新驾考宝典'
        },
        date: '2015-07-03',
        text: '2015新驾考宝典采用2015年最新题库，小车类考试科目一共1073题，科目四共900题。本应用同时具备客车、货车驾照考试题库。适用于A1、A2、B1、B2、C1、C2、C3各类驾照考试。四个车轮考驾照，攻关驾校一点通',
        download: [
            {
                key: '12',
                name: 'Android下载',
                link: '###Android',
                title: 'Android'
            },
            {
                key: '13',
                name: 'WindowsPhone下载',
                link: '###windows',
                title: 'Windows Phone'
            }
        ]
    },
    {
        key: 2,
        sort: {
            img: link['教育培训'],
            name: '教育培训'
        },
        icon: '../../img/app02.png',
        title: {
            link: '###2',
            name: 'E上学'
        },
        date: '2015-06-09',
        text: 'ESchool收录了最新一年部分小学与中学的入学关系，并且将该学区内的学区房的名称与价格对应展示。该应用根据用户的需求与自身条件，智能的筛选匹配用户的入学购房需求，极大解决了家长的择校困惑。',
        download: [
            {
                key: '21',
                name: 'IOS下载',
                link: '###ios',
                title: 'iOS'
            },
            {
                key: '22',
                name: 'Android下载',
                link: '###andorid',
                title: 'Android'
            },
            {
                key: '23',
                name: '其他',
                link: '###other',
                title: '其他'
            }
        ]
    },
    {
        key: 3,
        sort: {
            img: link['教育培训'],
            name: '教育培训'
        },
        icon: '../../img/app03.png',
        title: {
            link: '###3',
            name: '安测健康——和医院说再见'
        },
        date: '2015-06-24',
        text: '安测健康APP是一款集健康检测，健康查询，智能 交互等功能于一体的健康交互终端。它与配套的医疗设备如血糖仪，血压计等多种传感器进行蓝牙通讯，能准确的采集体征信息，支持手动输入数据，并将测试结果保存到AnyCheck云服务平台，与云服务健康管理平台 配套使用，可供查询健康近况和历史记录，测量结果以图表、曲线显示，让您一目了然。具备人性化的智能交互，通过健康问答、健康建议及时为您解除疑惑和提供建议。强大的医学服务团队作支撑，设计个性化健康通讯功能，可随时随地与健康医生进 行电话咨询，健康常识功能可以让您学到更多专业的健康知识，安测健康帮助您健康生活，远离医院。',
        download: [
            {
                key: '31',
                name: 'IOS下载',
                link: '###ios',
                title: 'iOS'
            },
            {
                key: '32',
                name: 'Android下载',
                link: '###Android',
                title: 'Android'
            }
        ]
    },
    {
        key: 4,
        sort: {
            img: link['能源开发'],
            name: '能源开发'
        },
        icon: '../../img/app02.png',
        title: {
            link: '###3',
            name: '22223安测健康——和医院说再见'
        },
        date: '2015-06-20',
        text: '222222安测健康APP是一款集健康检测，健康查询，智能 交互等功能于一体的健康交互终端。它与配套的医疗设备如血糖仪，血压计等多种传感器进行蓝牙通讯，能准确的采集体征信息，支持手动输入数据，并将测试结果保存到AnyCheck云服务平台，与云服务健康管理平台 配套使用，可供查询健康近况和历史记录，测量结果以图表、曲线显示，让您一目了然。具备人性化的智能交互，通过健康问答、健康建议及时为您解除疑惑和提供建议。强大的医学服务团队作支撑，设计个性化健康通讯功能，可随时随地与健康医生进 行电话咨询，健康常识功能可以让您学到更多专业的健康知识，安测健康帮助您健康生活，远离医院。',
        download: [
            {
                key: '31',
                name: 'IOS下载',
                link: '###ios',
                title: 'iOS'
            }
        ]
    },
    {
        key: 5,
        sort: {
            img: link['能源开发'],
            name: '能源开发'
        },
        icon: '../../img/app03.png',
        title: {
            link: '###3',
            name: '33333安测健康——和医院说再见'
        },
        date: '2015-08-24',
        text: '888888安测健康APP是一款集健康检测，健康查询，智能 交互等功能于一体的健康交互终端。它与配套的医疗设备如血糖仪，血压计等多种传感器进行蓝牙通讯，能准确的采集体征信息，支持手动输入数据，并将测试结果保存到AnyCheck云服务平台，与云服务健康管理平台 配套使用，可供查询健康近况和历史记录，测量结果以图表、曲线显示，让您一目了然。具备人性化的智能交互，通过健康问答、健康建议及时为您解除疑惑和提供建议。强大的医学服务团队作支撑，设计个性化健康通讯功能，可随时随地与健康医生进 行电话咨询，健康常识功能可以让您学到更多专业的健康知识，安测健康帮助您健康生活，远离医院。',
        download: [
            {
                key: '31',
                name: 'IOS下载',
                link: '###ios',
                title: 'iOS'
            },
            {
                key: '32',
                name: 'Android下载',
                link: '###Android',
                title: 'Android'
            },
            {
                key: '13',
                name: 'WindowsPhone下载',
                link: '###windows',
                title: 'Windows Phone'
            }
        ]
    },
    {
        key: 6,
        sort: {
            img: link['医疗健康'],
            name: '医疗健康'
        },
        icon: '../../img/app02.png',
        title: {
            link: '###3',
            name: '44444444444安测健康——和医院说再见'
        },
        date: '2015-07-05',
        text: '4444444444安测健康APP是一款集健康检测，健康查询，智能 交互等功能于一体的健康交互终端。它与配套的医疗设备如血糖仪，血压计等多种传感器进行蓝牙通讯，能准确的采集体征信息，支持手动输入数据，并将测试结果保存到AnyCheck云服务平台，与云服务健康管理平台 配套使用，可供查询健康近况和历史记录，测量结果以图表、曲线显示，让您一目了然。具备人性化的智能交互，通过健康问答、健康建议及时为您解除疑惑和提供建议。强大的医学服务团队作支撑，设计个性化健康通讯功能，可随时随地与健康医生进 行电话咨询，健康常识功能可以让您学到更多专业的健康知识，安测健康帮助您健康生活，远离医院。',
        download: [
            {
                key: '31',
                name: 'IOS下载',
                link: '###ios',
                title: 'iOS'
            },
            {
                key: '32',
                name: 'Android下载',
                link: '###Android',
                title: 'Android'
            },
            {
                key: '13',
                name: 'WindowsPhone下载',
                link: '###windows',
                title: 'Windows Phone'
            },
            {
                key: '23',
                name: '其他',
                link: '###other',
                title: '其他'
            }
        ]
    },
    {
        key: 7,
        sort: {
            img: link['农林生态'],
            name: '农林生态'
        },
        icon: '../../img/app01.png',
        title: {
            link: '###3',
            name: '55555安测健康——和医院说再见'
        },
        date: '2015-06-24',
        text: '555555安测健康APP是一款集健康检测，健康查询，智能 交互等功能于一体的健康交互终端。它与配套的医疗设备如血糖仪，血压计等多种传感器进行蓝牙通讯，能准确的采集体征信息，支持手动输入数据，并将测试结果保存到AnyCheck云服务平台，与云服务健康管理平台 配套使用，可供查询健康近况和历史记录，测量结果以图表、曲线显示，让您一目了然。具备人性化的智能交互，通过健康问答、健康建议及时为您解除疑惑和提供建议。强大的医学服务团队作支撑，设计个性化健康通讯功能，可随时随地与健康医生进 行电话咨询，健康常识功能可以让您学到更多专业的健康知识，安测健康帮助您健康生活，远离医院。',
        download: [
            {
                key: '13',
                name: 'WindowsPhone下载',
                link: '###windows',
                title: 'Windows Phone'
            },
            {
                key: '23',
                name: '其他',
                link: '###other',
                title: '其他'
            }
        ]
    },
    {
        key: 8,
        sort: {
            img: link['公共安全'],
            name: '公共安全'
        },
        icon: '../../img/app03.png',
        title: {
            link: '###3',
            name: '666666安测健康——和医院说再见'
        },
        date: '2015-09-14',
        text: '6666666666安测健康APP是一款集健康检测，健康查询，智能 交互等功能于一体的健康交互终端。它与配套的医疗设备如血糖仪，血压计等多种传感器进行蓝牙通讯，能准确的采集体征信息，支持手动输入数据，并将测试结果保存到AnyCheck云服务平台，与云服务健康管理平台 配套使用，可供查询健康近况和历史记录，测量结果以图表、曲线显示，让您一目了然。具备人性化的智能交互，通过健康问答、健康建议及时为您解除疑惑和提供建议。强大的医学服务团队作支撑，设计个性化健康通讯功能，可随时随地与健康医生进 行电话咨询，健康常识功能可以让您学到更多专业的健康知识，安测健康帮助您健康生活，远离医院。',
        download: [
            {
                key: '31',
                name: 'IOS下载',
                link: '###ios',
                title: 'iOS'
            },
            {
                key: '32',
                name: 'Android下载',
                link: '###Android',
                title: 'Android'
            },
            {
                key: '23',
                name: '其他',
                link: '###other',
                title: '其他'
            }
        ]
    },
    {
        key: 9,
        sort: {
            img: link['金融消费'],
            name: '金融消费'
        },
        icon: '../../img/app01.png',
        title: {
            link: '###3',
            name: '777777777安测健康——和医院说再见'
        },
        date: '2015-04-24',
        text: '77777777777安测健康APP是一款集健康检测，健康查询，智能 交互等功能于一体的健康交互终端。它与配套的医疗设备如血糖仪，通讯功能，可随时随地与健康医生进 行电话咨询，健康常识功能可以让您学到更多专业的健康知识，安测健康帮助您健康生活，远离医院。',
        download: [
            {
                key: '31',
                name: 'IOS下载',
                link: '###ios',
                title: 'iOS'
            },
            {
                key: '32',
                name: 'Android下载',
                link: '###Android',
                title: 'Android'
            }
        ]
    },
    {
        key: 10,
        sort: {
            img: link['科学研究'],
            name: '科学研究'
        },
        title: {
            link: '###3',
            name: '888安测健康——和医院说再见'
        },
        date: '2015-08-26',
        text: '88888888安测健康APP是一款集健康检测，健康查询，智能 交互等功能于一体的健康交互终端。它与配套的医疗设备如血糖仪，血压计等多种传感器进行蓝牙通讯，能准确的采集体征信息，支持手动输入数据，并将测试结果保存到AnyCheck云服务平台，与云服务健康管理平台 配套使用，可供查询健康近况和历史记录，测量结果以图表、曲线显示，让您一目了然。具备人性化的智能交互，通过健康问答、健康建议及时为您解除疑惑和提供建议。强大的医学服务团队作支撑，设计个性化健康通讯功能，可随时随地与健康医生进 行电话咨询，健康常识功能可以让您学到更多专业的健康知识，安测健康帮助您健康生活，远离医院。',
        download: [
            {
                key: '31',
                name: 'IOS下载',
                link: '###ios',
                title: 'iOS'
            },
            {
                key: '32',
                name: 'Android下载',
                link: '###Android',
                title: 'Android'
            },
            {
                key: '13',
                name: 'WindowsPhone下载',
                link: '###windows',
                title: 'Windows Phone'
            },
            {
                key: '23',
                name: '其他',
                link: '###other',
                title: '其他'
            }
        ]
    },
    {
        key: 11,
        sort: {
            img: link['水陆气候'],
            name: '水陆气候'
        },
        title: {
            link: '###3',
            name: '9999999安测健康——和医院说再见'
        },
        date: '2015-08-26',
        text: '9999999999998安测健康APP是一款集健康检测，健康查询，智能 交互等功能于一体的健康交互终端。它与配套的医疗设备如血糖仪，血压计等多种传感器进行蓝牙通讯，能准确的采集体征信息，支持手动输入数据，并将测试结果保存到AnyCheck云服务平台，与云服务健康管理平台 配套使用，可供查询健康近况和历史记录，测量结果以图表、曲线显示，让您一目了然。具备人性化的智能交互，通过健康问答、健康建议及时为您解除疑惑和提供建议。强大的医学服务团队作支撑，设计个性化健康通讯功能，可随时随地与健康医生进 行电话咨询，健康常识功能可以让您学到更多专业的健康知识，安测健康帮助您健康生活，远离医院。',
        download: [
            {
                key: '31',
                name: 'IOS下载',
                link: '###ios',
                title: 'iOS'
            },
            {
                key: '23',
                name: '其他',
                link: '###other',
                title: '其他'
            }
        ]
    },
    {
        key: 12,
        sort: {
            img: link['工业制造'],
            name: '工业制造'
        },
        title: {
            link: '###3',
            name: '1010010101010安测健康——和医院说再见'
        },
        date: '2016-01-18',
        text: '10101010101010安测健康APP是一款集健康检测，健康查询，智能 交互等功能于一体的健康交互终端。它与配套的医疗设备如血糖仪，血压计等多种传感器进行蓝牙通讯，能准确的采集体征信息，支持手动输入数据，并将测试结果保存到AnyCheck云服务平台，与云服务健康管理平台 配套使用，可供查询健康近况和历史记录，测量结果以图表、曲线显示，让您一目了然。具备人性化的智能交互，通过健康问答、健康建议及时为您解除疑惑和提供建议。强大的医学服务团队作支撑，设计个性化健康通讯功能，可随时随地与健康医生进 行电话咨询，健康常识功能可以让您学到更多专业的健康知识，安测健康帮助您健康生活，远离医院。',
        download: [
            {
                key: '23',
                name: '其他',
                link: '###other',
                title: '其他'
            }
        ]
    }
]

class Applist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            QueryResult: [],
            Result:[],
            select: [],
            page: {
                perPages: 5,
                currentPage: 1,
                totalItems: 25
            }
        };
    }

    //初始化
    componentWillMount() {

        let select = [];
        let page = this.state.page;
        let _result = _.defaultsDeep(QueryResult);

        //默认添加全部(改变原数组)
        QueryList.forEach(function (el, i) {
            el.list.reverse().push({ 'key': i + 1 + '0', 'name': '全部' });
            el.list.reverse();
            select.push(0)
        })

        //按时间排序(改变原数组)
        _result.sort((a, b) =>
            new Date(b.date.replace(/-/g, '-')) - new Date(a.date.replace(/-/g, '-'))
        );
        
        page.totalItems = _result.length;
        
        var _QueryResult = this.pageSort(_result,page.currentPage);
        
        this.setState({
            QueryResult: _QueryResult,
            Result: _result,
            select: select,
            page:page
        })

    }

    //选中&清除
    handleSelect(i, j) {
        let _page = _.defaultsDeep(this.state.page);
        let _select = _.defaultsDeep(this.state.select);
        //深拷贝（不影响原数组）
        let _QueryResult= _.defaultsDeep(QueryResult);
        let _QueryList = _.defaultsDeep(QueryList);
        let QueryFilter = [];
        _select[i] = j;
        //过滤数组
        QueryFilter = _QueryList.map(
            (el, m) => el.list[_select[m]].name
        )

        _QueryResult = _QueryResult.filter(function (el) {
            return (
                //第一个条件
                ((QueryFilter.indexOf(el.sort.name) >= 0) || !_select[0]) &&
                //第二个条件
                ((el.download.some(
                    item => QueryFilter.indexOf(item.title) >= 0
                )
                ) || !_select[1])
            )
        })
        let _result = this.pageSort(_QueryResult,1);
        _page.totalItems = _QueryResult.length;
        _page.currentPage = 1;
        //设定状态
        this.setState({
            select: _select,
            QueryResult: _result,
            Result: _QueryResult,
            page:_page
        })
    }

    //分页
    pageChange(num) {
        let _page = _.defaultsDeep(this.state.page);
        let _result = _.defaultsDeep(this.state.Result);
        if (num === null) {
            alert('请输入一个页码~')
            return
        }
        if (num <= 0) {
            alert('不能往前了~')
            return
        }
        if (num > Math.ceil(_page.totalItems / _page.perPages)) {
            alert('不能往后了~')
            return
        }
        _page.currentPage = num;
        console.log('当前页：' + num);
        //分页
        var _Result = this.pageSort(_result,num);
        this.setState({
            QueryResult: _Result,
            page: _page
        })
        
    }
    
    //分页跳转
    pageSort( Result,currentPage ){
        let page = _.defaultsDeep(this.state.page);
        let _Result = _.defaultsDeep(Result);
        return _Result.slice((currentPage-1)*(page.perPages),currentPage*page.perPages);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="main bf">
                    <div className="layoutMid">
                        <Querysort
                            QueryList = { QueryList }
                            select = { this.state.select }
                            handleSelect = { this.handleSelect.bind(this) }
                            />
                        <QueryLists 
                            QueryResult = { this.state.QueryResult } 
                            Length = {this.state.Result.length}
                        />
                        <Pager
                            page = { this.state.page }
                            pageChange = {this.pageChange.bind(this) }
                            />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}



ReactDOM.render(
    <Applist />,
    document.getElementById('container')
);