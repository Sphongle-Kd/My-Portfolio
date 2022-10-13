import React from 'react'
import Project from '../projects/Projects'
import './ProjectList.css';
import { projects } from '../../data';

const ProjectList = () => {
  return (
    <div className="p1">
        <div className="pl-text">
            <h1 className="pl-title">My Project</h1>
            <p className="pl-desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis recusandae sit et architecto sint rem pos
                simus fugiat ut suscipit iure reiciendis aut officia tenetur.
            </p>
        </div>
        <div className="pl-list">
          {projects.map((item)=>(
            <Project key={item.id} img={item.img} link={item.link}/>
          ))}

        </div>
    </div>
  )
}

export default ProjectList