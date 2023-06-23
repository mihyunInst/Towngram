package edu.kh.cardgram.user.model.dao;

import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.kh.cardgram.user.model.vo.User;

@Repository
public class UserDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;
	
	public User login(User user) {
		return sqlSession.selectOne("userMapper.login", user);
	}

	public int signUp(User user) {
		// TODO Auto-generated method stub
		return sqlSession.insert("userMapper.signUp", user);
	}

}
