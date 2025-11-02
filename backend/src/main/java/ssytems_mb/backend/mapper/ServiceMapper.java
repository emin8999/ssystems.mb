package ssytems_mb.backend.mapper;

import org.mapstruct.Mapper;

import ssytems_mb.backend.dto.request.ServiceRequestDTO;
import ssytems_mb.backend.dto.response.ServiceResponseDTO;
import ssytems_mb.backend.entity.Service;

@Mapper(componentModel = "spring")
public interface ServiceMapper {
    Service toEntity(ServiceRequestDTO serviceRequestDTO);
    ServiceResponseDTO toDTO(Service service);
}