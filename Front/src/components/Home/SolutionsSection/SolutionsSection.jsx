import SolutionCard from "./SolutionCard";
import './SolutionsSection.css';

const SolutionsSection = () => {
  return (
    <section className="solutions-section">
      <div className="solutions-header">
        <h1 className="solutions-header-title">
          Extensive Repair Solutions
        </h1>

        <p className="solutions-header-description">
          From routine maintenance to emergency repairs,
          our licensed plumbers are equipped to handle any
          job with efficiency and precision
        </p>
      </div>

      <div className="solutions-content">
        <div className="solutions-row">
          <SolutionCard
            iconSrc='../icons/solution-icon1.png'
            title='Sewer Line Inspection and Repair'
            description="Our sewer line inspection and repair
                        service utilize state-of-the-art camera
                        inspection technology to identify issues
                        within your sewer line quickly. Whether
                        it's tree root intrusion, cracks, or
                        blockages."
          />
          <SolutionCard
            iconSrc='../icons/solution-icon2.png'
            title='Water Heater Services'
            description='A malfunctioning water heater can
                        disrupt your daily routine and leave
                        you without hot water when you need it
                        most. Our water heater services encompass
                        installation, repair, and maintenance.'
          />
          <SolutionCard
            iconSrc='../icons/solution-icon3.png'
            title='Precision Welding Services'
            description='Our team provides reliable welding and
                        design services for all types of metal projects
                        — from custom fabrication and repairs to industrial
                        structures and creative designs. We deliver strong,
                        clean, and lasting welds that bring your ideas to
                        life with precision and quality craftsmanship.'
          />
        </div>

        <div className="solutions-row">
          <SolutionCard
            iconSrc='../icons/solution-icon4.png'
            title='Marine Engineering Solutions'
            description='When your vessel needs urgent attention, you need
                        skilled and reliable ship repair experts.Our team
                        provides professional marine repair and maintenance
                        services — from hull and structural welding to engine
                        work and system upgrades. We ensure your ship stays
                        seaworthy, safe, and ready to perform at its best.'
          />
          <SolutionCard
            iconSrc='../icons/solution-icon5.png'
            title='Quality Painting Services'
            description='We offer professional interior and exterior painting
                        services using high-quality materials and precise techniques.
                        Whether it’s a single room or an entire building, we deliver
                        smooth, vibrant, and lasting results that transform your space.'
          />
          <SolutionCard
            iconSrc='../icons/solution-icon1.png'
            title='Sewer Line Inspection and Repair'
            description="Our sewer line inspection and repair service utilize
                        state-of-the-art camera inspection technology to identify issues
                        within your sewer line quickly. Whether it's tree root intrusion,
                        cracks, or blockages."
          />
        </div>
      </div>

      <button className="solutions-btn">Learn More</button>
    </section>
  )
}

export default SolutionsSection;