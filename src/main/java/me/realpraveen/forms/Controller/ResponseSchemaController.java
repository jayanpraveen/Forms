package me.realpraveen.forms.Controller;

import com.mongodb.client.result.UpdateResult;

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

import me.realpraveen.forms.DTO.ResponseDTO;
import me.realpraveen.forms.Model.ResponseSchema;
import me.realpraveen.forms.Service.ResponseSchemaService;

@RestController
@RequestMapping(value = "/res")
@CrossOrigin("http://localhost:3000")
public class ResponseSchemaController {

	ResponseSchemaService responseSchemaService;

	@Autowired
	public ResponseSchemaController(ResponseSchemaService responseSchemaService) {
		this.responseSchemaService = responseSchemaService;
	}

	@GetMapping("/{formId}")
	public ResponseEntity<ResponseDTO> getResponse(@PathVariable String formId) {
		return ResponseEntity.ok(responseSchemaService.buildResponse(formId));
	}

	@PostMapping
	public ResponseEntity<ResponseSchema> insertResponseSchema(@RequestBody ResponseSchema response) {
		return new ResponseEntity<>(responseSchemaService.insertResponseSchema(response), HttpStatus.CREATED);
	}

	@PutMapping("/{formId}")
	public ResponseEntity<UpdateResult> pushResponse(@PathVariable String formId,
			@RequestBody ResponseSchema response) {
		return ResponseEntity.ok(responseSchemaService.pushResponse(formId, response));
	}

}