import React from 'react';
import Layout from '@/components/Layout';
import SkillItem from '@/components/SkillItem';
import ProjectCard from '@/components/ProjectCard';
import { skillsData, inProgressProjects, completedProjects, supportingProjects } from '@/data/projects';
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
              <h3>Backend & APIs</h3>
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

      {/* Featured Backend Projects */}
      <section id="projects" className={styles.projects}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Backend Projects</h2>
          </div>
          <div className={styles.projectsGrid}>
            {completedProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Backend Projects */}
      <section id="ongoing-projects" className={`${styles.projects} ${styles.ongoingProjects}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Ongoing Backend Projects</h2>
          </div>
          <div className={styles.projectsGrid}>
            {inProgressProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Other / Supporting Projects */}
      <section id="supporting-projects" className={`${styles.projects} ${styles.supportingProjects}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Other / Supporting Projects</h2>
          </div>
          <ul className={styles.supportingList}>
            {supportingProjects.map((project) => (
              <li key={project.title} className={styles.supportingItem}>
                <strong className={styles.supportingTitle}>{project.title}</strong>
                <span className={styles.supportingDivider}>—</span>
                <span className={styles.supportingDescription}>{project.description}</span>
                <span className={styles.supportingMeta}>
                  <span className={styles.techMeta}>
                    Tech: {project.tags.join(', ')}
                  </span>
                  <span className={styles.linkSeparator}>|</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.supportingLink}
                  >
                    GitHub
                  </a>
                  {project.linkSecond && (
                    <>
                      <span className={styles.linkSeparator}>|</span>
                      <a
                        href={project.linkSecond}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.supportingLink}
                      >
                        Demo
                      </a>
                    </>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
