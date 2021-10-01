package me.realpraveen.forms.Repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import javax.annotation.Resource;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import me.realpraveen.forms.Model.User;

@DataMongoTest
@ExtendWith(SpringExtension.class)
public class UserRepositoryTest {

	@Resource
	private UserRepository repo;

	@BeforeEach
	void cleanUp() {
		repo.deleteAll();
	}

	@Test
	void saveSuccess() {
		repo.insert(new me.realpraveen.forms.Model.User("name", "username", "email@dom.com", "password"));
		assertEquals(repo.findAll().get(0).getEmail(), "email@dom.com");
	}

	@Test
	void findByUsername() {
		repo.insert(new User("Tommy", "TommyTimberlake", "tommy@domain.com", "password"));

		var user = repo.findByUsername("TommyTimberlake");
		assertTrue(user.isPresent());
		assertEquals(user.get().getEmail(), "tommy@domain.com");
	}

	@Test
	void saveDuplicateObject() {
		User user = new User("Ann", "Anne", "ann@domain.com", "annpassword");
		User duplicate = new User("Tommy", "TommyTimberlake", "tommy@domain.com", "password");

		user.setId("eureka");
		duplicate.setId("eureka");

		assertThrows(DuplicateKeyException.class, () -> {
			repo.insert(user);
			repo.insert(duplicate);
		});
	}

	@Test
	void existByUsername() {
		User user = new User("Tommy", "tomm", "tommy@domain.com", "password");
		repo.insert(user);
		assertEquals(repo.count(), 1);
		assertTrue(repo.findByUsername("tomm").isPresent());
		assertEquals(repo.findByUsername("tomm").get().getEmail(), "tommy@domain.com");

	}

}
