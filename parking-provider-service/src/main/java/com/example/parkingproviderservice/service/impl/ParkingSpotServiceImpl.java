package com.example.parkingproviderservice.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.parkingproviderservice.exception.ResourceNotFoundException;
import com.example.parkingproviderservice.model.ParkingSpot;
import com.example.parkingproviderservice.model.SpotType;
import com.example.parkingproviderservice.repository.ParkingAreaRepository;
import com.example.parkingproviderservice.repository.ParkingSpotRepository;
import com.example.parkingproviderservice.service.ParkingSpotService;

@Service
public class ParkingSpotServiceImpl implements ParkingSpotService {

	@Autowired
	private ParkingSpotRepository parkingSpotRepository;
	@Autowired
	private ParkingAreaRepository parkingAreaRepository;

	@Override
	public ParkingSpot addParkingSpot(String areaId, ParkingSpot parkingSpot) throws ResourceNotFoundException {
		boolean isExist = parkingAreaRepository.existsById(areaId);
		if (!isExist) {
			throw new ResourceNotFoundException("Parking area not present with : " + areaId);
		}
		parkingSpot.setParkingAreaId(areaId);
		return parkingSpotRepository.save(parkingSpot);
	}

	@Override
	public List<ParkingSpot> getParkingSpotByParkingArea(String areaId) throws ResourceNotFoundException {
		return parkingSpotRepository.findByParkingAreaId(areaId);
	}

	@Override
	public ParkingSpot getParkingSpotById(String spotId) throws ResourceNotFoundException {
		return parkingSpotRepository.findById(spotId)
				.orElseThrow(() -> new ResourceNotFoundException("Parking spot not present with id : " + spotId));
	}

	@Override
	public ParkingSpot getParkingSpotByNumber(String areaId, int spotNumber) throws ResourceNotFoundException {
		return parkingSpotRepository.findByParkingAreaIdAndParkingSpotNumber(areaId, spotNumber).orElseThrow(
				() -> new ResourceNotFoundException("Parking spot not present with spotNumber : " + spotNumber));
	}

	@Override
	public List<ParkingSpot> getParkingSpotBySpotType(String areaId, SpotType spotType)
			throws ResourceNotFoundException {
		return parkingSpotRepository.findByParkingAreaIdAndSpotType(areaId, spotType);
	}

	@Override
	public ParkingSpot updateParkingSpot(ParkingSpot parkingSpot) throws ResourceNotFoundException {
		boolean isexist = parkingSpotRepository.existsById(parkingSpot.getParkingSpotId());
		if (!isexist) {
			throw new ResourceNotFoundException("ParkingArea not found with Id : " + parkingSpot.getParkingAreaId());
		}
		return parkingSpotRepository.save(parkingSpot);
	}

	@Override
	public void delteParkingSpot(String spotId) throws ResourceNotFoundException {
		boolean isexist = parkingSpotRepository.existsById(spotId);
		if (!isexist) {
			throw new ResourceNotFoundException("ParkingArea not found with Id : " + spotId);
		}
		parkingSpotRepository.deleteById(spotId);

	}

}
