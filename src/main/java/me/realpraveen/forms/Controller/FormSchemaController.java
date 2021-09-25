package me.realpraveen.forms.Controller;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.realpraveen.forms.DTO.FormDTO;
import me.realpraveen.forms.Model.FormSchema;
import me.realpraveen.forms.Service.FormSchemaService;
import me.realpraveen.forms.Utils.Notification;

@RestController
@RequestMapping("/api/form")
public class FormSchemaController {

	FormSchemaService formSchemaService;

	@Autowired
	public FormSchemaController(FormSchemaService formSchemaService) {
		this.formSchemaService = formSchemaService;
	}

	@GetMapping
	public ResponseEntity<List<FormSchema>> findAllFroms(HttpSession session) {

		String userId = (String) session.getAttribute("USER_ID");

		List<FormSchema> formList = formSchemaService.findAllFormsForUser(userId);
		if (formList != null) {
			return ResponseEntity.ok(formList);
		}

		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@GetMapping("/{formId}/view")
	public ResponseEntity<FormSchema> findById(@PathVariable String formId) {

		FormSchema form = formSchemaService.findById(formId);
		boolean isNull = Optional.ofNullable(form).isEmpty();
		return (isNull ? new ResponseEntity<>(HttpStatus.NOT_FOUND) : ResponseEntity.ok(form));

	}

	@GetMapping("/{formId}/edit")
	public ResponseEntity<FormSchema> editForm(@PathVariable String formId, HttpSession session) {

		if (!formSchemaService.doesFormExist(formId)) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		FormSchema form = formSchemaService.editForm(formId, session);
		boolean isNull = Optional.ofNullable(form).isEmpty();
		return (isNull ? new ResponseEntity<>(HttpStatus.FORBIDDEN) : ResponseEntity.ok(form));

	}

	@PostMapping
	public ResponseEntity<Notification> insertFormSchema(@RequestBody FormDTO form, HttpSession session) {

		formSchemaService.insertFormSchema(form, session);
		var note = form.getNotification();

		return (note.hasErrors() ? new ResponseEntity<>(note, HttpStatus.BAD_REQUEST)
				: new ResponseEntity<>(note, HttpStatus.CREATED));

	}

	@PutMapping("/{formId}")
	public ResponseEntity<Notification> updateFormSchema(@PathVariable String formId, @RequestBody FormDTO form,
			HttpSession session) {

		if (!(formSchemaService.findById(formId).getUserId().equals((String) session.getAttribute("USER_ID"))))
			return new ResponseEntity<>(HttpStatus.FORBIDDEN);

		formSchemaService.updateFormSchema(formId, form);
		var note = form.getNotification();

		return (note.hasErrors() ? new ResponseEntity<>(note, HttpStatus.BAD_REQUEST)
				: new ResponseEntity<>(note, HttpStatus.OK));

	}

	@DeleteMapping("/{formId}")
	public ResponseEntity<String> deleteForm(@PathVariable String formId, HttpSession session) {
		formSchemaService.deleteForm(formId);
		return new ResponseEntity<>("Deleted", HttpStatus.OK);
	}

}
