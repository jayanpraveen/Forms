package me.realpraveen.forms.Service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import me.realpraveen.forms.DTO.User.UserDetailsDTO;
import me.realpraveen.forms.Repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;

	public UserDetailsDTO getUserDetails(String userId) {

		var user = repository.findById(userId).orElse(null);

		if (user == null) {
			return null;
		}

		return new UserDetailsDTO(user.getName(), user.getUsername(), user.getEmail());

	}

}
