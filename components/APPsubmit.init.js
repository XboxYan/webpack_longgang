require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

const React = require('react');
const ReactDOM = require('react-dom');
const Header = require('./public/header/header.jsx');
const Footer = require('./public/footer/footer.jsx');
const APPagreement = require('./pagemodule/APPsubmit/APPagreement.jsx');
const APPform = require('./pagemodule/APPsubmit/APPform.jsx');

ReactDOM.render(
    <div>
        <Header />
        <div className="main bf">
            <div className="layoutMid">
                <div className="app_wrap">
                    <APPagreement />
                    <APPform />
                </div>
            </div>
        </div>
        <Footer />
    </div>,
    document.getElementById('container')
);