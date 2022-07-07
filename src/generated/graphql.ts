import type { OperationStore } from '@urql/svelte';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Article = {
  __typename?: 'Article';
  author?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  articles?: Maybe<Array<Maybe<Article>>>;
};

export type ArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type ArticlesQuery = { __typename?: 'Query', articles?: Array<{ __typename?: 'Article', title?: string | null, slug?: string | null, content?: string | null, author?: string | null } | null> | null };


export const ArticlesDocument = gql`
    query Articles {
  articles {
    title
    slug
    content
    author
  }
}
    `;
export type ArticlesQueryStore = OperationStore<ArticlesQuery, ArticlesQueryVariables>;