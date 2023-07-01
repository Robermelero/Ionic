import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Book } from '../models/libro';
import { BookService } from '../shared/book.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage {
  public books!: Book[] 
  public book! :  Book

  constructor(private toastr: ToastrService, private navCtrl: NavController, private bookService: BookService) {
    this.books=[]
  }

  addBook() {
    this.bookService.addBook(this.book).subscribe(() => {
      this.toastr.success('El libro ha sido añadido')
    });
  }

  updateBook() {
    this.bookService.updateBook(this.book.id_book, this.book).subscribe(() => {
      this.toastr.success('El libro seleccionado ha sido modificado')
    });
  }
  

  deleteBook() {
    this.bookService.deleteBook(this.book.id_book).subscribe(() => {
        this.toastr.success('El libro seleccionado ha sido borrado');
      }
    )}
  

  goToMainPage() {
    this.navCtrl.navigateBack('/main');
  }
}