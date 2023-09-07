package com.example.parkingproviderservice.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

import com.example.parkingproviderservice.model.ParkingArea;

@Repository
public interface ParkingAreaRepository extends ElasticsearchRepository<ParkingArea,String> {
	Page<ParkingArea> findByProviderId(long providerId, Pageable pageable);
	
}
