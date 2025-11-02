package ssytems_mb.backend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import ssytems_mb.backend.dto.response.ServiceResponseDTO;
import ssytems_mb.backend.exception.ResourceNotFoundException;
import ssytems_mb.backend.mapper.ServiceMapper;
import ssytems_mb.backend.repository.ServiceRepository;

@Service
@RequiredArgsConstructor
public class ServiceService {

     private final ServiceRepository serviceRepository;
    private final ServiceMapper serviceMapper;

    public List<ServiceResponseDTO> getAllServices() {
        return serviceRepository.findAll()
                .stream()
                .map(serviceMapper::toDTO)
                .collect(Collectors.toList());
    }

    public void deleteServiceById(Long id) {
        if (!serviceRepository.existsById(id)) {
            throw new ResourceNotFoundException("Service not found with id: " + id);
        }
        serviceRepository.deleteById(id);
    }
}
