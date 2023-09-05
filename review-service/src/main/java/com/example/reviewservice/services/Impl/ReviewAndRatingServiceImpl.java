package com.example.reviewservice.services.Impl;

import com.example.reviewservice.entity.ReviewAndRating;
import com.example.reviewservice.repository.ReviewAndRatingRepository;
import com.example.reviewservice.services.ReviewAndRatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewAndRatingServiceImpl implements ReviewAndRatingService {

    @Autowired
    private ReviewAndRatingRepository reviewAndRatingRepository;

    @Override
    public ReviewAndRating addReviewAndRating(ReviewAndRating reviewAndRating) {
        return reviewAndRatingRepository.save(reviewAndRating);
    }

    @Override
    public List<ReviewAndRating> getReviewAndRatings() {
        return reviewAndRatingRepository.findAll();
    }

    @Override
    public List<ReviewAndRating> getReviewAndRatingByUserId(Long userId) {
        return reviewAndRatingRepository.findByUserId(userId);
    }

    @Override
    public List<ReviewAndRating> getReviewAndRatingByBookingId(Long bookingId) {
        return reviewAndRatingRepository.findByBookingId(bookingId);
    }
}
