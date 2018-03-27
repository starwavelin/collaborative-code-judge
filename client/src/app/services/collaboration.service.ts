import { Injectable } from '@angular/core';

declare var io: any;

@Injectable()
export class CollaborationService {

  collaborationSocket: any;

  constructor() { }

  init(editor: any, sessionId: string): void {

    /**
     * window.location.origin: the server location of the current page.
     * ie. cur page is "localhost:3000/problems/5", then 
     * window.location.origin = "http://localhost:3000"
     */
    this.collaborationSocket = io(window.location.origin, { query: 'message=HI' });

    /** 
     * socket.on() -- wait for 'message' event, for now just print 
     * the message received from server side
    */
    this.collaborationSocket.on('message', (msg) => {
      console.log(`The message received from the web server is: ${msg}`);
    })
  }

}
