package me.realpraveen.forms.Service;

import java.util.List;

import com.mongodb.client.result.UpdateResult;

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

	public List<ResponseSchema> getOnlyResponse(String formId) {
		return responseSchemaRepository.findByFormId(formId);
	}

	public List<ResponseSchema> findAllResponse() {
		return responseSchemaRepository.findAll();
	}

	public ResponseSchema insertResponseSchema(ResponseSchema response) {
		log.info(response.getResponse().toString());
		return responseSchemaRepository.insert(response);
	}

	public UpdateResult pushResponse(ResponseSchema response) {
		return responseSchemaRepository.pushResponse(response);
	}

}