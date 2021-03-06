import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsList = ({ projects }) => (
    <>
    {projects.map((project, key) => (
        <Link key={key} to={`/ca-projects/${project.name}`} >
            <h3>{project.name}</h3>
            <p>{project.content[0].substring(0, 150)}...</p>
        </Link>
    ))}
    </>
);

export default ProjectsList;