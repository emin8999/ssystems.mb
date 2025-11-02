package ssytems_mb.backend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import ssytems_mb.backend.dto.response.TeamMemberResponseDTO;
import ssytems_mb.backend.mapper.TeamMemberMapper;
import ssytems_mb.backend.repository.TeamMemberRepository;

@RequiredArgsConstructor
@Service
public class TeamService {
     private final TeamMemberRepository teamRepository;
    private final TeamMemberMapper teamMapper;

    public List<TeamMemberResponseDTO> getAll() {
        return teamRepository.findAll()
                .stream()
                .map(teamMapper::toDTO)
                .collect(Collectors.toList());
    }

}
