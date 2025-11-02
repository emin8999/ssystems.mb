package ssytems_mb.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ssytems_mb.backend.entity.TeamMember;
@Repository
public interface TeamMemberRepository extends JpaRepository<TeamMember, Long>{

}
