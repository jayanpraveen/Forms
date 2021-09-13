package me.realpraveen.forms.DTO.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import me.realpraveen.forms.DTO.DataTransferObject;

@Getter
@Setter
@AllArgsConstructor
public class UserLoginDTO extends DataTransferObject {

	private String username;
	private String password;

}
