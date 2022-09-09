package com.cssd.cssdecommerceapp.repository.PaymentDao;

import com.cssd.cssdecommerceapp.entities.Payment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class PaymentJdbcRepository {
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;
    public String makePayment(Payment payment,long orderId) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String query = "INSERT INTO payment " +
                "(amount, date,type,order_id) " +
                "values (:amount, :date, :type, :order_id)";

        namedParameters.addValue("amount", payment.getAmount());
        namedParameters.addValue("date", payment.getDate());
        namedParameters.addValue("type", payment.getType());
        namedParameters.addValue("order_id", orderId);


//        int rowsAffected = jdbc.update(query , namedParameters);

        return payment.getAmount().toString() + " Succesfully paid! to " + orderId;
    }
}
