package me.realpraveen.forms.Service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import javax.validation.Validation;
import javax.validation.Validator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import me.realpraveen.forms.DTO.User.UserDTO;
import me.realpraveen.forms.Model.User;
import me.realpraveen.forms.Provider.SpringDependencyProvider;
import me.realpraveen.forms.Repository.UserRepository;

@ExtendWith(MockitoExtension.class)
public class AccountServiceTest {

	@Mock
	private UserRepository repository;
	@Mock
	private SpringDependencyProvider dependencyProvider;

	Validator validator = Validation.buildDefaultValidatorFactory().getValidator();

	@InjectMocks
	private AccountService accountService;

	@BeforeEach
	public void initializeTest() {
		when(dependencyProvider.getValidator()).thenReturn(validator);
	}

	@Test
	void registerSuccess() {
		UserDTO dto = new UserDTO("Tom", "tommy_tsunami", "trex@domain.com", "tomspassword");

		when(repository.save(any(User.class))).thenReturn(new User());

		accountService.registerUser(dto);
		verify(repository, times(1)).save(any(User.class));
		assertFalse(dto.getNotification().hasErrors());
	}

	@Test
	void registerFails() {
		UserDTO dto = new UserDTO("", "", "", "");

		accountService.registerUser(dto);

		assertTrue(dto.getNotification().hasErrors());
	}

	@Test
	void ValidationErrorsTest() {

		UserDTO dto = new UserDTO("T", "tom", "trex@d", "tomspassword");

		accountService.registerUser(dto);

		var errors = dto.getNotification().getErrors();

		assertTrue(errors.containsKey("name"));
		assertEquals(errors.get("name"), "{validation.name.size}");

		assertTrue(errors.containsKey("username"));
		assertEquals(errors.get("username"), "{validation.username.size}");

	}

}
