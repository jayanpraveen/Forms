package me.realpraveen.forms.DTO;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import me.realpraveen.forms.Utils.Notification;

@JsonInclude(value = Include.NON_EMPTY)
public abstract class DataTransferObject {

	protected Notification note = new Notification();

	public Notification getNotification() {
		return note;
	}

	public void setNotification(Notification note) {
		this.note = note;
	}

	public void appendNotfication(Notification note) {
		this.note.getErrors().putAll(note.getErrors());
	}

}
