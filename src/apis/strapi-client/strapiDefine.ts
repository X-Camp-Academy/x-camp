/**
 * 封装的接口原型 请看 ：https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/api-parameters.html
 */

// strapi 请求  公共 Filters  类型
export interface FilterType<T> {
  $eq?: T;
  $eqi?: T;
  $ne?: T;
  $lt?: T;
  $lte?: T;
  $gt?: T;
  $gte?: T;
  $in?: Array<T>;
  $notIn?: Array<T>;
  $contains?: T;
  $notContains?: T;
  $containsi?: T;
  $notContainsi?: T;
  $null?: boolean;
  $notNull?: boolean;
  $between?: T;
  $startsWith?: T;
  $startsWithi?: T;
  $endsWith?: T;
  $endsWithi?: T;
  // $or	Joins the filters in an "or" expression
  // $and	Joins the filters in an "and" expression
  // $not	Joins the filters in an "not" expression
}

//  strapi 请求 公用  Filters 类型
export interface AndOrFilters<FilterType> {
  $or?: Array<FilterType>;
  $and?: Array<FilterType>;
}

//  给表字段添加 Filter规则
export type FilterFields<TableFields> = {
  [p in keyof TableFields]: FilterType<TableFields[p]>;
};

// Strapi 公有字段
export interface strapiPublicFields {
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  id?: number;
}

// 将 Fields 的key 转换成  "key:desc"
export type sortDesc<Fields> = {
  [p in keyof Fields as `${string & p}:desc`]: Fields[p];
};

export interface Pagination {
  page?: number;
  pageSize?: number;
  start?: number;
  limit?: number;
  withCount?: boolean;
}

// strapi 公共 请求
export interface StrapiRequest<Fields extends strapiPublicFields> {
  populate?: Array<keyof Fields> | '*';
  fields?: Array<keyof Fields>;
  filters?: Partial<FilterFields<Fields>> | AndOrFilters<FilterFields<Fields>>; // 请求筛选
  sort?: Array<keyof Fields> | Array<keyof sortDesc<Fields>>; // 按照字段排序  'key:desc' 降序   'key:asc' or 'key'  升序
  pagination?: Pagination;
}

export interface StrapiResponseDataItem<T> {
  attributes: T;
  id: number;
}
//   strapi 公共响应
export interface StrapiResponse<Fields extends strapiPublicFields> {
  data: Array<StrapiResponseDataItem<Fields>>;
  meta?: {
    pagination?: {
      page?: number;
      pageCount?: number;
      pageSize?: number;
      total?: number;
    };
  };
}

// 单个记录的响应
export interface StrapiResponseSingleDataItem<T> {
  data: StrapiResponseDataItem<T>;
}

export interface StrapiMediaAttributes {
  attributes: {
    alternativeText: string;
    caption: string;
    createdAt: string;
    ext: string;
    formats: {
      thumbnail: {
        ext: string;
        hash: string;
        height: number;
        mime: string;
        name: string;
        path: string;
        size: number;
        url: string;
        width: number;
      };
    };
    hash: string;
    height: number;
    mime: string;
    name: string;
    previewUrl: string;
    provider: string;
    provider_metadata: string;
    size: number;
    updatedAt: string;
    url: string;
    width: number;
  };
  id: number;
}

export interface StrapiMedia {
  data: StrapiMediaAttributes;
}

export interface StrapiMedias {
  data: StrapiMediaAttributes[];
}
