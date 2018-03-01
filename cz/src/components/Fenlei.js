import React, {Component} from 'react';
import axios from 'axios';
import './style/Fenlei.css';
import Footer from './Footer';

export default class Fenlei extends Component {
	constructor(props){
		super(props);
		this.state = {
			category:[]
		}
	}
	componentWillMount(){
		axios.get("/marketing/mobile/category_a0bce3afafc97a5e4c35a1468c953b71.json")
			 .then((res)=>{
			 	console.log(res.data);
			 	this.setState({
			 		category:res.data
			 	})
			 })
	}
	render() {
		return (
			<div className="fenlei">
				<div className="top">
					<span></span>
					<b>分类</b>
					<p></p>
				</div>
				<div className="fsection">
					{
						this.state.category.map((item,index)=>{
							return(
								<div className="fdiv">
									<h3>{item.name}</h3>
									<img src={item.image.src}/>
								</div>
							)
						})
					}
				</div>
				<Footer></Footer>
			</div>
		)
	}
}