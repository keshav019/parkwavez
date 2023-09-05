package com.example.parkingproviderservice.model;

import org.elasticsearch.geometry.Point;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Address {
    private String street;
    private String city;
    private int zip;
    private String state;
    private Point coordinates;
}
