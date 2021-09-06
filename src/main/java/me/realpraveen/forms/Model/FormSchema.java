package me.realpraveen.forms.Model;

import java.time.LocalDateTime;
import java.util.Map;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Document(value = "FormSchema")
public class FormSchema {

	@Id
	@Indexed
	@Setter(value = AccessLevel.PROTECTED)
	private String formId;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy@HH:mm")
	@Setter(value = AccessLevel.PROTECTED)
	private LocalDateTime createdDateTime;

	@NotBlank(message = "{validation.title.empty}")
	private String title;
	private String about;

	@NotNull(message = "{validation.question.empty}")
	private Map<String, String> questions;

	public FormSchema(LocalDateTime createdDateTime) {
		this.createdDateTime = createdDateTime;
	}
}