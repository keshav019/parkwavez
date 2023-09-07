package com.example.paymentservice;

import java.util.Map;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.paymentservice.entities.MyOrder;
import com.example.paymentservice.repo.MyOrderRepository;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
@SpringBootApplication
@RequestMapping("/user")
public class PaymentServiceApplication {
	
	@Autowired
	private MyOrderRepository myOrderRepository;

	public static void main(String[] args) {
		SpringApplication.run(PaymentServiceApplication.class, args);
	}
	
	@PostMapping("/Create_Order")
	@ResponseBody
	public String createOrder(@RequestBody Map<String, Object> data) throws RazorpayException
	{
		int amt = Integer.parseInt(data.get("amount").toString());
				
		var client =new RazorpayClient("rzp_test_aPJeknHS2DZpsD"
,"5kIV4oB4vvGs7D32OmTWC1Ns"
);
		JSONObject orderRequest = new JSONObject();
		orderRequest.put("amount", amt*100); // amount in the smallest currency unit
		orderRequest.put("currency", "INR");
		orderRequest.put("receipt", "order_rcptid_11");

		Order order = client.orders.create(orderRequest);
		System.out.println(order);
		
		MyOrder myOrder = new MyOrder();
		
		return order.toString();
		
	}
	
	

}
