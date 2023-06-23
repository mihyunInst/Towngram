package edu.kh.cardgram.card.model.vo;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Card {
	private int cardNo;
	private String content;
	private String feeling;
	private char cardStatus;
	private int userNo;
	private String userName;
	private String userRegion;
	private Date createDt;
	private int like;
	private int readCount;
}
