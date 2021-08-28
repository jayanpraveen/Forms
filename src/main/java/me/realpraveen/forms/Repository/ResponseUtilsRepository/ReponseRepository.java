package me.realpraveen.forms.Repository.ResponseUtilsRepository;

import com.mongodb.client.result.UpdateResult;

import me.realpraveen.forms.Model.ResponseSchema;

public interface ReponseRepository {
	UpdateResult pushResponse(ResponseSchema reposonse);
}
