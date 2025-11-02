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
public class TestimonialResponseDTO {

    private Long id;
    private String clientName;
    private String feedback;
    private int rating;
    private String clientImageUrl;

}
