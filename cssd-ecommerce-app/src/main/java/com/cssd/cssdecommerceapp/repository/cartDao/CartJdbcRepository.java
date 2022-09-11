package com.cssd.cssdecommerceapp.repository.cartDao;

import com.cssd.cssdecommerceapp.dto.CartDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CartJdbcRepository {
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;
    public List<CartDetails> getCart(long id) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();

        namedParameters.addValue("id", id);

        String query ="SELECT * FROM cart_items " +
                "Inner join cart on cart.cart_id=cart_items.cart_id " +
                "INNER JOIN items on items.item_id=cart_items.item_id " +
                "WHERE cart.customer_id=:id";
        List<CartDetails> cartDetails = jdbc.query(query,namedParameters, new BeanPropertyRowMapper<CartDetails>(CartDetails.class));
        return cartDetails;


    }

    public long addCart(long item, long customerId) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String query = "INSERT INTO cart " +
                "(customer_id) " +
                "values (:customerId)";

        namedParameters.addValue("cartId", item);
        namedParameters.addValue("customerId", customerId);

        int rowsAffected = jdbc.update(query , namedParameters);
        return rowsAffected;
    }

    public long deleteCart(long id) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id", id);

        String query = "Update items set deleted=1 where itemid = :id;";

        return jdbc.update(query, namedParameters);
    }

    public long checkExists(long customerId) {
        System.out.println("customerId->"+customerId);
        String sql = "SELECT cart_id from cart where customer_id = ?";
        return jdbcTemplate.queryForObject(sql, new Object[] { customerId }, Integer.class);
    }

    public long checkExistsInCartItem(long existsInCart, long item) {
        String sql = "SELECT cart_id from cart_items where cart_id = ? AND item_id = ?";
        return jdbcTemplate.queryForObject(sql, new Object[] { existsInCart,item }, Integer.class);
    }

    public long increaseCartItemCount(long item, long existsInCart) {
//        ToDo : update item count in cart_items
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("item", item);
        namedParameters.addValue("existsInCart", existsInCart);
//        get current count

        String sql = "SELECT quantity from cart_items where cart_id = ? AND item_id = ?";
        long newQuantity=jdbcTemplate.queryForObject(sql, new Object[] { existsInCart,item }, Integer.class)+1;
        namedParameters.addValue("newQuantity", newQuantity);

        String query = "Update cart_items set quantity=:newQuantity where cart_id=:existsInCart AND item_id = :item;";

        return jdbc.update(query, namedParameters);
    }

    public long addCartItem(long item, long existsInCart) {
        return 0;
    }

    public long decreaseCartItemCount(long itemId, long existsInCart) {
        //        ToDo : update item count in cart_items
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("item", itemId);
        namedParameters.addValue("existsInCart", existsInCart);
//        get current count

        String sql = "SELECT quantity from cart_items where cart_id = ? AND item_id = ?";
        long newQuantity=jdbcTemplate.queryForObject(sql, new Object[] { existsInCart,itemId }, Integer.class)-1;
        namedParameters.addValue("newQuantity", newQuantity);

        String query = "Update cart_items set quantity=:newQuantity where cart_id=:existsInCart AND item_id = :item;";

        return jdbc.update(query, namedParameters);
    }
}


