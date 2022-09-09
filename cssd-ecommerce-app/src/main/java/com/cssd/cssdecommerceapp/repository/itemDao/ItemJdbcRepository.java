package com.cssd.cssdecommerceapp.repository.itemDao;

import org.springframework.beans.factory.annotation.Autowired;
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
//    public List<Item> getItems() {
//        String query ="SELECT a.*,u.first_name,u.last_name,auth.role_code as role " +
//                "FROM announcement as a " +
//                "INNER JOIN user as u ON a.user_id = u.id " +
//                "INNER JOIN user_authority as ua ON u.id = ua.user_id " +
//                "INNER JOIN authority as auth ON auth.id = ua.user_id ORDER BY date DESC";
//
//        List<Item> announcementWithAuthor = jdbc.query(query, new BeanPropertyRowMapper<Item>(Item.class));
//        return announcementWithAuthor;
//    }

//    public long addItem(Item item) {
//        MapSqlParameterSource namedParameters =
//                new MapSqlParameterSource();
//        String query = "INSERT INTO item " +
//                "(category, content,date, title,user_id) " +
//                "values (:category, :content, :date, :title, :user_id )";
//
//        namedParameters.addValue("category", item.getCategory());
//        namedParameters.addValue("content", item.getContent());
//        namedParameters.addValue("date", LocalDateTime.now());
//        namedParameters.addValue("title", item.getTitle());
//        namedParameters.addValue("user_id", item.getUserId());
//
//        int rowsAffected = jdbc.update(query , namedParameters);
//        return rowsAffected;
//    }


//    public long deleteItem(Long id) {
//        MapSqlParameterSource namedParameters = new MapSqlParameterSource();
//        namedParameters.addValue("id", id);
//
//        String query = "Delete FROM item where ann_id = :id;";
//
//        return jdbc.update(query, namedParameters);
//
//    }



//    public long editItem(Item item) {
//        MapSqlParameterSource namedParameters =
//                new MapSqlParameterSource();
//        String update = "UPDATE announcement " +
//                "SET title = :title, content = :content, category= :category, date= :date WHERE ann_id = :id;";
//
//        namedParameters.addValue("title", item.getTitle());
//        namedParameters.addValue("content", item.getContent());
//        namedParameters.addValue("category", item.getCategory());
//        namedParameters.addValue("date", item.getDate());
//        namedParameters.addValue("id", item.getAnnId());
//
//        int rowsAffected = jdbc.update(update, namedParameters);
//        return rowsAffected;
//
//    }

}