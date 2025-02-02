import "./Nav.css"
import React from "react"
import { Link } from 'react-router-dom';
// import { IoIosHome } from "react-icons/io";
// import { CgArrowRightO } from "react-icons/cg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import meditation from "../../assets/meditation.jpg"
import yoga from "../../assets/yoga.jpg"
import ramu from "../../assets/ramu.jpg"
import ramu1 from "../../assets/ramu1.jpg"
import img from "../../assets/img.jpg"
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.jpg"
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
               <h1 className="a1">Discover Inner Peace & Spiritual Awakening</h1>
               <p className="a2">Join Ramu Master on a journey of self-realization and holistic well-being through meditation and spiritual wisdom.</p>
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
            <h1 className="s">Contact Us</h1>
            <div className="t">
             <form>
                     <label for="name" className="v">Full Name*</label>
                      <input type="text" id="name" className="w" placeholder="First Name"/>
                      <label for="email" class="v">EMail*</label>
                      <input type="email" id="email" class="w" placeholder="EMail"/>
                      <label for="phno" class="v">Phone/Mobile No*</label>
                      <input type="number" id="phno" class="w" placeholder="Mobile Number"/>
                      <label for="Address" class="v">Address</label>
                      <input type="text" id="Address" class="x"/>
                      <label for="upload" class="v">Upload Aadhar</label>
                      <input type="file" class="y" id="upload"/>
                      <p class="z">Allowed Type(s): .pdf, .doc, .docx</p>
                      <input type="checkbox"class="aa" id="checkbox"/>
                      <label for="checkbox" class="ab">By using this form you agree with the storage and handling of your data by this website. *</label><br/>
                      <button type="submit" class="ac">Submit</button>
             </form>
             </div>
                
             <div className="yl">
           <div className="yyyyy">
            <div className="ym">
                <h6 className="yo">Others Links:</h6>
                <ul type="none">
                    <li><GoSquareFill className="yp" />Home</li>
                    <li><GoSquareFill className="yp" />Booking Journey</li>
                    <li><GoSquareFill className="yp" />Current projects</li>
                    <li><GoSquareFill className="yp" />Experience</li>
                    <li><GoSquareFill className="yp" />RSS Experience</li>
                    <li><GoSquareFill className="yp" />Experience in Astral Travelling</li>
                    <li><GoSquareFill className="yp" />Hyponotism</li>
                   
                </ul>
            </div>
            <div className="yn">
                <ul type="none">
                    <li><GoSquareFill className="yp"/>Jouney with patriji</li>
                    <li><GoSquareFill className="yp"/>Social Services</li>
                    <li><GoSquareFill className="yp"/>Influence by</li>
                    <li><GoSquareFill className="yp"/>Contact Us</li>
                    <li><GoSquareFill className="yp"/>Inspired by</li>
                    <li><GoSquareFill className="yp"/>Case Studies done</li>
                    <li><GoSquareFill className="yp"/>Expert in</li>
                    <li><GoSquareFill className="yp"/>Vision Mission</li>
                </ul>
            </div>
            <div className="yn">
            <h6 className="yo">Social Plugin:</h6>
            <ul type="none">
                <li><GoSquareFill className="yp"/>Youtube</li>
                <li><GoSquareFill className="yp"/>FaceBook</li>
                <li><GoSquareFill className="yp"/>Instagram</li>
                <li><GoSquareFill className="yp"/>Twitter</li>
                {/* <li><GoSquareFill className="yp"/>Package Tours</li> */}
            </ul>
            </div>
           </div>
           <hr className="yr"></hr>
           <div className="yq">
            <p>Copyright © 2014-2025 Ravi Masters Meditation, All Rights Reserved</p>
           </div> 
           <hr className="yr"></hr>
          </div>      
                 
        </>

    )
}
export default Nav