import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';

const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const url = ('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        fetch(url)
        .then(res => res.json())
        .then(data => {
            const teamData = data.teams;
            setTeams(teamData)
        })
    }, [])
    return (
        <div className='container'>
           <div className="row">
                {
                   teams.map(team => <Teams team={team} key={team.idTeam}></Teams>)
                }
           </div>
        </div>
    );
};

export default Home;