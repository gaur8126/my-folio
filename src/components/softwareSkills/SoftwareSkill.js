import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons">
        {skillsSection.softwareSkills.map((skill, i) => (
          <li key={i} className="software-skill-inline" name={skill.skillName}>
            {skill.image ? (
              <img
                src={skill.image}
                alt={skill.skillName}
                className="skill-icon-img"
              />
            ) : (
              <i className={skill.fontAwesomeClassname}></i>
            )}
            <p>{skill.skillName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
