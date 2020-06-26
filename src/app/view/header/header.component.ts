import { Component, OnInit } from '@angular/core';
import { Sessao } from 'src/app/services/sessao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  sair(){
    Sessao.removeCliente()
    this.router.navigateByUrl("/")
  }
}
