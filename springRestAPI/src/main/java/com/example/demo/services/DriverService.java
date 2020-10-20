/**
 * 
 */
package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Driver;
import com.example.demo.repos.DriverRepo;

/**
 * @author manan
 *
 */
@Service
public class DriverService {
	
	private DriverRepo repo;
	
	/**
	 * @param repo the repo to set
	 */
	@Autowired
	public void setRepo(DriverRepo repo) {
		this.repo = repo;
	}

	public List<Driver> findAll() {
		
		return repo.findAll();
	}
	
	public Driver add(Driver entity) {
		
		return repo.save(entity);
	}
	
	public Driver update(Driver entity) {
		
		return this.add(entity);
	}
	
	public Driver delete(Driver entity) {
//		repo.delete(entity);
		Driver deleted = null;
		Optional<Driver> optionalDriver =  repo.findById(entity.getDriverId());
		if(optionalDriver.isPresent()) {
			repo.delete(entity);
			deleted = entity;
		} else {
			System.err.println("Entity Not Present in Database");
		}
		return deleted;
	}
	
	public Driver findById(int key) {
		
		Optional<Driver> resp = repo.findById(key);
		Driver obj = null;
		
		if (resp.isPresent()) {
			obj = resp.get();
		} else {
			throw new RuntimeException("Element Not Found.");
		}
		
		return obj;
	}

}