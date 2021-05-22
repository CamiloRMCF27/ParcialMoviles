import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { FormControl } from '@angular/forms';
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  // emailCtrl = new FormControl('',[]);

  // image: string;

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }


  nombre;
  apellido;
  edad;
  t_doc;
  n_doc;
  sexo;
  telefono;
  correo;
  direccion;
  carrera;
  jornada;
  url = 'http://localhost/pruebaIonicDB/index.php';

  formsend(){
    const datosDb = {
      "nombre":this.nombre,
      "apellido":this.apellido,
      "edad":this.edad,
      "t_doc":this.t_doc,
      "n_doc":this.n_doc,
      "sexo":this.sexo,
      "telefono":this.telefono,
      "correo":this.correo,
      "direccion":this.direccion,
      "carrera":this.carrera,
      "jornada":this.jornada
    };
    this.http.post(this.url, JSON.stringify(datosDb)).subscribe(data=>{
      if(data == 1){
        this.router.navigate(["datosmysql"]);
      }else{
        console.log("Prueba por consola correcta");
      }
    })
  }

  
    // takePicture(){
    //   const options: CameraOptions = {
    //     quality: 100,
    //     destinationType: this.camera.DestinationType.DATA_URL,
    //     encodingType: this.camera.EncodingType.JPEG,
    //     mediaType: this.camera.MediaType.PICTURE,
    //     sourceType: this.camera.PictureSourceType.CAMERA
    //   };
    //   this.camera.getPicture(options)
    //   .then((ImageData) => {
    //     this.image = 'data:image/jpeg;base64,' + ImageData;
    //   }, (err) => {
    //     console.log(err);
    //   });
    // }

  // getEmail(event: Event){
  //   event.preventDefault();
  //   console.log(this.emailCtrl.value);
  // }



  ngOnInit() {
  }


}
