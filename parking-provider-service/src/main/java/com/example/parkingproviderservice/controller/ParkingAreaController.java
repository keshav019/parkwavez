package com.example.parkingproviderservice.controller;


import org.elasticsearch.common.unit.DistanceUnit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.parkingproviderservice.PageableBuilder;
import com.example.parkingproviderservice.exception.ResourceNotFoundException;
import com.example.parkingproviderservice.model.ParkingArea;
import com.example.parkingproviderservice.service.ParkingAreaService;

@RestController
@RequestMapping("/parking-area")
public class ParkingAreaController {
	@Autowired
	private ParkingAreaService parkingAreaService;

	@PostMapping("/{providerId}/add")
	public ResponseEntity<ParkingArea> addParkingArea(@PathVariable long providerId,
			@RequestBody ParkingArea parkingArea) throws ResourceNotFoundException {
		parkingArea = parkingAreaService.addParkingArea(providerId, parkingArea);
		return ResponseEntity.ok(parkingArea);
	}

	@GetMapping("/{providerId}/get")
	public ResponseEntity<Page<ParkingArea>> getParkingArea(@PathVariable long providerId,
			@RequestParam(defaultValue = "0") int pageNo, @RequestParam(defaultValue = "10") int size,
			@RequestParam(defaultValue = "areaId_asc") String sortBy) throws ResourceNotFoundException {
		Pageable pageable = PageableBuilder.build(pageNo, size, sortBy);
		Page<ParkingArea> parkingAreas = parkingAreaService.getParkingAreaByProviderId(providerId, pageable);
		return ResponseEntity.ok(parkingAreas);
	}

	@GetMapping("/{providerId}/get/{areaId}")
	public ResponseEntity<ParkingArea> getById(@PathVariable long providerId, @PathVariable String areaId)
			throws ResourceNotFoundException {
		ParkingArea parkingArea = parkingAreaService.getById(providerId, areaId);
		return ResponseEntity.ok(parkingArea);
	}

	@PutMapping("/{providerId}/update/{areaId}")
	public ResponseEntity<ParkingArea> update(@PathVariable long providerId, @PathVariable String areaId,
			@RequestBody ParkingArea parkingArea) throws ResourceNotFoundException {
		parkingArea.setAreaId(areaId);
		parkingArea.setProviderId(providerId);
		parkingArea = parkingAreaService.update(parkingArea);
		return ResponseEntity.ok(parkingArea);
	}

	@DeleteMapping("/{providerId}/delete/{areaId}")
	public ResponseEntity<String> delete(@PathVariable long providerId, @PathVariable String areaId)
			throws ResourceNotFoundException {
		parkingAreaService.delete(providerId, areaId);
		return ResponseEntity.ok("Deleted");
	}

	@GetMapping("/getall")
	public ResponseEntity<Page<ParkingArea>> getAll(@RequestParam(defaultValue = "0") int pageNo,
			@RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "areaId_asc") String sortBy) {
		Pageable pageable = PageableBuilder.build(pageNo, size, sortBy);
		return ResponseEntity.ok(parkingAreaService.getAll(pageable));
	}

	@GetMapping("/get-by-city")
	public ResponseEntity<Page<ParkingArea>> findByCity(@RequestParam String city,
			@RequestParam(defaultValue = "0") int pageNo, @RequestParam(defaultValue = "10") int size,
			@RequestParam(defaultValue = "areaId_asc") String sortBy) {
		Pageable pageable = PageableBuilder.build(pageNo, size, sortBy);
		Page<ParkingArea> parkingAreas = parkingAreaService.getByCity(city, pageable);
		return ResponseEntity.ok(parkingAreas);
	}

	@GetMapping("/get-near-by")
	public ResponseEntity<Page<ParkingArea>> getNearyBy(@RequestParam double latitude, @RequestParam double longitude,
			@RequestParam(defaultValue = "1") String range,
			@RequestParam(defaultValue = "KILOMETERS") DistanceUnit unit, @RequestParam(defaultValue = "0") int pageNo,
			@RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "areaId_asc") String sortBy) {

		Pageable pageable = PageableBuilder.build(pageNo, size, sortBy);
		range = range + unit.toString();
		Page<ParkingArea> parkingAreas = parkingAreaService.findNearByParkingArea(latitude, longitude, range, pageable);
		return ResponseEntity.ok(parkingAreas);
	}

}
