package com.cssd.cssdecommerceapp.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Table(name = "orders")
@Entity
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "orderID")
    private long orderID;

    @ManyToOne
    @JoinColumn(name="customer_id",nullable = false)
    private Customer customer;

    @Column(name = "status")
    private String status;

    @Column(name = "location")
    private String location;

    @Column(name = "total_price")
    private String totalPrice;

    @OneToMany(mappedBy = "orders")
    Set<OrderItems> items;

    public long getOrderID() {
        return orderID;
    }

    public void setOrderID(long orderID) {
        this.orderID = orderID;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(String totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Set<OrderItems> getItems() {
        return items;
    }

    public void setItems(Set<OrderItems> items) {
        this.items = items;
    }
}

@Entity
class OrderItems {
    @EmbeddedId
    OrderItemsKey id;

    @ManyToOne
    @MapsId("orderID")
    @JoinColumn(name = "orderID")
    Order orders;

    @ManyToOne
    @MapsId("itemID")
    @JoinColumn(name="itemID")
    Item item;

    @Column(name="quantity")
    int quantity;
}

@Embeddable
class OrderItemsKey implements Serializable {
    @Column(name = "orderID")
    Long orderID;

    @Column(name = "itemID")
    Long itemID;
}



