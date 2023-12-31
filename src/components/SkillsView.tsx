import React from "react";
import Fade from "../views/FadeIn";
const Skills = () => {
  return (
    <Fade>
      <div className="bg-[#1b366e] pt-8 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-4 text-center underline pb-3">
            SKILLS
          </h2>
          <div className="grid grid-cols-2 gap-6 place-items-center">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2 pt-4 text-center">
                Soft Skills
              </h3>
              <ul className="list-disc list-inside text-white">
                <li>Communication</li>
                <li>Collaboration</li>
                <li>Problem-solving</li>
                <li>Adaptability</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2 pt-4 text-center">
                Hard Skills
              </h3>
              <ul className="list-disc list-inside text-white">
                <li>JavaScript & TS</li>
                <li>React & Next</li>
                <li>Node</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
   
    </Fade>
  );
};

export default Skills;
