package com.example.parkingproviderservice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(indexName = "parking_spot")
public class ParkingSpot {
    @Id
    private Long parkingSpotId;
    @Field(type = FieldType.Keyword)
    private int parkingSpotNumber;
    private boolean isOccupied;
    @Field(type = FieldType.Keyword)
    private float price;
    @Field(type = FieldType.Keyword)
    private SpotType spotType;
    private String parkingAreaId; // Refrence to parkingArea
}

