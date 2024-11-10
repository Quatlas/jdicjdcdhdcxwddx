import React from 'react'
import Navbar from './Navbar'
import Footer from './Footbar'
import Stars from './Stars'

const Contact = () => {
  return (
    <>
    <header>
        <Navbar/>
        <Stars/>
    </header>
    <section>
        <div className="quatlas-ipm">
            <div className="quatlas-imp">
                <p className="quatlas-max">Are you a student with a passion for flight and innovation? <strong>Quatlas Aeromodelling</strong>, the official team of RIT, is seeking enthusiastic members to join us as we compete in the annual SAE Aero Design Competition in the USA. This is your opportunity to work on cutting-edge projects, gain invaluable experience, and proudly represent our college on an international stage. Join us at Quatlas Aeromodelling and help us achieve new milestones in aeromodelling excellence!</p>
            </div>
        </div>
        <div className="team-lead">
            <div className="team-lead-nt">
                <h2 className="quatlas-t">Team leader - Bhandavi N</h2>
                <a href="" className="t-01"><strong>Email : </strong>bhandaviswamy2004@gmail.com</a><br/>
                <a href="" className="t-02"><strong>Contact Number : </strong>+91 6363162589</a>
                <h2 className="quatlas-nt">Non Tech - Pavan A</h2>
                <a href="" className="nt-01"><strong>Email : </strong>pavan.aashok1234gh@gmail.com</a><br/>
                <a href="" className="nt-02"><strong>Contact Number : </strong>+91 7676475397</a>
            </div>
            <div className="quatlas-form">
                <form action="" id="sheet-form">
                    <div className="inputBox">
                        <input type="text" name="Name" required="" onkeyup="this.setAttribute('value', this.value);" value="" id="user"/>
                        <label for="user">Name</label>
                     </div>
                     <div className="inputBox">
                        <input type="text" name="Usn" required="" onkeyup="this.setAttribute('value', this.value);" value="" id="user"/>
                        <label for="user">Usn</label>
                     </div>
                     <div className="inputBox">
                        <input type="tel" name="Contact" required="" onkeyup="this.setAttribute('value', this.value);" value="" id="user"/>
                        <label for="user">Contact Number</label>
                     </div>
                     <textarea name="Message" id="" cols="30" rows="6" className="quatlas-area" placeholder="Messsage"></textarea>
                    <button className="quatlas-submit" type="submit">Submit</button>
                </form>
            </div>
        </div>
        <div className="quatlas-add">
            <div className="quatlas-add-01">
                <h2 className="quatlas-reg">Registered Address</h2>
                <p className="quatlas-min">ESB II , 119, R&D - 1 Laboratory, Quatlas-RIT Ramaiah Institute of Technology MSR Nagar, MSRIT Post, Mathikere Bangalore-560054</p>
            </div>
            <div className="quatlas-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0835259698624!2d77.562613474846!3d13.030352813587932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae170e309db333%3A0x42bc025a603938d4!2sQuatlas%20Aeromodelling!5e0!3m2!1sen!2sin!4v1718769975645!5m2!1sen!2sin" width="300" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Contact
