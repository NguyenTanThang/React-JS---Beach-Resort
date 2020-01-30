import React, { Component } from 'react';
import {Link} from "react-router-dom";
import data from "../data";
import RoomItem from "./RoomItem";

class RoomDetails extends Component {

    state = {
        roomItem: {}
    }

    componentWillMount(){
        const roomID = this.props.match.params.id;

        const roomItem = data.filter(item => {
            return roomID === item.sys.id;
        })[0];

        this.setState({
            roomItem
        })
    }

    render() {

        const images = this.state.roomItem.fields.images.map(item => {return item.fields.file.url});
        let {extras, capacity, description, price, name, size,pets} = this.state.roomItem.fields;

        pets = pets === true ? ("Pets allowed") : ("No pets allowed")
        extras = extras.map(item => {
            return <li>{item}</li>
        })

        return (
            <div>
                
                <header style={{backgroundImage: `url(${images[0]})`}}>
                    <div className="header-content">
                        <h1>{name}</h1>
                        <h2>Starting Price At ${price}</h2>
                        <Link to="/rooms" className="btn btn-primary">BACK TO ROOMS</Link>
                    </div>
                </header>

                <section id="room-details" className="section-padding">
                    <div className="container">

                        <div className="row justify-content-around">

                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <img className="img-fluid" src={images[1]} alt={name + " image 1"}/>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <img className="img-fluid" src={images[2]} alt={name + " image 2"}/>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <img className="img-fluid" src={images[3]} alt={name + " image 3"}/>
                            </div>

                        </div>

                        <div className="row">
                            
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <h4>Details</h4>
                                <p>{description}</p>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <h4>Info</h4>
                                <ul>
                                    <li><b>Price</b> : ${price}</li>
                                    <li><b>Size</b> : {size} SQFT</li>
                                    <li><b>Capacity</b> : {capacity}</li>
                                    <li><b>{pets}</b></li>
                                </ul>
                            </div>

                            <div className="col-12">
                                <h4>Extras</h4>
                                <ul>
                                    {extras}
                                </ul>
                            </div>

                        </div>


                    </div>
                </section>

            </div>
        )
    }
}

export default RoomDetails;
