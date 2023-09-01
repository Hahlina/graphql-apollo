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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<CommentModel>;
  Event: ResolverTypeWrapper<EventModel>;
  EventGallery: ResolverTypeWrapper<EventGallery>;
  EventVideo: ResolverTypeWrapper<EventVideo>;
  FeedbackInput: FeedbackInput;
  FeedbackResponse: ResolverTypeWrapper<FeedbackResponse>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Participant: ResolverTypeWrapper<Participant>;
  Performer: ResolverTypeWrapper<Performer>;
  PerformerGallery: ResolverTypeWrapper<PerformerGallery>;
  PerformerSocial: ResolverTypeWrapper<PerformerSocial>;
  PerformerVideo: ResolverTypeWrapper<PerformerVideo>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Thumbnail: ResolverTypeWrapper<Thumbnail>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Author: Author;
  Boolean: Scalars['Boolean']['output'];
  Comment: CommentModel;
  Event: EventModel;
  EventGallery: EventGallery;
  EventVideo: EventVideo;
  FeedbackInput: FeedbackInput;
  FeedbackResponse: FeedbackResponse;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Participant: Participant;
  Performer: Performer;
  PerformerGallery: PerformerGallery;
  PerformerSocial: PerformerSocial;
  PerformerVideo: PerformerVideo;
  Query: {};
  String: Scalars['String']['output'];
  Thumbnail: Thumbnail;
};

export type AuthorResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  booking_count?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  charity?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eventComments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventGallery']>>>, ParentType, ContextType>;
  genre?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  is_show_text?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  performers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Performer']>>>, ParentType, ContextType>;
  poster?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start_time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventVideo']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventGalleryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['EventGallery'] = ResolversParentTypes['EventGallery']> = {
  event?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventVideoResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['EventVideo'] = ResolversParentTypes['EventVideo']> = {
  default_thumbnail?: Resolver<Maybe<ResolversTypes['Thumbnail']>, ParentType, ContextType>;
  event?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  high_thumbnail?: Resolver<Maybe<ResolversTypes['Thumbnail']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  maxres_thumbnail?: Resolver<Maybe<ResolversTypes['Thumbnail']>, ParentType, ContextType>;
  medium_thumbnail?: Resolver<Maybe<ResolversTypes['Thumbnail']>, ParentType, ContextType>;
  standard_thumbnail?: Resolver<Maybe<ResolversTypes['Thumbnail']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  youtube_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeedbackResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['FeedbackResponse'] = ResolversParentTypes['FeedbackResponse']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  postFeedback?: Resolver<ResolversTypes['FeedbackResponse'], ParentType, ContextType, RequireFields<MutationPostFeedbackArgs, 'input'>>;
};

export type ParticipantResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Participant'] = ResolversParentTypes['Participant']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  performer?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PerformerResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Performer'] = ResolversParentTypes['Performer']> = {
  bank_to_support?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gallery?: Resolver<Maybe<Array<Maybe<ResolversTypes['PerformerGallery']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  participant?: Resolver<Maybe<Array<Maybe<ResolversTypes['Participant']>>>, ParentType, ContextType>;
  poster?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  social_media?: Resolver<Maybe<ResolversTypes['PerformerSocial']>, ParentType, ContextType>;
  video?: Resolver<Maybe<Array<Maybe<ResolversTypes['PerformerVideo']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PerformerGalleryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PerformerGallery'] = ResolversParentTypes['PerformerGallery']> = {
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  performer?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PerformerSocialResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PerformerSocial'] = ResolversParentTypes['PerformerSocial']> = {
  instagram?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  telegram?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tiktok?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  youtube?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PerformerVideoResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PerformerVideo'] = ResolversParentTypes['PerformerVideo']> = {
  default_thumbnail?: Resolver<Maybe<ResolversTypes['Thumbnail']>, ParentType, ContextType>;
  high_thumbnail?: Resolver<Maybe<ResolversTypes['Thumbnail']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  maxres_thumbnail?: Resolver<Maybe<ResolversTypes['Thumbnail']>, ParentType, ContextType>;
  medium_thumbnail?: Resolver<Maybe<ResolversTypes['Thumbnail']>, ParentType, ContextType>;
  performer?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  standard_thumbnail?: Resolver<Maybe<ResolversTypes['Thumbnail']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  youtube_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  comment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, Partial<QueryCommentArgs>>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType, RequireFields<QueryCommentsArgs, 'eventId'>>;
  event?: Resolver<ResolversTypes['Event'], ParentType, ContextType, RequireFields<QueryEventArgs, 'slug'>>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType>;
  participant?: Resolver<Maybe<ResolversTypes['Participant']>, ParentType, ContextType, RequireFields<QueryParticipantArgs, 'id'>>;
  participants?: Resolver<Array<ResolversTypes['Participant']>, ParentType, ContextType>;
  performer?: Resolver<Maybe<ResolversTypes['Performer']>, ParentType, ContextType, RequireFields<QueryPerformerArgs, 'slug'>>;
  performers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Performer']>>>, ParentType, ContextType>;
};

export type ThumbnailResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Thumbnail'] = ResolversParentTypes['Thumbnail']> = {
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  Author?: AuthorResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  EventGallery?: EventGalleryResolvers<ContextType>;
  EventVideo?: EventVideoResolvers<ContextType>;
  FeedbackResponse?: FeedbackResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Participant?: ParticipantResolvers<ContextType>;
  Performer?: PerformerResolvers<ContextType>;
  PerformerGallery?: PerformerGalleryResolvers<ContextType>;
  PerformerSocial?: PerformerSocialResolvers<ContextType>;
  PerformerVideo?: PerformerVideoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Thumbnail?: ThumbnailResolvers<ContextType>;
};

