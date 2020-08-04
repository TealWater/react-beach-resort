import React from 'react';
import {Link} from 'react-router-dom';
//how to setup default image
import defaultImg from '../images/room-1.jpeg';
//How to setup Prop Types
import PropTypes from 'prop-types';

export default function Room({room}) {
    //destructuring
    const{name, slug , images, price} = room;
    return (
        <article className= "room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single room" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                {/* To access the "slug" variable you must use a template literal |` `| not |' '| or |" "| because the last two options are strings and will not convert ${var} */}
                <Link to={`/rooms/${slug}`} 
                className="btn-primary room-link">
                    Features
                </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}

Room.propTypes = {
    room: PropTypes.shape({
        name : PropTypes.string.isRequired,
        slug : PropTypes.string.isRequired,
        images : PropTypes.arrayOf(PropTypes.string).isRequired,
        price : PropTypes.number.isRequired,
    })
}