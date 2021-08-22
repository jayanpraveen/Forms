package me.realpraveen.forms.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.realpraveen.forms.Model.FormSchema;
import me.realpraveen.forms.Repository.FormSchemaRepository;

@Service
public class FormSchemaService {

	FormSchemaRepository formSchemaRepository;

	@Autowired
	public FormSchemaService(FormSchemaRepository formSchemaRepository) {
		this.formSchemaRepository = formSchemaRepository;
	}

	public List<FormSchema> findAllForms() {
		return formSchemaRepository.findAll();
	}

	public FormSchema findFromById(String id) {
		return formSchemaRepository.findById(id).orElse(null);
	}

	public FormSchema insertSchema(FormSchema formSchema) {
		return formSchemaRepository.insert(formSchema);
	}

}
