package com.example.parkingproviderservice.service;

import java.util.List;

import com.example.parkingproviderservice.exception.ResourceNotFoundException;
import com.example.parkingproviderservice.model.ParkingSpot;
import com.example.parkingproviderservice.model.SpotType;

public interface ParkingSpotService {
	public ParkingSpot addParkingSpot(String areaId, ParkingSpot parkingSpot) throws ResourceNotFoundException;

	public List<ParkingSpot> getParkingSpotByParkingArea(String areaId) throws ResourceNotFoundException;

	public ParkingSpot getParkingSpotById(String spotId) throws ResourceNotFoundException;

	public ParkingSpot getParkingSpotByNumber(String areaId, int spotNumber) throws ResourceNotFoundException;

	public List<ParkingSpot> getParkingSpotBySpotType(String parkingAreaId, SpotType spotType)
			throws ResourceNotFoundException;

	public ParkingSpot updateParkingSpot(ParkingSpot parkingSpot) throws ResourceNotFoundException;

	public void delteParkingSpot(String spotId) throws ResourceNotFoundException;

	public List<ParkingSpot> getVaccantSpot(String areaId, String checkInTime, String checkOutTime)
			throws Exception;
}
