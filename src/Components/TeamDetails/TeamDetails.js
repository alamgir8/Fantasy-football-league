import React from 'react';
import { Link } from 'react-router-dom';
import twitter from '../../img/Twitter.png';
import facebook from '../../img/Facebook.png';
import youtube from '../../img/YouTube.png'


const TeamDetails = (props) => {
    const {intFormedYear, strCountry, strTeamBadge, strTeam, strSport, strGender, strDescriptionEN, strStadiumDescription, strTwitter, strFacebook, strYoutube}= props.team;
    return (
        <div>
            <h3>This is Team Details</h3>
            <img src={strTeamBadge} alt=""/>
            <h2>{strTeam}</h2>
            <p>Founded : <strong>{intFormedYear}</strong></p>
            <p>Country : <strong>{strCountry}</strong></p>
            <p>Sport Type :<strong>{strSport}</strong></p>
            <p>Gender : {strGender}</p>
            <p>{strDescriptionEN}</p>
            <p>{strStadiumDescription}</p>
            <a href={strTwitter} target='_blank'><img src={twitter} alt=""/></a>
            <Link to={`/team/${strFacebook}`}><img src={facebook} alt=""/></Link>
            <Link to={`/team/${strYoutube}`}><img src={youtube} alt=""/></Link> 
        </div>
    );
};

export default TeamDetails;