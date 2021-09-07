package me.realpraveen.forms.DTO;

import java.util.Map;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class FormDTO extends DataTransferObject {

	@NotBlank(message = "{validation.title.empty}")
	private String title;

	private String about;

	@NotEmpty(message = "{validation.question.empty}")
	private Map<String, String> questions;

}
