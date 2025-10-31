import './StepCard.css';

const StepCard = ({ iconSrc, title, description }) => {
  return (
    <div className='step-card'>
      <div className='step-card-header'>
        <div className='step-card-img-container'>
          <img src={iconSrc} alt="icon" />
        </div>
      </div>

      <div className='step-card-content'>
        <p className='step-card-title'>{title}</p>
        <p className='step-card-description'>{description}</p>
      </div>
    </div>
  )
}

export default StepCard;