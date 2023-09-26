package com.example.apigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableDiscoveryClient
public class ApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiGatewayApplication.class, args);
	}
@Bean
	public RouteLocator gatewayRouteLocater(RouteLocatorBuilder builder) {
		return builder.routes()
				.route(r->r.path("/bot/**")
						.uri("lb://custom-bot-service"))
				.route(r->r.path("/notifications/**")
						.uri("lb://notification-service"))
				.route(r->r.path("/parking-area/**")
						.uri("lb://parking-provider-service"))
				.route(r->r.path("/parking-spot/**")
						.uri("lb://parking-provider-service"))
				.route(r->r.path("/price-service/**")
						.uri("lb://parking-provider-service"))
				.route(r->r.path("/provider-details/**")
						.uri("lb://parking-provider-service"))
				.route(r->r.path("/producer-app/**")
						.uri("lb://parking-space-booking"))
				.route(r->r.path("/Booking/**")
						.uri("lb://parking-space-booking"))
				.route(r->r.path("/user/**")
						.uri("lb://payment-service"))
				.route(r->r.path("/reviewAndRating/**")
						.uri("lb://review-service"))
				.route(r->r.path("/auth/**")
						.uri("lb://user-authentication-management"))
				.route(r->r.path("/customer/**")
						.uri("lb://user-authentication-management"))
				.route(r->r.path("/provider/**")
						.uri("lb://user-authentication-management"))
				.route(r->r.path("/**")
						.uri("lb://product-webapp"))



				.build();
	}
}
