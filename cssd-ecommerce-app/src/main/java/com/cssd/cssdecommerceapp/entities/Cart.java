package com.cssd.cssdecommerceapp.entities;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.Set;

@Table
@Entity
public class Cart{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_id")
    private long id;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "customer_id")
    Customer customerID;

    @OneToMany(mappedBy = "cart")
    Set<CartItems> items;

}

@Embeddable
class CartItemsKey implements Serializable{
    @Column(name = "cart_id")
    Long cartID;

    @Column(name = "item_id")
    Long itemID;
}

@Entity
class CartItems{
    @EmbeddedId
    CartItemsKey id;

    @ManyToOne
    @MapsId("cartId")
    @JoinColumn(name = "cart_id")
    Cart cart;

    @ManyToOne
    @MapsId("itemId")
    @JoinColumn(name="item_id")
    Item item;

    @Column(name="quantity")
    int quantity;
}
