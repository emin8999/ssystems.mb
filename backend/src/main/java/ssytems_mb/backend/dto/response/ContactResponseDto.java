package ssytems_mb.backend.dto.response;

import lombok.*;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class ContactResponseDto {

    private Long id;
    private String name;
    private String email;
    private String phone;
    private String message;
    private LocalDateTime createdAt;

}
