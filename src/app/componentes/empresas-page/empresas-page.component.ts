import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../servicios/database.service'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-empresas-page',
  templateUrl: './empresas-page.component.html',
  styleUrls: ['./empresas-page.component.scss']
})
export class EmpresasPageComponent implements OnInit {

  public contenedores: any;
  public llaves: any;
  form: FormGroup;
  formDelete: FormGroup;
  loading: boolean = false;

  constructor(
    public databaseServices: DatabaseService,
    public modalService: NgbModal,
    private fb: FormBuilder
  ) {

    let cubesObservable = this.databaseServices.getData('/cubes');
    cubesObservable.forEach(element => {
      this.contenedores = element;
    });

    this.databaseServices.getKey("/cubes").subscribe(item => {
      this.llaves = item
    });
  }


  ngOnInit() {
  }


  onSubmit() {
    const formModel = this.form.value;
    let key = formModel.key;
    let datos= {
      title:formModel.title,
      dir:formModel.dir
    }
    console.log(formModel);
    this.databaseServices.update("/cubes/"+key,datos);
  }

  onSubmitDelete(){
    const formModel = this.formDelete.value;
    let key = formModel.key;
    console.log(key);
    this.databaseServices.delete("/cubes/"+key);
  }

  openDelete(content,key){
    this.modalService.open(content);
    console.log(key);
    this.createFormDelete(key);
  }

  open(content, datos, key) {
    this.modalService.open(content);
    console.log(datos);
    console.log(key);
    this.createForm(datos.title,datos.dir,key);
  }

  createForm(title:string,dir:string,key:string) {
    this.form = this.fb.group({
      title: [title, Validators.required],
      dir: [dir, Validators.required],
      key: [key, Validators.required]
    });
  }

  createFormDelete(key:string){
    this.formDelete = this.fb.group({
      key: [key, Validators.required]
    });
  }
}
