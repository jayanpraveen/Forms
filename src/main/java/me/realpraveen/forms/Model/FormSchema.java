package me.realpraveen.forms.Model;

import java.util.HashMap;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(value = "FormSchema")
public class FormSchema {

	@Id
	@Indexed
	private String id;

	private String title;

	private List<HashMap<String, String>> questions;

	public FormSchema() {
	}

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public List<HashMap<String, String>> getQuestions() {
		return this.questions;
	}

	public void setQuestions(List<HashMap<String, String>> questions) {
		this.questions = questions;
	}

}