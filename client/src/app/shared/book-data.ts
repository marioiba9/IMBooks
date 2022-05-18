import { InMemoryDbService } from 'angular-in-memory-web-api';

export class BookData implements InMemoryDbService {
  createDb() {
    let books = [
      /* {
        id: 0,
        titulo: 'El Quijote',
        precio: 10,
        isbn: 123456,
        genero: 'Novela',
        autor: 'Miguel de Cervantes',
        image:
          'https://imagenes.elpais.com/resizer/dcylXF7I3Oej-dyg6rTSbI3G0Ps=/414x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/7BN7MROFVTFLCFQ2FXZPUC3Y3E.jpg',
      },
      {
        id: 1,
        titulo: 'Codigo da Vinci',
        precio: 12.99,
        isbn: 2312314,
        genero: 'Ficción',
        autor: 'Dan Brown',
        image: 'https://m.media-amazon.com/images/I/61grG7izq2L.jpg',
      },
      {
        id: 2,
        titulo: 'La Suerte De Los Idiotas',
        precio: 14.02,
        isbn: 435345,
        genero: 'Novela',
        autor: 'Roberto Martínez Guzmán',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/41M+wjWzlfL._SX331_BO1,204,203,200_.jpg',
      },
      {
        id: 3,
        titulo: 'La Historia Secreta del Mundo',
        precio: 21.99,
        isbn: 23145453,
        genero: 'Guía',
        autor: 'Jonathan Black',
        image: 'https://m.media-amazon.com/images/I/51IwVLokIML.jpg',
      },
      {
        id: 4,
        titulo: 'El Visitante',
        precio: 9.45,
        isbn: 53463213,
        genero: 'Novela',
        autor: 'Stephen King',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/A1Jw3hC5HPL.jpg',
      },
      {
        id: 5,
        titulo: 'Steve Jobs',
        precio: 10.45,
        isbn: 97864576,
        genero: 'Biografía',
        autor: 'Walter Isaacson',
        image: 'https://m.media-amazon.com/images/I/41kbx7BGEKL.jpg',
      }, */
    ];
    return { books: books };
  }
}
