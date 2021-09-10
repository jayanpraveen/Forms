package me.realpraveen.forms.DTO;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ResponseGetDTO extends DataTransferObject {

	private String title;
	private Map<String, String> questions;
	private List<HashMap<String, String>> response;

}
