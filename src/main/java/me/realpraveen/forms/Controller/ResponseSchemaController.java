package me.realpraveen.forms.Controller;

import java.util.List;

import com.mongodb.client.result.UpdateResult;

import org.springframework.beans.factory.annotation.Autowired;
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
import me.realpraveen.forms.Service.ResponseDTOService;
import me.realpraveen.forms.Service.ResponseSchemaService;

@RestController
@RequestMapping(value = "/res")
@CrossOrigin
public class ResponseSchemaController {

	ResponseSchemaService responseSchemaService;
	ResponseDTOService responseDTOService;

	@Autowired
	public ResponseSchemaController(ResponseSchemaService responseSchemaService,
			ResponseDTOService responseDTOService) {
		this.responseSchemaService = responseSchemaService;
		this.responseDTOService = responseDTOService;
	}

	@GetMapping
	public List<ResponseSchema> findAllResposne() {
		return responseSchemaService.findAllResponse();
	}

	@GetMapping("/{formId}")
	public ResponseDTO getResponse(@PathVariable String formId) {
		return responseDTOService.buildResponseDTO(formId);
	}

	@GetMapping("/only/{formId}")
	public List<ResponseSchema> getOnlyResponse(@PathVariable String formId) {
		return responseSchemaService.getOnlyResponse(formId);
	}

	@PostMapping
	public ResponseSchema insertResponseSchema(@RequestBody ResponseSchema response) {
		return responseSchemaService.insertResponseSchema(response);
	}

	@PutMapping
	public UpdateResult pushResponse(@RequestBody ResponseSchema response) {
		return responseSchemaService.pushResponse(response);
	}

}