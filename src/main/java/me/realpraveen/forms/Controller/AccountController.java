package me.realpraveen.forms.Controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;
import me.realpraveen.forms.DTO.User.UserDTO;
import me.realpraveen.forms.DTO.User.UserLoginDTO;
import me.realpraveen.forms.Service.AccountService;

@RestController
@Slf4j
@CrossOrigin("http://localhost:3000")
public class AccountController {

	@Autowired
	private AccountService accountService;

	@GetMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody UserLoginDTO dto, HttpSession session) {

		return ResponseEntity.ok(dto);

	}

	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody UserDTO user, HttpSession session) {

		log.info(user.toString());
		log.info(session.getId());

		accountService.registerUser(user, session);

		return ResponseEntity.ok(user);

	}

}
