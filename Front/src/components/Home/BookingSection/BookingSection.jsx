import './BookingSection.css';

const BookingSection = () => {
  return (
    <section className="booking-section">
      <div className="booking-img-container">
        <img src="../sections/booking-img.jpg" alt="booking-image" />
      </div>

      <div className="booking-content">
        <div className="booking-header">
          <h1 className="booking-header-title">Ready to Experience Quality Services</h1>

          <p className="booking-header-description">
            Take the first step towards resolving your issues
            by contacting us today. Our team of skilled
            professionals is ready to assist you with all your
            repeairing needs.
          </p>
        </div>

        <div className="booking-buttons-container">
          <button className="booking-btn booking-btn1">
            Contact Us
          </button>
          
          <button className="booking-btn booking-btn2">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default BookingSection;