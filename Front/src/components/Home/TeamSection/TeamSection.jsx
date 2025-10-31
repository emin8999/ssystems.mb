import TeamCard from "./TeamCard";
import './TeamSection.css';

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-header">
        <div className="team-header-title-container">
          <h1 className="team-header-title">
            Expert Masters at Your Service
          </h1>
        </div>

        <div className="team-header-description-container">
          <p className="team-header-description">
            Each member of our team is highly skilled, experienced,
            and trained to handle a wide range of plumbing issues
            efficiently and effectively. Whether it's a simple repair
            or a complex installation, you can trust our team to get
            the job done right the first time.
          </p>
        </div>
      </div>

      <div className="team-content">
        <TeamCard
          imgSrc='../sections/team-img1.jpg'
          name='Zain Vetrovs'
          job='Welding Technician'
        />
        <TeamCard
          imgSrc='../sections/team-img2.jpg'
          name='Zain Vetrovs'
          job='Painting Technician'
        />
        <TeamCard
          imgSrc='../sections/team-img3.jpg'
          name='Zain Vetrovs'
          job='Electrical Technician'
        />
      </div>
    </section>
  )
}

export default TeamSection;