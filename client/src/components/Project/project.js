import React from 'react'

function Project(props) {
    return (
       <div className="col">
  <div className="card border-dark">
    <img src={props.image} className="card-img-top" alt={props.title} />
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.text}</p>
      <a href={props.appLink} target="_blank">Link to App</a>
      <br />
      <a href={props.gitLink} target="_blank">Link to GitHub</a>
    </div>
  </div>
</div>

    )
}

export default Project
