package com.example.parkingproviderservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;


@SpringBootApplication
@EnableWebMvc
@EnableDiscoveryClient
public class ParkingProviderServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ParkingProviderServiceApplication.class, args);
	}

}
