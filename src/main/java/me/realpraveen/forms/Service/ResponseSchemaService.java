package me.realpraveen.forms.Service;

import java.util.Map;

import com.mongodb.client.result.UpdateResult;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import me.realpraveen.forms.DTO.ResponseDTO;
import me.realpraveen.forms.Model.FormSchema;
import me.realpraveen.forms.Model.ResponseSchema;
import me.realpraveen.forms.Provider.SpringDependencyProvider;
import me.realpraveen.forms.Repository.FormSchemaRepository;
import me.realpraveen.forms.Repository.ResponseSchemaRepository;

@Service
@Slf4j
public class ResponseSchemaService {

	ResponseSchemaRepository responseRepository;
	FormSchemaRepository formRepository;
	SpringDependencyProvider provider;

	@Autowired
	public ResponseSchemaService(ResponseSchemaRepository responseRepository, FormSchemaRepository formRepository,
			SpringDependencyProvider provider) {
		this.responseRepository = responseRepository;
		this.formRepository = formRepository;
		this.provider = provider;
	}

	public ResponseSchema findById(String id) {
		return responseRepository.findById(id).orElse(null);
	}

	public ResponseSchema insertResponseSchema(ResponseSchema response) {
		log.info(response.getResponse().toString());
		return responseRepository.insert(response);
	}

	public UpdateResult pushResponse(String formId, ResponseSchema response) {

		if (doesResponseExist(formId)) {
			log.error(provider.getMessageProvider().getMessage("validation.response.not_exist"));
		}

		return responseRepository.pushResponse(formId, response);

	}

	public ResponseDTO buildResponse(String formId) {

		if (doesResponseExist(formId)) {
			log.error(provider.getMessageProvider().getMessage("validation.response.not_exist"));
			// and below statements
		}

		FormSchema form = formRepository.findById(formId).orElse(null);
		String title = form.getTitle();
		Map<String, String> questions = form.getQuestions();
		var responses = responseRepository.findByFormId(formId).stream().map(ResponseSchema::getResponse).iterator()
				.next();

		return ResponseDTO.builder().title(title).questions(questions).response(responses).build();
	}

	public boolean doesResponseExist(String formId) {
		if (formId != null && !responseRepository.existsById(formId)) {
			return false;
		}
		return true;
	}

}