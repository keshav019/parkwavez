package com.example.parkingspacebooking.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.parkingspacebooking.Model.Booking;


public interface BookingRepository  extends MongoRepository<Booking, String>{

}
