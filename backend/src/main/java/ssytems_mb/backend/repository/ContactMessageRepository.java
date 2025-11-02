package ssytems_mb.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ssytems_mb.backend.entity.ContactMessage;

public interface ContactMessageRepository extends JpaRepository<ContactMessage,Long> {
}
