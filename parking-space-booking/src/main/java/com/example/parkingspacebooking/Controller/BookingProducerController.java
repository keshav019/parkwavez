package com.example.parkingspacebooking.Controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.parkingspacebooking.KafkaModel.KafkaSender;
import com.example.parkingspacebooking.KafkaModel.KafkaSenderEvent;
import com.example.parkingspacebooking.Service.BookingProducer;

@RestController
@RequestMapping("/api/v1")
public class BookingProducerController {

	
	private BookingProducer bookingProducer;

	public BookingProducerController(BookingProducer bookingProducer) {
		//super();
		this.bookingProducer = bookingProducer;
	}
	
	@PostMapping("/order")
	public String placedOrder(@RequestBody KafkaSender KafkaSender) {
		
		
		
		KafkaSenderEvent kafkaSenderEvent=new KafkaSenderEvent();
	    kafkaSenderEvent.setStatus("Pending");
	    kafkaSenderEvent.setMessage("Message has sent");
	    kafkaSenderEvent.setKafkaSender(KafkaSender);
	    
	    bookingProducer.sendMessage(kafkaSenderEvent);
	    return "Message Published";
	}
	
}
