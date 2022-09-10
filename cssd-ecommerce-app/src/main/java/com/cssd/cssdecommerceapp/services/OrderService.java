package com.cssd.cssdecommerceapp.services;

import com.cssd.cssdecommerceapp.entities.Order;
import com.cssd.cssdecommerceapp.repository.orderDao.OrderJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    OrderJdbcRepository orderJdbcRepository;
    public List<Order> getNewOrders() {
        return orderJdbcRepository.getNewOrders();
    }

    public List<Order> getPreviousOrders() {
        return orderJdbcRepository.getPreviousOrders();
    }

    public long setAsDelivered(long orderId) {
        return orderJdbcRepository.setAsDelivered(orderId);
    }

    public long setAsTake(long orderId) {
        return orderJdbcRepository.setAsTake(orderId);
    }

    public List<Order> getMyOrders(long customerId) {
        return orderJdbcRepository.getMyOrders(customerId);
    }
}
