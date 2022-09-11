package com.cssd.cssdecommerceapp.repository.PaymentDao;

import com.cssd.cssdecommerceapp.dto.CartDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PaymentJdbcRepository {
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;
    public String makePayment(long orderId, Integer amount) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String query = "INSERT INTO payment " +
                "(amount, type,order_id) " +
                "values (:amount, :type, :order_id)";

        namedParameters.addValue("amount", amount);
        namedParameters.addValue("type", "credit card");
        namedParameters.addValue("order_id", orderId);


        int rowsAffected = jdbc.update(query , namedParameters);

        return " Succesfully paid! to " + orderId;
    }

    public Integer getAmount(long cartId) {
        String sql = "SELECT sum(quantity*items.price) as total " +
                "FROM `cart_items` " +
                "inner join items on items.item_id=cart_items.item_id " +
                "WHERE cart_id=?";
       Integer total= jdbcTemplate.queryForObject(sql, new Object[] { cartId}, Integer.class);
       System.out.println("total->"+total);
       return total;

    }

    public void addToOrderList(long cartId, long customerId, Integer amount) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();

        namedParameters.addValue("id", customerId);

        String query1 = "INSERT INTO orders " +
                "(status, customer_id,location,total_price) " +
                "values (0, :customerId, :location,:amount)";

        namedParameters.addValue("amount", amount);
        namedParameters.addValue("customerId", customerId);
        namedParameters.addValue("location", "Kurunegala");


        int rowsAffected = jdbc.update(query1 , namedParameters);

//        get newly added order id
        System.out.println("customerId->"+customerId);
        String sql = "SELECT orderId from orders where customer_id = ?";
        long oId=jdbcTemplate.queryForObject(sql, new Object[] { customerId }, Integer.class);


        String query2 ="SELECT * FROM cart_items " +
                "Inner join cart on cart.cart_id=cart_items.cart_id " +
                "INNER JOIN items on items.item_id=cart_items.item_id " +
                "WHERE cart.customer_id=:id";
        List<CartDetails> cartDetails = jdbc.query(query2,namedParameters, new BeanPropertyRowMapper<CartDetails>(CartDetails.class));



for(int i=0;i<cartDetails.size();i++){
    System.out.println(cartDetails.get(i).getItemId()+" "+cartDetails.get(i).getQuantity()+" "+oId);
    String query3 = "INSERT INTO order_items " +
            "(itemId,orderId, quantity) " +
            "values (:itemId,:orderId, :quantity)";

    namedParameters.addValue("itemId", cartDetails.get(i).getItemId());
    namedParameters.addValue("orderId", oId);
    namedParameters.addValue("quantity", cartDetails.get(i).getQuantity());

    jdbc.update(query3 , namedParameters);

}


    }

    public void removeFromCart(long cartId) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id", cartId);

        String query = "Delete from cart where cart_id = :id;";
        jdbc.update(query, namedParameters);

    }
}
