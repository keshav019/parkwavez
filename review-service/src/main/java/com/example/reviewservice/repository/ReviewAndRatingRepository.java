package com.example.reviewservice.repository;

import com.example.reviewservice.entity.ReviewAndRating;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewAndRatingRepository extends JpaRepository<ReviewAndRating, Long> {
    //custom finder methods
    List<ReviewAndRating> findByUserId(Long userId);
    List<ReviewAndRating> findByBookingId(Long bookingId);
}
