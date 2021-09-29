package me.realpraveen.forms.Service;

import java.util.Optional;
import java.util.Set;

import javax.servlet.http.HttpSession;
import javax.validation.ConstraintViolation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.realpraveen.forms.DTO.User.UserDTO;
import me.realpraveen.forms.DTO.User.UserLoginDTO;
import me.realpraveen.forms.Model.User;
import me.realpraveen.forms.Provider.SpringDependencyProvider;
import me.realpraveen.forms.Repository.UserRepository;
import me.realpraveen.forms.Utils.DTOConverter;
import me.realpraveen.forms.Utils.EncoderUtils;
import me.realpraveen.forms.Utils.Notification;

@Service
public class AccountService {

	private UserRepository userRepository;
	private SpringDependencyProvider provider;

	private final String SESSION_USER_ID = "USER_ID";

	@Autowired
	public AccountService(UserRepository userRepository, SpringDependencyProvider provider) {
		this.userRepository = userRepository;
		this.provider = provider;
	}

	public void registerUser(UserDTO dto) {

		Notification note = new Notification();
		if (doesUserExist(dto.getUsername())) {
			note.addError("username", provider.getMessageProvider().getMessage("validation.username.taken"));
			dto.setNotification(note);
			return;
		}

		User user = new User(dto.getName(), dto.getUsername(), dto.getEmail(), dto.getPassword());

		Set<ConstraintViolation<User>> violoations = provider.getValidator().validate(user);
		dto.setNotification(DTOConverter.convertViolations(violoations));

		if (!dto.getNotification().hasErrors()) {
			userRepository.save(user);
		}

	}

	public void loginUser(UserLoginDTO dto, HttpSession session) {

		Notification note = new Notification();

		Set<ConstraintViolation<UserLoginDTO>> violations = provider.getValidator().validate(dto);

		if (!violations.isEmpty()) {
			dto.setNotification(DTOConverter.convertViolations(violations));
			return;
		}

		Optional<User> user = userRepository.findByUsername(dto.getUsername());

		if (user.isPresent()) {
			createSession(user.get(), dto, session);
			return;
		}

		note.addError("username", provider.getMessageProvider().getMessage("validation.login.username.invalid"));
		dto.setNotification(note);

	}

	public void createSession(User user, UserLoginDTO dto, HttpSession session) {
		Notification note = new Notification();

		if (EncoderUtils.matchPassword(dto.getPassword(), user.getHashedPassword())) {
			session.setAttribute(SESSION_USER_ID, user.getId());
			return;
		}

		note.addError("password", provider.getMessageProvider().getMessage("validation.login.password.invalid"));
		dto.setNotification(note);

	}

	public boolean doesUserExist(String username) {
		return userRepository.existsByUsername(username);
	}

}
