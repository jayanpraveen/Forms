package me.realpraveen.forms.DTO.User;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import me.realpraveen.forms.DTO.DataTransferObject;

@Getter
@Setter
@AllArgsConstructor
public class UserLoginDTO extends DataTransferObject {

	@NotNull
	@Size(min = 4, max = 12)
	private String username;

	@NotNull
	@Size(min = 4, max = 16)
	@Setter(value = AccessLevel.PROTECTED)
	private String password;

}
