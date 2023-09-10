package com.example.parkingproviderservice.model;

import java.time.LocalDateTime;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(indexName = "booking")
public class Booking {
	@Id
	private String bookingId;
	private String userId;
	private long spotId;
	private Date Booking_date;
	private LocalDateTime checkInDateTime;
	private LocalDateTime checkOutDateTime;
	private String Status;

}
