package me.realpraveen.forms.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.realpraveen.forms.Model.FormSchema;
import me.realpraveen.forms.Service.FormSchemaService;

@RestController
@RequestMapping("/form")
@CrossOrigin
public class FormSchemaController {

	FormSchemaService formSchemaService;

	@Autowired
	public FormSchemaController(FormSchemaService formSchemaService) {
		this.formSchemaService = formSchemaService;
	}

	@GetMapping
	public List<FormSchema> findAllFroms() {
		return formSchemaService.findAllForms();
	}

	@GetMapping("/{id}")
	public FormSchema findById(@PathVariable String id) {
		return formSchemaService.findById(id);
	}

	@PostMapping
	public FormSchema insertFormSchema(@RequestBody FormSchema formSchema) {
		return formSchemaService.insertFormSchema(formSchema);
	}

}