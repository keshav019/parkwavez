package com.example.parkingproviderservice.service;

import com.example.parkingproviderservice.exception.ResourceNotFoundException;
import com.example.parkingproviderservice.model.ProviderDetails;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

public interface ProviderDetailsService {
	public void saveProviderDetails(String message) throws JsonMappingException, JsonProcessingException;

	public ProviderDetails getProviderById(String providerId) throws ResourceNotFoundException;
	public ProviderDetails updateProviderDetails(ProviderDetails providerDetails) throws ResourceNotFoundException;

	public void deleteProviderDetails(String providerId) throws ResourceNotFoundException;
}
