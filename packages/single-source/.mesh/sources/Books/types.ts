// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace BooksTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ObjMap: any;
};

export type Query = {
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `http://localhost:3002/`
   * >**Path**: `/books`
   *
   *
   */
  AppController_listBooks?: Maybe<Array<Maybe<Book>>>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `http://localhost:3002/`
   * >**Path**: `/categories`
   *
   *
   */
  AppController_listBookCategories?: Maybe<Array<Maybe<Category>>>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `http://localhost:3002/`
   * >**Path**: `/books/{args.id}`
   *
   *
   */
  AppController_findOne?: Maybe<Book>;
};


export type QueryAppController_findOneArgs = {
  id: Scalars['String'];
};

export type Book = {
  id: Scalars['String'];
  authorId: Scalars['String'];
  categoryId: Scalars['String'];
  title: Scalars['String'];
  hoistedProductCategory: ProductCategoryEntity;
  hoistedTitle: TitleEntity;
};

export type Entity = {
  productCategory: ProductCategory;
  title: Title;
  otherProp: Scalars['String'];
};

export type ProductCategory = {
  otherProp: Scalars['String'];
};

export type ProductCategoryEntity = {
  displayString: Scalars['String'];
  otherProp: Scalars['String'];
};

export type Title = {
  otherProp: Scalars['String'];
};

export type TitleEntity = {
  displayString: Scalars['String'];
  otherProp: Scalars['String'];
};

export type Category = {
  id: Scalars['String'];
  name: Scalars['String'];
};

export type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

  export type QuerySdk = {
      /** 
>**Method**: `GET`
>**Base URL**: `http://localhost:3002/`
>**Path**: `/books`

 **/
  AppController_listBooks: InContextSdkMethod<Query['AppController_listBooks'], {}, MeshContext>,
  /** 
>**Method**: `GET`
>**Base URL**: `http://localhost:3002/`
>**Path**: `/categories`

 **/
  AppController_listBookCategories: InContextSdkMethod<Query['AppController_listBookCategories'], {}, MeshContext>,
  /** 
>**Method**: `GET`
>**Base URL**: `http://localhost:3002/`
>**Path**: `/books/{args.id}`

 **/
  AppController_findOne: InContextSdkMethod<Query['AppController_findOne'], QueryAppController_findOneArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Books"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
