import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {  } from "./Teams.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Teams = (props) => {

    const {idTeam, strTeamBadge, strTeam, strSport}= props.team;
    return (
        <div className='col-lg-3 col-md-4 col-sm-12 my-3'>
            <Card className='team-card'>
                <Card.Img className='m-auto pt-3 img-fluid w-50' src={strTeamBadge} />
                <Card.Body className='text-center'>
                    <Card.Title className='team-title'>{strTeam}</Card.Title>
                    <Card.Text>
                        Sport Type : <strong>{strSport}</strong>
                    </Card.Text>
                    <Link to={`/team/${idTeam}`}> <button id='explore-button' className='btn px-4'>Explore <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                </Card.Body>
                </Card>
        </div>
    );
};

export default Teams;