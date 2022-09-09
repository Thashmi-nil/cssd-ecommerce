package com.cssd.cssdecommerceapp.controllers;
import com.cssd.cssdecommerceapp.entities.Item;
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
    
    @GetMapping("/getItems")
    public List<Item> getAllUsers(){
        return itemService.getItems();
    }

    @PostMapping("/addItem")
    public long addItem(@RequestBody Item item){
        return itemService.addItem(item);
    }

    @PutMapping("/updateItem")
    public long updateItem(@RequestBody Item item){
        return itemService.updateItem(item);
    }

    @DeleteMapping("/deleteItem/{id}")
    public long deleteItem(@PathVariable long id){
        return itemService.deleteItem(id);
    }
}
