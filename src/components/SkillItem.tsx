import React from 'react';
import Image from 'next/image';
import { Skill } from '@/types/projects';
import styles from '@/styles/Projects.module.css';

interface SkillItemProps {
  skill: Skill;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => (
  <a
    href={skill.url}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.skillItem}
  >
    <Image src={skill.icon} alt={skill.name} width={20} height={20} />
    {skill.name}
  </a>
);

export default SkillItem;
