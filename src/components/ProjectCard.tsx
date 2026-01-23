import React from 'react';
import Image from 'next/image';
import { Project } from '@/types/projects';
import styles from '@/styles/Projects.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const renderProgressSection = () => {
    if (project.progress === undefined) return null;

    return (
      <div className={styles.progressSection}>
        <div className={styles.progressContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${project.progress}%` }}
          />
        </div>
        <div className={styles.progressInfo}>
          <span className={styles.progressPercent}>
            Estimated Release: {project.estimatedRelease}
          </span>
          <span className={styles.progressPercent}>{project.progress}%</span>
        </div>
      </div>
    );
  };

  const getLinkText = () => {
    if (project.status === 'in-progress') return 'In Progress';
    if (project.status === 'planned') return 'Planned';
    return 'GitHub';
  };

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImage}>
        <Image src={project.image} alt={project.title} width={400} height={250} />
      </div>
      <div className={styles.projectContent}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.projectTech}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.techTag}>
              {tag}
            </span>
          ))}
        </div>
        {renderProgressSection()}
        <div className={styles.projectLinks}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            {getLinkText()}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
