package com.cssd.cssdecommerceapp.services;

import com.cssd.cssdecommerceapp.entities.Payment;
import com.cssd.cssdecommerceapp.repository.PaymentDao.PaymentJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {
    @Autowired
    PaymentJdbcRepository paymentJdbcRepository;
    public String makePayment(Payment payment,long orderId) {
//        ToDO : First need to add orders after that pay
        return paymentJdbcRepository.makePayment(payment,orderId);
    }
}
