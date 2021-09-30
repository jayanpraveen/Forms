package me.realpraveen.forms.Model;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;

import org.junit.jupiter.api.Test;

public class FormSchemaTest {

	Validator validator = Validation.buildDefaultValidatorFactory().getValidator();

	@Test
	void allFieldsEmpty() {
		FormSchema form = new FormSchema(null, "");
		Set<ConstraintViolation<FormSchema>> violations = validator.validate(form);
		assertTrue(!violations.isEmpty());
	}

	@Test
	void allFieldsFilled() {
		Map<String, String> questions = new HashMap<>();
		questions.put("key", "value");
		FormSchema form = new FormSchema("formId", LocalDateTime.now(), "title", "about", questions, "userId");
		Set<ConstraintViolation<FormSchema>> violations = validator.validate(form);
		assertTrue(violations.isEmpty());
	}

}
