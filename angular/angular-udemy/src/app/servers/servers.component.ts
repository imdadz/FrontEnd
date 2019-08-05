import { Component, OnInit } from '@angular/core';

@Component({
  selector:'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
  
})
export class ServersComponent implements OnInit {
    allowNewServer=false;
    serverStatus="No servers found";
    serverName = 'Testing';
  constructor() {
    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000);
   }

  ngOnInit() {
  }

  onServerStatus(){
    this.serverStatus="New Server is available! Name is "+this.serverName;
  }

  onUpdateServer(event: Event){
   this.serverName = (<HTMLInputElement>event.target).value;  
  }

}
