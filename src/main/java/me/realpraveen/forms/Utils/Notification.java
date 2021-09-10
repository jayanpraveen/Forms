package me.realpraveen.forms.Utils;

import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonValue;

import lombok.NoArgsConstructor;

@NoArgsConstructor
@JsonInclude(Include.NON_EMPTY)
public class Notification {

	Map<String, String> errors = new HashMap<>();

	public void addError(String key, String value) {
		errors.put(key, value);
	}

	public void setErrors(Map<String, String> errors) {
		this.errors = errors;
	}

	@JsonValue
	public Map<String, String> getErrors() {
		return errors;
	}

	public boolean hasErrors() {
		return !errors.isEmpty();
	}

}
