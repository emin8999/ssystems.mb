package ssytems_mb.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ssytems_mb.backend.entity.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

}
