import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Book } from '../models/libro';
import { BookService } from '../shared/book.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  bookId: number;
  books: Book[];

  constructor(
    private toastr: ToastrService,
    private navCtrl: NavController,
    private bookService: BookService
  ) {
    this.bookId = 0;
    this.books = [];
  }

  showBook() {
    if (this.bookId) {
      this.bookService.getBook(this.bookId).subscribe((book) => {
        this.books = [book];
        this.toastr.success('Libro encontrado');
      });
    } else {
      this.bookService.getBooks().subscribe((books) => {
        this.books = books;
        if (books.length > 0) {
          this.toastr.warning('El libro no existe');
        } else {
          this.toastr.info('No hay libros disponibles');
        }
      });
    }
  }

  goToMainPage() {
    this.navCtrl.navigateBack('/main');
  }
}