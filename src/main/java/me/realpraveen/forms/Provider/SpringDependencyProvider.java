package me.realpraveen.forms.Provider;

import javax.validation.Validator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import lombok.Getter;

@Component
@Getter
public class SpringDependencyProvider {

	private Validator validator;
	private Environment environment;

	@Autowired
	public SpringDependencyProvider(Validator validator, Environment environment) {
		this.validator = validator;
		this.environment = environment;
	}

}
