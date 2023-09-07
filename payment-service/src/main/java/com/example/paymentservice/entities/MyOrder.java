package com.example.paymentservice.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="orders")
public class MyOrder {

	@Id
	@GeneratedValue(strategy =GenerationType.AUTO)
	private Long myOrderId;
	
	private String orderId;
	
	private String amount;
	
	private String receipt;
	
	private String created_at;
	
	private String status;
	
	private String paymentId;

}
