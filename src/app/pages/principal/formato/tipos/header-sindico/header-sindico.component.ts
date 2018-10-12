import { DatosService } from './../../../../../services/datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-sindico',
  templateUrl: './header-sindico.component.html',
  styleUrls: ['./header-sindico.component.css']
})
export class HeaderSindicoComponent implements OnInit {

  constructor( public _datos: DatosService) { }

  ngOnInit() {
  }

}
