package com.example.reviewservice.controllers;

import com.example.reviewservice.entity.ReviewAndRating;
import com.example.reviewservice.services.ReviewAndRatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reviewAndRating")
public class ReviewAndRatingController {

    @Autowired
    private ReviewAndRatingService reviewAndRatingService;


    //create rating
    @PostMapping
    public ResponseEntity<ReviewAndRating> create(@RequestBody ReviewAndRating reviewAndRating){
        return ResponseEntity.status(HttpStatus.CREATED).body(reviewAndRatingService.addReviewAndRating(reviewAndRating));
    }


    //get all
    @GetMapping
    public ResponseEntity<List<ReviewAndRating>> getReviewAndRatings(){
        return ResponseEntity.ok(reviewAndRatingService.getReviewAndRatings());
    }


    //get all by userId
    @GetMapping("/users/{userId}")
    public ResponseEntity<List<ReviewAndRating>> getReviewAndRatingsByUserId(@PathVariable Long userId){
        return ResponseEntity.ok(reviewAndRatingService.getReviewAndRatingByUserId(userId));
    }


    //get all by bookingId
    @GetMapping("/bookings/{bookingId}")
    public ResponseEntity<List<ReviewAndRating>> getReviewAndRatingsByBookingId( @PathVariable Long bookingId){
        return ResponseEntity.ok(reviewAndRatingService.getReviewAndRatingByBookingId(bookingId));
    }

}
