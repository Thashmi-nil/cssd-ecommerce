package com.cssd.cssdecommerceapp.controllers;
import com.cssd.cssdecommerceapp.entities.Customer;
import com.cssd.cssdecommerceapp.services.SignUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class SignUpController {

    @Autowired
    SignUpService signUpService;


    @PostMapping("/signUp")
    public String signUp(@RequestBody Customer customer){
        System.out.println("signup");
        return signUpService.signUp(customer);
    }

}
