import { TestBed, async, inject } from '@angular/core/testing';

import { JobConnectGuardGuard } from './job-connect-guard.guard';

describe('JobConnectGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobConnectGuardGuard]
    });
  });

  it('should ...', inject([JobConnectGuardGuard], (guard: JobConnectGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
