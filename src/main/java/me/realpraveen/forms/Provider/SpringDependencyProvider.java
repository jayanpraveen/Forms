package me.realpraveen.forms.Provider;

import javax.validation.Validator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import lombok.Getter;

@Component
@Getter
@Order(Ordered.HIGHEST_PRECEDENCE)
public class SpringDependencyProvider {

	private Validator validator;
	private Environment environment;
	private MessageProvider messageProvider;

	@Autowired
	public SpringDependencyProvider(Validator validator, Environment environment, MessageProvider messageProvider) {
		this.validator = validator;
		this.environment = environment;
		this.messageProvider = messageProvider;
	}

}
