package ssytems_mb.backend.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
public class ServiceRequestDTO {

    @NotBlank
    private String title;

    @NotBlank
    private String description;

    private String imageUrl;

    @NotNull
    private ServiceCategory category;
}
