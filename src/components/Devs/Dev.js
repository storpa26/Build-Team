import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Team from '../Team/Team';
import './Dev.css'

const Dev = () => {
    //using 3 useStates for 3 different purpose
    //one default, one calculates the price and one shows the selected developers
    const [devs, setDevs] = useState([]);
    const [cost, setCost] = useState([]);
    const [team, setTeam] = useState([]);

    //fetching data from fake JSON
    useEffect(() => {
        fetch('data.JSON')
            .then(res => res.json())
            .then(data => {
                setDevs(data)
            })
    }, [])

    //handling Add To Team button
    const handleAddToTeam = (dev) => {

        //simple conditioning to avoid adding same person more than once
        const exist = cost.find(x => x.key === dev.key);
        if (!exist) {
            const newList = [...cost, dev];
            setCost(newList);
            const newTeam = [...team, dev];
            setTeam(newTeam);
        }
        else {
            alert('Already added');
        }

    }
    return (
        <div>
            <div className='top-devs-heading'>
                <h3>Top Developers</h3>
            </div>
            <div className="container">
                <div className="devs-container">
                    {
                        devs.map(dev => <Card
                            key={dev.key}
                            dev={dev}
                            handleAddToTeam={handleAddToTeam}>
                        </Card>)
                    }
                </div>
                <div className="team-formation">
                    <h2>Your Team: </h2>
                    <Team cost={cost} team={team}></Team>

                </div>
            </div>
        </div>
    );
};

export default Dev;