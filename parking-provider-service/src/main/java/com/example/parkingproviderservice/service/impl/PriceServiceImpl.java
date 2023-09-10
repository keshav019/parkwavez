package com.example.parkingproviderservice.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.parkingproviderservice.exception.ResourceAlreadyExistException;
import com.example.parkingproviderservice.exception.ResourceNotFoundException;
import com.example.parkingproviderservice.model.ChargeType;
import com.example.parkingproviderservice.model.Price;
import com.example.parkingproviderservice.model.SpotType;
import com.example.parkingproviderservice.repository.ParkingAreaRepository;
import com.example.parkingproviderservice.repository.PriceRepository;
import com.example.parkingproviderservice.service.PriceService;

@Service
public class PriceServiceImpl implements PriceService {

	@Autowired
	private PriceRepository priceRepository;
	@Autowired
	private ParkingAreaRepository parkingAreaRepository;

	@Override
	public Price addPrice(Price price) throws Exception {
		boolean isValidArea = parkingAreaRepository.existsById(price.getAreaId());
		if (!isValidArea) {
			throw new ResourceNotFoundException("Invalid Parking Area Id : " + price.getAreaId());
		}
		List<Price> existPrice = priceRepository.findByAreaIdAndSpotTypeAndChargeType(price.getAreaId(),
				price.getSpotType(), price.getChargeType());
		if (!existPrice.isEmpty()) {
			throw new ResourceAlreadyExistException("Price entry already exist !");
		}
		return priceRepository.save(price);
	}

	@Override
	public List<Price> getPrice(String areaId, SpotType spotType, ChargeType chargeType)
			throws ResourceNotFoundException {
		if (chargeType == null && spotType==null) {
			return priceRepository.findByAreaId(areaId);
		}else if(chargeType == null) {
			return priceRepository.findByAreaIdAndSpotType(areaId, spotType);
		}
		else if(spotType==null) {
			return priceRepository.findByAreaIdAndChargeType(areaId, chargeType);
		}else {
			return priceRepository.findByAreaIdAndSpotTypeAndChargeType(areaId, spotType, chargeType);
		}
	}

	@Override
	public Price getPriceById(String priceId) throws ResourceNotFoundException {
		return priceRepository.findById(priceId).orElse(null);
	}

	@Override
	public Price updatePrice(Price price) throws ResourceNotFoundException {
		boolean isExist = priceRepository.existsById(price.getPriceId());
		if (!isExist) {
			throw new ResourceNotFoundException("Invalid Id : " + price.getPriceId());
		}
		boolean isValidArea = parkingAreaRepository.existsById(price.getAreaId());
		if (!isValidArea) {
			throw new ResourceNotFoundException("Invalid Parking Area Id : " + price.getAreaId());
		}
		System.out.println(price);
		return priceRepository.save(price);
	}

	@Override
	public double calculateAmount(String areaId, SpotType spotype, ChargeType chargeType, int count)
			throws ResourceNotFoundException {
		boolean isValidArea = parkingAreaRepository.existsById(areaId);
		if (!isValidArea) {
			throw new ResourceNotFoundException("Invalid Parking Area Id : " + areaId);
		}
		List<Price> price = priceRepository.findByAreaIdAndSpotTypeAndChargeType(areaId, spotype, chargeType);
		if (price.isEmpty() || price.size()>1) {
			throw new ResourceNotFoundException("Some error Occured!");
		}
		return price.get(0).getPrice()*(1-price.get(0).getPrice()/100) * count;
	}

}
