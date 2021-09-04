package me.realpraveen.forms.Repository.SpringHelperRepository.ResponseHelper;

import com.mongodb.client.result.UpdateResult;

import me.realpraveen.forms.Model.ResponseSchema;

public interface ReponseHelperRepository {
	UpdateResult pushResponse(String formId, ResponseSchema repsonse);
}
