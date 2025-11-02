package ssytems_mb.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ssytems_mb.backend.entity.Testimonial;
@Repository
public interface TestimonialRepository extends JpaRepository<Testimonial, Long>{

}
