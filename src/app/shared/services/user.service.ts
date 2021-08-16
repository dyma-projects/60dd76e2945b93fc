import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() { }

  public addUser(user: string): void {
    this.users.value.push(user);
    // Ou alors : this.users.next([...this.users.value, user]);
  }
}
