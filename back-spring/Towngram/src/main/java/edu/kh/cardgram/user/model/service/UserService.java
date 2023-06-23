package edu.kh.cardgram.user.model.service;

import java.util.Map;

import edu.kh.cardgram.user.model.vo.User;

public interface UserService {

	User login(User user);

	int signUp(User user);

}
