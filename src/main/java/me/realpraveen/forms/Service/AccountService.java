package me.realpraveen.forms.Service;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.realpraveen.forms.DTO.User.UserDTO;
import me.realpraveen.forms.DTO.User.UserLoginDTO;
import me.realpraveen.forms.Model.User;
import me.realpraveen.forms.Provider.SpringDependencyProvider;
import me.realpraveen.forms.Repository.UserRepository;

@Service
public class AccountService {

	private UserRepository userRepository;
	private SpringDependencyProvider provider;

	@Autowired
	public AccountService(UserRepository userRepository, SpringDependencyProvider provider) {
		this.userRepository = userRepository;
		this.provider = provider;
	}

	public void registerUser(UserDTO dto, HttpSession session) {

		User user = new User(dto.getName(), dto.getUsername(), dto.getEmail(), dto.getPassword());

		userRepository.save(user);

	}

}
