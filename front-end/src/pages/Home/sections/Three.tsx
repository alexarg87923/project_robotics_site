import React from 'react';

const Three: React.FC = () => {
  return (
    <section id="three" className="spotlight style3 left">
      <span className="image fit main bottom">
        <img src="images/pic04.jpg" alt="" />
      </span>
      <div className="content">
        <header>
          <h2>Interdum felis blandit praesent sed augue</h2>
          <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
        </header>
        <p>
          Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus tortor enim
          mi mi nisi praesent adipiscing. Integer mi sed nascetur cep aliquet
          augue varius tempus lobortis porttitor lorem et accumsan consequat
          adipiscing lorem.
        </p>
        <ul className="actions">
          <li>
            <a href="https://www.google.com" className="button">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Three;
