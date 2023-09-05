package com.example.custombotservice.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class OpenAIConfig {
	
	@Bean
	public RestTemplate template() {
		return new RestTemplate();
	}
}
