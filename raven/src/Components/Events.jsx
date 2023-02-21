import React from "react"
import Navbar from "./Navbar"
import Event from "./Event"
import data1 from "../assets/data2.jpg"
import plus from "../assets/plus.png"
export default function Events(){
    const [Events, setEvents] = React.useState([{
        heading: "Bake Sale",
        img: data1,
        club:"Hackathon Club",
        date: "2/22",
        time:"10:00 PM to 5:00 AM",
    }])
    return(
        <div>
            <Navbar />
            <div className="events-container">
                <Event 
                    heading={Events[0].heading}
                    img={Events[0].img}
                    club="Hackathon Club"
                    date="2/22"
                    time="10:00 PM to 5:00 AM"
                    />
                    <Event 
                    heading="Bake Sale"
                    img={data1}
                    club="Hackathon Club"
                    date="2/22"
                    time="10:00 PM to 5:00 AM"
                    />
                    <Event 
                    heading="Bake Sale"
                    img={data1}
                    club="Hackathon Club"
                    date="2/22"
                    time="10:00 PM to 5:00 AM"
                    />
                    <Event
                        img={plus}
                        button={true}
                    ></Event>
            </div>
            
        </div>
    )
}