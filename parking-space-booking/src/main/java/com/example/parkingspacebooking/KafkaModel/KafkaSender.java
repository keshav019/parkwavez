package com.example.parkingspacebooking.KafkaModel;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class KafkaSender {

	private long spotId;
	private String email;
}
