package me.realpraveen.forms.Model;

import java.time.LocalDateTime;
import java.util.Map;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonFormat;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
@Document(value = "FormSchema")
public class FormSchema {

	@Id
	@Indexed
	@Setter(value = AccessLevel.PROTECTED)
	private String formId;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy@HH:mm:ss")
	private LocalDateTime timestamp;

	@NotBlank(message = "{validation.title.empty}")
	private String title;
	private String about;

	@NotEmpty(message = "{validation.question.empty}")
	private Map<String, String> questions;

}