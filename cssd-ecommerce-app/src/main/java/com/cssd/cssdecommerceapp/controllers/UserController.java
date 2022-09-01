package com.cssd.cssdecommerceapp.controllers;

import com.cssd.cssdecommerceapp.dto.Password;
import com.cssd.cssdecommerceapp.dto.Profile;
import com.cssd.cssdecommerceapp.entities.UserAccount;
import com.cssd.cssdecommerceapp.repository.userDao.UserAccountDetailsRepository;
import com.cssd.cssdecommerceapp.services.CustomUserService;
import com.cssd.cssdecommerceapp.services.PasswordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserAccountDetailsRepository userAccountDetailsRepository;

    @Autowired
    private CustomUserService customUserService;

    @Autowired
    PasswordService passwordService;

    @GetMapping("/test")
    public String test(){
        return "Hello!";
    }

    @GetMapping("/users")
    public List<UserAccount> getAllUsers(){
        return userAccountDetailsRepository.findAll();
    }

    @GetMapping("/users/{userName}")
    public Profile getUserById(@PathVariable String userName){
        return customUserService.getUserByUsername(userName);
    }

    @PutMapping("/changePassword/{userName}")
    public long changePassword(@RequestBody Password password, @PathVariable String userName){
//        System.out.println("pwcontroller");
        System.out.println(password.getNewPassword());
        return passwordService.changePassword(password,userName);
    }

}
