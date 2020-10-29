import React from 'react'

const Landing = () => {
    return (
        <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">connect.io</h1> <br />
          <p className="lead" margin="0" >
            Social Media Solution for Businesses
            {/* <h6> You want to make sure your tone is always professional but friendly</h6> */}
          </p>
          <p className="text-center">
          You want to make sure your tone is always professional but friendly. <br />Create a profile/ portfolio, share posts and get help from other professionals.
          </p> <br />
          <div className="buttons">
            <a href="register.html" className="btn btn-primary">Sign Up</a>
            <a href="login.html" className="btn btn-light">Login</a>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Landing;