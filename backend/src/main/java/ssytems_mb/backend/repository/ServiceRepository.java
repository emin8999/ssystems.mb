package ssytems_mb.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ssytems_mb.backend.entity.Service;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {

}
