import React from 'react';
import { Link } from 'react-router-dom';

const Teams = (props) => {

    const {idTeam, strTeamBadge, strTeam, strSport}= props.team;
    return (
        <div>
            <img src={strTeamBadge} alt=""/>
            <h2>{strTeam}</h2>
            <h4>Sport Type : {strSport}</h4>
            <Link to={`/team/${idTeam}`}> <button className='btn btn-success'>Explore</button> </Link>
        </div>
    );
};

export default Teams;