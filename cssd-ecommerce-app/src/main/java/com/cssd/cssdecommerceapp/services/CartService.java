package com.cssd.cssdecommerceapp.services;

import com.cssd.cssdecommerceapp.dto.CartDetails;
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

    public long addCart(long item, long customerId) {
        System.out.println("item->"+item);
        long existsInCart = cartJdbcRepository.checkExists(customerId);
        if(existsInCart!=0){
            System.out.println("existsInCart->"+existsInCart);

            long existsInCartItem = cartJdbcRepository.checkExistsInCartItem(existsInCart,item);
            if(existsInCartItem!=0){
                System.out.println("existsInCartItem->"+existsInCartItem);
                return cartJdbcRepository.increaseCartItemCount(item,existsInCart);
            }else{
//              ToDo : if not exists existsInCartItem should return 0!
                return cartJdbcRepository.addCartItem(item,existsInCart);
            }
        }else{
//            ToDo : if not exists existsInCart should return 0!
            return cartJdbcRepository.addCart(item,customerId);
        }

    }

    public long deleteCart(long itemId, long customerId) {
        System.out.println("itemId->"+itemId);
        long existsInCart = cartJdbcRepository.checkExists(customerId);
            System.out.println("existsInCart->"+existsInCart);
            return cartJdbcRepository.decreaseCartItemCount(itemId,existsInCart);

    }
}
