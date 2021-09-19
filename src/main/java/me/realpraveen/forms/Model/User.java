package me.realpraveen.forms.Model;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import me.realpraveen.forms.Utils.EncoderUtils;

@Getter
@Setter
@Document("User")
@NoArgsConstructor
public class User {

	@Id
	@Indexed
	private String id;

	@NotBlank(message = "{validation.name.empty}")
	@Size(min = 2, max = 225, message = "{validation.name.size}")
	@Pattern(regexp = "^[a-zA-Z ]*$", message = "{validation.name.invalid}")
	private String name;

	@Indexed
	@NotBlank(message = "{validaiton.username.empty}")
	@Size(min = 4, max = 12, message = "{validation.username.size}")
	@Pattern(regexp = "^[a-zA-Z]+([_-]?[a-zA-Z0-9_])*$", message = "{validation.username.invalid}")
	private String username;

	@Transient
	@NotBlank(message = "{validation.password.empty}")
	@Size(min = 4, max = 16, message = "{validation.password.size}")
	@Setter(value = AccessLevel.PRIVATE)
	private String password;

	@Email
	@NotEmpty(message = "{validation.email.empty}")
	private String email;

	@Setter(value = AccessLevel.PRIVATE)
	private String hashedPassword;

	public User(String name, String username, String email, String password) {
		this.name = name;
		this.username = username;
		this.email = email;
		this.password = password;
		this.hashedPassword = (password != null ? EncoderUtils.hashPassword(password) : null);
	}

}
