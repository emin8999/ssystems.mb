import FeedbackCard from './FeedbackCard.jsx';
import './FeedbackSection.css';

const FeedbackSection = () => {
  return (
    <section className="feedback-section">
      <div className="feedback-header">
        <h1 className="feedback-header-title">What Our Customers Say</h1>

        <p className="feedback-header-description">
          Don't just take our word for it –
          hear what our satisfied customers
          have to say about their experience
          with PlumbFix.
        </p>
      </div>

      <div className="feedback-content">
        <FeedbackCard
          imgSrc='../icons/feedback-pp.jpg'
          name='Marvin McKinney'
          job='CEO of XXX Company'
          description='I was impressed by the professionalism
                      and efficiency of the SSYSTEMS MB team.
                      They arrived on time, diagnosed the issue
                      quickly, and resolved it with minimal
                      disruption. Highly recommended!'
        />
        <FeedbackCard
          imgSrc='../icons/feedback-pp.jpg'
          name='Marvin McKinney'
          job='CEO of XXX Company'
          description='I was impressed by the professionalism
                      and efficiency of the SSYSTEMS MB team.
                      They arrived on time, diagnosed the issue
                      quickly, and resolved it with minimal
                      disruption. Highly recommended!'
        />
      </div>
    </section>
  )
}

export default FeedbackSection;