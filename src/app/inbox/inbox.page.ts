import { Component, OnInit } from '@angular/core';
import { message } from '../models/message.model';
import { NavController } from '@ionic/angular';
import { MessageService } from '../services/message.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

  public messages: Array <message> = new Array();

  constructor(private navCtrl: NavController, private messageService: MessageService) {
    this.messageService.getMessages();
    this.messages = this.messageService.messages;

   }

  ngOnInit() {
  }
  navToMessage(message: message){
    console.log(message);
    this.navCtrl 
      .navigateForward('messages', {
        queryParams: {
          messageSender: message.sender,
          messageId: message.id

        }
      });
    }
  }


