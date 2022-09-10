package com.cssd.cssdecommerceapp.repository.itemDao;

import com.cssd.cssdecommerceapp.dto.SellerItem;
import com.cssd.cssdecommerceapp.entities.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ItemJdbcRepository {
    @Autowired
    protected NamedParameterJdbcTemplate jdbc;

    @Autowired
    JdbcTemplate jdbcTemplate;
    public List<SellerItem> getItems() {
        String query ="SELECT * from items " +
                "INNER JOIN seller ON items.seller_id=seller.seller_id " +
                "where deleted=0";

        List<SellerItem> items = jdbc.query(query, new BeanPropertyRowMapper<SellerItem>(SellerItem.class));
        return items;
    }

    public long addItem(Item item, long sellerId) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String query = "INSERT INTO items " +
                "(item_description, item_name,item_type,price,deleted,seller_id) " +
                "values (:item_description, :item_name, :item_type, :price, 0,:sellerId )";
        System.out.println(item.getItemDescription());
        namedParameters.addValue("item_description", item.getItemDescription());
        namedParameters.addValue("item_name", item.getItemName());
        namedParameters.addValue("item_type", item.getItemType());
        namedParameters.addValue("price", item.getPrice());
        namedParameters.addValue("sellerId", sellerId);


        int rowsAffected =jdbc.update(query , namedParameters);
        return rowsAffected;
    }


    public long deleteItem(Long id) {
        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
        namedParameters.addValue("id", id);

        String query = "Update items set deleted=1 where item_id = :id;";

        return jdbc.update(query, namedParameters);

    }

    public long updateItem(Item item) {
        MapSqlParameterSource namedParameters =
                new MapSqlParameterSource();
        String update = "UPDATE items " +
                "SET item_description = :item_description, item_name = :item_name, item_type= :item_type, price= :price " +
                "WHERE item_id = :id;";

        namedParameters.addValue("item_description", item.getItemDescription());
        namedParameters.addValue("item_name", item.getItemName());
        namedParameters.addValue("item_type", item.getItemType());
        namedParameters.addValue("price", item.getPrice());
        namedParameters.addValue("id", item.getItemId());

        int rowsAffected = jdbc.update(update, namedParameters);
        return rowsAffected;

    }

}