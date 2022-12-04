import "./about.css"
import Nav from "../nav/Nav"

const About = () => {
  return (
    <div>
     <Nav />
      <div className="head-text">
        <div className="head-image">
          <img src={require("../img/img2.avif")} alt="Freedom Blog" />
        </div>
        <div class='text-on-image '>
          <h1>Welcome To The Funding Magent.</h1>
          <p>Where we help you make a living while making a difference</p>
        </div>
      </div>
    </div>

  )
}

export default About

