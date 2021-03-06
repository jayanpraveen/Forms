package me.realpraveen.forms.Controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.realpraveen.forms.DTO.User.UserDTO;
import me.realpraveen.forms.DTO.User.UserLoginDTO;
import me.realpraveen.forms.Service.AccountService;
import me.realpraveen.forms.Utils.Notification;

@RestController
@RequestMapping("/api")
public class AccountController {

	private AccountService accountService;

	@Autowired
	public AccountController(AccountService accountService) {
		this.accountService = accountService;
	}

	@PostMapping("/login")
	public ResponseEntity<Notification> loginUser(@RequestBody UserLoginDTO user, HttpSession session) {

		accountService.loginUser(user, session);

		if (user.getNotification().hasErrors()) {
			return new ResponseEntity<>(user.getNotification(), HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(HttpStatus.OK);

	}

	@PostMapping("/register")
	public ResponseEntity<Notification> registerUser(@RequestBody UserDTO user, HttpSession session) {

		accountService.registerUser(user);
		if (user.getNotification().hasErrors()) {
			return new ResponseEntity<>(user.getNotification(), HttpStatus.BAD_REQUEST);
		}

		return new ResponseEntity<>(HttpStatus.OK);

	}

	@GetMapping("/logoutd")
	public void logoutUser(HttpSession session) {
		if (session != null) {
			session.invalidate();
		}
	}

}
