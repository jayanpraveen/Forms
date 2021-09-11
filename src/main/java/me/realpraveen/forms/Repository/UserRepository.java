package me.realpraveen.forms.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import me.realpraveen.forms.Model.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

}
