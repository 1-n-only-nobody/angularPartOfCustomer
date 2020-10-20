/**
 * 
 */
package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Customer;
import com.example.demo.repos.CustomerRepo;

/**
 * @author manan
 *
 */
@Service
public class CustomerService {

	@Autowired
	private CustomerRepo repo;
	
	
	public List<Customer> findAll() {
		
		return repo.findAll();
	}
	
	public Customer add(Customer entity) {
		
		return repo.save(entity);
	}
	
	public void delete(Customer entity) {
		repo.delete(entity);
	}
	
	public Customer findById(int key) {
		
		Optional<Customer> resp = repo.findById(key);
		Customer obj = null;
		
		if (resp.isPresent()) {
			obj = resp.get();
		} else {
			throw new RuntimeException("Element Not Found.");
		}
		
		return obj;
	}
}