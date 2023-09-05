package com.example.parkingproviderservice.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.elasticsearch.annotations.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(indexName = "parking_area")
public class ParkingArea {
    @Id
    private Long areaId;
    private String parkingName;
    private int totalNoSpot;
    private Address address;  
    private Long providerId;  //Refrence to Provider 
    @Transient
    private List<ParkingSpot> spots;
}
