package me.realpraveen.forms.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ServiceHelper {

	private FormSchemaService formSchemaService;

	@Autowired
	public ServiceHelper(FormSchemaService formSchemaService) {
		this.formSchemaService = formSchemaService;
	}

	public FormSchemaService getFormService() {
		return formSchemaService;
	}

}
