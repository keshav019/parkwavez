package com.example.parkingproviderservice.service.impl;

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
	public void authTopicPost(String message) throws JsonMappingException, JsonProcessingException {
		ProviderDetails providerDetails = objectMapper.readValue(message, ProviderDetails.class);
		if(providerDetails.getRole().toString()=="PROVIDER") {
			providerRepository.save(providerDetails);
		}
	}

	@Override
	@KafkaListener(topics = "user-update-topic", groupId = "14")
	public void authTopicUpdate(String message) throws JsonMappingException, JsonProcessingException {
		ProviderDetails providerDetails = objectMapper.readValue(message, ProviderDetails.class);
		if(providerDetails.getRole().toString()=="PROVIDER") {
			providerRepository.deleteById(providerDetails.getUserId());
		}
	}

	@Override
	@KafkaListener(topics = "user-delete-topic", groupId = "14")
	public void authTopicDelete(String message) throws JsonMappingException, JsonProcessingException {
		ProviderDetails providerDetails = objectMapper.readValue(message, ProviderDetails.class);
		if(providerDetails.getRole().toString()=="PROVIDER") {
			providerRepository.save(providerDetails);
		}
	}
}
