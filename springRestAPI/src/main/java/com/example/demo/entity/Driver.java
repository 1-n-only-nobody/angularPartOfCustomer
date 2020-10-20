/**
 * 
 */
package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

/**
 * @author manan
 *
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "driver")
public class Driver {

	@Id
	int driverId;
	String firstName;
	String lastName;
	int rating;
	String driverEmail;
	long driverPhoneNumber;
	String location;
	
}
