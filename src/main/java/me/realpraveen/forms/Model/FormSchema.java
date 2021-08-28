package me.realpraveen.forms.Model;

import java.util.Map;

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
	private String title;
	private String about;
	private Map<String, String> questions;

}