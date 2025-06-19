function Footer() {
  return (
    <footer> 
      <div className="footer-title">
        <p><strong>&copy; {new Date().getFullYear()} Boston University — Joel Hernandez Pena</strong></p>
        <p>CS601 - Web Application Development</p>
        <i>All Rights Reserved ⚡️</i>
      </div>
      <div className="bottom-nav">
        <a href="https://www.instagram.com/joelhdz6/">
        <img src={`${import.meta.env.BASE_URL}assets/instagram-logo.webp`} alt="Instagram" className="insta-img"/></a>
        <a href="https://github.com/joelhdzp/">
        <img src={`${import.meta.env.BASE_URL}assets/github-logo.webp`} alt="GitHub" className="git-img"/></a>
        <a href="https://www.facebook.com/joel.lqi/">
        <img src={`${import.meta.env.BASE_URL}assets/facebook-logo.png`} alt="Facebook" className="face-img"/></a>
        <a href="https://www.linkedin.com/in/joel-hernandez-90704984/">
        <img src={`${import.meta.env.BASE_URL}assets/linkedin-logo.webp`} alt="LinkedIn" className="link-img"/></a>
      </div>
    </footer>
  );
};

export default Footer;