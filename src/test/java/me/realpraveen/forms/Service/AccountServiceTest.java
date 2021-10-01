package me.realpraveen.forms.Service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import javax.servlet.http.HttpSession;
import javax.validation.Validation;
import javax.validation.Validator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import me.realpraveen.forms.DTO.User.UserDTO;
import me.realpraveen.forms.DTO.User.UserLoginDTO;
import me.realpraveen.forms.Model.User;
import me.realpraveen.forms.Provider.MessageProvider;
import me.realpraveen.forms.Provider.SpringDependencyProvider;
import me.realpraveen.forms.Repository.UserRepository;

@ExtendWith(MockitoExtension.class)
public class AccountServiceTest {

	@Mock
	UserRepository repository;
	@Mock
	SpringDependencyProvider dependencyProvider;

	@InjectMocks
	AccountService accountService;

	Validator validator = Validation.buildDefaultValidatorFactory().getValidator();

	@Mock
	MessageProvider messageProvider;

	@Mock
	HttpSession session;

	@BeforeEach
	public void initializeTest() {
		when(dependencyProvider.getValidator()).thenReturn(validator);
	}

	@Test
	void registerSuccess() {
		UserDTO dto = new UserDTO("Tom", "tommy_tsunami", "trex@domain.com", "tomspassword");

		when(repository.insert(any(User.class))).thenReturn(null);

		accountService.registerUser(dto);
		verify(repository, times(1)).insert(any(User.class));
		assertFalse(dto.getNotification().hasErrors());
	}

	@Test
	void registerFails() {
		UserDTO dto = new UserDTO("", "", "", "");

		accountService.registerUser(dto);

		assertTrue(dto.getNotification().hasErrors());
	}

	@Test
	void registerValidationErrorsTest() {

		UserDTO dto = new UserDTO("T", "tom", "trex@d", "tomspassword");

		accountService.registerUser(dto);

		var errors = dto.getNotification().getErrors();

		assertTrue(errors.containsKey("name"));
		assertEquals(errors.get("name"), "{validation.name.size}");

		assertTrue(errors.containsKey("username"));
		assertEquals(errors.get("username"), "{validation.username.size}");

	}

	@Test
	void registerWhenUserExist() {

		UserDTO dto = new UserDTO("Tom", "tommy_tsunami", "trex@domain.com", "tomspassword");

		when(dependencyProvider.getMessageProvider()).thenReturn(messageProvider);
		when(repository.existsByUsername(anyString())).thenReturn(true);
		when(messageProvider.getMessage("validation.username.taken"))
				.thenReturn("This username is taken, try a another one.");

		accountService.registerUser(dto);

		var errors = dto.getNotification().getErrors();

		System.out.println(errors.values());

		assertEquals(errors.get("username"), "This username is taken, try a another one.");
	}

	@Test
	void loginSuccess() {

		UserLoginDTO dto = new UserLoginDTO("tommy_tsunami", "tomspassword");
		User user = new User("Tom", "tommy_tsunami", "trex@domain.com", "tomspassword");

		when(repository.findByUsername(anyString())).thenReturn(Optional.of(user));

		accountService.loginUser(dto, session);
		assertFalse(dto.getNotification().hasErrors());

	}

	@Test
	void loginWhenUserNotExist() {

		UserLoginDTO dto = new UserLoginDTO("tommy_tsunami", "tomspassword");

		when(dependencyProvider.getMessageProvider()).thenReturn(messageProvider);
		when(repository.findByUsername(anyString())).thenReturn(Optional.empty());
		when(messageProvider.getMessage("validation.login.username.invalid"))
				.thenReturn("validation.login.username.invalid");

		accountService.loginUser(dto, session);

		var errors = dto.getNotification().getErrors();

		assertTrue(dto.getNotification().hasErrors());
		assertEquals(dto.getNotification().getErrors().size(), 1);
		assertEquals(errors.get("username"), "validation.login.username.invalid");

	}

	@Test
	void loginWhenPasswordIsInvalid() {

		UserLoginDTO dto = new UserLoginDTO("tommy_tsunami", "tomspassword");
		User user = new User("Tom", "tommy_tsunami", "trex@domain.com", "wrongpassword");

		when(dependencyProvider.getMessageProvider()).thenReturn(messageProvider);
		when(repository.findByUsername(anyString())).thenReturn(Optional.of(user));
		when(messageProvider.getMessage("validation.login.password.invalid"))
				.thenReturn("validation.login.password.invalid");

		accountService.loginUser(dto, session);

		var errors = dto.getNotification().getErrors();

		assertTrue(dto.getNotification().hasErrors());
		assertEquals(errors.size(), 1);
		assertEquals(errors.get("password"), messageProvider.getMessage("validation.login.password.invalid"));

	}

	@Test
	void loginWhenPasswordIsEmpty() {

		UserLoginDTO dto = new UserLoginDTO("tommy_tsunami", "");

		when(dependencyProvider.getMessageProvider()).thenReturn(messageProvider);

		accountService.loginUser(dto, session);

		var errors = dto.getNotification().getErrors();
		assertTrue(dto.getNotification().hasErrors());
		assertEquals(errors.get("password"), messageProvider.getMessage("validation.password.empty"));

	}

	@Test
	void loginWhenUsernameIsEmpty() {

		UserLoginDTO dto = new UserLoginDTO("", "password");

		when(dependencyProvider.getMessageProvider()).thenReturn(messageProvider);

		accountService.loginUser(dto, session);

		var errors = dto.getNotification().getErrors();
		assertTrue(dto.getNotification().hasErrors());
		assertEquals(errors.get("username"), messageProvider.getMessage("validation.username.empty"));

	}

	@Test
	void loginWhenAllFieldsIsEmpty() {

		UserLoginDTO dto = new UserLoginDTO("", "");

		when(dependencyProvider.getMessageProvider()).thenReturn(messageProvider);

		accountService.loginUser(dto, session);

		var errors = dto.getNotification().getErrors();
		assertTrue(dto.getNotification().hasErrors());
		assertEquals(errors.get("username"), messageProvider.getMessage("validation.username.empty"));
		assertEquals(errors.get("password"), messageProvider.getMessage("validation.password.empty"));

	}

}
