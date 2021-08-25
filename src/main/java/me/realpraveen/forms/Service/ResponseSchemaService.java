package me.realpraveen.forms.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import me.realpraveen.forms.Model.ResponseSchema;
import me.realpraveen.forms.Repository.ResponseSchemaRepository;

@Service
@Slf4j
public class ResponseSchemaService {

	ResponseSchemaRepository responseSchemaRepository;

	@Autowired
	public ResponseSchemaService(ResponseSchemaRepository responseSchemaRepository) {
		this.responseSchemaRepository = responseSchemaRepository;
	}

	public ResponseSchema findById(String id) {
		return responseSchemaRepository.findById(id).orElse(null);
	}

	public List<ResponseSchema> findByFromId(String formId) {
		return responseSchemaRepository.findByFormId(formId);
	}

	public List<ResponseSchema> findAllResponse() {
		return responseSchemaRepository.findAll();
	}

	public ResponseSchema insertResponseSchema(ResponseSchema responseSchema) {
		;
		log.info(responseSchema.getResponse().toString());
		return responseSchemaRepository.insert(responseSchema);
	}

}