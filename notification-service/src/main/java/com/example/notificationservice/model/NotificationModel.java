package com.example.notificationservice.model;

import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class NotificationModel {
	
	@Id
	long userID;
	String userName;
	String email;
	String sub;
	String notificationMsg;
	
}
