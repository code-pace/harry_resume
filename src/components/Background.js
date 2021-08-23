import React from 'react';
import Project from './Project'
const Background = ({mydata})=> {
    return (
        <section className="background">
            {mydata.map((data, key) => {
                const {background, myLaptop, project} = data;
                return (
                    <div key={key} className="contain">
                        <div className="laptop-img">
                            <img src={`${myLaptop}`} alt="laptop" className="laptop" />
                        </div>
                        <div className="story">
                            <div className="storyII">
                                <h2>- Background</h2>
                                <p>
                                    {background}
                                </p>
                            </div>
                            <h2>- Projects</h2>
                            <div className="project">
                                {project.map((value, key) => {
                                    return (
                                        <Project key={key} value={value}/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}
export default Background