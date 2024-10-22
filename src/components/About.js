import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hi, I’m Priyanshu Jha, a motivated software developer with a passion for technology and innovation. Currently pursuing my B.Tech in Computer Science & Engineering at Maharana Pratap Engineering College, I have honed my skills in programming languages like C, C++, HTML, and JavaScript, alongside expertise in React and SQL.
        <br></br>
                    
        
                    
        </p>

        <br />
        <br/>

        <p className="text-xl">
        In addition to technical proficiency, I am a quick learner and thrive in collaborative environments. I am always seeking to improve, whether it’s through certifications in AI and SQL or contributing to coding communities like GeeksforGeeks and Codolio. With a 5-star rating in C, C++, and problem-solving on HackerRank, I am committed to continual growth and contributing to impactful projects.
        </p>
      </div>
    </div>
  );
};

export default About;
