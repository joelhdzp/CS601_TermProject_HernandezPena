import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ProjectItem {
  id: string;
  name: string;
  image: string;
  url: string;
  description: string;
}

function Projects() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}projects.json`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error loading projects.json:', error));
  }, []);

  const openProject = (projectUrl: string) => {
    try {
      const iframeContainer = document.getElementById('iframe-container');
      if (iframeContainer) {
        iframeContainer.innerHTML = `<iframe src="${projectUrl}" title="Project Viewer" style="width:100%;height:600px;border:none;"></iframe>`;
        window.scrollTo({ top: iframeContainer.offsetTop, behavior: 'smooth' });
      } else {
        window.open(projectUrl, '_blank');
      }
    } catch (e) {
      console.error('Could not load in iframe. Opening in new tab.');
      window.open(projectUrl, '_blank');
    }
  };

  return (
    <motion.section className="projects" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card clickable" onClick={() => openProject(project.url)}>
            <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.name} />
            <h4>{project.name}</h4>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      <div id="iframe-container" style={{ marginTop: '2rem' }}></div>
    </motion.section>
  );
};

export default Projects;