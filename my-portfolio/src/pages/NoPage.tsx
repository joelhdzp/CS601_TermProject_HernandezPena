import { Link } from 'react-router-dom';

function NoPage() {
  return (
    <section className="no-page" style={{ textAlign: 'center', padding: '4rem' }}>
      <img src={`${import.meta.env.BASE_URL}404-error.png`} alt="404 Not Found" style={{ width: '550px', height: 'auto', marginBottom: '2rem' }} />
      <h2>Oops! Page not found</h2>
      <p>The page you are looking for doesn't exist or has been moved</p>
      <Link to="/">
        <button style={{ maxWidth: '250px', marginTop: '3rem', padding: '0.75em 0.5em', fontSize: '1rem' }}>Go Back Home</button>
      </Link>
    </section>
  );
};

export default NoPage;