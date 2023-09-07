package com.example.parkingspacebooking.Service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.parkingspacebooking.Exception.SpotAlreadyBookedException;
import com.example.parkingspacebooking.Model.Booking;
import com.example.parkingspacebooking.Repository.BookingRepository;



@Service
public class BookingServiceImpl implements BookingService {
	
	@Autowired
    private BookingRepository repository;

	@Override
	public Booking addBooking(Booking booking) {
		// TODO Auto-generated method stub
		
        if (isSpotAlreadyBooked(booking.getSpotId())) {
            throw new SpotAlreadyBookedException("This spot is already booked.");
        }

		
		 booking.setBookingId(UUID.randomUUID().toString().split("-")[0]);
	        return repository.save(booking);
		
	}
	
	
	
    public boolean isSpotAlreadyBooked(long spotId) {
        // Check if a booking with the same spotId exists
        return repository.existsBySpotId(spotId);
    }


	@Override
	public Booking updateBooking(Booking booking) {
		// TODO Auto-generated method stub
		Booking exitingBooking = repository.findById(booking.getBookingId()).get();
        exitingBooking.setUserId(booking.getUserId());
        exitingBooking.setSpotId(booking.getSpotId());
        exitingBooking.setBooking_date(booking.getBooking_date());
        exitingBooking.setCheck_In(booking.getCheck_In());
        exitingBooking.setCheck_Out(booking.getCheck_Out());
        exitingBooking.setStatus(booking.getStatus());
    
        return repository.save(exitingBooking);
	
	}

	

	@Override
	public List<Booking> getAllBooking() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}



	@Override
	public Booking getBookingById(String BookingId) {
		// TODO Auto-generated method stub
		return repository.findById(BookingId).get();
	}

	@Override
	public String cancleBooking(String BookingId) {
		// TODO Auto-generated method stub
		
		repository.deleteById(BookingId);
        return BookingId+" Booking has been canceled ";
	}

	@Override
	public List<Booking> getBookingByUserId(String UserId) {
		// TODO Auto-generated method stub
		return repository.findByUserId(UserId);
		//return null;
	}

	

	//@Override
	//public Booking getBookingByUserId(String UserId) {
		// TODO Auto-generated method stub
	//	return repository.findById(UserId).get();
	//}

	

}
