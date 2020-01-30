import React, { Component } from 'react';
import bannerBg from "../images/defaultBcg.jpeg";
import {Link} from "react-router-dom";
import data from "../data";
import RoomItem from "./RoomItem";

class Home extends Component {

    state = {
        roomItems: []
    }

    componentWillMount(){
        const roomItems = data.filter(item => {
            return item.fields.featured;
        })

        this.setState({
            roomItems
        })
    }

    render() {

        const roomItems = this.state.roomItems.map(roomItem => {
            return <RoomItem key={roomItem.sys.id} roomItem={roomItem}/>
        })

        return (
            <div>
                <header style={{backgroundImage: `url(${bannerBg})`}}>
                    <div className="header-content">
                        <h1>Luxurious Rooms</h1>
                        <h2>Deluxe Room Starting At $299</h2>
                        <Link to="/rooms" className="btn btn-primary">OUR ROOMS</Link>
                    </div>
                </header>

                <section id="services" className="section-padding">
                    <div className="section-header">
                        <h2>Services</h2>
                    </div>

                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 col-sm-12 service-item">
                                <i className="fas fa-cocktail"></i>
                                <h4>Free Cocktails</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 service-item">
                                <i className="fas fa-hiking"></i>
                                <h4>Endless Hiking</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 service-item">
                                <i className="fas fa-car"></i>
                                <h4>Free Suttle</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 service-item">
                                <i className="fas fa-beer"></i>
                                <h4>Strongest Beer</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>

                        </div>
                    </div>
                </section>
            
                <section id="featured" className="section-padding">
                    <div className="section-header">
                        <h2>Featured Rooms</h2>
                    </div>

                    <div className="container">
                        <div className="row">
                            {roomItems}
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Home;
