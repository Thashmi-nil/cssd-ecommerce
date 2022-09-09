package com.cssd.cssdecommerceapp.controllers;

import com.cssd.cssdecommerceapp.entities.Item;
import com.cssd.cssdecommerceapp.entities.Payment;
import com.cssd.cssdecommerceapp.services.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class PaymentController {
    @Autowired
    PaymentService paymentService;
    @PostMapping("/makePayment/{orderId}")
    public String makePayment(@RequestBody Payment payment,@PathVariable long orderId){
        return paymentService.makePayment(payment,orderId);
    }
}
