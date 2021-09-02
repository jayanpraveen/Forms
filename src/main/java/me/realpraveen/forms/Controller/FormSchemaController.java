package me.realpraveen.forms.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.realpraveen.forms.Model.FormSchema;
import me.realpraveen.forms.Service.FormSchemaService;

@RestController
@RequestMapping("/form")
@CrossOrigin("http://localhost:3000")
public class FormSchemaController {

	FormSchemaService formSchemaService;

	@Autowired
	public FormSchemaController(FormSchemaService formSchemaService) {
		this.formSchemaService = formSchemaService;
	}

	@GetMapping
	public ResponseEntity<List<FormSchema>> findAllFroms() {
		List<FormSchema> form = formSchemaService.findAllForms();
		return ResponseEntity.ok(form);
	}

	@GetMapping("/{formId}")
	public ResponseEntity<FormSchema> findById(@PathVariable String formId) {
		FormSchema form = formSchemaService.findById(formId);
		boolean isNull = Optional.ofNullable(form).isEmpty();
		return (isNull ? new ResponseEntity<>(HttpStatus.NOT_FOUND) : ResponseEntity.ok(form));
	}

	@PostMapping
	public ResponseEntity<FormSchema> insertFormSchema(@RequestBody FormSchema formSchema) {
		return new ResponseEntity<>(formSchemaService.insertFormSchema(formSchema), HttpStatus.CREATED);
	}

	@PutMapping
	public ResponseEntity<FormSchema> updateFormSchema(@RequestBody FormSchema formSchema) {
		return new ResponseEntity<>(formSchemaService.updateFormSchema(formSchema), HttpStatus.OK);
	}

}
