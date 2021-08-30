package me.realpraveen.forms.Model;

import java.util.HashMap;
import java.util.List;

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
@Document(value = "ResponseSchema")
public class ResponseSchema {

	@Id
	@Indexed
	@Setter(value = AccessLevel.PROTECTED)
	private String formId;
	private List<HashMap<String, String>> response;

}
