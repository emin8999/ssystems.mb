package ssytems_mb.backend.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ssytems_mb.backend.dto.request.ContactRequestDto;
import ssytems_mb.backend.dto.response.ApiResponseDto;
import ssytems_mb.backend.dto.response.ContactResponseDto;
import ssytems_mb.backend.service.ContactService;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
@Slf4j
public class ContactController {

    private final ContactService contactService;

    @PostMapping
    public ResponseEntity<ApiResponseDto> submitContact(
            @Valid @RequestBody ContactRequestDto request) {

        log.info("POST /api/contact - Mesaj: {}", request.getEmail());

        try {
            ContactResponseDto response = contactService.submitMessage(request);
            return ResponseEntity.ok(
                    new ApiResponseDto(
                            true,
                            "Mesajınız uğurla göndərildi! Tezliklə əlaqə saxlayacağıq.",
                            response
                    )
            );
        } catch (Exception e) {
            log.error("Contact xətası: ", e);
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponseDto(
                            false,
                            "Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.",
                            null
                    ));
        }
    }
}
