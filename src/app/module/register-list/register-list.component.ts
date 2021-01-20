// Angular
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Syncfusion
import { GridComponent } from '@syncfusion/ej2-angular-grids';

// Interface
import { Register } from './../../core/model/register.interface';

// Service
import { RegisterService } from './../../core/service/register.service';

@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.scss']
})
export class RegisterListComponent implements OnInit {

  dataSource: Array<Register> = [];
  @ViewChild('grid', { static: false }) grid: GridComponent;

  constructor(
    private registerService: RegisterService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getRegister();
  }

  getRegister() {
    this.registerService.getAllRegister().subscribe(
      (res: any) => {
        this.dataSource = res;
      },
      (error: Error) => {
        console.error("Erro ao buscar a lista de registros: ", error);
      }
    );
  }

  onAdd() {
    this.router.navigate(["register-form"]);
  }

  onUpdate(id: number) {
    this.router.navigate(["register-form", id]);
  }

  onDelete(id: number) {
    this.registerService.deleteRegister(id).subscribe(
      (res: any) => {
          if(this.grid){
            this.getRegister();
            this.grid.refresh();
          }
      },
      (error: Error) => {
        console.error("Erro ao excluir um registro: ", error);
      }
    );
  }

}
