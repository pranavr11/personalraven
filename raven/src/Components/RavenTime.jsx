import React from "react"
import Navbar from "./Navbar"
import YoutubeEmbed from "./YoutubeEmbed"
export default function RavenTime(){
    return(
        <div>
        <Navbar />
        <div className="youtube">
            <h1>Raven Time</h1>
            <YoutubeEmbed embedId="4ttbOwVYSAE"/>
            </div>
        </div>
    )
}