import React from "react"
import {Button} from "@mui/material"
export default function Event(props){
    console.log(props.img)
    return(
        <div className="event">
            <h1>{props.heading}</h1>
            <img className="eventImage" src={props.img} alt="" />
                <h2>{props.club}</h2>
                <h4>{props.date}, {props.time}</h4>
            {!props.button && <Button variant="contained" style={{borderRadius: 35}}>Learn More</Button>}
        </div>
    )
}