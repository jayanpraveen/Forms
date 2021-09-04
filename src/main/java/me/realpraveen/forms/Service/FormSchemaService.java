package me.realpraveen.forms.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

import javax.validation.ConstraintViolation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import me.realpraveen.forms.Model.FormSchema;
import me.realpraveen.forms.Model.ResponseSchema;
import me.realpraveen.forms.Provider.SpringDependencyProvider;
import me.realpraveen.forms.Repository.FormSchemaRepository;
import me.realpraveen.forms.Repository.ResponseSchemaRepository;

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

	public FormSchema insertFormSchema(FormSchema formSchema) {

		Set<ConstraintViolation<FormSchema>> violations = provider.getValidator().validate(formSchema);

		for (ConstraintViolation<FormSchema> violation : violations) {
			log.error(violation.getMessage());
		}

		List<HashMap<String, String>> emptyResponse = new ArrayList<HashMap<String, String>>();

		formSchema.setTimestamp(LocalDateTime.now().withNano(0));
		var form = formSchemaRepository.insert(formSchema);

		responseSchemaRepository.insert(new ResponseSchema(form.getFormId(), emptyResponse));
		return form;
	}

	public FormSchema updateFormSchema(FormSchema formSchema) {
		log.info(formSchema.toString());
		return formSchemaRepository.save(formSchema);
	}

	// ! delete...

}
