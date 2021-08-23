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

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(value = "ResponseSchema")
public class ResponseSchema {

	@Id
	@Setter(value = AccessLevel.PROTECTED)
	private String id;
	@Indexed
	private String formId;
	private List<HashMap<String, String>> response;

}
