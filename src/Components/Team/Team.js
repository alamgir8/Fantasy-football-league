import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamDetails from '../TeamDetails/TeamDetails';

const Team = () => {
    const {idTeam} = useParams();

    const [team, setTeam] = useState([]);
    useEffect(() => {
        const url = (`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
        fetch(url)
        .then(res => res.json())
        .then(data => {
            const teamData = data.teams;
            setTeam(teamData)
        })
    }, [idTeam])
    return (
        <div>
            <h3>This is team component</h3>
            {
                team.map(tm => <TeamDetails team={tm} key={tm.idTeam}></TeamDetails>)
            }
        </div>
    );
};

export default Team;