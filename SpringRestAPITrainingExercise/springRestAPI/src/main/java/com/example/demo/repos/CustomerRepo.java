/**
 * 
 */
package com.example.demo.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Customer;

/**
 * @author manan
 *
 */
public interface CustomerRepo extends JpaRepository<Customer, Integer> {

}
