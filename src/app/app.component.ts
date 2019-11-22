import {Component} from '@angular/core';
import {WebsocketService} from './websocket/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dobby-overview';
  listening = false;

  constructor(private broker: WebsocketService) {
    broker.connect('ws://localhost:1884').subscribe(event => {
      this.handle(JSON.parse(event.data));
    });
  }

  private handle(parsed: any) {
    console.log(parsed);
    switch (parsed.topic) {
      case 'hermes/hotword/default/detected':
        this.listening = true;
        break;
      case 'hermes/hotword/toggleOff':
        this.listening = true;
        break;
      case 'hermes/hotword/toggleOn':
        this.listening = false;
        break;
    }
  }
}
