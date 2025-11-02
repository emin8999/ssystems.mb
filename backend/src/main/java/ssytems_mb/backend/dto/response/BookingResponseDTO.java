package ssytems_mb.backend.dto.response;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ssytems_mb.backend.entity.BookingStatus;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookingResponseDTO {

    private Long id;
    private String fullName;
    private String email;
    private String phone;
    private LocalDate preferredDate;
    private String message;
    private BookingStatus status;
    private String serviceTitle;
}
