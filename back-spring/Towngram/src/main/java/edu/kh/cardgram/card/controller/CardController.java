package edu.kh.cardgram.card.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import edu.kh.cardgram.card.model.service.CardService;
import edu.kh.cardgram.card.model.vo.Card;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping(value = "/", produces = "application/json;charset=UTF-8")
public class CardController {
	
	@Autowired
	private CardService service;
	
	
	@GetMapping("/selectAllCardList")
	public String selectAll(CorsRegistry registry) {

		List<String> cardList = service.selectAll();
		
		return new Gson().toJson(cardList);
	}
	
	@PostMapping("/searchList")
	public String searchList(@RequestBody String searchWord) throws JsonParseException, JsonMappingException, IOException {
		
		 // jackson objectmapper 객체 생성
        ObjectMapper objectMapper = new ObjectMapper();
 
        // JSON String -> Map
        Map<String, Object> jsonMap 
            = objectMapper.readValue(searchWord, new TypeReference<Map<String, Object>>() {});
        

        searchWord = (String) jsonMap.get("searchWord");
        
		List<String> searchList = service.searchList(searchWord);

		
		return new Gson().toJson(searchList);
	}
	
	@PostMapping("/like")
	public String increaseLike(@RequestBody HashMap<String, Object> map) {
		
		System.out.println(map);
		int cardNo = (int) map.get("cardNo");
		
		int result = service.increaseLike(cardNo);
		

		return new Gson().toJson(result);			
	
		
	}
	
	@PostMapping("/readCount")
	public String increaseReadCount(@RequestBody HashMap<String, Object> map) {
		
		System.out.println(map);
		int cardNo = (int) map.get("cardNo");
		
		int result = service.increaseReadCount(cardNo);
		
		
		return new Gson().toJson(result);			
		
		
	}
	
	@PostMapping("/insertCard")
	public String insertCard(@RequestBody HashMap<String, Object> map) {
		
		
		Map data = (Map) map.get("data");
		System.out.println("data::"+data);
		
		int result = service.insertCard(data);
		System.out.println(result);
		
		return new Gson().toJson(result);			
		
		
	}
	
}
