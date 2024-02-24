import { Comment, Event } from './types';

export type EventModel = Event & {
    eventComments: Comment[];
};
