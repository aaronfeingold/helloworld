import React from "react";

const resume = (props) => {

  let skillmessage;
  let education;
  let work;
  let skills;

  if(props.data){
    skillmessage = props.data.skillmessage;
    education = props.data.education.map(function(education){
      return <div key={education.school}>
        <h3>{education.school}</h3>
      <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
      </div>
    })
    work = props.data.work.map(function(work){
      return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em><span>&bull;</span> <em className="date">{work.location}</em></p>
          <p>{work.description}</p>
      </div>
    })
    skills = props.data.skills.map(function(skill){
      const className = `bar-expand ${skill.name.toLowerCase()}`;
      return <li key={skill.name}><span style={{width:skill.level}}className={className}></span><i className="fa fa-linkedin"></i><em>{skill.desc}</em></li>
    })
  }

  return (
    <section id="resume">
      <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
                <div className="twelve columns">
                  {education}
                </div>
            </div>
          </div>
      </div>
      <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
          {work}
        </div>
      </div>
      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
        <div className="nine columns main-col">
          <p>{skillmessage}</p>
          <div className="bars">
              <ul className="skills">
              {skills}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default resume;
