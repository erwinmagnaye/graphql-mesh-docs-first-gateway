import { Injectable } from '@nestjs/common';
import { Book } from './entities/Book';
import { Category } from './entities/Category';

const categories: Category[] = [
  {
    id: '0',
    name: 'Fiction',
  },
  {
    id: '1',
    name: 'French',
  },
];

const books: Book[] = [
  {
    id: '0',
    title: 'Illusion Perdues',
    authorId: '1',
    categorieId: '1',
    entity: {
      productCategory: {
        entity: {
          displayString: 'Category: Illusion Perdues',
          otherProp: ''
        },
        otherProp: ''
      },
      title: {
        entity: {
          displayString: 'Title: Illusion Perdues',
          otherProp: ''
        },
        otherProp: ''
      },
      otherProp: ''
    }
  },
  {
    id: '1',
    title: 'Dune',
    authorId: '0',
    categorieId: '0',
    entity: {
      productCategory: {
        entity: {
          displayString: 'Category: Dune',
          otherProp: ''
        },
        otherProp: ''
      },
      title: {
        entity: {
          displayString: 'Title: Dune',
          otherProp: ''
        },
        otherProp: ''
      },
      otherProp: ''
    }
  },
];

@Injectable()
export class AppService {
  listBooks(): Book[] {
    return books;
  }

  findOneBook(id: string): Book | null {
    return books.find((b) => b.id === id);
  }

  listBookCategories(): Category[] {
    return categories;
  }
}
