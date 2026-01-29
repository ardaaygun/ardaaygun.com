import React from "react";
import '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJava, faPython, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

// --- 1. KISIM: BACKEND & CORE ---
const labelsFirst = [
    "C++",
    "Java",
    "Spring Boot",
    "Python",
    "OOP",
    "Pandas / NumPy",
    "SQL"
];

// --- 2. KISIM: FRONTEND & MOBILE ---
const labelsSecond = [
    "React.js",
    "Flutter",
    "TypeScript",
    "HTML5 & SCSS",
    "JavaScript"
];

// --- 3. KISIM: ARAÇLAR  ---
const labelsThird = [
    "Git",
    "GitHub",
    "PyCharm",
    "CLion",
    "VS Code",
    "IntelliJ IDEA",
    "Data Structures",
    "Agile/Scrum"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                {/* Başlık: */}
                <h1>Skills</h1>
                <div className="skills-grid">
                    
                    {/* 1. KUTU: CORE & BACKEND */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faLaptopCode} size="3x"/>
                        <h3>Core & Backend</h3>
                        <p>I possess a solid understanding of Object-Oriented Programming (OOP) principles. I have developed academic projects and algorithms using C++, Java, and Python.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech Stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* 2. KUTU: FRONTEND & MOBILE */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x"/>
                        <h3>Frontend & Mobile</h3>
                        <p>I am passionate about creating interactive user interfaces. I build modern web applications with React and I am actively learning mobile development using Flutter.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech Stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* 3. KUTU: TOOLS & METHODS */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faGithub} size="3x"/>
                        <h3>Tools & Methods</h3>
                        <p>I utilize Git and GitHub for version control and project management. I focus on writing clean, maintainable code and applying efficient Data Structures.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech Stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;