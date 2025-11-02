package ssytems_mb.backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TeamMemberResponseDTO {

    private Long id;
    private String fullName;
    private String position;
    private String imageUrl;
    private String facebookUrl;
    private String instagramUrl;
    private String linkedinUrl;
}
