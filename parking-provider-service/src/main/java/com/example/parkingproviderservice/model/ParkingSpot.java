package com.example.parkingproviderservice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(indexName = "parking_spot")
public class ParkingSpot {
    @Id
    private Long parkingSpotId;
    private int parkingSpotNumber;
    private boolean isOccupied;
    private float price;
    private SpotType spotType;
    private String parkingAreaId; // Refrence to parkingArea
}

