import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Job {
  id: number;
  name: string;
  logo: string;
  role: string;
  impact: string;
}

function Resume() {
  // All items in resume.json
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    // Fetch inventory data on mount
    fetch(`${import.meta.env.BASE_URL}resume.json`)
      .then((result) => result.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error('Failed to fetch inventory:', error));
  }, []);

  return (
    <div className="my-jobs">
      <aside className="resume" data-section="sidebar">
        <h2>My Resume</h2>
        <p>
          All the details related to my field of expertise are included in the
          following document:
        </p>
        <div>
          <iframe src={`${import.meta.env.BASE_URL}assets/resume-JHP.pdf`} title="Resume Viewer"></iframe>
        </div>
      </aside>
      <motion.section
        className="jobs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}>
        <h2>Key Accomplishments</h2>
        <div className="job-grid">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3 className="name-logo">
                {job.name}
                <img src={`${import.meta.env.BASE_URL}${job.logo}`} alt="Job Name" />
              </h3>
              <i>{job.role}</i>
              <p>{job.impact}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default Resume;