package com.cssd.cssdecommerceapp.repository.cartDao;

import com.cssd.cssdecommerceapp.dto.CartDetails;
import com.cssd.cssdecommerceapp.entities.Item;
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

    public long addCart(Item item) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String query = "INSERT INTO cart " +
                "(item_description, item_name,item_type,price,delete) " +
                "values (:item_description, :item_name, :item_type, :price, 0 )";

        namedParameters.addValue("item_description", item.getItemDescription());
        namedParameters.addValue("item_name", item.getItemName());
        namedParameters.addValue("item_type", item.getItemType());
        namedParameters.addValue("price", item.getPrice());


        int rowsAffected = jdbc.update(query , namedParameters);
        return rowsAffected;
    }

    public long deleteCart(long id) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id", id);

        String query = "Update items set deleted=1 where itemid = :id;";

        return jdbc.update(query, namedParameters);
    }
}


