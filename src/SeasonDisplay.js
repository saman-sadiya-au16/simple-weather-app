import './SeasonDisplay.css';
import React from "react";


const seasonConfig = {
    winter: {
        text: 'Burr,it\'s chilly...',
        iconName : 'snowflake'
    },
    summer: {
        text: 'Let\'s hit the beatch...',
        iconName: 'sun'
    }
};

const getSeasons = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    }
    else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay  = (props) => {
    console.log(props.lat)
    const seasons = getSeasons(props.lat, new Date().getMonth());
    // const text = seasons === 'winter' ? 'Burr,its chilly...' : 'Lets hit the beatch...'
    // const icon = seasons === 'winter' ? 'snowflake' : 'sun'
    // console.log(seasons)
    const {text, iconName} = seasonConfig[seasons]
    return (
        <div className={`season-display ${seasons}`}>
            <i className={`top-icon massive ${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`bottom-icon massive ${iconName} icon`}/>
        </div>
    );
}

export default SeasonDisplay;