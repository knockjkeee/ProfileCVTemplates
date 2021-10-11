import React, { Component } from 'react';
import Profile from '../../components/pages/profile/Profile'
import Contact from '../../components/pages/contact/Contact'
import About from '../../components/pages/about/About'
import Education from '../../components/pages/education/Education'
import SkillsAndTechnology from '../../components/pages/skillsAndTechnology/SkillsAndTechnology';
import Experiences from '../../components/pages/experiences/Experiences'
import Skills from '../../components/pages/skills/Skills'
import Portfolio from '../../components/pages/portfolio/Portfolio';
import Modal from '../../components/Modal'


export default class Home extends Component {
    render() {
        return (
            <section>
                <div className="row">
                    <div className="col s12 m12 l4 light-blue darken-4 sameHeight" style={{ "height": "1538px" }} >
                        <Profile />
                        <Contact />
                        {/* <Skills /> */}
                    </div>

                    <div className="col s12 m12 l8 white sameHeight" >
                        <About />
                        <Education />
                        <SkillsAndTechnology />
                        <Portfolio />
                        <Experiences />
                        {/* <Modal name="sasdasd" /> */}
                    </div>
                </div>
            </section>
        )
    }
}
