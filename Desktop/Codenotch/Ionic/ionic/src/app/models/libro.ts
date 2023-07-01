export class Book {
    constructor(
      public id_book: number,
      public title: string,
      public type: string,
      public author: string,
      public price: number,
      public photo: string
    ) {}
  }