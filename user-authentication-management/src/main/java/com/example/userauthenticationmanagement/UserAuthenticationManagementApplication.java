package com.example.userauthenticationmanagement;

import java.util.HashSet;
import java.util.Set;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.example.userauthenticationmanagement.models.ApplicationUser;
import com.example.userauthenticationmanagement.models.Role;
import com.example.userauthenticationmanagement.repository.RoleRepository;
import com.example.userauthenticationmanagement.repository.UserRepository;

@SpringBootApplication
public class UserAuthenticationManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserAuthenticationManagementApplication.class, args);
	}
	
	@Bean
	CommandLineRunner run(RoleRepository roleRepository, UserRepository userRepository, PasswordEncoder passwordEncode){
		return args ->{
			if(roleRepository.findByAuthority("ADMIN").isPresent()) return;
			Role adminRole = roleRepository.save(new Role("ADMIN"));
			roleRepository.save(new Role("USER"));

			Set<Role> roles = new HashSet<>();
			roles.add(adminRole);

			ApplicationUser admin = new ApplicationUser(1, "admin", passwordEncode.encode("password"), roles);

			userRepository.save(admin);
		};
	}
}