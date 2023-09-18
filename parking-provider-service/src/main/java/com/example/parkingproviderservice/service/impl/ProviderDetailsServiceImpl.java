package com.example.parkingproviderservice.service.impl;

import com.example.parkingproviderservice.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import com.example.parkingproviderservice.model.ProviderDetails;
import com.example.parkingproviderservice.repository.ProviderDetailsRepository;
import com.example.parkingproviderservice.service.ProviderDetailsService;
import com.example.parkingproviderservice.util.JacksonFactory;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class ProviderDetailsServiceImpl implements ProviderDetailsService {
	@Autowired
	private ProviderDetailsRepository providerRepository;
	ObjectMapper objectMapper = JacksonFactory.getObjectMapper();

	@Override
	@KafkaListener(topics = "user-registration-topic", groupId = "14")
	public void saveProviderDetails(String message) throws JsonMappingException, JsonProcessingException {
		ProviderDetails providerDetails = objectMapper.readValue(message, ProviderDetails.class);
		System.out.println(providerDetails.toString());
		if (providerDetails.getRole().toString().equals("PROVIDER")) {
			providerRepository.save(providerDetails);
		}
	}

	@Override
	public ProviderDetails getProviderById(String providerId) throws ResourceNotFoundException {
		return providerRepository.findById(providerId).orElseThrow(()->new ResourceNotFoundException("Provider Not found with Id : "+providerId));
	}

	@Override
	public ProviderDetails updateProviderDetails(ProviderDetails providerDetails) throws ResourceNotFoundException {

		if(!providerRepository.existsById(providerDetails.getUserId())){
			throw new ResourceNotFoundException("Provider Not found with Id : "+providerDetails.getUserId());
		}
		providerRepository.save(providerDetails);
		return providerDetails;
	}

	@Override
	public void deleteProviderDetails(String providerId) throws ResourceNotFoundException{
		if(!providerRepository.existsById(providerId)){
			throw new ResourceNotFoundException("Provider Not found with Id : "+providerId);
		}
		providerRepository.deleteById(providerId);
	}
}
