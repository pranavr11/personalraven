import React from "react"
import Navbar from "./Navbar"
import { Button } from "@mui/material"
import landing from "../assets/landing.jpg"
export default function Home(){
    const ButtonStyle = {
        minWidth: "200px",
        backgroundColor:"#c90f2d",
        margin: "5px",
        borderRadius: 35
    }
    return(
        <div>
            <Navbar />
            <div className="home-container">
            <h1 className="home-heading">
            The all-in-one tool for
thinking and learning
            </h1>
            <p className="home-text">
            Sure, it’s a note-taking tool. But there’s also flashcards, PDFs, backlinks, and more - to help you study, stay organized, and think.
            </p>
                <Button style={ButtonStyle} variant="contained" size="large">Sign Up</Button>
                <Button style={ButtonStyle} variant="contained" size="large">Log In</Button>
            </div>
            <img src={landing} alt="Landing Page Image" width="1000px" />
        </div>
    )
}