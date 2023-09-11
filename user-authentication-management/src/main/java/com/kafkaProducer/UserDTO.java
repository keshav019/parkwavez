package com.kafkaProducer;
import java.time.LocalDateTime;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)

public class UserDTO {

	private String userId;
	private long spotId;
	 private Date Booking_date;
	 private LocalDateTime Check_In;
	 private LocalDateTime Check_Out;
	 private String status;
	 private String emailId;
	 
	 
	@Override
	public String toString() {
		return "UserDTO [userId=" + userId + ", spotId=" + spotId + ", Booking_date=" + Booking_date + ", Check_In="
				+ Check_In + ", Check_Out=" + Check_Out + ", status=" + status + ", emailId=" + emailId
				+ ", getUserId()=" + getUserId() + ", getSpotId()=" + getSpotId() + ", getBooking_date()="
				+ getBooking_date() + ", getCheck_In()=" + getCheck_In() + ", getCheck_Out()=" + getCheck_Out()
				+ ", getStatus()=" + getStatus() + ", getEmailId()=" + getEmailId() + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public long getSpotId() {
		return spotId;
	}
	public void setSpotId(long spotId) {
		this.spotId = spotId;
	}
	public Date getBooking_date() {
		return Booking_date;
	}
	public void setBooking_date(Date booking_date) {
		Booking_date = booking_date;
	}
	public LocalDateTime getCheck_In() {
		return Check_In;
	}
	public void setCheck_In(LocalDateTime check_In) {
		Check_In = check_In;
	}
	public LocalDateTime getCheck_Out() {
		return Check_Out;
	}
	public void setCheck_Out(LocalDateTime check_Out) {
		Check_Out = check_Out;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
    
}