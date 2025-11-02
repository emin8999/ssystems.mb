package ssytems_mb.backend.dto.response;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ApiResponseDto {
    private boolean success;
    private String message;
    private Object data;
}
