package me.realpraveen.forms.Service;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.realpraveen.forms.DTO.ResponseDTO;
import me.realpraveen.forms.Model.ResponseSchema;
import me.realpraveen.forms.Repository.FormSchemaRepository;
import me.realpraveen.forms.Repository.ResponseSchemaRepository;

@Service

public class ResponseDTOService {

	FormSchemaRepository formRepository;
	ResponseSchemaRepository responseRepository;

	@Autowired
	public ResponseDTOService(FormSchemaRepository formRepository, ResponseSchemaRepository responseRepository) {
		this.formRepository = formRepository;
		this.responseRepository = responseRepository;
	}

	public ResponseDTO buildResponseDTO(String id) {
		var title = formRepository.findById(id).orElse(null).getTitle();
		var questions = formRepository.findById(id).orElse(null).getQuestions();
		var responses = responseRepository.findByFormId(id).stream().map(ResponseSchema::getResponse)
				.collect(Collectors.toList());

		return ResponseDTO.builder().title(title).questions(questions).response(responses).build();
	}

}
