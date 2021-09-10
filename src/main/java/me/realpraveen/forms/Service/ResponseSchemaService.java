package me.realpraveen.forms.Service;

import java.util.Map;

import com.mongodb.client.result.UpdateResult;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import me.realpraveen.forms.DTO.ResponseGetDTO;
import me.realpraveen.forms.Model.ResponseSchema;
import me.realpraveen.forms.Provider.SpringDependencyProvider;
import me.realpraveen.forms.Repository.ResponseSchemaRepository;
import me.realpraveen.forms.Utils.Notification;

@Service
@Slf4j
public class ResponseSchemaService {

	private ResponseSchemaRepository responseRepository;
	private SpringDependencyProvider provider;
	private ServiceHelper helper;

	@Autowired
	public ResponseSchemaService(ResponseSchemaRepository responseRepository, SpringDependencyProvider provider,
			ServiceHelper helper) {
		this.responseRepository = responseRepository;
		this.provider = provider;
		this.helper = helper;
	}

	public UpdateResult pushResponse(String formId, ResponseSchema response) {

		if (doesResponseExist(formId)) {
			log.error(provider.getMessageProvider().getMessage("response.not_exist"));
		}

		return responseRepository.pushResponse(formId, response);

	}

	public ResponseGetDTO getResponse(String formId) {

		Notification note = new Notification();
		ResponseGetDTO dto = new ResponseGetDTO();

		if (!doesResponseExist(formId)) {
			note.addError("global", provider.getMessageProvider().getMessage("response.not_exist"));
			dto.setNotification(note);
			return dto;
		}

		var form = helper.getFormService().findById(formId);

		if (form == null) {
			note.addError("global", provider.getMessageProvider().getMessage("form.not_exist"));
			dto.appendNotfication(note);
			return dto;
		}

		String title = form.getTitle();
		Map<String, String> questions = form.getQuestions();
		var responses = responseRepository.findByFormId(formId).stream().map(ResponseSchema::getResponse).iterator()
				.next();

		return ResponseGetDTO.builder().title(title).questions(questions).response(responses).build();

	}

	public boolean doesResponseExist(String formId) {
		return (formId == null || formId == "" ? false : responseRepository.existsById(formId));
	}

}
