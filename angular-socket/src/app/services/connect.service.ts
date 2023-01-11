import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  title = 'angular-socket';
  socket = io('http://localhost:3000');

  constructor() {
    this.socket.on("connect", () => {
      console.log("Connected - SocketID:",this.socket.id)
    })
   }

   write(inputElem: HTMLInputElement, input: String){
    console.log(input)
    this.socket.emit("message", input)
    inputElem.value =""
   }

   onWriting(length: number){
    if(length === 0) return
    this.socket.emit("inputMessage", length)
   }
}
