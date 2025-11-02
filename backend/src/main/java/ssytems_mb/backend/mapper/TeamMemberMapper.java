package ssytems_mb.backend.mapper;

import org.mapstruct.Mapper;

import ssytems_mb.backend.dto.response.TeamMemberResponseDTO;
import ssytems_mb.backend.entity.TeamMember;

@Mapper(componentModel = "spring")
public interface TeamMemberMapper {
    TeamMemberResponseDTO toDTO(TeamMember teamMember);
}
