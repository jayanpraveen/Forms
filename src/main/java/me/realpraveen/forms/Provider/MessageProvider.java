package me.realpraveen.forms.Provider;

import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Component;

@Component
public class MessageProvider {

	private MessageSource messageSource;

	@Autowired
	public MessageProvider(MessageSource messageSource) {
		this.messageSource = messageSource;
	}

	public String getMessage(String id) {
		Locale Locale = LocaleContextHolder.getLocale();
		return messageSource.getMessage(id, null, Locale);
	}

}
