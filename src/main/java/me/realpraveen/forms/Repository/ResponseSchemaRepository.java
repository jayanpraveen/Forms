package me.realpraveen.forms.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import me.realpraveen.forms.Model.ResponseSchema;

@Repository
public interface ResponseSchemaRepository extends MongoRepository<ResponseSchema, String> {
	List<ResponseSchema> findByFormId(String formId);
}
