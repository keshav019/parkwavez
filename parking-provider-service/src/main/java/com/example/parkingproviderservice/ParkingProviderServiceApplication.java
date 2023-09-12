package com.example.parkingproviderservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;


@SpringBootApplication
@EnableWebMvc
public class ParkingProviderServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ParkingProviderServiceApplication.class, args);
	}

}
