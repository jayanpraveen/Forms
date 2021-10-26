package me.realpraveen.forms.Model;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;

import org.junit.jupiter.api.Test;

public class UserTest {
	Validator validator = Validation.buildDefaultValidatorFactory().getValidator();

	@Test
	void allFieldsEmpty() {
		User user = new User("", "", "", "");
		Set<ConstraintViolation<User>> violations = validator.validate(user);
		assertTrue(!violations.isEmpty());
	}

	@Test
	void allFieldsFilled() {
		User user = new User("name", "username", "email@domain.com", "password");
		Set<ConstraintViolation<User>> violations = validator.validate(user);
		assertTrue(violations.isEmpty());

	}
}
