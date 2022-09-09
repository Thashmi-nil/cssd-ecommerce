package com.cssd.cssdecommerceapp.controllers;

import com.cssd.cssdecommerceapp.dto.Password;
import com.cssd.cssdecommerceapp.dto.Profile;
import com.cssd.cssdecommerceapp.entities.UserAccount;
import com.cssd.cssdecommerceapp.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {

    @Autowired
    ItemService itemService;
    @GetMapping("/test")
    public String test(){
        return "Hello!";
    }
//    @GetMapping("/getItems")
//    public List<Item> getAllUsers(){
//        return itemService.getItems();
//    }
//
//    @PostMapping("/addItem")
//    public long addItem(Item item){
//        return itemService.addItem(item);
//    }
//
//    @PutMapping("/updateItem")
//    public long changePassword(@RequestBody Item item){
//        return itemService.editItem(item);
//    }
//
//    @DeleteMapping("/deleteItem/{id}")
//    public long deleteItem(@PathVariable long id){
//        return itemService.deleteItem(id);
//    }
}
