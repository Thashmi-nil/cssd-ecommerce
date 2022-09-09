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

    @PostMapping("/addCart")
    public long addItem(Item item){
        return cartService.addCart(item);
    }

    @DeleteMapping("/deleteCart/{id}")
    public long deleteItem(@PathVariable long id){
        return cartService.deleteCart(id);
    }

}
