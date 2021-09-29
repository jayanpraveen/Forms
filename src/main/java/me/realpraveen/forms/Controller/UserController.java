package me.realpraveen.forms.Controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.realpraveen.forms.Service.UserService;

@RestController
@RequestMapping(value = "/api/user")
public class UserController {

	private UserService userService;

	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}

	@GetMapping("/details")
	public ResponseEntity<?> getUserDetails(HttpSession session) {

		String userId = (String) session.getAttribute("USER_ID");
		var user = userService.getUserDetails(userId);

		return (user == null ? new ResponseEntity<>(HttpStatus.BAD_REQUEST) : ResponseEntity.ok(user));

	}

}
