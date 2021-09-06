package me.realpraveen.forms.Utils;

import java.util.HashMap;
import java.util.Map;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class Notification {

	Map<String, String> errors = new HashMap<>();

	public void addError(String key, String value) {
		errors.put(key, value);
	}

	public void setErrors(Map<String, String> errors) {
		this.errors = errors;
	}

	public Map<String, String> getErrors() {
		return errors;
	}

	public boolean hasErrors() {
		return !errors.isEmpty();
	}

}
