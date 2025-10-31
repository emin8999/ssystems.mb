import './TeamCard.css';

const TeamCard = ({ imgSrc, name, job }) => {
  return (
    <div className='team-card'>
      <div className='team-img-container'>
        <img src={imgSrc} alt="team-image" />
      </div>

      <div className='team-card-info'>
        <p className='team-name'>{name}</p>
        <p className='team-job'>{job}</p>
      </div>
    </div>
  )
}

export default TeamCard;