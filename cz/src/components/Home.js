import React, {Component} from 'react';
import Footer from './Footer';
import './style/Home.css';
import { Carousel } from 'antd-mobile';
import axios from 'axios';


export default class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			banner:[],
			shortcart:[],
			hotshop:[],
			floors:[],
			list:[],
			floorsl:[]
		}
	}
	componentDidMount(){
		axios.get("/marketing/mobile/index_e1b6c72ba511309a973b24e399f1b79f.json")
			.then((res)=>{
				console.log(res.data.floors[1].dataList);
				this.setState({
					banner: res.data.banner.dataList,
					shortcart:res.data.shortcut.dataList,
					floors:res.data.floors,
					floorsl:res.data.floors[1].dataList
				})
				// console.log(this.state.floors[2].dataList);
				
			})
		axios.get("/product/skus?ids=100035101,100033802,100027303,100037603,100036302,100038001,100035202,100027004,100033913,100027401,100032501,100025101,100035101,100027305,100033802,100036304,100036501,100036401,100035705,100035101,100036003,100038001,100035202,100038101,100035803,100037801,100027004,100027303,100027101,100027401,100027004,100029001,100029801,100027501,100030901,100030701,100030501,100029701,100029601,100029501,100029301,100029201,100029101,100028901,100028801,100037711,100033907,100033303,100025101,100032901,100025602,100032401,100032701,100032501,100023001,100022901,100032601,100022201,100032201&with_stock=true&with_spu=true")
			 .then((res)=>{
			 	// console.log(res.data.data.list);
			 	this.setState({
			 		list:res.data.data.list,
			 		hotshop:res.data.data.list.slice(0,10)
			 	})

			 })
	}

	render() {
		var that = this;
		setTimeout(function () {
			var Hrexiao = [];
			console.log(that.state.floors[2]);
			var Ldatalist = that.state.floors[2].dataList.length;
			var Llist = that.state.list.length;
			console.log(Ldatalist,Llist);
			for(var i=0;i<Ldatalist;i++){
				for(var j=0;j<Llist;j++){
					if(that.state.floors[2].dataList[i] === that.state.list[j].id+""){
						Hrexiao.push(Llist[j]);
					}
				}
			}
		},1000)
		
		return (
			<div className="home">
				<div className="top">
					<span></span>
					<i></i>
					<p></p>
				</div>
				<div className="section">
					<div className="Hpart1">
						<div className="banner">
							 <Carousel
        					   autoplay={false}
        					   infinite
        					   selectedIndex={1}
        					   beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        					   afterChange={index => console.log('slide to', index)}
        					 >
	        					 {
	        					 	this.state.banner.map((item,index)=>{
	        					 		return(
	        					 			<img key={item.src} className="bantu" src={item.src} alt="热门商品"/>
	        					 		)
	        					 	})
	        					 }
        					 </Carousel>
						</div>
						<div>
							<ul className="Hshortul">
								{
									this.state.shortcart.map((item,index)=>{
										return(
											<li key={item.src} className="Hshort">
												<img src={item.src} alt=""/>
												<p>{item.labelTitle}</p>
											</li>
										)
									})
								}
							</ul>
						</div>
					</div>

					<div className="Hremen">
						<div className="HremenTit">
							<h3>热门商品</h3>
							<span>></span>
						</div>
						<div className="HremenShop">
							<ul className="hotshopul">
								{
									this.state.hotshop.map((item,index)=>{
										return(
											<li key={item.id}>
												<img src={item.shop_info.ali_image} />
												<h4>{item.name}</h4>
												<h5>{item.shop_info.sku_mobile_sub_title}</h5>
												<h6>￥{item.price}</h6>
											</li>
										)
										
									})
								}
							</ul>
						</div>	
					</div>

					<div className="Hfloor1">
						{
							this.state.floorsl.map((item,index)=>{
								return(
									<img key={item.src} src={item.src} />
								)
							})
						}
					</div>

					<div className="rexiao">
						<div className="HremenTit">
							<h3>热销机型</h3>
						</div>
					</div>
				</div>
				<Footer></Footer>
			</div>
		)
	}
}