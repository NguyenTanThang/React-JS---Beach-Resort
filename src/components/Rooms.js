import React, { Component } from 'react';
import bannerBg from "../images/defaultBcg.jpeg";
import {Link} from "react-router-dom";
import data from "../data";
import RoomItem from "./RoomItem";

import {typeSorter, capacitySorter, petSorter, priceSorter, sizeSorter, breakfastSorter} from "../sorter/sorter";

class Rooms extends Component {

    state = {
        roomItems: data,
        type: "",
        capacity: "",
        price: 600,
        size_lower_limit: "",
        size_upper_limit: "",
        breakfast: "",
        pets: ""
    }

    oldRoomItems = undefined;

    onChange = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.id]: e.target.value
        }, () => {
            console.log(this.state)
            let finalRoomItems = data;

            finalRoomItems = typeSorter(finalRoomItems, this.state.type)
            console.log(finalRoomItems);
            finalRoomItems = capacitySorter(finalRoomItems, this.state.capacity)
            console.log(finalRoomItems);
            finalRoomItems = priceSorter(finalRoomItems, this.state.price)
            console.log(finalRoomItems);
            finalRoomItems = sizeSorter(finalRoomItems,this.state.size_lower_limit, this.state.size_upper_limit)
            console.log(finalRoomItems);

            this.oldRoomItems = finalRoomItems;

            this.setState({
                breakfast: false,
                pets: false,
                roomItems: finalRoomItems
            })
        })
    }

    onCheckboxChange = (e) => {
        console.log(e.target.checked);
        this.setState({
            [e.target.id]: e.target.checked
        }, () => {
            console.log(this.state);

            let finalRoomItems = this.oldRoomItems || data;

            if (this.state.breakfast == true){
                finalRoomItems = breakfastSorter(finalRoomItems, this.state.breakfast)
            }
            console.log(finalRoomItems);
            if (this.state.pets == true){
                finalRoomItems = petSorter(finalRoomItems, this.state.pets)
            }
            console.log(finalRoomItems);

            this.setState({
                roomItems: finalRoomItems
            })
        })
    }

    render() {

        const roomItems = this.state.roomItems.length > 0 ? this.state.roomItems.map(item => {
            return <RoomItem key={item.sys.id} roomItem={item}/>
        })
        : (<div className="mt-4 text-center"><h1 className="text-center">There is no room that matched your search paramenters</h1></div>)

        return (
            <div>
                <header style={{backgroundImage: `url(${bannerBg})`}}>
                    <div className="header-content">
                        <h1>Luxurious Rooms</h1>
                        <h2>Deluxe Room Starting At $299</h2>
                        <Link to="/" className="btn btn-primary">BACK TO HOME</Link>
                    </div>
                </header>

                <section id="rooms" className="section-padding">
                    <div className="section-header">
                        <h2>Search Rooms</h2>
                    </div>

                    <div className="container">
                        <form id="room-search-form">
                            <div className="row">

                                <div className="form-group">
                                    <label>Room Type</label>
                                    <select className="custom-select" id="type" onChange={this.onChange}>
                                        <option value="all" defaultValue>
                                            All
                                        </option>

                                        <option value="single">Single</option>

                                        <option value="double">Double</option>

                                        <option value="family">Family</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Guests</label>
                                    <select className="custom-select" id="capacity" onChange={this.onChange}>
                                        <option value="all" defaultValue>
                                            All
                                        </option>

                                        <option value="1">1</option>

                                        <option value="2">2</option>

                                        <option value="3">3</option>

                                        <option value="4">4</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Room Prices ${this.state.price}</label>
                                    <input type="range" className="form-control-range" id="price" min="0" max="600" step="1" onChange={this.onChange} value={this.state.price}/>
                                </div>

                                <div className="form-group">
                                    <label>Room Size</label>
                                    
                                            <input type="number" className="form-control" id="size_lower_limit" placeholder="Lower Limit" onChange={this.onChange}/>

                                            <input type="number" className="mt-2 form-control" id="size_upper_limit" placeholder="Upper Limit" onChange={this.onChange}/>
                                        
                                </div>

                                <div className="form-group">
                                    <label><input type="checkbox" id="breakfast" onChange={this.onCheckboxChange} 
                                    checked={this.state.breakfast}/> Breakfast</label>

                                    <br/>

                                    <label><input type="checkbox" id="pets" onChange={this.onCheckboxChange}
                                    checked={this.state.pets}/> Pets</label>
                                </div>

                            </div>
                        </form>
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

export default Rooms;
