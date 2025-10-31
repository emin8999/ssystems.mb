import './feedbackCard.css';

const FeedbackCard = ({ imgSrc, name, job, description}) => {
  return (
    <div className='feedback-card'>
      <div className='feedback-profile'>
        <img
          src={imgSrc}
          alt="profile-picture"
          className='feedback-profile-picture'
          />

        <div className='feedback-profile-info'>
          <p className='feedback-profile-name'>{name}</p>
          <p className='feedback-profile-job'>{job}</p>
        </div>
      </div>

      <div className='feedback-review-container'>
        <div>
          <img src="../icons/star.png" alt="star-icon" />
        </div>

        <div>
          <img src="../icons/star.png" alt="star-icon" />
        </div>

        <div>
          <img src="../icons/star.png" alt="star-icon" />
        </div>

        <div>
          <img src="../icons/star.png" alt="star-icon" />
        </div>

        <div>
          <img src="../icons/star.png" alt="star-icon" />
        </div>
      </div>

      <p className='feedback-description'>{description}</p>
    </div>
  )
}

export default FeedbackCard;