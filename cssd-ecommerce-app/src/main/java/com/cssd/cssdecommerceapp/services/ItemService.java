package com.cssd.cssdecommerceapp.services;

import com.cssd.cssdecommerceapp.entities.Item;
import com.cssd.cssdecommerceapp.repository.itemDao.ItemJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {
    @Autowired
    ItemJdbcRepository itemJdbcRepository;
    public List<Item> getItems() {
        return itemJdbcRepository.getItems();
    }

    public long addItem(Item item) {
        return itemJdbcRepository.editItem(item);
    }

    public long editItem(Item item){
        return itemJdbcRepository.editItem(item);
    }

    public long deleteItem(long id){
        return itemJdbcRepository.deleteItem(id);
    }
}
