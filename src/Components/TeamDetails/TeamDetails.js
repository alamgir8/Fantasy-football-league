import React from 'react';
import {  } from "./TeamDetails.css";
import twitter from '../../img/Twitter.png';
import facebook from '../../img/Facebook.png';
import youtube from '../../img/YouTube.png';
import instagram from '../../img/instagram.png';
import male from '../../img/male.jpg';
import female from '../../img/female.png';
import foundation from '../../img/found 1.png';
import flag from '../../img/flag (1) 1.png';
import gender from '../../img/male-gender-sign 1.png';
import sport from '../../img/football (1) 1.png';




const TeamDetails = (props) => {
    const {intFormedYear, strCountry, strTeam, strTeamBadge, strSport, strGender, strDescriptionEN, strStadiumDescription, strInstagram, strTwitter, strFacebook, strYoutube}= props.team;

    let playerType = strGender === "Male" ?  <img src={male} alt="" className='img-fluid w-100'/> : <img src={female} alt="" className='img-fluid'/>;
    

    return (
        <div className='club-info-section'>
                     <div className="hero-section">
                          <div className='text-center pt-5'>
                                <img id='club-badge' className='img-fluid' src={strTeamBadge} alt="clubBadge" />
                          </div>
                     </div>     
                    <div className="container">
                    <div className="team-card mt-5">
                        <div className='row p-4 mb-5'>
                            <div className='col-12 col-md-6 col-sm-12'>
                                <div className='team-information'>
                                    <h2 className='mb-5'>{strTeam}</h2>
                                    <div className='mb-3'><img src={foundation} alt=""/> Founded : {intFormedYear}</div>
                                    <div className='mb-3'><img src={flag} alt=""/> Country : {strCountry}</div>
                                    <div className='mb-3'> <img src={sport} alt=""/> Sport Type : {strSport}</div>
                                    <div className='mb-3'> <img src={gender} alt=""/> Gender : {strGender}</div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-sm-12'>
                                <div className='team-image'>{playerType}
                                </div>
                            </div>
                        </div>
                    </div>
            <div className='team-details'>
                <p className='mb-5'>{strDescriptionEN}</p>
                <p>{strStadiumDescription}</p>
            </div>
            <div className='team-link text-center'>
                <a href={`https:/${strInstagram}`}> <img src={instagram} alt="Instagram" className='m-2'/></a>
                <a href={`https:/${strTwitter}`}> <img src={twitter} alt="Twitter" className='m-2'/></a>
                <a href={`https:/${strFacebook}`}> <img src={facebook} alt="Facebook" className='m-2'/></a>
                <a href={`https:/${strYoutube}`}> <img src={youtube} alt="Youtube" className='m-2'/></a>
            </div>
                    </div>
            
        </div>
    );
};

export default TeamDetails;