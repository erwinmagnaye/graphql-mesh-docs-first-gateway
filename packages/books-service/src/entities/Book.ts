import { ApiProperty } from '@nestjs/swagger';

export class ProductCategoryEntity {
  @ApiProperty()
  displayString: string;

  @ApiProperty()
  otherProp: string;
}

export class TitleEntity {
  @ApiProperty()
  displayString: string;

  @ApiProperty()
  otherProp: string;
}

export class ProductCategory {
  @ApiProperty()
  entity: ProductCategoryEntity;

  @ApiProperty()
  otherProp: string;
}

export class Title {
  @ApiProperty()
  entity: TitleEntity;

  @ApiProperty()
  otherProp: string;
}

export class Entity {
  @ApiProperty()
  productCategory: ProductCategory;

  @ApiProperty()
  title: Title;

  @ApiProperty()
  otherProp: string;
}

export class Book {
  @ApiProperty({ example: '1', type: String })
  id: string;

  @ApiProperty({ example: '1', type: String })
  authorId: string;

  @ApiProperty({ example: '1', type: String })
  categorieId: string;

  @ApiProperty({ example: 'Dune', type: String })
  title: string;

  @ApiProperty()
  entity: Entity;
}