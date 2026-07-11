package com.cognizant.spring_learn.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @RequestMapping("/hello")
    public String sayHello() {
        System.out.println("Starting sayHello() method...");
        String message = "Hello World!!";
        System.out.println("Ending sayHello() method...");
        return message;
    }
}