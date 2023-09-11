package com.example.parkingproviderservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class ParkingProviderServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ParkingProviderServiceApplication.class, args);
	}

}
