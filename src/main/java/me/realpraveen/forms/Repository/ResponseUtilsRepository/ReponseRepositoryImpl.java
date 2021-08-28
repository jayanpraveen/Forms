package me.realpraveen.forms.Repository.ResponseUtilsRepository;

import com.mongodb.client.result.UpdateResult;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

import me.realpraveen.forms.Model.ResponseSchema;

@Component
public class ReponseRepositoryImpl implements ReponseRepository {

	private MongoTemplate mongoTemplate;

	@Autowired
	public ReponseRepositoryImpl(MongoTemplate mongoTemplate) {
		this.mongoTemplate = mongoTemplate;
	}

	public UpdateResult pushResponse(ResponseSchema response) {
		var formId = response.getFormId();
		Update update = new Update();
		System.out.println(formId);
		update.push("response", response.getResponse().get(0));
		System.out.println(response.getResponse().get(0));
		Criteria criteria = Criteria.where("_id").is(formId);
		return mongoTemplate.updateFirst(Query.query(criteria), update, "ResponseSchema");

	}

}
