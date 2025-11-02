package ssytems_mb.backend.dto.request;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ContactRequestDto {

    @NotBlank(message = "Ad boş ola bilməz")
    private String name;

    @NotBlank(message = "Email boş ola bilməz")
    @Email(message = "Düzgün email daxil edin")
    private String email;

    @NotBlank(message = "Telefon boş ola bilməz")
    private String phone;

    @NotBlank(message = "Mesaj boş ola bilməz")
    private String message;
}

