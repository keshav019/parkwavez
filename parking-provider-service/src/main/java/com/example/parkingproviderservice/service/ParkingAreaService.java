package com.example.parkingproviderservice.service;



import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


import com.example.parkingproviderservice.exception.ResourceNotFoundException;
import com.example.parkingproviderservice.model.ParkingArea;

public interface ParkingAreaService {
	ParkingArea addParkingArea(long providerId, ParkingArea parkingArea) throws ResourceNotFoundException;
	Page<ParkingArea> getParkingAreaByProviderId(long providerId, Pageable pagable)throws ResourceNotFoundException;
	public ParkingArea getById(long providerId,String areaId)throws ResourceNotFoundException;
	public ParkingArea update(ParkingArea parkingArea) throws ResourceNotFoundException;
	public void delete(long providerId,String areaId)throws ResourceNotFoundException;
	public Page<ParkingArea> getAll(Pageable pagable);
}
