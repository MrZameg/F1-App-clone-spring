package com.clone_App_F1.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/drivers")
public class DriverController {

    @GetMapping
    public ResponseEntity<String> getAllDrivers() {
        return ResponseEntity.ok("F1 Pilots List");
    }
}