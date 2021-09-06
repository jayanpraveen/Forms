package me.realpraveen.forms.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import me.realpraveen.forms.DTO.FormUpdatedDTO;
import me.realpraveen.forms.Model.FormSchema;
import me.realpraveen.forms.Model.ResponseSchema;
import me.realpraveen.forms.Provider.SpringDependencyProvider;
import me.realpraveen.forms.Repository.FormSchemaRepository;
import me.realpraveen.forms.Repository.ResponseSchemaRepository;
import me.realpraveen.forms.Utils.DTOConverter;

@Service
@Slf4j
public class FormSchemaService {

	FormSchemaRepository formSchemaRepository;
	ResponseSchemaRepository responseSchemaRepository;
	SpringDependencyProvider provider;

	@Autowired
	public FormSchemaService(FormSchemaRepository formSchemaRepository,
			ResponseSchemaRepository responseSchemaRepository, SpringDependencyProvider springDependencyProvider) {
		this.formSchemaRepository = formSchemaRepository;
		this.responseSchemaRepository = responseSchemaRepository;
		provider = springDependencyProvider;
	}

	public List<FormSchema> findAllForms() {
		return formSchemaRepository.findAll();
	}

	public FormSchema findById(String formId) {
		return formSchemaRepository.findById(formId).orElse(null);
	}

	public FormSchema DTOtoFormEntity(FormUpdatedDTO dto) {

		FormSchema form = new FormSchema();
		form.setCreatedDateTime(LocalDateTime.now().withNano(0));

		form.setAbout(dto.getAbout());
		form.setQuestions(dto.getQuestions());
		form.setTitle(dto.getTitle());

		return form;

	}

	public void insertFormSchema(FormUpdatedDTO dto) {

		FormSchema form = DTOtoFormEntity(dto);

		Set<ConstraintViolation<FormSchema>> violations = provider.getValidator().validate(form);

		violations.stream().forEach(error -> log.error(error.getMessage()));

		if (!violations.isEmpty()) {
			dto.setNotification(DTOConverter.convertViolations(violations));
			return;
		}

		formSchemaRepository.insert(form);
		responseSchemaRepository.insert(new ResponseSchema(form.getFormId(), new ArrayList<HashMap<String, String>>()));

	}

	public FormSchema updateFormSchema(String formId, @Valid FormSchema updatedForm) {

		// ! handle
		if (!formSchemaRepository.existsById(formId)) {
			return null;
		}

		var form = formSchemaRepository.findById(formId).orElse(null);
		form.setTitle(updatedForm.getTitle());
		form.setAbout(updatedForm.getAbout());
		form.setQuestions(updatedForm.getQuestions());

		return formSchemaRepository.save(form);
	}

	// ! delete...

}
