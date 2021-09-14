package me.realpraveen.forms.Utils;

import java.util.UUID;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;;

public class EncoderUtils {

	public static String hashPassword(String password) {
		return new BCryptPasswordEncoder().encode(password);
	}

	public static boolean matchPassword(String password, String hashedPassword) {
		return new BCryptPasswordEncoder().matches(password, hashedPassword);
	}

	public static String generateId() {
		return Base64
				.encodeBase64URLSafeString((String.valueOf(UUID.randomUUID().getMostSignificantBits()).getBytes()));
	}
}
