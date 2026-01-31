import React from 'react';
import { Project } from '@/types/projects';
import styles from '@/styles/Projects.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectContent}>
        <h3>{project.title}</h3>
        <p className={styles.projectSummary}>{project.description}</p>
        
        {project.details && project.details.length > 0 && (
          <ul className={styles.projectDetails}>
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}
        
        <div className={styles.projectTech}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.techTag}>
              {tag}
            </span>
          ))}
        </div>
        
        <div className={styles.projectLinks}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            View GitHub
          </a>
          {project.linkSecond && (
            <a
              href={project.linkSecond}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
