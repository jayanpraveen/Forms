package me.realpraveen.forms.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Document("User")
public class User {

	@Id
	private String id;
	private String name;
	private String username;
	private String password;
	private String email;
	private String hashedPassword;

	public User(String name, String username, String email, String password) {
		this.name = name;
		this.username = username;
		this.password = password;
		this.email = email;
		this.name = name;
	}

}
