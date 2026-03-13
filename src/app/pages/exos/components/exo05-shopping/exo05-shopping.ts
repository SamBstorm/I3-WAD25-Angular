import { Component } from '@angular/core';
import { Exo05ShoppingForm } from "../exo05-shopping-form/exo05-shopping-form";
import { Exo05ShoppingList } from "../exo05-shopping-list/exo05-shopping-list";

@Component({
  selector: 'app-exo05-shopping',
  imports: [Exo05ShoppingForm, Exo05ShoppingList],
  templateUrl: './exo05-shopping.html',
  styleUrl: './exo05-shopping.css',
})
export class Exo05Shopping {}
