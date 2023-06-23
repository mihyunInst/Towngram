package edu.kh.cardgram.user.model.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.kh.cardgram.user.model.dao.UserDAO;
import edu.kh.cardgram.user.model.vo.User;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserDAO dao;

	@Override
	public User login(User user) {
		return dao.login(user);
	}

	@Override
	public int signUp(User user) {
		// TODO Auto-generated method stub
		return dao.signUp(user);
	}

	
}
