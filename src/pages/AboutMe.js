
import React from 'react'
import {Grid} from '@mui/material'


const AboutMe =() => 
    <section className='page'>
        <h2>About Me</h2>
        <div className="about-me-wrapper">
            <ul className="indented-list">
            <p>
                I am a software engineer with passion for front-end technologies.
                I like the visual aspect of developing UI and I am obsessed with clean, consistend and intuitive interfaces. 
            </p>
            <p>
                I helped  shape design decisions related to performance while accounting for the needs of end users and businesses.
                I would always take on the initiative to research multiple UI options and put forth the best technical solution that simplified the user’s workflow.
                <br />
                I am strong advocate for development best practices including progressive enhancement, accessibility, performance, scalability, and maintainability.
            </p>
                <li><strong>Hobbies</strong>
                    <p> Gardening - I converted 'a boring lawn only backyard' to an oasis for many birds and butterflies.</p>
                    <div className='flex-container'>
                        <div className="flex-item"><img src={require(`../images/backyard_2023_1.jpg`)} alt="c" /></div>
                        <div className="flex-item"><img src={require(`../images/spring_backyard_2022.jpg`)} alt="c" /></div>
                        <div className="flex-item"><img src={require(`../images/backyard_2023_2.jpg`)} alt="c" /></div>
                        <div className="flex-item"><img src={require(`../images/backyard_2023_4.jpg`)} alt="c" /></div>
                        <div className="flex-item"><img src={require(`../images/mexican_sunflower.png`)} alt="c" /></div>
                        <div className="flex-item"><img src={require(`../images/sunflower.png`)} alt="c" /></div>
                    </div>
                    <p></p>
                    <p></p>
                    <p>I volunteer in no kill animal shelter - helping these little 'furry monsters' to find forever home. </p>
                    <div className='flex-container'>
                        <div className="flex-item"><img src={require(`../images/cat_11.png`)} alt="c" /></div>
                        <div className="flex-item"><img src={require(`../images/orange_cat.png`)} alt="c" /></div>
                        <div className="flex-item"><img src={require(`../images/franky.png`)} alt="c" /></div>
                        <div className="flex-item"><img src={require(`../images/cat4.jpg`)} alt="c" /></div>
                        <div className="flex-item"><img src={require(`../images/cat6.png`)} alt="c" /></div>
                        <div className="flex-item"><img src={require(`../images/cat_7.png`)} alt="c" /></div>
                    </div>
                </li>

                <li><strong>Weaknesses</strong>
                    <p>Chooocooolate !!!</p>
                </li>
            </ul>
        </div>
    </section>


export default AboutMe
