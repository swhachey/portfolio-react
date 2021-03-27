import React from 'react'
import "../index.css"

function Home() {
    return (
        <div>
  <div className="container">
    <br />
    <header className="row text-white">
      <h1>WELCOME TO MY PORTFOLIO</h1>
    </header>
    <br />
    {/* THIS IS THE BIO CARD */}
    <div className="row">
      <div className="card text-white mb-3 bg-secondary biocard" style={{maxWidth: '700px'}}>
        <div className="card-header dropshadow"><h2>ABOUT ME</h2></div>
        <div className="row g-0">
          <div className="col-md-4">
            <br />       
            <img src="./assets/swhachey-pic.JPG" alt="..." width="150px" height="180px" className="dropshadow"/>
            <br />
            <a href="https://github.com/swhachey" target="_blank" style={{color: 'black', fontWeight: 'bolder'}}>GitHub Profile</a>
            <br />
            <a href="www.linkedin.com/in/swhachey" target="_blank" style={{color: 'black', fontWeight: 'bolder'}}>LinkedIn Profile</a>
            <br />
            <a href="mailto: sw.hachey@gmail.com" style={{color: 'black', fontWeight: 'bolder'}}>Email Me</a>
            <br />
            <a href="./assets/Scott Hachey Personal Resume (1).pdf" style={{color: 'black', fontWeight: 'bolder'}} download>DOWNLOAD RESUME</a>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Achieve the Ideal, Through the Real</h5>
              <p className="card-text">My name is Scott William Hachey and I am web developer and management specialist, as well as a musician and outdoor enthusiast. I was born in Minneapolis, MN and moved to Colorado to pursue my bachelors degree at CU Boulder in Environmental Science with a Sustainable Development focus. Since graduating I've worked in management in the music and live event industry. Whether its managing a production team, a tour, a festival event, or online collective; I have the experience to get everyone working at their best. As a web developer my emphasis is efficiency, ease-of-use, and simplistic design. I look forward to talking about how I can help bring your project to life.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
</div>

    )
}

export default Home
