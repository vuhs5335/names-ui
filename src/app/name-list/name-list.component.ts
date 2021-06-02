import { Component, OnInit } from '@angular/core';
import { Name } from '../../app/name';
import { NameServiceService } from '../../app/name-service.service';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css']
})
export class NameListComponent implements OnInit {

  names! : Name[];

  constructor(private nameService: NameServiceService) { }

  ngOnInit(){
    this.nameService.findAll().subscribe(data => {
        this.names = data;
    });
  }

}
