// Angular
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Interface
import { Register } from './../../core/model/register.interface';

// Service
import { RegisterService } from './../../core/service/register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  form: FormGroup;
  idRegistro: any;
  itemInterface: Register;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private registerService: RegisterService
  ) {
    this.newInterface();
  }

  ngOnInit() {
    this.idRegistro = this.activatedRoute.snapshot.paramMap.get("id");
    this.createForm(this.itemInterface);

    if (this.idRegistro) {
      this.getRegister();
    }
  }

  newInterface() {
    this.idRegistro = 0;
    this.itemInterface = {
      Name: "",
      Age: null,
      City: ""
    };
  }

  fillOutForm(res: any) {
    this.itemInterface = res;
    this.createForm(this.itemInterface);
  }

  prepareForm() {
    this.newInterface();
    this.createForm(this.itemInterface);
  }

  get f() {
    return this.form.controls;
  }

  createForm(registerInterface: Register) {
    this.form = new FormGroup({
      Name: new FormControl(registerInterface.Name, [Validators.required]),
      Age: new FormControl(registerInterface.Age, [Validators.required]),
      City: new FormControl(registerInterface.City, [Validators.required])
    });
  }

  getRegister() {
    this.registerService.getRegisterById(this.idRegistro).subscribe(
      (res: any) => {
        this.fillOutForm(res);
      },
      (error: Error) => {
        console.error("Erro ao carregar dados para formulário: ", error);
      }
    );
  }

  onList(){
    this.router.navigate(["register-list"]);
  }

  onSave() {
    if (this.idRegistro === null || this.idRegistro === 0) { // Novo registro
      this.registerService.postRegister(this.form.value).subscribe(
        (res: any) => {
          this.prepareForm();
          alert("Registro salvo com sucesso!");
          this.router.navigate(["register-list"]);
        },
        (error: Error) => {
          console.error("Erro ao salvar um registro: ", error);
        }
      );
    } else { // Edição de registro
      this.registerService.updateRegister(this.form.value, this.idRegistro).subscribe(
        (res: any) => {

          alert("Registro editado com sucesso!");
          this.router.navigate(["register-list"]);
        },
        (error: Error) => {
          console.error("Erro ao editar um registro: ", error);
        }
      );
    }

  }

}
