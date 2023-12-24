import img from "./img2.png";
import img2 from "./img4.jpg";
export default function Home(){
    return(
        <div>
        <section>
        <h2>Meet Our Expert Doctors</h2>
        <div class="doctor">
            <div class="bio">
                <img src={img}></img>
                <h3>Dr. Emily Smith, MD</h3>
                <p><strong>Specialty:</strong> Internal Medicine</p>
                <p><strong>Experience:</strong> 15 years</p>
                <p><strong>Bio:</strong> Dr. Smith is dedicated to providing comprehensive and compassionate care. Her
                    expertise lies in diagnosing and managing a wide range of medical conditions.</p>
                <div class="cta-button">
                  <a href="#">Book Slot</a>
                </div>        
            </div>
            <div class="bio">
                <img src={img2}></img>
                <h3>Dr. Emily Smith, MD</h3>
                <p><strong>Specialty:</strong> Internal Medicine</p>
                <p><strong>Experience:</strong> 15 years</p>
                <p><strong>Bio:</strong> Dr. Smith is dedicated to providing comprehensive and compassionate care. Her
                    expertise lies in diagnosing and managing a wide range of medical conditions.</p>
                <div class="cta-button">
                  <a href="#">Book Slot</a>
                </div>        
            </div>
            <div class="bio">
                <img src={img}></img>
                <h3>Dr. Emily Smith, MD</h3>
                <p><strong>Specialty:</strong> Internal Medicine</p>
                <p><strong>Experience:</strong> 15 years</p>
                <p><strong>Bio:</strong> Dr. Smith is dedicated to providing comprehensive and compassionate care. Her
                    expertise lies in diagnosing and managing a wide range of medical conditions.</p>
                <div class="cta-button">
                  <a href="#">Book Slot</a>
                </div>        
            </div>
            <div class="bio">
                <img src={img2}></img>
                <h3>Dr. Emily Smith, MD</h3>
                <p><strong>Specialty:</strong> Internal Medicine</p>
                <p><strong>Experience:</strong> 15 years</p>
                <p><strong>Bio:</strong> Dr. Smith is dedicated to providing comprehensive and compassionate care. Her
                    expertise lies in diagnosing and managing a wide range of medical conditions.</p>
                <div class="cta-button">
                  <a href="#">Book Slot</a>
                </div>    
            </div>
        </div>
    </section>
    <section class="why-choose">
        <h2>Why Choose Us?</h2>
        <ul>
            <li>Convenient Booking: Easily book appointments online, saving you time and effort.</li>
            <li>Expert Doctors: Our team of experienced and highly qualified doctors ensures top-notch medical care.</li>
            <li>Flexible Slots: Choose from a variety of time slots to fit your schedule.</li>
            <li>Secure and Confidential: Your health information is treated with the utmost confidentiality and security.</li>
        </ul>
    </section>

    <section class="testimonial">
        <h2>Testimonials</h2>
        <div className="card">
        <div className="card1">
            <img src={img2}></img>
            <p>"I've never experienced such a hassle-free way to book a medical appointment. The platform is intuitive, and the doctors are top-notch."</p>
            <span>- Jane D.</span>
        </div>
        <div className="card1">
        <img src={img2}></img>
            <p>"The doctors on this platform are not only experts in their fields but also genuinely caring. I highly recommend it."</p>
            <span>- Mark S.</span>
        </div>
        <div className="card1">
        <img src={img2}></img>
            <p>"I've never experienced such a hassle-free way to book a medical appointment. The platform is intuitive, and the doctors are top-notch."</p>
            <span>- Jane D.</span>
        </div>
        <div className="card1">
        <img src={img2}></img>
            <p>"The doctors on this platform are not only experts in their fields but also genuinely caring. I highly recommend it."</p>
            <span>- Mark S.</span>
        </div>
        <div className="card1">
        <img src={img2}></img>
            <p>"I've never experienced such a hassle-free way to book a medical appointment. The platform is intuitive, and the doctors are top-notch."</p>
            <span>- Jane D.</span>
        </div>
        </div>
    </section>

    <section class="how-it-works">
        <h2>How It Works</h2>
        <div className="flow">
            <div className="step"><span>1</span><div id="flow-id">Browse Doctors:</div><div id="flow-des">Explore our list of expert doctors and choose the one that fits your needs.</div></div>
            <div className="step"><span>2</span><div id="flow-id">Select a Time Slot:</div><div id="flow-des"> Pick a convenient time slot for your medical checkup.</div></div>
            <div className="step"><span>3</span><div id="flow-id">Book Your Appointment:</div><div id="flow-des">Confirm your booking, and you're all set!</div></div>
        </div>
    </section>

    <footer class="footer">
        <p>&copy; 2023 Your Website Name. All rights reserved.</p>
    </footer>
    </div>
    )
}