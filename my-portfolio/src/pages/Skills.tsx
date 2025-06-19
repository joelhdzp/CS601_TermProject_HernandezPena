import type { JSX } from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMysql, SiUipath, SiBlueprint } from 'react-icons/si';

const iconMap: Record<string, JSX.Element> = {
  Python: <FaPython />, Java: <FaJava />, React: <FaReact />, HTML5: <FaHtml5 />, CSS3: <FaCss3Alt />, JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />, SQL: <SiMysql />, Git: <FaGitAlt />, UiPath: <SiUipath />, 'Blue Prism': <SiBlueprint />
};

const skillVariant = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 120
    }
  }
};

interface SkillGroup {
  category: string;
  color: string;
  skills: { name: string }[];
}

function Skills() {
  const [groupedSkills, setGroupedSkills] = useState<SkillGroup[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}skills.json`)
      .then((res) => res.json())
      .then((data) => setGroupedSkills(data))
      .catch((error) => console.error('Error loading skills.json:', error));
  }, []);

  return (
    <motion.section className="skills" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      {groupedSkills.map((group, i) => (
        <div key={i} style={{ marginBottom: '2.5rem' }}>
          <h3>{group.category}</h3>
          <div className="skill-grid">
            {group.skills.map((skill, index) => (
              <motion.div
                className="skill-circle"
                style={{ backgroundColor: group.color }}
                variants={skillVariant}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.15, boxShadow: '0 8px 20px rgba(0,0,0,0.3)', backgroundColor: '#222' }}
                key={index}>
                {iconMap[skill.name] && <span className="skill-icon">{iconMap[skill.name]}</span>}
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </motion.section>
  );
};

export default Skills;