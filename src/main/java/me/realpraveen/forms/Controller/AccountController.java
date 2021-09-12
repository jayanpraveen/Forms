package me.realpraveen.forms.Controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import me.realpraveen.forms.DTO.User.UserDTO;
import me.realpraveen.forms.DTO.User.UserLoginDTO;
import me.realpraveen.forms.Service.AccountService;

@RestController
@CrossOrigin("http://localhost:3000")
public class AccountController {

	@Autowired
	private AccountService accountService;

	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody UserLoginDTO user, HttpSession session) {

		accountService.loginUser(user, session);

		return ResponseEntity.ok(user);

	}

	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody UserDTO user, HttpSession session) {

		accountService.registerUser(user, session);

		return ResponseEntity.ok(user);

	}

}
