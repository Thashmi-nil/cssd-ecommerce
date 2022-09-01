package com.cssd.cssdecommerceapp.repository.userDao;

import com.cssd.cssdecommerceapp.entities.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAccountDetailsRepository extends JpaRepository<UserAccount, Long> {
    UserAccount findByUserName(String userName);

}

