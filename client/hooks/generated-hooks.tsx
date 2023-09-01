import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Author = {
  __typename?: 'Author';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<Author>;
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  parent?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type Event = {
  __typename?: 'Event';
  address?: Maybe<Scalars['String']['output']>;
  booking_count?: Maybe<Scalars['String']['output']>;
  charity?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  eventComments?: Maybe<Array<Maybe<Comment>>>;
  gallery?: Maybe<Array<Maybe<EventGallery>>>;
  genre?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  is_show_text?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  performers?: Maybe<Array<Maybe<Performer>>>;
  poster?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  start_time?: Maybe<Scalars['String']['output']>;
  video?: Maybe<Array<Maybe<EventVideo>>>;
};

export type EventGallery = {
  __typename?: 'EventGallery';
  event?: Maybe<Scalars['Int']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type EventVideo = {
  __typename?: 'EventVideo';
  default_thumbnail?: Maybe<Thumbnail>;
  event: Scalars['Int']['output'];
  high_thumbnail?: Maybe<Thumbnail>;
  id?: Maybe<Scalars['ID']['output']>;
  maxres_thumbnail?: Maybe<Thumbnail>;
  medium_thumbnail?: Maybe<Thumbnail>;
  standard_thumbnail?: Maybe<Thumbnail>;
  title?: Maybe<Scalars['String']['output']>;
  youtube_url?: Maybe<Scalars['String']['output']>;
};

export type FeedbackInput = {
  email: Scalars['String']['input'];
  message: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type FeedbackResponse = {
  __typename?: 'FeedbackResponse';
  success: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  postFeedback: FeedbackResponse;
};


export type MutationPostFeedbackArgs = {
  input: FeedbackInput;
};

export type Participant = {
  __typename?: 'Participant';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  performer: Scalars['Int']['output'];
  photo?: Maybe<Scalars['String']['output']>;
};

export type Performer = {
  __typename?: 'Performer';
  bank_to_support?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  gallery?: Maybe<Array<Maybe<PerformerGallery>>>;
  id: Scalars['ID']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  participant?: Maybe<Array<Maybe<Participant>>>;
  poster?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  social_media?: Maybe<PerformerSocial>;
  video?: Maybe<Array<Maybe<PerformerVideo>>>;
};

export type PerformerGallery = {
  __typename?: 'PerformerGallery';
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  performer: Scalars['Int']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type PerformerSocial = {
  __typename?: 'PerformerSocial';
  instagram?: Maybe<Scalars['String']['output']>;
  telegram?: Maybe<Scalars['String']['output']>;
  tiktok?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  youtube?: Maybe<Scalars['String']['output']>;
};

export type PerformerVideo = {
  __typename?: 'PerformerVideo';
  default_thumbnail?: Maybe<Thumbnail>;
  high_thumbnail?: Maybe<Thumbnail>;
  id?: Maybe<Scalars['ID']['output']>;
  maxres_thumbnail?: Maybe<Thumbnail>;
  medium_thumbnail?: Maybe<Thumbnail>;
  performer: Scalars['Int']['output'];
  standard_thumbnail?: Maybe<Thumbnail>;
  title?: Maybe<Scalars['String']['output']>;
  youtube_url?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  comment?: Maybe<Comment>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  event: Event;
  events: Array<Event>;
  participant?: Maybe<Participant>;
  participants: Array<Participant>;
  performer?: Maybe<Performer>;
  performers?: Maybe<Array<Maybe<Performer>>>;
};


export type QueryCommentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommentsArgs = {
  eventId: Scalars['ID']['input'];
};


export type QueryEventArgs = {
  slug: Scalars['String']['input'];
};


export type QueryParticipantArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPerformerArgs = {
  slug: Scalars['String']['input'];
};

export type Thumbnail = {
  __typename?: 'Thumbnail';
  height?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type GetEventQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetEventQuery = { __typename?: 'Query', event: { __typename?: 'Event', address?: string | null, booking_count?: string | null, charity?: boolean | null, description?: string | null, location?: string | null, poster?: string | null, start_time?: string | null, genre?: string | null, eventComments?: Array<{ __typename?: 'Comment', content?: string | null, created_at?: string | null, parent?: number | null, id?: string | null, author?: { __typename?: 'Author', name?: string | null, email: string } | null } | null> | null } };


export const GetEventDocument = gql`
    query getEvent($slug: String!) {
  event(slug: $slug) {
    address
    booking_count
    charity
    description
    eventComments {
      content
      created_at
      parent
      author {
        name
        email
      }
      id
    }
    location
    poster
    start_time
    genre
  }
}
    `;

/**
 * __useGetEventQuery__
 *
 * To run a query within a React component, call `useGetEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetEventQuery(baseOptions: Apollo.QueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, options);
      }
export function useGetEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, options);
        }
export type GetEventQueryHookResult = ReturnType<typeof useGetEventQuery>;
export type GetEventLazyQueryHookResult = ReturnType<typeof useGetEventLazyQuery>;
export type GetEventQueryResult = Apollo.QueryResult<GetEventQuery, GetEventQueryVariables>;