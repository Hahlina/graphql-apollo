import { GraphQLResolveInfo } from 'graphql';
import { EventModel, CommentModel } from './models';
import { DataSourceContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
export type ResolversTypes = {
  Author: ResolverTypeWrapper<Author>;
  Booking: ResolverTypeWrapper<Booking>;
  BookingCreateInput: BookingCreateInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<CommentModel>;
  CommentAuthor: ResolverTypeWrapper<CommentAuthor>;
  Event: ResolverTypeWrapper<Event>;
  EventDetail: ResolverTypeWrapper<EventModel>;
  EventsWithPagination: ResolverTypeWrapper<EventsWithPagination>;
  FeedbackInput: FeedbackInput;
  FeedbackResponse: ResolverTypeWrapper<FeedbackResponse>;
  Gallery: ResolverTypeWrapper<Gallery>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Member: ResolverTypeWrapper<Member>;
  MusicBand: ResolverTypeWrapper<MusicBand>;
  MusicBandDetail: ResolverTypeWrapper<MusicBandDetail>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  ResponseStatus: ResolverTypeWrapper<ResponseStatus>;
  SocialNetworkLink: ResolverTypeWrapper<SocialNetworkLink>;
  Song: ResolverTypeWrapper<Song>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Thumbnail: ResolverTypeWrapper<Thumbnail>;
  Video: ResolverTypeWrapper<Video>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Author: Author;
  Booking: Booking;
  BookingCreateInput: BookingCreateInput;
  Boolean: Scalars['Boolean']['output'];
  Comment: CommentModel;
  CommentAuthor: CommentAuthor;
  Event: Event;
  EventDetail: EventModel;
  EventsWithPagination: EventsWithPagination;
  FeedbackInput: FeedbackInput;
  FeedbackResponse: FeedbackResponse;
  Gallery: Gallery;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Member: Member;
  MusicBand: MusicBand;
  MusicBandDetail: MusicBandDetail;
  Mutation: {};
  Query: {};
  ResponseStatus: ResponseStatus;
  SocialNetworkLink: SocialNetworkLink;
  Song: Song;
  String: Scalars['String']['output'];
  Thumbnail: Thumbnail;
  Video: Video;
};

export type AuthorResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookingResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Booking'] = ResolversParentTypes['Booking']> = {
  event?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  unregistered_user?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  author?: Resolver<Maybe<ResolversTypes['CommentAuthor']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  event?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  is_edited?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentAuthorResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CommentAuthor'] = ResolversParentTypes['CommentAuthor']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  charity?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  is_show_text?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start_time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventDetailResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['EventDetail'] = ResolversParentTypes['EventDetail']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  booking_count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  charity?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eventComments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['Gallery']>>>, ParentType, ContextType>;
  genre?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  google_calendar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  is_show_text?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location_link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  music_band?: Resolver<Maybe<Array<Maybe<ResolversTypes['MusicBand']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  poster?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start_time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video?: Resolver<Maybe<Array<Maybe<ResolversTypes['Video']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventsWithPaginationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['EventsWithPagination'] = ResolversParentTypes['EventsWithPagination']> = {
  next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Event']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeedbackResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['FeedbackResponse'] = ResolversParentTypes['FeedbackResponse']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GalleryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Gallery'] = ResolversParentTypes['Gallery']> = {
  event?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Member'] = ResolversParentTypes['Member']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  musicband?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MusicBandResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['MusicBand'] = ResolversParentTypes['MusicBand']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MusicBandDetailResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['MusicBandDetail'] = ResolversParentTypes['MusicBandDetail']> = {
  bank_to_support?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email_band?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['Gallery']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_fan?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  member?: Resolver<Maybe<Array<Maybe<ResolversTypes['Member']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  poster?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  social_network_links?: Resolver<Maybe<Array<Maybe<ResolversTypes['SocialNetworkLink']>>>, ParentType, ContextType>;
  song?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType>;
  video?: Resolver<Maybe<Array<Maybe<ResolversTypes['Video']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createBooking?: Resolver<Maybe<ResolversTypes['Booking']>, ParentType, ContextType, RequireFields<MutationCreateBookingArgs, 'input'>>;
  deleteBooking?: Resolver<Maybe<ResolversTypes['ResponseStatus']>, ParentType, ContextType, RequireFields<MutationDeleteBookingArgs, 'id'>>;
  postFeedback?: Resolver<ResolversTypes['FeedbackResponse'], ParentType, ContextType, RequireFields<MutationPostFeedbackArgs, 'input'>>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<QueryAuthorArgs, 'id'>>;
  authors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Author']>>>, ParentType, ContextType>;
  booking?: Resolver<Maybe<ResolversTypes['Booking']>, ParentType, ContextType, RequireFields<QueryBookingArgs, 'id'>>;
  bookings?: Resolver<Maybe<Array<Maybe<ResolversTypes['Booking']>>>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<QueryCommentArgs, 'id'>>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType, RequireFields<QueryCommentsArgs, 'eventId'>>;
  event?: Resolver<ResolversTypes['EventDetail'], ParentType, ContextType, RequireFields<QueryEventArgs, 'slug'>>;
  events?: Resolver<ResolversTypes['EventsWithPagination'], ParentType, ContextType>;
  musicBand?: Resolver<Maybe<ResolversTypes['MusicBandDetail']>, ParentType, ContextType, RequireFields<QueryMusicBandArgs, 'slug'>>;
  musicBands?: Resolver<Maybe<Array<Maybe<ResolversTypes['MusicBand']>>>, ParentType, ContextType>;
};

export type ResponseStatusResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['ResponseStatus'] = ResolversParentTypes['ResponseStatus']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SocialNetworkLinkResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SocialNetworkLink'] = ResolversParentTypes['SocialNetworkLink']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  social_network?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SongResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Song'] = ResolversParentTypes['Song']> = {
  album?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  is_published?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  musicband?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  single?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  song_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  song_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  song_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  track_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ThumbnailResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Thumbnail'] = ResolversParentTypes['Thumbnail']> = {
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Video'] = ResolversParentTypes['Video']> = {
  event?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['Thumbnail']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  youtube_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  Author?: AuthorResolvers<ContextType>;
  Booking?: BookingResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  CommentAuthor?: CommentAuthorResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  EventDetail?: EventDetailResolvers<ContextType>;
  EventsWithPagination?: EventsWithPaginationResolvers<ContextType>;
  FeedbackResponse?: FeedbackResponseResolvers<ContextType>;
  Gallery?: GalleryResolvers<ContextType>;
  Member?: MemberResolvers<ContextType>;
  MusicBand?: MusicBandResolvers<ContextType>;
  MusicBandDetail?: MusicBandDetailResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ResponseStatus?: ResponseStatusResolvers<ContextType>;
  SocialNetworkLink?: SocialNetworkLinkResolvers<ContextType>;
  Song?: SongResolvers<ContextType>;
  Thumbnail?: ThumbnailResolvers<ContextType>;
  Video?: VideoResolvers<ContextType>;
};

