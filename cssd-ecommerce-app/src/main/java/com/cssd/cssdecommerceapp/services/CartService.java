package com.cssd.cssdecommerceapp.services;

import com.cssd.cssdecommerceapp.dto.CartDetails;
import com.cssd.cssdecommerceapp.entities.Item;
import com.cssd.cssdecommerceapp.repository.cartDao.CartJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired
    CartJdbcRepository cartJdbcRepository;
    public List<CartDetails> getCart(long id) {
        return cartJdbcRepository.getCart(id);
    }

    public long addCart(Item item) {
//        ToDo : if item already in the cart with particular customer then increment quantity

//        ToDo : else add new to cart table and add cart items
        return cartJdbcRepository.addCart(item);
    }

    public long deleteCart(long id) {
//        ToDo : remove from cart item or decrease quantity count
        return cartJdbcRepository.deleteCart(id);
    }
}
