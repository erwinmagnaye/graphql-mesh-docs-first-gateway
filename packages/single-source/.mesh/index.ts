// @ts-nocheck
import { GraphQLResolveInfo } from 'graphql';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  /**
   *
   *
   * Equivalent to GET /books
   */
  books?: Maybe<Array<Maybe<Book>>>;
  /**
   *
   *
   * Equivalent to GET /categories
   */
  booksCategories?: Maybe<Array<Maybe<Category>>>;
};


export type QuerybooksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerybooksCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};

export type Book = {
  authorId: Scalars['String'];
  categoryId: Scalars['String'];
  id: Scalars['String'];
  title: Scalars['String'];
  hoistedProductCategory: ProductCategoryEntity;
  hoistedTitle: TitleEntity;
};

export type Entity = {
  otherProp: Scalars['String'];
  productCategory: ProductCategory;
  title: Title2;
};

export type ProductCategory = {
  otherProp: Scalars['String'];
};

export type ProductCategoryEntity = {
  displayString: Scalars['String'];
  otherProp: Scalars['String'];
};

export type Title2 = {
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Book: ResolverTypeWrapper<Book>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Entity: ResolverTypeWrapper<Entity>;
  ProductCategory: ResolverTypeWrapper<ProductCategory>;
  ProductCategoryEntity: ResolverTypeWrapper<ProductCategoryEntity>;
  Title2: ResolverTypeWrapper<Title2>;
  TitleEntity: ResolverTypeWrapper<TitleEntity>;
  Category: ResolverTypeWrapper<Category>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Int: Scalars['Int'];
  Book: Book;
  String: Scalars['String'];
  Entity: Entity;
  ProductCategory: ProductCategory;
  ProductCategoryEntity: ProductCategoryEntity;
  Title2: Title2;
  TitleEntity: TitleEntity;
  Category: Category;
  Boolean: Scalars['Boolean'];
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  books?: Resolver<Maybe<Array<Maybe<ResolversTypes['Book']>>>, ParentType, ContextType, Partial<QuerybooksArgs>>;
  booksCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType, Partial<QuerybooksCategoriesArgs>>;
}>;

export type BookResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = ResolversObject<{
  authorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  categoryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hoistedProductCategory?: Resolver<ResolversTypes['ProductCategoryEntity'], ParentType, ContextType>;
  hoistedTitle?: Resolver<ResolversTypes['TitleEntity'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EntityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Entity'] = ResolversParentTypes['Entity']> = ResolversObject<{
  otherProp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productCategory?: Resolver<ResolversTypes['ProductCategory'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['Title2'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductCategory'] = ResolversParentTypes['ProductCategory']> = ResolversObject<{
  otherProp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoryEntityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductCategoryEntity'] = ResolversParentTypes['ProductCategoryEntity']> = ResolversObject<{
  displayString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  otherProp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Title2Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Title2'] = ResolversParentTypes['Title2']> = ResolversObject<{
  otherProp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TitleEntityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TitleEntity'] = ResolversParentTypes['TitleEntity']> = ResolversObject<{
  displayString?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  otherProp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Book?: BookResolvers<ContextType>;
  Entity?: EntityResolvers<ContextType>;
  ProductCategory?: ProductCategoryResolvers<ContextType>;
  ProductCategoryEntity?: ProductCategoryEntityResolvers<ContextType>;
  Title2?: Title2Resolvers<ContextType>;
  TitleEntity?: TitleEntityResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
}>;


import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace BooksTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  /**
   *
   *
   * Equivalent to GET /books
   */
  books?: Maybe<Array<Maybe<Book>>>;
  /**
   *
   *
   * Equivalent to GET /categories
   */
  booksCategories?: Maybe<Array<Maybe<Category>>>;
};


export type QuerybooksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerybooksCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};

export type Book = {
  authorId: Scalars['String'];
  categoryId: Scalars['String'];
  id: Scalars['String'];
  title: Scalars['String'];
  hoistedProductCategory: ProductCategoryEntity;
  hoistedTitle: TitleEntity;
};

export type Entity = {
  otherProp: Scalars['String'];
  productCategory: ProductCategory;
  title: Title2;
};

export type ProductCategory = {
  otherProp: Scalars['String'];
};

export type ProductCategoryEntity = {
  displayString: Scalars['String'];
  otherProp: Scalars['String'];
};

export type Title2 = {
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

    }
    export type QueryBooksSdk = {
  /** 

Equivalent to GET /books **/
  books: InContextSdkMethod<BooksTypes.Query['books'], BooksTypes.QuerybooksArgs, MeshContext>,
  /** 

Equivalent to GET /categories **/
  booksCategories: InContextSdkMethod<BooksTypes.Query['booksCategories'], BooksTypes.QuerybooksCategoriesArgs, MeshContext>
};

export type MutationBooksSdk = {

};

export type SubscriptionBooksSdk = {

};

export type BooksContext = {
      ["Books"]: { Query: QueryBooksSdk, Mutation: MutationBooksSdk, Subscription: SubscriptionBooksSdk },
    };

export type MeshContext = BooksContext & BaseMeshContext;


import { getMesh } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { fileURLToPath } from '@graphql-mesh/utils';

const importedModules: Record<string, any> = {

};

const baseDir = pathModule.join(__dirname, '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  if (!(relativeModuleId in importedModules)) {
    throw new Error(`Cannot find module '${relativeModuleId}'.`);
  }
  return Promise.resolve(importedModules[relativeModuleId]);
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: 'ts',
}), {
  readonly: true,
  validate: false
});


                import { findAndParseConfig } from '@graphql-mesh/cli';
                function getMeshOptions() {
                  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
                  return findAndParseConfig({
                    dir: baseDir,
                    artifactsDir: ".mesh",
                    configName: "mesh",
                  });
                }
              

export const documentsInSDL = /*#__PURE__*/ [];

export async function getBuiltMesh(): Promise<MeshInstance<MeshContext>> {
  const meshConfig = await getMeshOptions();
  return getMesh<MeshContext>(meshConfig);
}

export async function getMeshSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const { sdkRequesterFactory } = await getBuiltMesh();
  return getSdk<TOperationContext>(sdkRequesterFactory(globalContext));
}

export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;