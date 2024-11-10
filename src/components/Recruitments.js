import React from 'react'
import Navbar from './Navbar'
import Stars from './Stars'
import Footer from './Footbar'

const Recruitments = () => {
    return (
        <>vv
            <header>
                <Navbar />
                <Stars />
                <h1 className="quatlas-heading">Recruitment-2024</h1>
            </header>
            <section>
                <div className="quatlas-sub-head">
                    <div className="quatlas-recruit">
                        <h1 className="head">Overview</h1>
                        <p className="quatlas-rec-01">Quatlas Aeromodelling is an exclusive aeromodelling team at Ramaiah Institute
                            of Technology. The team participates in various aeromodelling competitions, including the
                            prestigious SAE Aero Design competition in the USA, where student teams from across India design,
                            build, test, and showcase their innovative aircraft. The designs are judged based on a number of
                            criteria. Quatlas consists of multidisciplinary students working on various subsystems, which are
                            categorized under technical and non-technical roles.
                        </p>
                    </div>
                    <div className="quatlas-recruit">
                        <h1 className="head-01">What We Do</h1>
                        <ul className="quatlas-list">
                            <li className="quatlas-max"><strong>Hands-On Building:</strong> Engage in the full process of crafting
                                aeromodelling projects from initial concept to final assembly.</li>
                            <li className="quatlas-max"><strong>Collaborative Projects:</strong> Work in teams to solve challenges
                                and bring your ideas to life.
                            </li>
                            <li className="quatlas-max"><strong>Skill Development:</strong>Gain valuable experience in both
                                technical and non-technical roles, enhancing your portfolio and future career prospects.</li>
                        </ul>
                    </div>
                    <div className="quatlas-recruit">
                        <h1 className="head-01">Roles</h1>
                        <div className="quatlas-hox">
                            <h1 className="head-0">Technical</h1>
                            <ul className="quatlas-list">
                                <li className="quatlas-max"><strong>Conceptual Design & Sizing:
                                </strong> In the Conceptual Design & Sizing phase, we transform innovative ideas into
                                    feasible designs by defining key parameters such as dimensions and weight distribution,
                                    ensuring our concepts are both creative and viable. </li>
                                <li className="quatlas-max"><strong>3D CAD Modeling:
                                </strong> During 3D CAD Modeling, we create detailed digital representations of our aircraft
                                    using advanced CAD software, refining designs and simulating performance to prepare for
                                    fabrication.
                                </li>
                                <li className="quatlas-max"><strong>Fabrication & Testing:
                                </strong> In the Fabrication & Testing phase, we build our aircraft prototypes and conduct
                                    rigorous testing to evaluate performance, stability, and safety, ensuring our final product
                                    meets quality benchmarks.</li>
                            </ul>
                        </div>
                        <div className="quatlas-hox">
                            <h1 className="head-0">Non-Technical</h1>
                            <ul className="quatlas-list">
                                <li className="quatlas-max"><strong>Reports & Presentations:</strong> In Reports & Presentations, we
                                    compile and present project data, achievements, and findings, effectively communicating our
                                    progress and results to audiences.</li>
                                <li className="quatlas-max"><strong>Sponsorships:</strong> The Sponsorships team is responsible for
                                    seeking and managing partnerships with organizations to secure funding and resources that
                                    support our projects and initiatives.</li>
                                <li className="quatlas-max"><strong>Social Media Management:</strong> Our Social Media Management
                                    team engages with the community by creating and sharing content across various platforms,
                                    promoting our events and showcasing our achievements.</li>
                                <li className="quatlas-max"><strong>Creative Design:</strong> In Creative Design, we develop
                                    visually appealing materials, including posters and graphics, to enhance our presentations,
                                    marketing efforts, and overall club branding.</li>
                                <li className="quatlas-max"><strong>Website Management:</strong> The Website Management team ensures
                                    our online presence is up-to-date and user-friendly, providing information about our
                                    projects, events, and team activities to the public.</li>
                            </ul>

                        </div>
                        <div className="quatlas-recruit">
                            <h1 className="head-01">Recruitment Process</h1>
                            <ul className="quatlas-list">
                                <li className="quatlas-max"><strong>Assessment:</strong> You will be assessed for the
                                    basic knowledge of science
                                    and Mathematics for technical</li>
                                <li className="quatlas-max"><strong>Interview:</strong> After clearing the Exam you
                                    will go through a few rounds of
                                    interview
                                </li>
                                <li className="quatlas-max"><strong>Project:</strong> For the final step you will be
                                    given a group project to
                                    complete and be a part of the
                                    club</li>
                            </ul>
                        </div>
                        <div className="quatlas-recruit" style={{marginTop:"30px"}}>
                            <h1 className="head">Registration</h1>
                            <p className="quatlas-rec-01">Recruitment dates will be announced soon! Stay tuned for
                                updates.
                            </p>
                        </div>
                        <div className="quatlas-recruit" style={{marginTop:"30px"}}>
                            <h1 className="head">Stay Connected</h1>
                            <p className="quatlas-rec-01">Follow us on our social media channels and check our website for the
                                latest updates and announcements. We look forward to welcoming you to our community of aviation
                                enthusiasts!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Recruitments
