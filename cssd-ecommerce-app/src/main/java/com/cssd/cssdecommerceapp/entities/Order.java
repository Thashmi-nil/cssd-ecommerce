package com.cssd.cssdecommerceapp.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Table(name = "orders")
@Entity
public class Order {

    @Id
    @Column(name = "orderID")
    private long id;

    @ManyToOne
    @JoinColumn(name="customer_id",nullable = false)
    private Customer customer;

    @Column(name = "status")
    private String status;

    @OneToMany(mappedBy = "orders")
    Set<OrderItems> items;

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
    Items item;

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



