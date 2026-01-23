import React from 'react';
import Layout from '@/components/Layout';
import SkillItem from '@/components/SkillItem';
import ProjectCard from '@/components/ProjectCard';
import { skillsData, inProgressProjects, completedProjects } from '@/data/projects';
import styles from '@/styles/Projects.module.css';

const Projects: React.FC = () => {
  return (
    <Layout title="Projects - Roman Kriuchkov">
      {/* Technical Skills */}
      <section id="skills" className={styles.skills}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Technical Skills</h2>
          </div>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h3>Languages</h3>
              <div className={styles.skillItems}>
                {skillsData.languages.map((skill) => (
                  <SkillItem key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h3>Frameworks & Libraries</h3>
              <div className={styles.skillItems}>
                {skillsData.frameworks.map((skill) => (
                  <SkillItem key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h3>Databases & DevOps</h3>
              <div className={styles.skillItems}>
                {skillsData.databases.map((skill) => (
                  <SkillItem key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In Progress Projects */}
      <section id="projects" className={styles.projects}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Planned / In Progress</h2>
          </div>
          <div className={styles.projectsGrid}>
            {inProgressProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section id="completed-projects" className={`${styles.projects} ${styles.completedProjects}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Completed Projects</h2>
          </div>
          <div className={styles.projectsGrid}>
            {completedProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
