package com.example.parkingspacebooking.Service;

import org.apache.kafka.clients.admin.NewTopic;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;

import com.example.parkingspacebooking.KafkaModel.KafkaSender;
import com.example.parkingspacebooking.KafkaModel.KafkaSenderEvent;

@Service
public class BookingProducer {
	
	private static final Logger LOGGER =LoggerFactory.getLogger(BookingProducer.class);
	
	private NewTopic topic;
	
	private KafkaTemplate<String,KafkaSenderEvent> kafkaTemplate;

	public BookingProducer(NewTopic topic, KafkaTemplate<String, KafkaSenderEvent> kafkaTemplate) {
		//super();
		this.topic = topic;
		this.kafkaTemplate = kafkaTemplate;
	}

	public void sendMessage(KafkaSenderEvent event) {
	
		LOGGER.info(String.format("KafkaSender event => %s",event.toString()));
		
		//Create the message
		Message<KafkaSenderEvent> message = MessageBuilder.withPayload(event)
				.setHeader(KafkaHeaders.TOPIC, topic.name())
				.build();
		
		kafkaTemplate.send(message);
	}
}
