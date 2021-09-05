package me.realpraveen.forms.REST;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpStatus;

import lombok.Getter;

/**
 * @param status  – The HTTP status code.
 * @param message – The error message associated with exception.
 * @param error   – List of defined error messages.
 */
@Getter
public class ApiError {

	private HttpStatus status;
	private String message;
	private List<String> errors;

	public ApiError(HttpStatus status, String message) {
		this.status = status;
		this.message = message;
	}

	public ApiError(HttpStatus status, String message, List<String> errors) {
		super();
		this.status = status;
		this.message = message;
		this.errors = errors;
	}

	public ApiError(HttpStatus status, String message, String error) {
		super();
		this.status = status;
		this.message = message;
		errors = Arrays.asList(error);
	}
}
