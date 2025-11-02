package ssytems_mb.backend.dto.request;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
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
public class TestimonialRequestDTO {

    @NotBlank
    private String clientName;

    @NotBlank
    private String feedback;

    @Min(1)
    @Max(5)
    private int rating;

    private String clientImageUrl;
}
