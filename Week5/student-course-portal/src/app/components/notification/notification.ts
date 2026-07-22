import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { NotificationService } from '../../services/notification';

/**
 * NotificationComponent provides NotificationService in its own providers array.
 * This creates a NEW instance of NotificationService scoped to this component subtree,
 * completely separate from any other NotificationService instance elsewhere in the app.
 * Each component that declares a provider gets its own isolated instance — this is
 * different from root-level (providedIn: 'root') providers which are true application singletons.
 */
@Component({
  selector: 'app-notification',
  imports: [NgFor, NgIf],
  providers: [NotificationService],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class Notification implements OnInit {
  messages: string[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    // Seed a sample notification to demonstrate the scoped service
    this.notificationService.add('Welcome to the Student Course Portal!');
    this.messages = this.notificationService.getMessages();
  }
}
