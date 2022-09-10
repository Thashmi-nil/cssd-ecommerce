package com.cssd.cssdecommerceapp.entities;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.Set;

@Table(name="items")
@Entity
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_id")
    private long itemId;

    @Column(name="item_name")
    private String itemName;

    @Column(name="item_type")
    private String itemType;

    @Column(name = "item_description")
    private String itemDescription;

    @Column(name = "item_image")
    private String itemImage;

    @Column(name = "deleted")
    private long deleted;

    @Column(name = "price")
    private Double price;



    @OneToMany(mappedBy = "item")
    Set<CartItems> carts;

    @OneToMany(mappedBy = "item")
    Set<OrderItems> orders;

    public long getItemId() {
        return itemId;
    }

    public void setItemId(long itemId) {
        this.itemId = itemId;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getItemType() {
        return itemType;
    }

    public void setItemType(String itemType) {
        this.itemType = itemType;
    }

    public String getItemDescription() {
        return itemDescription;
    }

    public void setItemDescription(String itemDescription) {
        this.itemDescription = itemDescription;
    }

    public String getItemImage() {
        return itemImage;
    }

    public void setItemImage(String itemImage) {
        this.itemImage = itemImage;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Set<CartItems> getCarts() {
        return carts;
    }

    public void setCarts(Set<CartItems> carts) {
        this.carts = carts;
    }

    public Set<OrderItems> getOrders() {
        return orders;
    }

    public void setOrders(Set<OrderItems> orders) {
        this.orders = orders;
    }


}
