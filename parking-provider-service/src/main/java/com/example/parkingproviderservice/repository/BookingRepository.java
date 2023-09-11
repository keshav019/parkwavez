package com.example.parkingproviderservice.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.elasticsearch.annotations.Query;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

import com.example.parkingproviderservice.model.Booking;

public interface BookingRepository extends ElasticsearchRepository<Booking, String> {
	List<Booking> findBySpotIdAndCheckInDateTimeBetweenOrCheckOutDateTimeBetween(String spotId,
			LocalDateTime startTimeRange, LocalDateTime endTimeRange, LocalDateTime startTimeRange2,
			LocalDateTime endTimeRange2);
	
//    @Query("{\"bool\": {\"must\": [{\"term\": {\"spotId\": \"?0\"}}, " +
//            "{\"bool\": {\"should\": [" +
//            "{\"range\": {\"checkInDateTime\": {\"gte\": \"?1\", \"lte\": \"?2\"}}}, " +
//            "{\"range\": {\"checkOutDateTime\": {\"gte\": \"?1\", \"lte\": \"?2\"}}}, " +
//            "{\"range\": {\"checkInDateTime\": {\"gt\": \"?1\", \"lt\": \"?1\"}}}" +
//            "]}}]}}")
//     List<Booking> findBookingsBySpotIdAndDateTimeRanges(
//             String spotId,
//             LocalDateTime startTimeRange,
//             LocalDateTime endTimeRange
//     );
}
