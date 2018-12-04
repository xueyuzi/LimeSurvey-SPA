import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
fdescribe('ApiService', () => {
  let service :ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientModule]})
    service = TestBed.get(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("should return session key",(done)=>{
    service.get_session_key("admin","123456")
    .then((session_key)=>{
      expect(session_key).toBeTruthy();
      done();
    });
  })
  it("should return error message",(done)=>{
    service.get_session_key("admin","123")
    .catch(message=>{
      expect((message)=>{
        expect(message).toBeTruthy();
        done();
      })
      
    });
  })
});
