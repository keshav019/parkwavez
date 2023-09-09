package com.example.notificationservice.consumer;

import org.apache.logging.log4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import com.example.notificationservice.service.NotificationService;
import com.kafkaProducer.UserDTO;

@Service
public class KafkaMessageListener {

    org.slf4j.Logger log = LoggerFactory.getLogger(KafkaMessageListener.class);
    
    @Autowired
	private NotificationService notificationService;
    
    @KafkaListener(topics = "topicNew6", groupId = "group12")
    public void consume(UserDTO user) {
        log.info("consumer consume {}", user);
        String emailBody = "Dear " + user.getUserName() + " Your Application Created with User Id " + user.getUserId() + " .";
        notificationService.sendEmail(user.getEmail(), "Account Successfully Created", emailBody);
    }
}

