package com.example.parkingspacebooking.Service;

import java.util.List;

import com.example.parkingspacebooking.Model.Booking;


public interface BookingService {
	
	Booking addBooking(Booking booking);
	Booking updateBooking(Booking booking);
	
	  String  cancleBooking(String BookingId);
	  
	  
	  Booking getBookingById(String BookingId);
	  List<Booking> getBookingByUserId(String UserId);

	    List<Booking> getAllBooking();
	    boolean isSpotAlreadyBooked(long spotId);

}
