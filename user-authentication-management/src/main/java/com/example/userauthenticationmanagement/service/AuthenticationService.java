package com.example.userauthenticationmanagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.userauthenticationmanagement.models.ApplicationUser;
import com.example.userauthenticationmanagement.models.LoginResponseDTO;
import com.example.userauthenticationmanagement.models.Role;
import com.example.userauthenticationmanagement.repository.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
@Transactional
public class AuthenticationService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private ObjectMapper objectMapper;

    public ApplicationUser registerUser(String username, String password, String firstName, String lastName, String emailId, Role role) {
        String encodedPassword = passwordEncoder.encode(password);
        ApplicationUser user = new ApplicationUser();
        user.setUsername(username);
        user.setPassword(encodedPassword);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setEmailId(emailId);
        user.setRole(role);

        ApplicationUser savedUser = userRepository.save(user);

        try {
            String userJson = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(savedUser);
            System.out.println(userJson);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return savedUser;
    }

    public LoginResponseDTO loginUser(String username, String password) {
        try {
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password)
            );

            String token = tokenService.generateJwt(auth);

            return new LoginResponseDTO(userRepository.findByUsername(username).orElse(null), token);

        } catch (AuthenticationException e) {
            return new LoginResponseDTO(null, "");
        }
    }
}
