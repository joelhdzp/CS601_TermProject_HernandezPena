/* Persistent header with store logo and title:
 * Edits combo Header-Logo
 * Edits store logo
 */
function Header() {
  return (
    <header>
      <div className="header-image">
        <img src={`${import.meta.env.BASE_URL}my-logo.png`} alt="Store Logo" className="logo"/>
        <h1>My Portfolio</h1>
      </div>
    </header>
  );
};

export default Header;