import React from "react";
import './NewsItem.scss';
import {withRouter} from 'react-router-dom';

const NewsItem = props => {
    const info = { 
        content : props.content, 
        title : props.title, 
        src : props.src, 
        day : props.day,
        month : props.month, 
        img : props.img
    };
    return (
        <div className= "NewsItem" onClick= {() => props.history.push('/News/' + props.name, info)}>
            <div className= "NewsItem__title">{props.title}</div>
            <div className= "NewsItem__info">  
                <p className= "NewsItem__scr">{props.src}</p>
                <div className= "NewsItem__date">
                    <p>{props.day} </p>
                    <p> / {props.month}</p>
                </div>
            </div>
        </div>
    )
}

export default withRouter(NewsItem);