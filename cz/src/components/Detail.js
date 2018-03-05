import React, {Component} from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './style/Detail.css';
import axios from 'axios';


export default class Mine extends Component {
	constructor(props){
		super(props);
		this.state = {
			cart:[]
		}
	}
	componentWillMount(){
		var fid = this.props.match.params.fid;
		axios.get(`/product/skus?ids=${fid}&with_stock=true&with_spu=true`)
			 .then((res)=>{
			 	
			 	this.setState({
			 		cart:res.data.data.list
			 	})
			 	console.log(this.state.cart);
			 })
	}
	render() {
		var that = this;

		return (
			<div className="detail">
				<div className="top">
					<p></p>
					<b>详情</b>
					<p></p>
				</div>
				<div className="fnav">
					<ul>
						<li>商品</li>
						<li>详情</li>
						<li>参数</li>
						<li>推荐</li>
					</ul>
				</div>
				<div className="dsection">
					{
						this.state.cart.map((item,index)=>{
							return(
								<div key={item.id}>
									<img className="dbanner" src={item.shop_info.ali_image}/>
								</div>
							)
						})
					}
				</div>
				<div className="dbottom">
					<Button type="ghost" inline size="small" style={{ width:'1.5rem' }}>加入购物车</Button>
					<Button type="primary" inline size="small" style={{ width: '1.5rem' }}>现在购买</Button>
				</div>
				
			</div>
		)
	}
}