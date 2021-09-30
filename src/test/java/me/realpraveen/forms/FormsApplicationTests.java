package me.realpraveen.forms;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.web.server.LocalServerPort;

import me.realpraveen.forms.Controller.AccountController;
import me.realpraveen.forms.Controller.FormSchemaController;
import me.realpraveen.forms.Controller.ResponseSchemaController;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
class FormsApplicationTests {

	@LocalServerPort
	private int port;

	private AccountController accountController;
	private FormSchemaController formController;
	private ResponseSchemaController responseController;

	@Autowired
	public FormsApplicationTests(AccountController accountController, FormSchemaController formController,
			ResponseSchemaController responseController) {
		this.accountController = accountController;
		this.formController = formController;
		this.responseController = responseController;
	}

	@Test
	void contextLoads() throws Exception {
		assertThat(accountController).isNotNull();
		assertThat(formController).isNotNull();
		assertThat(responseController).isNotNull();
	}

}
