package com.cssd.cssdecommerceapp.services;

import com.cssd.cssdecommerceapp.dto.SellerItem;
import com.cssd.cssdecommerceapp.entities.Item;
import com.cssd.cssdecommerceapp.repository.itemDao.ItemJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {
    @Autowired
    ItemJdbcRepository itemJdbcRepository;
    public List<SellerItem> getItems() {
        return itemJdbcRepository.getItems();
    }

    public long addItem(Item item, long sellerId) {
        return itemJdbcRepository.addItem(item,sellerId);
    }

    public long updateItem(Item item){
        return itemJdbcRepository.updateItem(item);
    }

    public long deleteItem(long id){
        return itemJdbcRepository.deleteItem(id);
    }
}
