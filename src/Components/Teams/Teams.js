import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {  } from "./Teams.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Teams = (props) => {

    const {idTeam, strTeamBadge, strTeam, strSport}= props.team;
    return (
        <div className='col-lg-3 col-md-4 col-sm-12'>
            <div className='m-2'>
            <Card >
                <Card.Img className='m-auto p-4 img-fluid w-50' src={strTeamBadge} />
                <Card.Body className='text-center'>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>
                        Sport Type : {strSport}
                    </Card.Text>
                    <Link to={`/team/${idTeam}`}> <Button variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button></Link>
                </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Teams;