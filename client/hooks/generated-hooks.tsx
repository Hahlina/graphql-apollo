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
  id?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  views?: Maybe<Scalars['Int']['output']>;
};

export type Booking = {
  __typename?: 'Booking';
  event: Scalars['Int']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  unregistered_user?: Maybe<Scalars['Int']['output']>;
  user: Scalars['Int']['output'];
};

export type BookingCreateInput = {
  event: Scalars['Int']['input'];
  status?: InputMaybe<Scalars['Boolean']['input']>;
  unregistered_user?: InputMaybe<Scalars['Int']['input']>;
  user: Scalars['Int']['input'];
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<CommentAuthor>;
  content: Scalars['String']['output'];
  created_at?: Maybe<Scalars['String']['output']>;
  event: Scalars['Int']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  is_edited?: Maybe<Scalars['Boolean']['output']>;
  parent?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type CommentAuthor = {
  __typename?: 'CommentAuthor';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Event = {
  __typename?: 'Event';
  address?: Maybe<Scalars['String']['output']>;
  charity?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  is_show_text?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  price?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  start_time?: Maybe<Scalars['String']['output']>;
};

export type EventDetail = {
  __typename?: 'EventDetail';
  address?: Maybe<Scalars['String']['output']>;
  booking_count?: Maybe<Scalars['String']['output']>;
  charity?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  eventComments?: Maybe<Array<Maybe<Comment>>>;
  gallery?: Maybe<Array<Maybe<Gallery>>>;
  genre?: Maybe<Scalars['String']['output']>;
  google_calendar?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  is_show_text?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  location_link?: Maybe<Scalars['String']['output']>;
  music_band?: Maybe<Array<Maybe<MusicBand>>>;
  name: Scalars['String']['output'];
  poster?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  start_time?: Maybe<Scalars['String']['output']>;
  video?: Maybe<Array<Maybe<Video>>>;
};

export type EventsWithPagination = {
  __typename?: 'EventsWithPagination';
  next?: Maybe<Scalars['String']['output']>;
  previous?: Maybe<Scalars['String']['output']>;
  results?: Maybe<Array<Maybe<Event>>>;
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

export type Gallery = {
  __typename?: 'Gallery';
  event: Scalars['Int']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type Member = {
  __typename?: 'Member';
  id?: Maybe<Scalars['ID']['output']>;
  musicband: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  photo?: Maybe<Scalars['String']['output']>;
};

export type MusicBand = {
  __typename?: 'MusicBand';
  id?: Maybe<Scalars['ID']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
};

export type MusicBandDetail = {
  __typename?: 'MusicBandDetail';
  bank_to_support?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email_band?: Maybe<Scalars['String']['output']>;
  gallery?: Maybe<Array<Maybe<Gallery>>>;
  id: Scalars['ID']['output'];
  is_fan?: Maybe<Scalars['Boolean']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  member?: Maybe<Array<Maybe<Member>>>;
  name: Scalars['String']['output'];
  poster?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  social_network_links?: Maybe<Array<Maybe<SocialNetworkLink>>>;
  song?: Maybe<Array<Maybe<Song>>>;
  video?: Maybe<Array<Maybe<Video>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBooking?: Maybe<Booking>;
  deleteBooking?: Maybe<ResponseStatus>;
  postFeedback: FeedbackResponse;
};


export type MutationCreateBookingArgs = {
  input: BookingCreateInput;
};


export type MutationDeleteBookingArgs = {
  id: Scalars['Int']['input'];
};


export type MutationPostFeedbackArgs = {
  input: FeedbackInput;
};

export type Query = {
  __typename?: 'Query';
  author?: Maybe<Author>;
  authors?: Maybe<Array<Maybe<Author>>>;
  booking?: Maybe<Booking>;
  bookings?: Maybe<Array<Maybe<Booking>>>;
  comment?: Maybe<Comment>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  event: EventDetail;
  events: EventsWithPagination;
  musicBand?: Maybe<MusicBandDetail>;
  musicBands?: Maybe<Array<Maybe<MusicBand>>>;
};


export type QueryAuthorArgs = {
  id: Scalars['Int']['input'];
};


export type QueryBookingArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCommentArgs = {
  id: Scalars['String']['input'];
};


export type QueryCommentsArgs = {
  eventId: Scalars['String']['input'];
};


export type QueryEventArgs = {
  slug: Scalars['String']['input'];
};


export type QueryMusicBandArgs = {
  slug: Scalars['String']['input'];
};

export type ResponseStatus = {
  __typename?: 'ResponseStatus';
  success: Scalars['Boolean']['output'];
};

export type SocialNetworkLink = {
  __typename?: 'SocialNetworkLink';
  id?: Maybe<Scalars['Int']['output']>;
  social_network?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type Song = {
  __typename?: 'Song';
  album?: Maybe<Scalars['Int']['output']>;
  duration?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  is_published?: Maybe<Scalars['Boolean']['output']>;
  musicband: Scalars['Int']['output'];
  single?: Maybe<Scalars['Boolean']['output']>;
  song_image?: Maybe<Scalars['String']['output']>;
  song_name?: Maybe<Scalars['String']['output']>;
  song_url?: Maybe<Scalars['String']['output']>;
  track_number?: Maybe<Scalars['Int']['output']>;
};

export type Thumbnail = {
  __typename?: 'Thumbnail';
  height?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type Video = {
  __typename?: 'Video';
  event: Scalars['Int']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  thumbnail?: Maybe<Thumbnail>;
  title?: Maybe<Scalars['String']['output']>;
  youtube_url?: Maybe<Scalars['String']['output']>;
};

export type GetEventQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetEventQuery = { __typename?: 'Query', event: { __typename?: 'EventDetail', address?: string | null, booking_count?: string | null, charity?: boolean | null, description?: string | null, location?: string | null, poster?: string | null } };

export type CreateFeedbackMutationVariables = Exact<{
  input: FeedbackInput;
}>;


export type CreateFeedbackMutation = { __typename?: 'Mutation', postFeedback: { __typename?: 'FeedbackResponse', success: boolean } };

export type MusicBandQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type MusicBandQuery = { __typename?: 'Query', musicBand?: { __typename?: 'MusicBandDetail', id: string, name: string, slug?: string | null, logo?: string | null, poster?: string | null, description?: string | null, bank_to_support?: string | null, email_band?: string | null, is_fan?: boolean | null, member?: Array<{ __typename?: 'Member', id?: string | null, name: string, photo?: string | null, musicband: number } | null> | null, song?: Array<{ __typename?: 'Song', id?: string | null, song_name?: string | null, song_url?: string | null, single?: boolean | null, song_image?: string | null, track_number?: number | null, duration?: string | null, is_published?: boolean | null, musicband: number, album?: number | null } | null> | null, gallery?: Array<{ __typename?: 'Gallery', id?: string | null, image?: string | null, width?: number | null, height?: number | null, event: number } | null> | null, video?: Array<{ __typename?: 'Video', id?: string | null, event: number, youtube_url?: string | null, title?: string | null, thumbnail?: { __typename?: 'Thumbnail', url?: string | null, width?: number | null, height?: number | null } | null } | null> | null, social_network_links?: Array<{ __typename?: 'SocialNetworkLink', id?: number | null, social_network?: string | null, url: string } | null> | null } | null };


export const GetEventDocument = gql`
    query getEvent($slug: String!) {
  event(slug: $slug) {
    address
    booking_count
    charity
    description
    location
    poster
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
export function useGetEventQuery(baseOptions: Apollo.QueryHookOptions<GetEventQuery, GetEventQueryVariables> & ({ variables: GetEventQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, options);
      }
export function useGetEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, options);
        }
export function useGetEventSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, options);
        }
export type GetEventQueryHookResult = ReturnType<typeof useGetEventQuery>;
export type GetEventLazyQueryHookResult = ReturnType<typeof useGetEventLazyQuery>;
export type GetEventSuspenseQueryHookResult = ReturnType<typeof useGetEventSuspenseQuery>;
export type GetEventQueryResult = Apollo.QueryResult<GetEventQuery, GetEventQueryVariables>;
export const CreateFeedbackDocument = gql`
    mutation CreateFeedback($input: FeedbackInput!) {
  postFeedback(input: $input) {
    success
  }
}
    `;
export type CreateFeedbackMutationFn = Apollo.MutationFunction<CreateFeedbackMutation, CreateFeedbackMutationVariables>;

/**
 * __useCreateFeedbackMutation__
 *
 * To run a mutation, you first call `useCreateFeedbackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFeedbackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFeedbackMutation, { data, loading, error }] = useCreateFeedbackMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateFeedbackMutation(baseOptions?: Apollo.MutationHookOptions<CreateFeedbackMutation, CreateFeedbackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFeedbackMutation, CreateFeedbackMutationVariables>(CreateFeedbackDocument, options);
      }
export type CreateFeedbackMutationHookResult = ReturnType<typeof useCreateFeedbackMutation>;
export type CreateFeedbackMutationResult = Apollo.MutationResult<CreateFeedbackMutation>;
export type CreateFeedbackMutationOptions = Apollo.BaseMutationOptions<CreateFeedbackMutation, CreateFeedbackMutationVariables>;
export const MusicBandDocument = gql`
    query MusicBand($slug: String!) {
  musicBand(slug: $slug) {
    id
    name
    slug
    logo
    poster
    description
    bank_to_support
    email_band
    is_fan
    member {
      id
      name
      photo
      musicband
    }
    song {
      id
      song_name
      song_url
      single
      song_image
      track_number
      duration
      is_published
      musicband
      album
    }
    gallery {
      id
      image
      width
      height
      event
    }
    video {
      id
      event
      youtube_url
      title
      thumbnail {
        url
        width
        height
      }
    }
    social_network_links {
      id
      social_network
      url
    }
  }
}
    `;

/**
 * __useMusicBandQuery__
 *
 * To run a query within a React component, call `useMusicBandQuery` and pass it any options that fit your needs.
 * When your component renders, `useMusicBandQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMusicBandQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useMusicBandQuery(baseOptions: Apollo.QueryHookOptions<MusicBandQuery, MusicBandQueryVariables> & ({ variables: MusicBandQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MusicBandQuery, MusicBandQueryVariables>(MusicBandDocument, options);
      }
export function useMusicBandLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MusicBandQuery, MusicBandQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MusicBandQuery, MusicBandQueryVariables>(MusicBandDocument, options);
        }
export function useMusicBandSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MusicBandQuery, MusicBandQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MusicBandQuery, MusicBandQueryVariables>(MusicBandDocument, options);
        }
export type MusicBandQueryHookResult = ReturnType<typeof useMusicBandQuery>;
export type MusicBandLazyQueryHookResult = ReturnType<typeof useMusicBandLazyQuery>;
export type MusicBandSuspenseQueryHookResult = ReturnType<typeof useMusicBandSuspenseQuery>;
export type MusicBandQueryResult = Apollo.QueryResult<MusicBandQuery, MusicBandQueryVariables>;