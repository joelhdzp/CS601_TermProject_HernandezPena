import { motion } from 'framer-motion';

function Home() {
  return (
    <div className='main'>
      <motion.section className="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="name">
          <h1>Welcome to My Portfolio</h1>
          <p>Software Developer | Automation Expert | Tech Passionate</p>
        </div>
      </motion.section>
      <div className='intro'>
        <p className='intro-1'>👋 Welcome to my Digital Corner!</p>
        <p className='intro-2'>Hi there — I’m so glad you stopped by</p>
        <p className='intro-3'>I’m Joel Hernandez Pena, a passionate software developer, automation enthusiast,
           and lifelong learner. In this little corner of the internet, you’ll find my journey, skills, 
           and projects that reflect my love for technology, problem-solving, and creating smart solutions.</p>
        <p className='intro-4'>Whether you're here to explore my work, get to know me, or just browsing — welcome! 🚀</p>
      </div>
    </div>
  );
};

export default Home;