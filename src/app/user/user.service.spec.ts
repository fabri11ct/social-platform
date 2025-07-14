import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('UserService', () => {

  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(('should get users'),() => {
    service.getUsers().subscribe(users => {
      expect(users.length).toBeGreaterThan(0);
    })
  });
});
