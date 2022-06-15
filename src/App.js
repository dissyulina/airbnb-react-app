import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import experienceData from "./data"

export default function App() {
    const experienceElements = experienceData.map(experience => {
        return (
            <Card 
                key={experience.id}
                experience={experience}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {experienceElements}
            </section>
        </div>
    )
}
