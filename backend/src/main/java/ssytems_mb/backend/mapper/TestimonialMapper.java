package ssytems_mb.backend.mapper;

import org.mapstruct.Mapper;

import ssytems_mb.backend.dto.request.TestimonialRequestDTO;
import ssytems_mb.backend.dto.response.TestimonialResponseDTO;
import ssytems_mb.backend.entity.Testimonial;

@Mapper(componentModel = "spring")
public interface TestimonialMapper {
    Testimonial toEntity(TestimonialRequestDTO testimonialRequestDTO);

    TestimonialResponseDTO toDTO(Testimonial testimonial);
}
