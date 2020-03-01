export class BudgetItem {
// description: string;  podemos omitir esta declaracion y hacerlo directamente en el constructor agregando un public antes de cada uno y eliminando los this.description y number
//  amount: number;

  constructor(public description: string, public amount: number) {
//      this.description =  description;
//      this.amount = amount;
  }
}

//para setear si es income o expenses vamos a definir si amount es menos a cero o mayor a cero