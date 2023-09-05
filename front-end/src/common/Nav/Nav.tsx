import { Image } from 'react-bootstrap';

const Nav: React.FC = () => {
  return (
    <>
      <header
        id="header"
        className="d-flex justify-content-center position-static"
      >
        <h1 id="logo" className="position-static">
          <Image
            width="250px"
            height="auto"
            src="/assets/images/logo.png"
            alt="MDC NORTH ROBOTICS"
          />
        </h1>
        <nav id="nav">
          <ul>
            <li>
              <a href="https://www.google.com" className="button robot">
                <i className="icon solid fa-bars position-static"></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
