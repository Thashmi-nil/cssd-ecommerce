package com.cssd.cssdecommerceapp.repository.customerDao;

import com.cssd.cssdecommerceapp.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
