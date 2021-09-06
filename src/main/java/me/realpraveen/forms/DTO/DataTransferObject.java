package me.realpraveen.forms.DTO;

import me.realpraveen.forms.Utils.Notification;

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
