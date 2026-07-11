package com.cognizant.spring_learn.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello World!!"; // public endpoint, no token required
    }

    @GetMapping("/secure-hello")
    public String secureHello() {
        return "Hello, you are authenticated with a valid JWT!";
    }
}