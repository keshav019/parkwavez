package com.example.parkingspacebooking.Controller;
/*
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.parkingspacebooking.KafkaModel.KafkaSender;
import com.example.parkingspacebooking.Service.KafkaProducerService;

@RestController
@RequestMapping("/producer-app")
public class SpotBookingController {

	 @Autowired
	    private KafkaProducerService publisher;
	
	 @GetMapping("/publish/{message}")
	public ResponseEntity<?>publishMessage(@PathVariable String message){
	 //public ResponseEntity<?>publishMessage(@RequestBody KafkaSender KafkaSender){
	 try {
	// publisher.sendMessageToTopic(message, message);
		 publisher.sendMessageToTopic(message, message);
	 return ResponseEntity.ok("message published Sucessfully");
	 
	 }	 catch(Exception ex) {
		 return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
				 .build();
	 }
		 
	 }
}
*/