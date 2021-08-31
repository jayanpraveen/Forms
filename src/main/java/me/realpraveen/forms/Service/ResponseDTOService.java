package me.realpraveen.forms.Service;

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

	public ResponseDTO buildResponseDTO(String formId) {
		var form = formRepository.findById(formId).orElse(null);
		var title = form.getTitle();
		var questions = form.getQuestions();
		var responses = responseRepository.findByFormId(formId).stream().map(ResponseSchema::getResponse).iterator()
				.next();

		return ResponseDTO.builder().title(title).questions(questions).response(responses).build();
	}

}
