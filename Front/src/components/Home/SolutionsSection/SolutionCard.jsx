import './SolutionCard.css';

const SolutionCard = ({ iconSrc, title, description }) => {
  return (
    <div className="solution-card">
      <div className="solution-icon-container">
        <img src={iconSrc} alt="card-icon" />
      </div>

      <div className="solution-content">
        <p className="solution-card-title">
          {title}
        </p>

        <p className="solution-card-description">
          {description}
        </p>
      </div>
    </div>
  )
}

export default SolutionCard;