package com.example.parkingproviderservice.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.elasticsearch.index.query.QueryBuilders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.elasticsearch.core.ElasticsearchRestTemplate;
import org.springframework.data.elasticsearch.core.SearchHits;
import org.springframework.data.elasticsearch.core.query.NativeSearchQuery;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.stereotype.Service;

import com.example.parkingproviderservice.exception.ResourceNotFoundException;
import com.example.parkingproviderservice.model.Booking;
import com.example.parkingproviderservice.model.ParkingSpot;
import com.example.parkingproviderservice.model.SpotType;
import com.example.parkingproviderservice.repository.BookingRepository;
import com.example.parkingproviderservice.repository.ParkingAreaRepository;
import com.example.parkingproviderservice.repository.ParkingSpotRepository;
import com.example.parkingproviderservice.service.ParkingSpotService;

@Service
public class ParkingSpotServiceImpl implements ParkingSpotService {

	@Autowired
	private ParkingSpotRepository parkingSpotRepository;
	@Autowired
	private ParkingAreaRepository parkingAreaRepository;
	@Autowired
	private ElasticsearchRestTemplate elasticsearchRestTemplate;

	@Override
	public ParkingSpot addParkingSpot(String areaId, ParkingSpot parkingSpot) throws ResourceNotFoundException {
		boolean isExist = parkingAreaRepository.existsById(areaId);
		if (!isExist) {
			throw new ResourceNotFoundException("Parking area not present with : " + areaId);
		}
		List<ParkingSpot> insertedSpots = parkingSpotRepository.findByParkingAreaId(areaId);
		Optional<Integer> maxParkingSpotNumber = insertedSpots.stream().map(ParkingSpot::getParkingSpotNumber)
				.max(Integer::compareTo);
		if (!maxParkingSpotNumber.isEmpty()) {
			parkingSpot.setParkingSpotNumber(maxParkingSpotNumber.get() + 1);
		} else {
			parkingSpot.setParkingSpotNumber(1);
		}
		parkingSpot.setOccupied(false);
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

	public List<ParkingSpot> getVaccantSpot(String areaId, String checkInTime, String checkOutTime) throws Exception {
		boolean isExist = parkingAreaRepository.existsById(areaId);
		if (!isExist) {
			throw new ResourceNotFoundException("Parking area not present with : " + areaId);
		}
		List<ParkingSpot> spots = parkingSpotRepository.findByParkingAreaId(areaId);
		List<ParkingSpot> vaccantSpot = spots.stream().filter(spot -> {
			NativeSearchQuery searchQuery = queryForVaccantSpace(spot.getParkingSpotId(), checkInTime, checkOutTime);
			SearchHits<Booking> bookings = elasticsearchRestTemplate.search(searchQuery, Booking.class);
			return bookings.isEmpty();
		}).collect(Collectors.toList());
		return vaccantSpot;
	}

	public NativeSearchQuery queryForVaccantSpace(String parkingSpotId, String startDate, String endDate) {
		NativeSearchQuery searchQuery = new NativeSearchQueryBuilder()
				.withQuery(QueryBuilders.boolQuery().must(QueryBuilders.termQuery("parkingSpotId", parkingSpotId))
						.should(QueryBuilders.rangeQuery("checkInDateTime").gte(startDate).lte(endDate))
						.should(QueryBuilders.rangeQuery("checkOutDateTime").gte(startDate).lte(endDate))
						.should(QueryBuilders.boolQuery()
								.must(QueryBuilders.rangeQuery("checkInDateTime").lte(startDate))
								.must(QueryBuilders.rangeQuery("checkOutDateTime").gte(endDate))))
				.build();
		return searchQuery;

	}

}
