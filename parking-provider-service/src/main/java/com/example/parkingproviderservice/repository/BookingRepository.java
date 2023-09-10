package com.example.parkingproviderservice.repository;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

import com.example.parkingproviderservice.model.Booking;

public interface BookingRepository extends ElasticsearchRepository<Booking,String> {

}
