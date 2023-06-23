package edu.kh.cardgram.card.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import edu.kh.cardgram.card.model.dao.CardDAO;

@Service
public class CardServiceImpl implements CardService{
	
	@Autowired
	private CardDAO dao;

	@Override
	public List<String> selectAll() {
		return dao.selectAll();
	}

	@Override
	public List<String> searchList(String searchWord) {
		return dao.searchList(searchWord);
	}

	@Transactional(readOnly = true)
	@Override
	public int increaseLike(int cardNo) {
		return dao.increaseLike(cardNo);
	}

	@Override
	public int increaseReadCount(int cardNo) {
		return dao.increaseReadCount(cardNo);
	}

	@Override
	public int insertCard(Map data) {
		// TODO Auto-generated method stub
		return dao.insertCard(data);
	}

	
}
