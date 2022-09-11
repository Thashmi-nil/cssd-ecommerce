package com.cssd.cssdecommerceapp.services;

import com.cssd.cssdecommerceapp.repository.PaymentDao.PaymentJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {
    @Autowired
    PaymentJdbcRepository paymentJdbcRepository;
    public String makePayment(long cartId, Integer amount, long customerId) {
//        ToDO : First need to add orders after that pay
        paymentJdbcRepository.addToOrderList(cartId,customerId,amount);
        paymentJdbcRepository.removeFromCart(cartId);
        String success= paymentJdbcRepository.makePayment(cartId,amount);
        return "success";
    }

    public Integer getAmount(long cartId) {
        return  paymentJdbcRepository.getAmount(cartId);
    }
}
