import "./Nav.css"
import React from "react"
import { Link } from 'react-router-dom';
// import { IoIosHome } from "react-icons/io";
// import { CgArrowRightO } from "react-icons/cg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import meditation from "../../assets/meditation.jpg"
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import yoga from "../../assets/yoga.jpg"
import ramu from "../../assets/ramu.jpg"
import ramu1 from "../../assets/ramu1.jpg"
import img from "../../assets/img.jpg"
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.jpg"
import aa from "../../assets/aa.png"
import { GoSquareFill } from "react-icons/go";
function Nav() {
    return (
        <>
            {/* nav start */}
            <div className="a">
                <img src={meditation} className="b" alt="" />
                <button type="button" className="c">Login</button>
            </div>
            <div className="d">
                <ul className="e">
                    <li className="f">Home</li>
                    <li className="f">AboutUs</li>
                    <li className="f" >
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Meditation Basics
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">What id Meditation?</a></li>
                            <li><a className="dropdown-item" href="#">How does it works?</a></li>
                            <li><a className="dropdown-item" href="#">Meditation and thoughtless awareness</a></li>
                            <li><a className="dropdown-item" href="#">Meditation types</a></li>
                            <li><a className="dropdown-item" href="#">Meditation and chakras</a></li>
                            <li><a className="dropdown-item" href="#">kundalini yoga</a></li>
                            <li><a className="dropdown-item" href="#">How to meditate</a></li>
                            <li><a className="dropdown-item" href="#">Meditation tips for begginers</a></li>
                            <li><a className="dropdown-item" href="#">Meditation techniques</a></li>
                            <li><a className="dropdown-item" href="#">Guided Meditation</a></li>
                        </ul>
                    </li>
                    <li className="f">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Benifits of Meditation
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Meditation helps with Anxiety</a></li>
                            <li><a className="dropdown-item" href="#">Meditation helps with Asthama</a></li>
                            <li><a className="dropdown-item" href="#">Meditation helps with Stress</a></li>
                            <li><a className="dropdown-item" href="#">Meditation helps with Hypertension</a></li>
                            <li><a className="dropdown-item" href="#">Meditation helps with Drud Abuse</a></li>
                            <li><a className="dropdown-item" href="#">Meditation helps with ADHD</a></li>
                            <li><a className="dropdown-item" href="#">Meditation helps with Depression</a></li>

                        </ul>
                    </li>
                    <li className="f">Contact</li>
                    <li className="f">Meditation Classes</li>
                </ul>
            </div>
            {/* nav end */}
            <div className="g">
                <div>
                <h1 className="a1">Discover Inner Peace & Spiritual Awakening</h1>
                <p className="a2">Join Ramu Master on a journey of self-realization and holistic well-being through meditation and spiritual wisdom.</p>
                <button type="button" className="r2">Begin Now</button>
                </div>
                <div>
                    <img src={aa} className="bn1" alt=""/>
                </div>
            </div>

            <h1 className="h">Introducing <h1 className="i">RAMU MASTER</h1></h1>
            <div className="row1">
                <div className="col-md-6">
                    <img src={ramu1} className="l" alt="" />
                    <img src={ramu} className="k" alt="" />
                </div>
                <div className="col-md-6">
                    <p className="j">RAMU Master, a distinguished Spiritual Science Teacher and the visionary Founder and Chairman of the Dhyana Osmania Foundation and Dhyana Dharma Ashram. With an unwavering commitment to meditation and spiritual science, Ramu Master has been a guiding light for individuals seeking inner peace, self-realization, and holistic well-being.</p>
                    <p className="j">Born on July 26, 1980. Ramu Master’s path to spirituality began at an early age. While holding an M.Sc. in Mathematics and Physics, he was drawn to the exploration of the human mind and spirit. This passion led to the founding of the Dhyana Osmania Foundation and Dhyana Dharma Ashram—places dedicated to the spread of spiritual knowledge and meditation practices that have transformed lives.</p>
                    <button type="button" className="r1">Learn More</button>
                </div>
            </div>
            <h1 className="m">Technology And Philosophy</h1>
            <p className="n">At the core of Ramu Master’s teachings is the understanding that meditation is the gateway to unlocking cosmic energy, paving the way for a balanced and fulfilling life. His guiding principles include:</p>
            <div className="container mt-5">
                <div className="row">
                    {/* card1 */}
                    <div className="col-md-3 mb-4">
                        <div className="card">
                            <img src={img1} className="card-img-top" alt="Card Image 1" />
                            <div className="card-body">
                                <h5 className="card-title">Mind Programming</h5>
                                <p className="card-text">Transforming thought patterns for success and positivity set in your ways.</p>
                                {/* <a href="#" class="btn btn-primary">Learn More</a> */}
                            </div>
                        </div>
                    </div>

                    {/* card2 */}
                    <div className="col-md-3 mb-4">
                        <div className="card">
                            <img src={img2} className="card-img-top" alt="Card Image 2" />
                            <div className="card-body">
                                <h5 className="card-title">Emotional Fittness</h5>
                                <p className="card-text">Building emotional resilience and intelligence for personal well-being.</p>
                                {/* <a href="#" class="btn btn-primary">Learn More</a> */}
                            </div>
                        </div>
                    </div>

                    {/* Card 3  */}
                    <div className="col-md-3 mb-4">
                        <div className="card">
                            <img src={img3} className="card-img-top" alt="Card Image 3" />
                            <div className="card-body">
                                <h5 className="card-title">Creative Visualization</h5>
                                <p className="card-text">Using the power of imagination to manifest one’s desires.</p>
                                {/* <a href="#" class="btn btn-primary">Learn More</a> */}
                            </div>
                        </div>
                    </div>

                    {/* Card 4  */}
                    <div className="col-md-3 mb-4">
                        <div className="card">
                            <img src={img4} class="card-img-top" alt="Card Image 4" />
                            <div className="card-body">
                                <h5 className="card-title">Law Of Attraction</h5>
                                <p className="card-text"> Applying universal principles to attract positivity and abundance.</p>
                                {/* <a href="#" class="btn btn-primary">Learn More</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row2">
                <div>
                    <h1 className="p">Join Our Team</h1>
                    <p className="q">Ramu Master invites you to be part of the thriving community at Dhyana Dharma Ashram. Whether you are beginning your meditation journey or seeking to deepen your practice, the ashram offers a peaceful space, well-structured programs, and a supportive environment to help you grow spiritually.</p>
                    <button type="button" className="r">Start Now</button>
                </div>
                <div className="col-md-6">
                    <img src={img} className="o" alt="" />
                </div>
            </div>

            <div className="row3">

                <div className="s">
                    <h2 className="t">Get in Touch</h2>
                    <p className="tt">We are available 24/7 by call, or e-mail. You can also use our contact form</p>
                    <div className="U">
                        <IoLocationOutline className="b1" />
                        <h5 className="b2">Address</h5>
                        <p className="b3">Hyderabad, Telangana</p>
                    </div>
                    <div className="U">
                        <IoCallOutline className="b1" />
                        <h5 className="b2">Phone-Number</h5>
                        <p className="b3">+918234567887</p>
                    </div>
                    <div className="U">
                        <MdOutlineEmail className="b1" />
                        <h5 className="b2">E-mail</h5>
                        <p className="b3">Ramu@gmail.com</p>
                    </div>
                    <hr/>
                    <p><b>Follow Us:</b></p>
                    <RiFacebookLine className="b8" />
                    <CiTwitter className="b8" />
                    <CiYoutube className="b8"/>
                    <CiInstagram className="b8"/>

                </div>
                <div className="b4">
                    <h4 className="b5">Send a Message</h4>
                    <form>
                        <input type="text" placeholder="Name" className="input-dash" />
                        <input type="Email" placeholder="E-mail Address" className="input-dash" />
                        <input type="text" placeholder="Message" className="input-dash1" />
                        <p className="b6">By Submitting you are Agree to the processing of your personal data Which you provided to us.</p>
                        <button type="button" className="b7">Submit</button>
                    </form>
                </div>
            </div>

            <div className="yl">
                <div className="yyyyy">
                    <div className="ym">
                        <h6 className="yo">Others Links:</h6>
                        <ul type="none" className="b9">
                            <li>Home</li>
                            <li>Booking Journey</li>
                            <li>Current projects</li>
                            <li>Experience</li>
                            

                        </ul>
                    </div>
                    <div className="ym">
                        <h6 className="yo">Get free Sources:</h6>
                        <ul type="none" className="b9">
                        <li>Hatha Yoga</li>
                            <li>Vinyasa Yoga</li>
                            <li>Bikram Yoga</li>
                            <li>Iyengar Yoga</li>

                        </ul>
                    </div>
                    <div className="ym">
                        <h6 className="yo">Social Plugins:</h6>
                        <ul type="none" className="b9">
                        <li>Youtube</li>
                            <li>FaceBook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>  
                        </ul>
                    </div>
                    <div className="yn">
                    
                        <ul type="none" className="b11">
                            <h4 className="b10">Contact Address:</h4>
                            <li><b>Phone:</b>8234567899</li>
                            <li><b>Email:</b>Ramu@gmail.com</li>
                      
                            <li><b>Address:</b>Hyderabad,Telangana</li>
                        </ul>
                    </div>
                </div>
                <hr className="yr"></hr>
                <div className="yq">
                    <p className="b12">Copyright © 2014-2025 Ramu Masters Meditation, All Rights Reserved</p>
                </div>
                <hr className="yr"></hr>
            </div>

        </>

    )
}
export default Nav