import React from 'react';

const Two: React.FC = () => {
  return (
    <section id="two" className="spotlight style2 right">
      <span className="image fit main">
        <img src="images/pic03.jpg" alt="" />
      </span>
      <div className="content">
        <header>
          <h2>Interdum amet non magna accumsan</h2>
          <p>Nunc commodo accumsan eget id nisi eu col volutpat magna</p>
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

export default Two;
