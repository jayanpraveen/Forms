package me.realpraveen.forms.DTO.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor

@ToString
public class UserDTO {

	private String name;
	private String username;
	private String email;
	private String password;

}
