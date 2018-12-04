import { TestBed } from '@angular/core/testing';

import { WorkingTableService } from './working-table.service';

describe('WorkingTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkingTableService = TestBed.get(WorkingTableService);
    expect(service).toBeTruthy();
  });
});
