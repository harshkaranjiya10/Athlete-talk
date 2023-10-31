import React from 'react'

function Footer() {

  return (
    <>
    <section className="foot">
        <div className="footer head">
            <div className="footer--head--app">
            <img src="favicon.ico" className="head--bar--footer "></img>
            <h1>Athlete Talk</h1> 
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum quaerat dignissimos! Sed tenetu</p>
        </div>
        <div className="footer">
            <h4>Services</h4>
            <p className="footer--links">
                <a href="#">Community Chat</a>
                <a href="#">To Do List</a>
                <a href="#">Plans</a>                
                <a href="#">Wellness Video</a>                
                <a href="#">Trainer</a>
            </p>
        </div>
        <div className="footer">
            <h4>handler</h4>
            <br />
            <p className="footer--links">
                <a href="#"><img src="instagram.png" class="footer--icon"/>Instagram</a>
                <br />
                <a href="#"><img src="facebook.png" class="footer--icon"/>Facebook</a>
                <br />
                <a href="#"><img src="linkedin.png" class="footer--icon"/>LinkedIn</a>
            </p>
        </div>
        <div className="footer">
            <h4>Contact</h4>
            <p className="footer--links">
               
                <div className="contact--info">
                < img src="home.png" class="footer--icon"/> <p>  <address>Gandhinagar, Gujarat India</address> </p>
                </div> 

                <div className="contact--info">
                 <img src="email.png" class="footer--icon" /><p>  info@example.com </p>
                </div>
                
                <div className="contact--info">
                 <img src="call.png" class="footer--icon" /><p> + 01 234 567 88</p>   
                </div>
                
                
                </p>
        </div>
    </section>
    <div className="footer--copyright">
            <footer>
                &#169; 2023 copyright: <a href="www.google.com">athletetalk.com</a>
            </footer> 
    </div>


    </>
  )
}

export default Footer
