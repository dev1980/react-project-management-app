import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
      <div className="card-content">
      <span className="card-title">Project Title - {id}</span>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad vel odio nihil non tempora debitis magni quos excepturi totam qui a ullam cumque perferendis, facilis explicabo saepe enim nisi ipsam?</p>
      </div>
      <div className="card-action gret lighten-4 grey-text">
      <div>Posted by the Net Ninja</div>
      <div>28 May, 2020</div>
      </div>
      </div>
    </div>
  )
}

export default ProjectDetails
