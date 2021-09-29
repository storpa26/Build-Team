import React from 'react';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faDollarSign, faStar, faHatCowboy, faWifi, faMoneyCheck } from '@fortawesome/free-solid-svg-icons'
const Card = (props) => {
    //destructring
    const { name, img, rank, stars, salary, github, contrib, follower, expert } = props.dev;

    return (
        <div className="card">
            <div className="dev-header">
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h4>{name}</h4>
                    <h5> <span className="contrib-style">Contribution: {contrib}</span></h5>
                </div>
            </div>
            <p> <span className="expert-style">{expert}</span></p>
            <hr />
            <div className="dev-info">
                <p><FontAwesomeIcon icon={faWifi} /> Followers: {follower}</p>
                <p><FontAwesomeIcon icon={faStar} /> Stars: {stars} </p>
                <p><FontAwesomeIcon icon={faHatCowboy} /> Rank: {rank} </p>
                <p><FontAwesomeIcon icon={faMoneyCheck} /> Salary: <FontAwesomeIcon icon={faDollarSign} />{salary}</p>
                <div className="button-container">
                    <button onClick={() => props.handleAddToTeam(props.dev)} className="regular-btn"><FontAwesomeIcon icon={faUserPlus} /> Add To Team</button>
                    <button className="git-btn"><a href={github} target="_blank" rel="noreferrer">Github</a></button>
                </div>

            </div>
        </div>
    );
};

export default Card;