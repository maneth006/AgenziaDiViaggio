import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mete.component.html',
  styleUrl: './mete.component.css'
})
export class MeteComponent {
  pagina = "home";
  
  nome1: string = "Parigi";
  data1: string = "1250";
  abitanti1: string = "12.262.544";
  nazione1: string = "Francia";
  capitale1: string = "Parigi";

  nome2: string = "Roma";
  data2: string = "753 a.C.";
  abitanti2: string = "2.873.494";
  nazione2: string = "Italia";
  capitale2: string = "Roma";

  nome3: string = "Londra";
  data3: string = "43 d.C.";
  abitanti3: string = "8.630.083";
  nazione3: string = "Regno Unito";
  capitale3: string = "Londra";

  nome4: string = "New York City";
  data4: string = "1624";
  abitanti4: string = "8.804.190";
  nazione4: string = "Stati Uniti d'America";
  capitale4: string = "Washington D.C.";

  nome5: string = "Parigi";
  data5: string = "1590";
  abitanti5: string = "13.960.324";
  nazione5: string = "Giappone";
  capitale5: string = "Tokyo";

  onClickParigi(event: MouseEvent){
    this.pagina = "Parigi";
    console.log(event);
  }
  onClickRoma(event: MouseEvent){
    this.pagina = "Roma";
    console.log(event);
  }
  onClickLondra(event: MouseEvent){
    this.pagina = "Londra";
    console.log(event);
  }
  onClickNewYork(event: MouseEvent){
    this.pagina = "NewYork";
    console.log(event);
  }
  onClickTokyo(event: MouseEvent){
    this.pagina = "Tokyo";
    console.log(event);
  }

}
