package me.realpraveen.forms.DTO.User;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.AccessLevel;
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

	@NotNull
	@Size(min = 3, max = 12)
	private String name;

	@NotNull
	@Size(min = 4, max = 16)
	private String username;

	@NotNull
	@Email
	private String email;

	@NotNull
	@Size(min = 4, max = 16)
	@Setter(value = AccessLevel.PROTECTED)
	private String password;

}
