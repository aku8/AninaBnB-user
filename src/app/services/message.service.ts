import { Injectable } from '@angular/core';
import { message } from '../models';
import { MessagesPage } from '../messages/messages.page';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messages: Array<message> = new Array();
  constructor() { }

  getMessages(){
    this.messages = [];

    let message1 = new message();
    message1.sender = "Leah Wang";
    message1.message = "Please take my home.."
    message1.id = 1;

    let message2 = new message();
    message2.sender = "Jen Mashaal";
    message2.message = "Can I help you?";
    message2.id = 2;

    this.messages.push(message1,message2);
  }

}
