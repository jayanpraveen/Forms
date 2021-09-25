package me.realpraveen.forms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@SpringBootApplication
public class FormsApplication implements ErrorController {

	public static void main(String[] args) {
		SpringApplication.run(FormsApplication.class, args);
	}

	@RequestMapping("/error")
	public String error() {
		return "forward:/index.html";
	}

}
