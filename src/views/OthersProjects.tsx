import React from 'react';
import OthersProjectCard from '../components/card/CardOtherProject';
import miscProjectsData from '../assets/data/miscProjects.json';


const OthersProjects = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full mx-auto">
    {miscProjectsData.map((item:any)=>(
        <OthersProjectCard {...item} key={item.id}/>
    ))}
    </div>
  );
};

export default OthersProjects;