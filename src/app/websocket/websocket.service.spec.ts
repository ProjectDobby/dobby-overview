import { TestBed } from '@angular/core/testing';

import { WebsocketService } from './websocket.service';

describe('MqttService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebsocketService = TestBed.get(WebsocketService);
    expect(service).toBeTruthy();
  });
});
