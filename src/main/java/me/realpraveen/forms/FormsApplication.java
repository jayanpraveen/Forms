package me.realpraveen.forms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
public class FormsApplication {

	public static void main(String[] args) {
		SpringApplication.run(FormsApplication.class, args);
	}

	@RequestMapping("/error")
	public String error() {
		return "forward:/error";
	}

}
