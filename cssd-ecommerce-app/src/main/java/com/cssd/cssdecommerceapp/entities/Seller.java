package com.cssd.cssdecommerceapp.entities;

import javax.persistence.*;
import java.util.Set;

@Table(name = "seller")
@Entity
public class Seller {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "seller_id")
    private long sellerId;

    @Column(name = "shop_name")
    private String shopName;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "userId")
    UserAccount userAccount;

    public long getSellerId() {
        return sellerId;
    }

    public void setSellerId(long sellerId) {
        this.sellerId = sellerId;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    public UserAccount getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccount userAccount) {
        this.userAccount = userAccount;
    }
}
