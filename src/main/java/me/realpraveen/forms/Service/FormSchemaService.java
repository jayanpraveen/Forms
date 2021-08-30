package me.realpraveen.forms.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import me.realpraveen.forms.Model.FormSchema;
import me.realpraveen.forms.Model.ResponseSchema;
import me.realpraveen.forms.Repository.FormSchemaRepository;
import me.realpraveen.forms.Repository.ResponseSchemaRepository;

@Service
@Slf4j
public class FormSchemaService {

	FormSchemaRepository formSchemaRepository;
	ResponseSchemaRepository responseSchemaRepository;

	@Autowired
	public FormSchemaService(FormSchemaRepository formSchemaRepository,
			ResponseSchemaRepository responseSchemaRepository) {
		this.formSchemaRepository = formSchemaRepository;
		this.responseSchemaRepository = responseSchemaRepository;
	}

	public List<FormSchema> findAllForms() {
		return formSchemaRepository.findAll();
	}

	public FormSchema findById(String formId) {
		return formSchemaRepository.findById(formId).orElse(null);
	}

	public FormSchema insertFormSchema(FormSchema formSchema) {
		var form = formSchemaRepository.insert(formSchema);
		String formId = form.getFormId();

		List<HashMap<String, String>> map = new ArrayList<HashMap<String, String>>();

		// ? perform check for formId
		var response = new ResponseSchema(formId, map);
		responseSchemaRepository.insert(response);

		log.info(formSchema.getFormId());
		log.info(response.getFormId());
		return form;
	}

	public FormSchema updateFormSchema(FormSchema formSchema) {
		log.info(formSchema.toString());
		return formSchemaRepository.save(formSchema);
	}

	// ! delete...

}
