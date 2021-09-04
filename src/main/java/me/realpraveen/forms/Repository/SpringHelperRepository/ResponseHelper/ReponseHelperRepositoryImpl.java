package me.realpraveen.forms.Repository.SpringHelperRepository.ResponseHelper;

import com.mongodb.client.result.UpdateResult;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

import me.realpraveen.forms.Model.ResponseSchema;

@Component
public class ReponseHelperRepositoryImpl implements ReponseHelperRepository {

	private MongoTemplate mongoTemplate;

	@Autowired
	public ReponseHelperRepositoryImpl(MongoTemplate mongoTemplate) {
		this.mongoTemplate = mongoTemplate;
	}

	public UpdateResult pushResponse(String formId, ResponseSchema response) {

		Update update = new Update();
		update.push("response", response.getResponse().get(0));

		Criteria criteria = Criteria.where("_id").is(formId);

		return mongoTemplate.updateFirst(Query.query(criteria), update, "ResponseSchema");
	}

}
