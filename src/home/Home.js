import img from "../img/img.jpg"
import Nav from "../nav/Nav"
import "./home.css"
import { FaArrowRight } from "react-icons/fa"


const Home = () => {
  return (
    <>
      <Nav />
      <div className="container1">
        <div className="header">
          <h1>Getting funds for your non-profit can be confusing and overwhelming. We’re here to make that easy for you.</h1>
          <a href="https://calendly.com/thefundingmagnet/one-on-one-consult" rel="noreferrer" target={"_blank"}> <button className="btn"> Book A free Consultation </button></a>
          <img src={img} className="img" alt="img" />
        </div>
      </div>
      <section className=" container1 sec2" >
        <h1>How can we help you </h1>
        <div className="service">

          <div className="col1">
            <h3>Courses</h3>
            <p>We offer digital products to help your nonprofit thrive</p>
            <div className="l_more">
              <a href="/" rel="noreferrer">Learn more <FaArrowRight /></a>
            </div>
          </div>

          <div className="col1">
            <h3> Grant Services</h3>
            <p>We offer done for you services to help your nonprofit thrive</p>
            <div className="l_more">
              <a href="/" rel="noreferrer">Learn more <FaArrowRight /></a>

            </div>
          </div>

          <div className="col1">
            <h3> Trainings</h3>
            <p>We offer seminars, trainings and speaking to help businesses and organisations thrive</p>
            <div className="l_more">
              <a href="/" rel="noreferrer">Learn more <FaArrowRight /></a>

            </div>
          </div>

        </div>
      </section>
<div className="sec3_container">
  
<section className="sec3 container1 ">
        <h1>Our Impact</h1>
        <div className="sec3_text service" >
          <div className="text1">
            <h3> Did you know?</h3>
            <p>50% of nonprofit fails in less than a year. <br />
              30% of nonprofits close up in 5-10 years! <br />
              The one reason nonprofits fail is the lack of a strategic planning! <br />
              The funding magnet exists to change this story!</p>
          </div>

          <div className="text2">
            <p > Here at The Funding Magnet, we believe you don't have to go broke to make a difference! You can make a living while making a difference!
              We prepare, propel, position, and power individuals and nonprofit organizations to build profitable, sustainable, impactful organisations
            </p>
          </div>

        </div>
        <div className=" sec3_col service">


          <div className="col2">
            <h2> $ 1.3m</h2>
            <hr />
            <p>Raised in funding for nonprofit organizations</p>
          </div>

          <div className="col2">
            <h2> 10,000+</h2>
            <hr />
            <p>Trained changemakers</p>
          </div>

          <div className="col2">
            <h2> 45</h2>
            <hr />
            <p>Countries</p>
          </div>
        </div>
      </section>
</div>






    </>
  )
}

export default Home