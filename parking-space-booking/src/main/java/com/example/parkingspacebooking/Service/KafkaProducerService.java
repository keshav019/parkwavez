package com.example.parkingspacebooking.Service;

/*
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaProducerService {

	 private static final String TOPIC_NAME ="Booking-topic";

	    @Autowired
	    private KafkaTemplate<String, Object> kafkaTemplate;

	   // public void sendMessageToTopic(String spotId, String emailId) {
	    public void sendMessageToTopic(String spotId, String emailId) {
	        // Create a message with spotId and emailId
	       String message = "SpotId: " + spotId + ", EmailId: " + emailId;

	        // Send the message to the Kafka topic
	       kafkaTemplate.send(TOPIC_NAME, message);
	    }
}
*/