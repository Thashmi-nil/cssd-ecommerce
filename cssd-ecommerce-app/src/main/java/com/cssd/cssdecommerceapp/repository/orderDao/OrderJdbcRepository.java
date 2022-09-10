package com.cssd.cssdecommerceapp.repository.orderDao;

import com.cssd.cssdecommerceapp.entities.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class OrderJdbcRepository {
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;
    public List<Order> getNewOrders() {
        String query ="SELECT * FROM orders WHERE status=0";

        List<Order> orders = jdbc.query(query, new BeanPropertyRowMapper<Order>(Order.class));
        return orders;
    }

    public List<Order> getPreviousOrders() {
        String query ="SELECT * FROM orders WHERE status=1";

        List<Order> orders = jdbc.query(query, new BeanPropertyRowMapper<Order>(Order.class));
        return orders;
    }

    public long setAsDelivered(long orderId) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE orders set status=1 where orderId=:orderId";

        namedParameters.addValue("orderId", orderId);

        int rowsAffected = jdbc.update(update, namedParameters);
        return rowsAffected;
    }

    public long setAsTake(long orderId) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE orders set status=2 where orderId=:orderId";

        namedParameters.addValue("orderId", orderId);

        int rowsAffected = jdbc.update(update, namedParameters);
        return rowsAffected;
    }

    public List<Order> getMyOrders(long customerId) {
        String query ="SELECT * FROM orders WHERE status=1";

        List<Order> orders = jdbc.query(query, new BeanPropertyRowMapper<Order>(Order.class));
        return orders;

    }
}
