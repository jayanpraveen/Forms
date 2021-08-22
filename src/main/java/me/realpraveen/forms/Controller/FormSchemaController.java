package me.realpraveen.forms.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
	public FormSchema findFromById(@PathVariable String id) {
		return formSchemaService.findFromById(id);
	}

	@PostMapping
	public FormSchema insertSchema(@RequestBody FormSchema formSchema) {
		return formSchemaService.insertSchema(formSchema);
	}

}
