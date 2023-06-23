package edu.kh.cardgram.user.model.vo;

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
public class User {
	private int userNo;
	private String userId;
	private String userPwd;
	private String userName;
	private String userRegion;
	private char userGender;
	private String enrollDate;
}
