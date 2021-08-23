import React, {useState, useEffect} from 'react'

const Project = ({value}) => {
    const [status, setStatus] = useState(false);
    const {projectName, projectLink, projectImg} = value;
    console.log(projectName + projectLink)
    const checkStatusEnter = () => {
        setStatus(true);
    }
    const checkStatusLeave = () => {
        setStatus(false);
    }
    return (
        <div className="proj" onMouseEnter={checkStatusEnter} onMouseLeave={checkStatusLeave}>
            <div className="projText">
                <p>{projectName}</p>
                <button className="btns">
                    <i className="fas fa-hand-pointer"></i>
                </button>
            </div>
                {status?<div className="check">
                    <img src={`${projectImg}`} alt={projectName} />
                    <a target="_blank" href={projectLink}>open</a>
                </div>:""}
        </div>
    )
}

export default Project

