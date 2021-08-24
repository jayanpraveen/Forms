package me.realpraveen.forms.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import me.realpraveen.forms.Model.FormSchema;
import me.realpraveen.forms.Repository.FormSchemaRepository;

@Service
@Slf4j
public class FormSchemaService {

	FormSchemaRepository formSchemaRepository;

	@Autowired
	public FormSchemaService(FormSchemaRepository formSchemaRepository) {
		this.formSchemaRepository = formSchemaRepository;
	}

	public List<FormSchema> findAllForms() {
		return formSchemaRepository.findAll();
	}

	public FormSchema findById(String formId) {
		return formSchemaRepository.findById(formId).orElse(null);
	}

	public FormSchema insertFormSchema(FormSchema formSchema) {
		log.info(formSchema.toString());
		return formSchemaRepository.insert(formSchema);
	}

}
