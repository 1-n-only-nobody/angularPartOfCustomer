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

import com.example.demo.entity.Driver;
import com.example.demo.services.DriverService;

/**
 * @author manan
 *
 */
@RestController
@CrossOrigin(origins = "*")
public class DriverController {

	private DriverService service;
	

	/**
	 * @param service the service to set
	 */
	@Autowired
	public void setService(DriverService service) {
		this.service = service;
	}

	@GetMapping(path = "/api/v1/drivers")
	public List<Driver> findAll() {
		return this.service.findAll();
	}
	
	@PostMapping(path = "api/v1/drivers")
	@ResponseStatus(code = HttpStatus.CREATED)
	public Driver add(@RequestBody Driver entity) {
		
		return this.service.add(entity);
	}
	
	@PutMapping(path = "api/v1/drivers")
	@ResponseStatus(code = HttpStatus.ACCEPTED)
	public Driver update(@RequestBody Driver entity) {
		
		return this.service.update(entity);
	}
	
	@DeleteMapping(path = "api/v1/drivers/{driverId}")
	public Driver delete(@PathVariable("driverId") int key) {
		
		return this.service.delete(this.service.findById(key));
		
	}
	
	@GetMapping(path = "api/v1/drivers/{driverId}")
	public Driver findById(@PathVariable("driverId") int key) {
		
		return this.service.findById(key);
	}
}
