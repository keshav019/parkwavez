package com.example.parkingproviderservice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(indexName = "provider_details")
public class ProviderDetails {
	@Id
	private String userId;
	private String userName;
	private String email;
	private Role role;
}
