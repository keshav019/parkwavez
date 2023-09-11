package com.example.parkingproviderservice.dto;

import java.time.LocalDateTime;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookingTimeRangeDto {
	private String areaId;
	@DateTimeFormat
	private LocalDateTime checkInDateTime;
	@DateTimeFormat
	private LocalDateTime checkOutDateTime;
}
