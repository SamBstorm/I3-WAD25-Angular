import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { IShoppingDetail } from '../models/ishopping-detail';

@Injectable({
  providedIn: 'root',
})
export class Shopping {
  private _productList : WritableSignal<IShoppingDetail[]>;
  public get productList() : Signal<IShoppingDetail[]>{
    return this._productList;
  }

  constructor(){
    this._productList = signal<IShoppingDetail[]>([]);
  }

  public addProduct(name : string, quantity : number = 1) : void {
    let index : number = this.productList().findIndex(sd => sd.productName == name);
    if(index != -1){
      this._productList.update(list => {
        list[index].quantity += quantity;
        return list;
      } );
    }
    else{
      this._productList.update(list => 
        [...list, {productName : name, quantity : quantity}]
      );
    }
    //console.log(this.productList());
  }

  public deleteProduct(name : string) : void{
    let index : number = this.productList().findIndex(sd => sd.productName == name);
    if(index == -1) throw new Error(`Le produit '${name}' n'est pas dans la liste.`);
    this._productList.update(list => list.filter(sd => sd.productName != name));
  }

  public increaseQuantity(name : string){
    let index : number = this.productList().findIndex(sd => sd.productName == name);
    if(index == -1) throw new Error(`Le produit '${name}' n'est pas dans la liste.`);    
    this._productList.update(list => {
        list[index].quantity ++;
        return list;
      } );
  }

  
  public decreaseQuantity(name : string){
    let index : number = this.productList().findIndex(sd => sd.productName == name);
    if(index == -1) throw new Error(`Le produit '${name}' n'est pas dans la liste.`);
    if(this.productList()[index].quantity == 1){
      this.deleteProduct(name);
    }
    else{
      this._productList.update(list => {
          list[index].quantity --;
          return list;
        } );
    }
  }
}
