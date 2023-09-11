package com.example.parkingproviderservice.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

public interface ProviderDetailsService {
	public void authTopicPost(String message) throws JsonMappingException, JsonProcessingException;

	public void authTopicUpdate(String message) throws JsonMappingException, JsonProcessingException;

	public void authTopicDelete(String message) throws JsonMappingException, JsonProcessingException;
}
