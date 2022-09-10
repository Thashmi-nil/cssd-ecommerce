package com.cssd.cssdecommerceapp.controllers;

import com.cssd.cssdecommerceapp.dto.SellerItem;
import com.cssd.cssdecommerceapp.entities.Order;
import com.cssd.cssdecommerceapp.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    @Autowired
    OrderService orderService;
    @GetMapping("/getOrders")
    public List<Order> getNewOrders(){
        return orderService.getNewOrders();
    }

    @GetMapping("/getMyOrders/{customerId}")
    public List<Order> getMyOrders(@PathVariable long customerId){
        return orderService.getMyOrders(customerId);
    }

    @GetMapping("/getPreviousOrders")
    public List<Order> getPreviousOrders(){
        return orderService.getPreviousOrders();
    }

    @PutMapping("/setAsDelivered/{orderId}")
    public long setAsDelivered(@PathVariable long orderId){
        System.out.println(orderId);
        return orderService.setAsDelivered(orderId);
    }
    @PutMapping("/setAsTake/{orderId}")
    public long setAsTake(@PathVariable long orderId){
        System.out.println(orderId);
        return orderService.setAsTake(orderId);
    }
}
