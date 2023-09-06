package com.example.userauthenticationmanagement.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/provider")
@CrossOrigin("*")
public class ProviderController {
    
	
	
    @GetMapping("/")
    public String helloAdmineController(){
        return "Provider level access";
    }
    

}