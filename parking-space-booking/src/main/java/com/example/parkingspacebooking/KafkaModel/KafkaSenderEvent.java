package com.example.parkingspacebooking.KafkaModel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class KafkaSenderEvent {

	private String message;
	private String status;
	private KafkaSender KafkaSender;
}
