package me.realpraveen.forms.DTO.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import me.realpraveen.forms.DTO.DataTransferObject;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class UserDTO extends DataTransferObject {

	private String name;
	private String username;
	private String email;
	private String password;

}
