import React from 'react';

const Experience = ({mydata}) => {
    return (
        <section className="experience">
            {mydata.map((value, id) => {
                const {experience, education} = value;
                return (
                    <div className="mainHolder">
                    <div className="holder">
                        <h1>- Experience</h1>
                        <div>
                        {experience.map((items, key)=> {
                            const {company, startPeriod, endPeriod, role, position} = items;
                            return (
                                <div key={key} className="items">
                                    <h2>Company: {company}</h2>
                                    <p>Programme: {role}</p>
                                    <p>position: {position}</p>
                                    <p>Period: {startPeriod} - {endPeriod}</p>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                    <div className="holder">
                        <h1>- Education</h1>
                        {education.map((items, key) => {
                            const {school, studyYear, degree, course} = items;
                            return (
                                <div className="items" key={key}>
                                    <h2>{school}</h2>
                                    <p>Course: {course}</p>
                                    <p>Degree: {degree}</p>
                                    <p>Period: {studyYear}</p>
                                </div>
                            )
                        })}
                    </div>
                    </div>
                )
            })}
        </section>
    )
}
export default Experience