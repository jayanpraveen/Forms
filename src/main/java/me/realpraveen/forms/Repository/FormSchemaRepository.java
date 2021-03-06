package me.realpraveen.forms.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import me.realpraveen.forms.Model.FormSchema;

@Repository
public interface FormSchemaRepository extends MongoRepository<FormSchema, String> {

	List<FormSchema> findByUserId(String userId);

}
