package ssytems_mb.backend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import ssytems_mb.backend.dto.request.TestimonialRequestDTO;
import ssytems_mb.backend.dto.response.TestimonialResponseDTO;
import ssytems_mb.backend.entity.Testimonial;
import ssytems_mb.backend.mapper.TestimonialMapper;
import ssytems_mb.backend.repository.TestimonialRepository;

@RequiredArgsConstructor
@Service
public class TestimonialService {
    
    private final TestimonialRepository testimonialRepository;
    private final TestimonialMapper testimonialMapper;

    public TestimonialResponseDTO create(TestimonialRequestDTO dto) {
        Testimonial entity = testimonialMapper.toEntity(dto);
        return testimonialMapper.toDTO(testimonialRepository.save(entity));
    }

    public List<TestimonialResponseDTO> getAll() {
        return testimonialRepository.findAll()
                .stream()
                .map(testimonialMapper::toDTO)
                .collect(Collectors.toList());
    }

}
