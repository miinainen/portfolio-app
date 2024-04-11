/* PersonalInfo */
import React from 'react';

const PersonalInfo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 img-container">
          <img src="your_photo.jpg" alt="Miina Niemitalo " className="img-fluid" style={{ maxWidth: '70%', height: 'auto' }} />
        </div>
        <div className="col-md-6">
          <h2>Miina Niemitalo</h2>
          <p>Email: miina.niemitalo@student.hamk.fi</p>
          <p>Phone: +358 405 573 604</p>
          <p>Address: Pohjolankatu 21, Tampere, Suomi</p>
          <h3>About me:</h3>
          <p>I am studying Bachelor of Business Information Technology in HAMK. I work as a order coordinator and in my spare time I spend time with my loved ones and go jogging</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;