package ssytems_mb.backend.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import ssytems_mb.backend.dto.request.ContactRequestDto;
import ssytems_mb.backend.dto.response.ContactResponseDto;
import ssytems_mb.backend.entity.ContactMessage;
import ssytems_mb.backend.repository.ContactMessageRepository;

@Service
@RequiredArgsConstructor
@Slf4j
public class ContactService {

    private final ContactMessageRepository contactRepository;
    private final EmailService emailService;

    @Transactional
    public ContactResponseDto submitMessage(ContactRequestDto request) {
        log.info("Yeni mesaj alındı: {}", request.getEmail());

        ContactMessage message = new ContactMessage();
        message.setName(request.getName());
        message.setEmail(request.getEmail());
        message.setPhone(request.getPhone());
        message.setMessage(request.getMessage());

        ContactMessage saved = contactRepository.save(message);

        emailService.sendContactEmailToCompany(
                request.getName(),
                request.getEmail(),
                request.getPhone(),
                request.getMessage()
        );

        ContactResponseDto dto = new ContactResponseDto();
        dto.setId(saved.getId());
        dto.setName(saved.getName());
        dto.setEmail(saved.getEmail());
        dto.setPhone(saved.getPhone());
        dto.setMessage(saved.getMessage());
        dto.setCreatedAt(saved.getCreatedAt());

        return dto;
    }
}
