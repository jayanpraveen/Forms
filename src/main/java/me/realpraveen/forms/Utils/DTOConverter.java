package me.realpraveen.forms.Utils;

import java.util.Set;

import javax.validation.ConstraintViolation;

public class DTOConverter {
    public static <T> Notification convertViolations(Set<ConstraintViolation<T>> violations) {
        Notification note = new Notification();
        violations.forEach(error -> note.addError(error.getPropertyPath().toString(), error.getMessage()));
        return note;
    }
}
