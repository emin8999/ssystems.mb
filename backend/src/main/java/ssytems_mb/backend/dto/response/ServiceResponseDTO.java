package ssytems_mb.backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ssytems_mb.backend.entity.ServiceCategory;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ServiceResponseDTO {

    private Long id;
    private String title;
    private String description;
    private String imageUrl;
    private ServiceCategory category;
}
