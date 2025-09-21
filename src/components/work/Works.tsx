import React, { useEffect, useState } from 'react'
import { Project, projectsData, projectsNav } from './Data'
import WorksItem from './WorksItems';

function Works() {
  const [item, setItem] = useState({ name: 'all'});
  const [projects, setProjects] = useState<Project[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if(item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLocaleLowerCase() === item.name;
      })
      setProjects(newProjects);
    }
  }, [item])

  const handleClick = (index: number) => {
    setItem({ name: projectsNav[index].name.toLocaleLowerCase()});
    setActive(index);
  }
  return (
    <div>
    <div className="work__filters">
        {projectsNav.map((item, index) => {
            return <span className={`${active === index ? "active-work" : ""} work__item`} key={index} onClick={(e) => handleClick(index)}>{item.name}</span>
            })}
    </div>

    <div className="work__container container grid">
        {projects.map((item) => {
            return <WorksItem item={item} key={item.id}/>
        })}
    </div>
    </div>
  )
}

export default Works