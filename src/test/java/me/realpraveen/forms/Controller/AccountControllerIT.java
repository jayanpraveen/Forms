package me.realpraveen.forms.Controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import me.realpraveen.forms.DTO.User.UserLoginDTO;
import me.realpraveen.forms.Provider.MessageProvider;
import me.realpraveen.forms.Service.AccountService;

@WebMvcTest(AccountController.class)
@ExtendWith(SpringExtension.class)
public class AccountControllerIT {

	@Autowired
	MockMvc mockMvc;

	@MockBean
	AccountService service;

	@MockBean
	MessageProvider provider;

	@Test
	void loginFieldsEMptyTest() throws Exception {

		MvcResult mvcResult = 
							this.mockMvc.perform(post("/api/login"))
								.andDo(print())
								.andExpect(status().isBadRequest())
								.andReturn();

		assertEquals(mvcResult.getResponse().getContentType(), "application/json");

	}

	@Test
	void loginTest() throws Exception {

		UserLoginDTO dto = new UserLoginDTO("username", "password");

		this.mockMvc.perform(post("/api/login")
					.contentType(MediaType.APPLICATION_JSON)
					.content(convertToJson(dto)))
					.andDo(print())
					.andExpect(status().isOk())
					.andExpect(jsonPath("$.errors").doesNotExist());

	}

	private String convertToJson(Object object) throws JsonProcessingException {
		return new ObjectMapper().writeValueAsString(object);
	}

}