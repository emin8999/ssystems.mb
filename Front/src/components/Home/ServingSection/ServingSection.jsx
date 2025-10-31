import './ServingSection.css';

const ServingSection = () => {
  return (
    <section className="serving-section">
      <div className="serving-img-container">
        <img src="../sections/serving-image.jpg" alt="serving-image" />
      </div>

      <div className="serving-right">
        <div className="serving-content">
          <h1 className="serving-content-title">
            Serving Your Area and Beyond
          </h1>

          <p className="serving-content-description">
            SSYSTEMS MB proudly serves customers in Lithuania
            and its surrounding regions, providing prompt and
            reliable repairing solutions to homes and businesses
            alike. Whether you're located in the heart of the city
            or in the outskirts, we're here to assist you
          </p>

          <div className='serving-content-countries'>
            <div className='serving-countries-row'>
              <div className='serving-countries-item'>
                <img src="../icons/tick-icon.png" alt="tick-icon" />
                <p>Latvia</p>
              </div>

              <div className='serving-countries-item'>
                <img src="../icons/tick-icon.png" alt="tick-icon" />
                <p>Belarus</p>
              </div>
            </div>

            <div className='serving-countries-row'>
              <div className='serving-countries-item'>
                <img src="../icons/tick-icon.png" alt="tick-icon" />
                <p>Poland</p>
              </div>

              <div className='serving-countries-item'>
                <img src="../icons/tick-icon.png" alt="tick-icon" />
                <p>Estonia</p>
              </div>
            </div>
          </div>
        </div>

        <button className='serving-btn'>Learn More</button>
      </div>
    </section>
  )
}

export default ServingSection;