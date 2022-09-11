package com.cssd.cssdecommerceapp.controllers;

import com.cssd.cssdecommerceapp.services.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class PaymentController {
    @Autowired
    PaymentService paymentService;
    @PostMapping("/makePayment/{cartId}/{amount}/{customerId}")
    public String makePayment(@PathVariable long cartId,@PathVariable Integer amount,@PathVariable long customerId){
        return paymentService.makePayment(cartId,amount,customerId);
    }

    @GetMapping("/getAmount/{cartId}")
    public Integer getAmount(@PathVariable long cartId){
        return paymentService.getAmount(cartId);
    }
}
