package edu.kh.cardgram.card.model.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CardDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;

	public List<String> selectAll() {
		return sqlSession.selectList("cardMapper.selectAll");
	}

	public List<String> searchList(String searchWord) {
		return sqlSession.selectList("cardMapper.searchList", searchWord);
	}

	public int increaseLike(int cardNo) {
		return sqlSession.update("cardMapper.increaseLike", cardNo);
	}

	public int increaseReadCount(int cardNo) {
		return sqlSession.update("cardMapper.increaseReadCount", cardNo);
	}

	public int insertCard(Map data) {
		// TODO Auto-generated method stub
		return sqlSession.insert("cardMapper.insertCard", data);
	}
	
	
}
