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
    public ResponseEntity<List<ReviewAndRating>> getReviewAndRatingsByUserId(@PathVariable String userId){
        return ResponseEntity.ok(reviewAndRatingService.getReviewAndRatingByUserId(userId));
    }


    //get all by bookingId
    @GetMapping("/bookings/{bookingId}")
    public ResponseEntity<List<ReviewAndRating>> getReviewAndRatingsByBookingId( @PathVariable String bookingId){
        return ResponseEntity.ok(reviewAndRatingService.getReviewAndRatingByBookingId(bookingId));
    }


    //get all by providerId
    @GetMapping("/providers/{providerId}")
    public ResponseEntity<List<ReviewAndRating>> getReviewAndRatingsByProviderId( @PathVariable String providerId){
        return ResponseEntity.ok(reviewAndRatingService.getReviewAndRatingByProviderId(providerId));
    }


    //delete review and rating by userId
    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<?> deleteReviewsByUserId(@PathVariable String userId) {
        try {
            // Call the service method to delete reviews and ratings by user ID
            Long l = reviewAndRatingService.deleteByUserId(userId);
            if(l==0L){return new ResponseEntity<>("UserId "+userId+" Does not exist",HttpStatus.NOT_FOUND);}
            else{
                return new ResponseEntity<>("Review and ratings deleted successfully of userId: "+userId, HttpStatus.OK);
            }
        } catch (Exception e) {
            // Handle exceptions or errors, and return an appropriate response
            return new ResponseEntity<>("An error occurred: " + e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

}
