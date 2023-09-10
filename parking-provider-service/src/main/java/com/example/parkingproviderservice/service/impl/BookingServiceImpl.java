package com.example.parkingproviderservice.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;

import com.example.parkingproviderservice.model.Booking;
import com.example.parkingproviderservice.repository.BookingRepository;
import com.example.parkingproviderservice.service.BookingService;

public class BookingServiceImpl implements BookingService {

	@Autowired
	private BookingRepository bookingRepository;

	@Override
	@KafkaListener(topics = "bookingservice/post", groupId = "mygroup")
	public void bookingTopicPost(Booking booking) {
		bookingRepository.save(booking);
	}

	@Override
	@KafkaListener(topics = "booking-service/delete", groupId = "mygroup")
	public void bookingTopicDeletet(Booking booking) {
		bookingRepository.deleteById(booking.getBookingId());
	}

	@Override
	@KafkaListener(topics = "booking-service/update", groupId = "mygroup")
	public void bookingTopicUpdate(Booking booking) {
		bookingRepository.save(booking);
	}
}
