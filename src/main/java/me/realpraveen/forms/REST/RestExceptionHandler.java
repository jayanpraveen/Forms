package me.realpraveen.forms.REST;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import me.realpraveen.forms.Provider.MessageProvider;

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

	MessageProvider messageProvider;

	@Autowired
	public RestExceptionHandler(MessageProvider messageProvider) {
		this.messageProvider = messageProvider;
	}

	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {

		List<String> errors = new ArrayList<String>();

		for (FieldError error : ex.getBindingResult().getFieldErrors())
			errors.add(error.getField() + ": " + error.getDefaultMessage());

		for (ObjectError error : ex.getBindingResult().getGlobalErrors())
			errors.add(error.getObjectName() + ": " + error.getDefaultMessage());

		ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, ex.getLocalizedMessage(), errors);

		return handleExceptionInternal(ex, apiError, headers, apiError.getStatus(), request);
	}

	@Override
	protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {

		Throwable mostSpecificCause = ex.getMostSpecificCause();
		ApiError apiError;

		if (mostSpecificCause != null) {

			String message = mostSpecificCause.getLocalizedMessage();
			String error = messageProvider.getMessage("rest.exception.not_readable");
			apiError = new ApiError(HttpStatus.BAD_REQUEST, message, error);

		} else {

			apiError = new ApiError(HttpStatus.BAD_REQUEST, ex.getMessage());

		}

		return new ResponseEntity<>(apiError, apiError.getStatus());
	}
}
