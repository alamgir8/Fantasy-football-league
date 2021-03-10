import React from 'react';
import { Link, useParams } from 'react-router-dom';
import twitter from '../../img/Twitter.png';
import facebook from '../../img/Facebook.png';
import youtube from '../../img/YouTube.png';
import instagram from '../../img/instagram.png';
import male from '../../img/male.jpg';
import female from '../../img/female.png'


const TeamDetails = (props) => {
    const {intFormedYear, strCountry, strTeamBadge, strTeam, strSport, strGender, strDescriptionEN, strStadiumDescription, strInstagram, strTwitter, strFacebook, strYoutube}= props.team;

    let playerType = strGender === "Male" ?  <img src={male} alt=""/> : <img src={female} alt=""/>;
    

    return (
        <div>
           
            <div>
            <img src={strTeamBadge} alt=""/>
            </div>
            <div>
            <h2>{strTeam}</h2>
            <p>Founded : <strong>{intFormedYear}</strong></p>
            <p>Country : <strong>{strCountry}</strong></p>
            <p>Sport Type : <strong>{strSport}</strong></p>
            <p>Gender : {strGender}</p>
            <p>{playerType}</p>
            </div>
            <p>{strDescriptionEN}</p>
            <p>{strStadiumDescription}</p>
            <a href={`https:/${strInstagram}`}> <img src={instagram} alt=""/></a>
            <a href={`https:/${strTwitter}`}> <img src={twitter} alt=""/></a>
            <a href={`https:/${strFacebook}`}> <img src={facebook} alt=""/></a>
            <a href={`https:/${strYoutube}`}> <img src={youtube} alt=""/></a>
        </div>
    );
};

export default TeamDetails;