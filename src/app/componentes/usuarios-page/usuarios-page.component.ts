import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../servicios/database.service'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-usuarios-page',
  templateUrl: './usuarios-page.component.html',
  styleUrls: ['./usuarios-page.component.scss']
})
export class UsuariosPageComponent implements OnInit {

  public perfiles: any;
  public llaves: any;
  form: FormGroup;
  formDelete: FormGroup;
  loading: boolean = false;

  constructor(
    public databaseServices: DatabaseService,
    public modalService: NgbModal,
    private fb: FormBuilder
  ) {

    let perfilesObservable = this.databaseServices.getData('/userProfile');
    perfilesObservable.forEach(element => {
      this.perfiles = element;
    });

    this.databaseServices.getKey("/userProfile").subscribe(item => {
      this.llaves = item
    });
  }


  ngOnInit() {
  }


  onSubmit() {
    const formModel = this.form.value;
    let key = formModel.key;
    let datos = {
      name: formModel.name
    }
    console.log(formModel);
    this.databaseServices.update("/userProfile/" + key, datos);
  }

  onSubmitDelete() {
    const formModel = this.formDelete.value;
    let key = formModel.key;
    console.log(key);
    this.databaseServices.delete("/userProfile/" + key);
  }

  openDelete(content, key) {
    this.modalService.open(content);
    console.log(key);
    this.createFormDelete(key);
  }

  open(content, datos, key) {
    this.modalService.open(content);
    console.log(datos);
    console.log(key);
    this.createForm(datos.name, key);
  }

  createForm(name: string, key: string) {
    this.form = this.fb.group({
      name: [name, Validators.required],
      key: [key, Validators.required]
    });
  }

  createFormDelete(key: string) {
    this.formDelete = this.fb.group({
      key: [key, Validators.required]
    });
  }
}
