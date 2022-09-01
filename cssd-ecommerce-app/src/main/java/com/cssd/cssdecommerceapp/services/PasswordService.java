package com.cssd.cssdecommerceapp.services;

import com.cssd.cssdecommerceapp.dto.Password;
import com.cssd.cssdecommerceapp.repository.userDao.UserAccountDetailsJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PasswordService
{
    @Autowired
    UserAccountDetailsJdbcRepository userAccountDetailsJdbcRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    public long changePassword(Password password, String userName) {
//        System.out.println("pwcservice1");
//        System.out.println(password.getNewPassword());
//        String dbPassword = userJdbcRepository.getUserKey(id);
        password.setNewPassword(passwordEncoder.encode(password.getNewPassword()));
//        System.out.println("pwcservice2");
        return userAccountDetailsJdbcRepository.changePassword(password.getNewPassword(),userName);
    }
}
