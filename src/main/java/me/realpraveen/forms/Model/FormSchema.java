package me.realpraveen.forms.Model;

import java.util.HashMap;
import java.util.List;

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
@NoArgsConstructor
@AllArgsConstructor
@Document(value = "FormSchema")
@ToString
public class FormSchema {

	@Id
	@Indexed
	@Setter(value = AccessLevel.PROTECTED)
	private String formId;
	private String title;
	private String about;
	private List<HashMap<String, String>> questions;

}