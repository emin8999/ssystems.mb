import StepCard from "./StepCard";
import './StepsSection.css';

const StepsSection = () => {
  return (
    <section className="steps-section">
      <div className="steps-container">
        <div className="steps-header">
          <h1 className="steps-header-title">Book your service in 3 easy steps</h1>

          <p className="steps-header-description">Easy Steps to Get Started section simplifies
            the process of booking and receiving repairing services.
          </p>
        </div>

        <div className="steps-content">
          <StepCard
            iconSrc='../icons/mouse-cursor.png'
            title='Choose Your Repairing Service'
            description='You can browse through our range of
                        repairing services tailored to address
                        various issues in your home or office.'
          />
          <StepCard
            iconSrc='../icons/schedule.png'
            title='Schedule Your Service'
            description='Use our online booking system or call our
                        hotline to schedule a service appointment that
                        fits your schedule.'
          />
          <StepCard
            iconSrc='../icons/media.png'
            title='Job Completion and Satisfaction'
            description='Once the job is completed to your satisfaction,
                        our masters  will clean up the work area and
                        provide '
          />
        </div>
      </div>
    </section>
  )
}

export default StepsSection;