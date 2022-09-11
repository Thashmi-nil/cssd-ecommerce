package com.cssd.cssdecommerceapp.controllers;

import com.cssd.cssdecommerceapp.dto.CartDetails;
import com.cssd.cssdecommerceapp.entities.Item;
import com.cssd.cssdecommerceapp.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {
    @Autowired
    CartService cartService;

    @GetMapping("/getCart/{id}")
    public List<CartDetails> getCart(@PathVariable long id){
        return cartService.getCart(id);
    }

    @PostMapping("/addCart/{itemId}/{customerId}")
    public long addItem(@PathVariable long itemId,@PathVariable long customerId){
        System.out.println(itemId+" "+customerId);
        return cartService.addCart(itemId,customerId);
    }

    @DeleteMapping("/deleteCart/{itemId}/{customerId}")
    public long deleteItem(@PathVariable long itemId,@PathVariable long customerId){
        return cartService.deleteCart(itemId,customerId);
    }

}
