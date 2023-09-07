package com.example.parkingspacebooking.Repository;




import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.parkingspacebooking.Model.Booking;

@Repository
public interface BookingRepository  extends MongoRepository<Booking, String>{

List<Booking> findByUserId(String UserId);
boolean existsBySpotId(long spotId);

	

}
