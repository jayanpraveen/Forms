package me.realpraveen.forms.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpSession;
import javax.validation.ConstraintViolation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import me.realpraveen.forms.DTO.FormDTO;
import me.realpraveen.forms.Model.FormSchema;
import me.realpraveen.forms.Model.ResponseSchema;
import me.realpraveen.forms.Provider.SpringDependencyProvider;
import me.realpraveen.forms.Repository.FormSchemaRepository;
import me.realpraveen.forms.Repository.ResponseSchemaRepository;
import me.realpraveen.forms.Utils.DTOConverter;
import me.realpraveen.forms.Utils.Notification;
import me.realpraveen.forms.Utils.EncoderUtils;

@Service
@Slf4j
public class FormSchemaService {

	private SpringDependencyProvider provider;
	private FormSchemaRepository formSchemaRepository;
	private ResponseSchemaRepository responseSchemaRepository;

	@Autowired
	public FormSchemaService(SpringDependencyProvider provider, FormSchemaRepository formSchemaRepository,
			ResponseSchemaRepository responseSchemaRepository) {
		this.provider = provider;
		this.formSchemaRepository = formSchemaRepository;
		this.responseSchemaRepository = responseSchemaRepository;
	}

	public List<FormSchema> findAllFormsForUser(String userId) {
		return formSchemaRepository.findByUserId(userId);
	}

	public FormSchema findById(String formId) {
		return formSchemaRepository.findById(formId).orElse(null);
	}

	public FormSchema editForm(String formId, HttpSession session) {
		String userId = (String) session.getAttribute("USER_ID");
		FormSchema form = formSchemaRepository.findById(formId).orElse(null);
		if (form.getUserId().equals(userId)) {
			return form;
		}
		return null;
	}

	public void insertFormSchema(FormDTO dto, HttpSession session) {

		FormSchema form = new FormSchema(LocalDateTime.now().withNano(0), EncoderUtils.generateId());

		// todo: use nested maps in schema to better store responses
		Map<String, String> initailValue = new HashMap<String, String>();

		initailValue.put("0", "untitled question");

		form.setUserId((String) session.getAttribute("USER_ID"));
		form.setQuestions(initailValue);
		form.setTitle(dto.getTitle());
		form.setAbout(dto.getAbout());

		Set<ConstraintViolation<FormSchema>> violations = provider.getValidator().validate(form);

		violations.stream().forEach(error -> log.error(error.getMessage()));

		if (!violations.isEmpty()) {
			dto.setNotification(DTOConverter.convertViolations(violations));
			return;
		}

		formSchemaRepository.insert(form);
		responseSchemaRepository.insert(new ResponseSchema(form.getFormId(), new ArrayList<HashMap<String, String>>()));

	}

	public void updateFormSchema(String formId, FormDTO dto) {

		if (!doesFormExist(formId)) {
			Notification note = new Notification();
			note.addError("global", provider.getMessageProvider().getMessage("form.not_exist"));
			dto.setNotification(note);
			return;
		}

		Set<ConstraintViolation<FormDTO>> violations = provider.getValidator().validate(dto);

		if (!violations.isEmpty()) {
			dto.setNotification(DTOConverter.convertViolations(violations));
			return;
		}

		var form = formSchemaRepository.findById(formId).orElse(null);

		form.setTitle(dto.getTitle());
		form.setAbout(dto.getAbout());
		form.setQuestions(dto.getQuestions());

		formSchemaRepository.save(form);

	}

	public void deleteForm(String formId) {
		if (doesFormExist(formId)) {
			formSchemaRepository.deleteById(formId);
			responseSchemaRepository.deleteById(formId);
		}
	}

	public boolean doesFormExist(String formId) {
		return (formId == null || formId == "" ? false : formSchemaRepository.existsById(formId));
	}

}
