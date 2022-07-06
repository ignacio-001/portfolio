import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2> My Experience</h2>
       <div className="container experience__container">
       <div className="experience__frontend">
        <h3>Frontend Developer </h3>
        <div className="experience__content">
          <article className='experience_details'>
            <BsPatchCheckFill className='experirience_details-icons'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experirience_details-icons'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experirience_details-icons'/>
            <div>
            <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experirience_details-icons'/>
            <div>
            <h4>Boostrap</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experirience_details-icons'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
       </div>
       <div className="experience__Backend">
        <h3>
          BackEnd Developer
        </h3>
        <div className="experience__content">
          <article className='experience_details'>
            <BsPatchCheckFill className='experirience_details-icons'/>
            <div>
            <h4>PHP</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experirience_details-icons'/>
            <div>
            <h4>Nodejs</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experirience_details-icons'/>
            <div>
            <h4>MongoDB</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experirience_details-icons'/>
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experirience_details-icons'/>
            <div>
            <h4>C++</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
       </div>
       </div>
    </section>
  )
}

export default Experience