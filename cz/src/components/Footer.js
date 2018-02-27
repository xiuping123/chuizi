import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './font/iconfont.css';
import './style/Footer.css';

export default class Footer extends Component {
	render() {
		return (
			
			<div>

					<div className="bottom">
						<NavLink className="tit" activeClassName="active" exact to="/"><i className="iconfont icon-shouye ficon"></i><p>首页</p></NavLink>
						<NavLink className="tit" activeClassName="active" to="/fenlei"><i className="iconfont icon-tubiao13 ficon"></i><p>分类</p></NavLink>
						<NavLink className="tit" activeClassName="active" to="/shop"><i className="iconfont icon-suo ficon"></i><p>购物车</p></NavLink>
						<NavLink className="tit" activeClassName="active" to="/mine"><i className="iconfont icon-yonghu ficon"></i><p>个人中心</p></NavLink>
					</div>
			</div>
		)
	}
}