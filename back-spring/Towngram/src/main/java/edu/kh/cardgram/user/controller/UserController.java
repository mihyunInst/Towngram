package edu.kh.cardgram.user.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

import edu.kh.cardgram.user.model.service.UserService;
import edu.kh.cardgram.user.model.vo.User;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping(value = "/", produces = "application/json;charset=UTF-8")
public class UserController {
	
	@Autowired
	private UserService service;
	
	@PostMapping("/login")
	public String login(@RequestBody HashMap<String, String> map) {
		
		String id = map.get("id");
		String pwd = map.get("pwd");
		
		User user = new User();
		user.setUserId(id);
		user.setUserPwd(pwd);
		
		User loginUser = service.login(user);
		
		System.out.println("result:: " + loginUser );
		
		return new Gson().toJson(loginUser);
	}
	
	@PostMapping("/signUp")
	public String signUp(@RequestBody HashMap<String, Object> map) {
		
		Map userMap = (Map) map.get("user");
		
		System.out.println(userMap);
		
		User user = new User();
		user.setUserId((String) userMap.get("userId"));
		user.setUserPwd((String) userMap.get("userPwd"));
		user.setUserName((String) userMap.get("userName"));
		user.setUserRegion((String) userMap.get("userRegion"));
		String gender = (String) userMap.get("userGender");
		if(gender.equals("남자")) {
			user.setUserGender('M');			
		} else {
			user.setUserGender('F');
		}
		
		
		int result = service.signUp(user);
		
		return new Gson().toJson(result);
		
	}
}
