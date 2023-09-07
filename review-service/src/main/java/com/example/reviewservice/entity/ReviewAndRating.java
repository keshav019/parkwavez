package com.example.reviewservice.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.*;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Document("review")
public class ReviewAndRating{
    @Id
    private String reviewId;
    private String bookingId;
    private String providerId;
    private String userId;
    private int rating;
    private String reviewDesc;
    private Date reviewDateAndTime;


}
