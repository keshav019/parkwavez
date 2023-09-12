package com.example.parkingproviderservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
@EnableDiscoveryClient
public class ParkingProviderServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ParkingProviderServiceApplication.class, args);
	}

}
