import './Hero.css';

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className='hero-left'>
        <div className='hero-left-content'>
          <h1 className='hero-left-title'>
            Your Trusted Repairing Solution
          </h1>

          <p className='hero-left-description'>
            Welcome to SSYSTEMS MB, your go-to destination
            for all your repairing needs. From quick touch-ups
            to complete rebuilds, our skilled welders ensure
            strength, quality, and perfection in every project.
          </p>
        </div>

        <div className='hero-left-btn-container'>
          <button className='hero-left-btn hero-left-btn1'>Trying Now</button>
          <button className='hero-left-btn hero-left-btn2'>Learn More</button>
        </div>
      </div>

      <div className='hero-right'>
        <div className="rating-card">
          <div className='card-img-container'>
            <img
              src="../profile-pictures/pp1.jpg"
              alt="profile-picture"
            />
            <img
              src="../profile-pictures/pp2.jpg"
              alt="profile-picture"
            />
            <img
              src="../profile-pictures/pp3.jpg"
              alt="profile-picture"
            />
            <img
              src="../profile-pictures/pp4.jpg"
              alt="profile-picture"
            />
            <img
              src="../profile-pictures/pp5.jpg"
              alt="profile-picture"
            />
            <div>+</div>
          </div>

          <p className='rating-card-title'>
            100K+ Happy Customer
          </p>

          <div className='card-ratings-container'>
            <img src="../icons/star.png" alt="star" />
            <p>5.0 (3.1K Reviews)</p>
          </div>
        </div>

        <div className="award-card">
          <div className="icon-container">
            <img src="../icons/cup-icon.png" alt="cup-icon" />
          </div>

          <div className="award-card-content">
            <p className='award-card-title'>1K+ Projects</p>
            <p className='award-card-status'>Has been completed</p>
          </div>
        </div>

        <div className="green-box">
          <img src="../sections/hero-image.png" alt="green-box" />
        </div>
        
        <div className="gray-box"></div>
      </div>
    </div>
  )
}

export default Hero;