import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookCart';


    books: Array<any>;  // books object

    constructor() {

      if (localStorage.getItem("Breton_cart")) {  // load from localStorage
          this.books = JSON.parse(localStorage.getItem("Breton_cart"));
      } else {
          this.books = [
              {title: 'Absolute Java', qty: 1, price: 114.95},
              {title: 'Pro HTML5', qty: 1, price: 27.95},
              {title: 'Head First HTML5', qty: 1, price: 27.89}
          ];
        }
      console.log(this.books);
    }

    ngOnInit() {
    }

    // Removes book when "Remove" button pressed
    removeBook = function(index) {
      this.books.splice(index, 1);
    }

    // Adds new book when "New" button pressed
    newBook = function() {
        let newBook = {title: 'New Book', qty: 1, price:10.99}
        this.books.push(newBook);
    }

    // Saves current cart to localStorage when "Save" button pressed
    save = function() {
        localStorage.setItem("Breton_cart", JSON.stringify(this.books));
    }

    // Gets cart's current total
    total = function() {
        let t = 0
        this.books.forEach( function(book) {
            t += book.price * book.qty;
        });
        return t;
    }

}
