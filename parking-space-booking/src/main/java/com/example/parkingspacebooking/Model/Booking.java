package com.example.parkingspacebooking.Model;

import java.time.LocalDateTime;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Document(collection = "Booking")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Booking {
	
	@Id
	private String bookingId;
	
	private String userId;
	private long spotId;
	 private Date Booking_date;
	 private LocalDateTime Check_In;
	 private LocalDateTime Check_Out;
	 private String status;
	 private String emailId;

}
