package edu.kh.cardgram.card.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface CardService {

	List<String> selectAll();

	List<String> searchList(String searchWord);

	int increaseLike(int cardNo);

	int increaseReadCount(int cardNo);

	int insertCard(Map data);


}
