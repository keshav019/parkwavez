package com.example.parkingproviderservice.service;

import com.example.parkingproviderservice.model.Booking;

public interface BookingService {
	public void bookingTopicPost(Booking booking);
	public void bookingTopicDeletet(Booking booking);
	public void bookingTopicUpdate(Booking booking);
}
