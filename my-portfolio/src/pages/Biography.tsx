import { useEffect } from 'react';
import { motion, useAnimate } from 'framer-motion';

function Biography() {
  /* 
   * Hook to orchestrate animations in sequence 
   * Get the 'scope' and 'animate' objects
  */
  const [scope, animate] = useAnimate();

  /* Set up the animation sequence: animate */
  async function myAnimation() {
    await animate(scope.current, { scale: 1.5 });
    await animate(scope.current, { rotate: 0 });
    await animate(scope.current, { scale: 1 });
    animate(
      scope.current,
      {
        x: 100
      }
    );
  }

  /* Call myAnimation() to start the animation sequence  */
  useEffect(() => {
    myAnimation();
  }, []);

  return (
    <div className='my-bio'>
      <aside className="photo" data-section="sidebar">
        <motion.section initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 50 }}
        ref={scope}>
          <img src={`${import.meta.env.BASE_URL}assets/my-photo.png`} alt="My Photo"/>
          <i>"My path wasn’t linear, but every challenge — from chemistry labs to code editors — shaped the software engineer I am today."</i>
        </motion.section>
      </aside>
      {/* Connect a <motion> to the hook using the scope as a ref */}
      <motion.section className="bio-description" initial={{ x: '-100vw' }} animate={{ x: 80 }} transition={{ type: 'spring', stiffness: 50 }}>
        <h2>About Me</h2>
        <p>For over a decade, I’ve been transforming business processes through technology and automation.
          As an RPA Developer at Fortune 500 companies like The Hershey Company and PepsiCo, I built
          RPA solutions (with UiPath and Blue Prism) that streamlined operations and improved efficiency
          – including one project that reduced operational expenses by 40%. Early in my career, I worked
          as a business analyst translating complex requirements into digital solutions, and I later
          spearheaded automation projects for 15+ back-office processes. This blend of technical expertise
          and business insight has been a cornerstone of my success.</p>
        <p>Now, I’m channeling this expertise into a dedicated software development career. I’m currently
          pursuing a Master of Science in Software Development at Boston University (expected June 2025),
          where I’m expanding my skills in advanced programming, software architecture, and full-stack
          development. Alongside my studies, I recently served as a Consular Associate at the U.S. Embassy
          in Argentina – a role where I honed my communication, attention to detail, and adaptability in a
          fast-paced international environment. By combining formal software education with real-world
          experience in a global context, I’ve built a well-rounded skill set ready to tackle complex software
          engineering challenges.</p>
        <p>When I'm not coding, you'll likely find me enjoying a live music festival, discovering new movies
          from all over the world, sharing great moments with my dog Capitan, or exploring new restaurants in
          search of my next favorite dish.</p>
      </motion.section>
    </div>
  );
};

export default Biography;