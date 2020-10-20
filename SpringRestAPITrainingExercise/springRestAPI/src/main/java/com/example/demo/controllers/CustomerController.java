/**
 * 
 */
package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Customer;
import com.example.demo.services.CustomerService;

/**
 * @author manan
 *
 */
@RestController
@CrossOrigin(origins = "*")
public class CustomerController {

	@Autowired
	private CustomerService service; 
	
	@GetMapping(path = "/api/v1/customers")
	public List<Customer> findAll() {
		return this.service.findAll();
	}
	
	@PostMapping(path = "api/v1/customers")
	@ResponseStatus(code = HttpStatus.CREATED)
	public Customer add(@RequestBody Customer entity) {
		
		return this.service.add(entity);
	}
	
	@PutMapping(path = "api/v1/customers")
	@ResponseStatus(code = HttpStatus.ACCEPTED)
	public Customer update(@RequestBody Customer entity) {
		
		return this.service.add(entity);
	}
	
	@DeleteMapping(path = "api/v1/customers/{customerId}")
	public void delete(@PathVariable("customerId") int key) {
		
		this.service.delete(this.service.findById(key));
		
	}
	
	@GetMapping(path = "api/v1/customers/{customerId}")
	public Customer findById(@PathVariable("customerId") int key) {
		
		return this.service.findById(key);
	}
}
