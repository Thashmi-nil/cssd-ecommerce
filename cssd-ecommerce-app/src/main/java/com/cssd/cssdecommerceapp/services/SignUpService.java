package com.cssd.cssdecommerceapp.services;

import com.cssd.cssdecommerceapp.entities.Customer;
import com.cssd.cssdecommerceapp.entities.UserAccount;
import com.cssd.cssdecommerceapp.repository.customerDao.CustomerRepository;
import com.cssd.cssdecommerceapp.repository.userDao.UserAccountDetailsJdbcRepository;
import com.cssd.cssdecommerceapp.repository.userDao.UserAccountDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.stream.Collectors;

@Service
public class SignUpService {

    @Autowired
    UserAccountDetailsJdbcRepository userAccountDetailsJdbcRepository;

    @Autowired
    UserAccountDetailsRepository userAccountDetailsRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JavaMailSender mailSender;


    public String signUp(Customer customer) {

        int emailCount = userAccountDetailsJdbcRepository.checkEmailExists(customer.getEmail());
        int nicCount = userAccountDetailsJdbcRepository.checkNICExists(customer.getNic());

        SimpleMailMessage message=new SimpleMailMessage();

        if(emailCount>0){
            return "You have already an account!";
        }else if(nicCount>0) {
            return "There is a issue. Here already has a nic!";
        }else{
            String pw=generateRandomPassword(8, 97, 122);

            UserAccount user=new UserAccount();

            user.setUserName(customer.getFirstName());
            user.setEmail(customer.getEmail());
            user.setPassword(passwordEncoder.encode(pw));
            user.setStatus(true);
            user.setUserLevel("customer");

            userAccountDetailsRepository.save(user);

            Customer customerEnt=new Customer();

            customerEnt.setFirstName(customer.getFirstName());
            customerEnt.setLastName(customer.getLastName());
            customerEnt.setEmail(customer.getEmail());
            customerEnt.setDob(customer.getDob());
            customerEnt.setNic(customer.getNic());
            customerEnt.setAddress(customer.getAddress());
            customerEnt.setGender(customer.getGender());
            customerEnt.setOccupation(customer.getOccupation());
            customerEnt.setAddress(customer.getAddress());
            customerEnt.setPhoneNumber(customer.getPhoneNumber());
            customerEnt.setEmergencyNumber(customer.getEmergencyNumber());
            customerEnt.setUserAccount(user);

            customerRepository.save(customerEnt);

            message.setFrom("thirdyeargroupproject2@gmail.com");
            message.setTo(customer.getEmail());

            String mainContent="Welcome to the CSS E-commerce .\n"+
                    "Your have successfully registered as a customer. \n";

            message.setText(mainContent +"Your Password : "+ pw + "\n" + "Your Username : "+customer.getFirstName());
            message.setSubject("Welcome to the GYM C!");

            mailSender.send(message);

            return "Your have successfully registered!";
        }
    }

    public static String generateRandomPassword(int len, int randNumOrigin, int randNumBound)
    {
        SecureRandom random = new SecureRandom();
        return random.ints(len, randNumOrigin, randNumBound + 1)
                .mapToObj(i -> String.valueOf((char)i))
                .collect(Collectors.joining());
    }


}
