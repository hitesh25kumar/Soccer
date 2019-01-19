import React from 'react';
import Featured from './Featured/Index';
import MatchesHome from './Matches/Index';

const Home = () => {
    return (
        <div className="bck_blue">
            <Featured/>
            <MatchesHome/>
        </div>
    );
};

export default Home;