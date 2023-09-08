package com.example.parkingspacebooking.Service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.parkingspacebooking.Exception.BookingNotFoundException;
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
		 Booking savedBooking=repository.save(booking);
	       // return repository.save(booking);
		
	       // kafkaProducerService.sendMessage(savedBooking.getSpotId().toString(), savedBooking.getEmailId());
	     return savedBooking;   
	}
	
	
	
    public boolean isSpotAlreadyBooked(long spotId) {
        // Check if a booking with the same spotId exists
        return repository.existsBySpotId(spotId);
    }


	@Override
	public Booking updateBooking(Booking booking) {
		// TODO Auto-generated method stub
		//Booking existingBooking = repository.findById(booking.getBookingId()).get();
		 Booking existingBooking = repository.findById(booking.getBookingId()).orElse(null);
		if (existingBooking == null) {
            // Handle the case when the booking doesn't exist
            throw new BookingNotFoundException("Booking not found.");
        }
		
        existingBooking.setUserId(booking.getUserId());
        existingBooking.setSpotId(booking.getSpotId());
        existingBooking.setBooking_date(booking.getBooking_date());
        existingBooking.setCheck_In(booking.getCheck_In());
        existingBooking.setCheck_Out(booking.getCheck_Out());
        existingBooking.setStatus(booking.getStatus());
    
        
        Booking updatedBooking = repository.save(existingBooking);

        
        return repository.save(existingBooking);
	
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



	@Override
	public List<Booking> getBookingByStatus(String Status) {
		// TODO Auto-generated method stub
		return repository.findByStatus(Status);
	}

	


	

}
