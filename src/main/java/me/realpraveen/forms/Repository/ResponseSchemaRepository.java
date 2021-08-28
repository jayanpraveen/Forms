package me.realpraveen.forms.Repository;

import java.util.List;

import com.mongodb.client.result.UpdateResult;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import me.realpraveen.forms.Model.ResponseSchema;
import me.realpraveen.forms.Repository.ResponseUtilsRepository.ReponseRepository;

@Repository
public interface ResponseSchemaRepository extends MongoRepository<ResponseSchema, String>, ReponseRepository {
	List<ResponseSchema> findByFormId(String formId);

	UpdateResult pushResponse(ResponseSchema response);
}
