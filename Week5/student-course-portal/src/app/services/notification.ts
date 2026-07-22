import { Injectable } from '@angular/core';

@Injectable()   // No providedIn — this service is provided at the component level
export class NotificationService {
  private messages: string[] = [];

  add(message: string): void {
    this.messages.push(message);
  }

  getMessages(): string[] {
    return this.messages;
  }

  clear(): void {
    this.messages = [];
  }
}
