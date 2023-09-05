import React from 'react';

const Banner: React.FC = () => {
  return (
    <section id="banner">
      <div className="content">
        <header>
          <h2>The future has landed</h2>
          <p>
            And there are no hoverboards or flying cars.
            <br />
            Just apps. Lots of mother flipping apps.
          </p>
        </header>
        <span className="image">
          <img src="/assets/images/pic01.png" alt="robot" />
        </span>
      </div>
    </section>
  );
};

export default Banner;
