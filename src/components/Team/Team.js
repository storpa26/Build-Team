import React from 'react';
import "./Team.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faDollarSign, faCheckCircle, faMoneyCheck } from '@fortawesome/free-solid-svg-icons'

const Team = (props) => {
    //sending 2 arrays as props
    const { cost, team } = props;

    //calculating the total amount
    let total = 0;
    for (const amount of cost) {
        total += amount.salary;
    }
    return (
        <div className="team-container">
            <p><FontAwesomeIcon icon={faUserPlus} /> Member Selected: {props.cost.length}</p>
            <p><FontAwesomeIcon icon={faMoneyCheck} /> Total Cost: <FontAwesomeIcon icon={faDollarSign} />{total}</p>
            <hr />
            {
                //this portion of code will show the selected people on screen
                team.map((member => {
                    return (
                        <div key={member.key} className="selected-devs">
                            <div>
                                <img src={member.img} alt="" />
                            </div>
                            <div>
                                <h3>{member.name} <FontAwesomeIcon className="check-circle" icon={faCheckCircle} /></h3>
                                <p> <span className="expert-style2">{member.expert}</span></p>
                            </div>
                        </div>
                    )
                }

                ))
            }
        </div>
    );
};

export default Team;