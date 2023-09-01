import {Author, EventGallery, EventVideo, Performer} from "./types";

export type EventModel = {
    id: string,
    name: string,
    description: string,
    is_show_text: boolean,
    image: string,
    poster: string,
    charity: boolean,
    start_time: string,
    location: string,
    address: string,
    genre: string,
    booking_count: string,
    slug: string,
    performers: [Performer],
    gallery: [EventGallery],
    video: [EventVideo],
}

export type CommentModel = {
    id: string,
    content: string,
    author: Author,
    parent: number,
    created_at: string,
    updated_at: string,
}