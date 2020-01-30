import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class RoomItem extends Component {
    render() {

        const {price, name} = this.props.roomItem.fields;
            const mainImage = this.props.roomItem.fields.images[0].fields.file.url;
        const id = this.props.roomItem.sys.id;

        return (
            <div className="col-lg-4 col-md-6 col-sm-12 room-item">
                    <div className="room-item-img">
                        <img className="img-fluid" src={mainImage} alt={name}/>
                        <p className="room-item-price">${price}<br/>per night</p>
                        <div className="room-item-util">
                            <Link to={`/rooms/${id}`} className="btn btn-primary">FEATURES</Link>
                        </div>
                    </div>
                    <div className="room-item-desc">
                        <h4>{name}</h4>
                    </div>
            </div>
        )
    }
}

export default RoomItem;
