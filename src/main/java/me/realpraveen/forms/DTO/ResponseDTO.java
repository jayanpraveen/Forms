package me.realpraveen.forms.DTO;

import java.util.List;
import java.util.HashMap;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ResponseDTO {

	private String title;
	private List<HashMap<String, String>> questions;
	private List<List<HashMap<String, String>>> response;

}