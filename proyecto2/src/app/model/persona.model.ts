export class persona{
    id?: number;
    nombreYapellido:String;
    titulo:String;
    acercaDe:String;
    img_Perfil:String;
  getPersona: any;
  subcribe: any;


    constructor(nombreYapellido:String,titulo:String,acercaDe:String,img_Perfil:String){

        this.nombreYapellido = nombreYapellido;
        this.titulo =titulo;
        this.acercaDe=acercaDe;
        this.img_Perfil= img_Perfil;
    }
}