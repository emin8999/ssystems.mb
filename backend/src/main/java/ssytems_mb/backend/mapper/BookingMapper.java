package ssytems_mb.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import ssytems_mb.backend.dto.request.BookingRequestDTO;
import ssytems_mb.backend.dto.response.BookingResponseDTO;
import ssytems_mb.backend.entity.Booking;

@Mapper(componentModel = "spring")
public interface BookingMapper {

    // @Mapping(source = "service.id", target = "service.id")
    // Booking toEntity(BookingRequestDTO bookingRequestDTO);

    // @Mapping(source = "service.id", target = "service.id")
    // BookingResponseDTO toDTO(Booking booking);
}
