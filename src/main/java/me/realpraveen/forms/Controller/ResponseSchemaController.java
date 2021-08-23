package me.realpraveen.forms.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.realpraveen.forms.Model.ResponseSchema;
import me.realpraveen.forms.Service.ResponseSchemaService;

@RestController
@RequestMapping(value = "/res")
public class ResponseSchemaController {

	ResponseSchemaService responseSchemaService;

	@Autowired
	public ResponseSchemaController(ResponseSchemaService responseSchemaService) {
		this.responseSchemaService = responseSchemaService;
	}

	@GetMapping
	public List<ResponseSchema> findAllResposne() {
		return responseSchemaService.findAllResponse();
	}

	@GetMapping("/{id}")
	public ResponseSchema findById(@PathVariable String id) {
		return responseSchemaService.findById(id);
	}

	@GetMapping("/form/{formId}")
	public List<ResponseSchema> findByFormId(@PathVariable String formId) {
		return responseSchemaService.findByFromId(formId);
	}

	@PostMapping
	public ResponseSchema insertResponseSchema(@RequestBody ResponseSchema responseSchema) {
		return responseSchemaService.insertResponseSchema(responseSchema);

	}

}