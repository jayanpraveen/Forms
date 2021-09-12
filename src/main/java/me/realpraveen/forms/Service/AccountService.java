package me.realpraveen.forms.Service;

import java.util.Optional;
import java.util.Set;

import javax.servlet.http.HttpSession;
import javax.validation.ConstraintViolation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import me.realpraveen.forms.DTO.User.UserDTO;
import me.realpraveen.forms.DTO.User.UserLoginDTO;
import me.realpraveen.forms.Model.User;
import me.realpraveen.forms.Provider.SpringDependencyProvider;
import me.realpraveen.forms.Repository.UserRepository;
import me.realpraveen.forms.Utils.DTOConverter;
import me.realpraveen.forms.Utils.Notification;

@Service
@Slf4j
public class AccountService {

	private UserRepository userRepository;
	private SpringDependencyProvider provider;

	@Autowired
	public AccountService(UserRepository userRepository, SpringDependencyProvider provider) {
		this.userRepository = userRepository;
		this.provider = provider;
	}

	public boolean doesUserExist(String username) {
		return userRepository.existsByUsername(username);
	}

	public void registerUser(UserDTO dto, HttpSession session) {

		Notification note = new Notification();
		if (doesUserExist(dto.getUsername())) {
			note.addError("ERROR", "MESSAGE");
			dto.setNotification(note);
			return;
		}

		Set<ConstraintViolation<UserDTO>> violoations = provider.getValidator().validate(dto);
		dto.setNotification(DTOConverter.convertViolations(violoations));

		User user = new User(dto.getName(), dto.getUsername(), dto.getEmail(), dto.getPassword());

		if (!dto.getNotification().hasErrors()) {
			userRepository.save(user);
		}

	}

	public void loginUser(UserLoginDTO dto, HttpSession session) {

		Optional<User> user = userRepository.findByUsername(dto.getUsername());

		// create session

	}

}
