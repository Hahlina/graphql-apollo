import { RESTDataSource } from '@apollo/datasource-rest';
import type { KeyValueCache } from '@apollo/utils.keyvaluecache';

import type {
    FeedbackInput,
    FeedbackResponse,
    EventsWithPagination,
    MusicBand,
    MusicBandDetail,
    Author,
    BookingCreateInput,
    Booking,
    ResponseStatus
} from '../types/types';
import type { EventModel, CommentModel } from '../types/models';
import { API_BASE_URL } from '../config';
import { API_ROUTES } from '../constants';

export class LanternApi extends RESTDataSource {
    baseURL = API_BASE_URL;
    private readonly token: string;

    constructor(options: { token: string; cache: KeyValueCache }) {
        super(options);
        this.token = options.token;
    }

    //Authors
    getAuthors() {
        return this.get<Author[]>(`/${API_ROUTES.AUTHORS}/`);
    }

    getAuthor(id: number) {
        return this.get<Author>(`/${API_ROUTES.AUTHORS}/${id}`);
    }

    //Event
    getEvent(slug: string) {
        return this.get<EventModel>(`/${API_ROUTES.EVENTS}/${slug}/`);
    }

    getEvents() {
        return this.get<EventsWithPagination>(`/${API_ROUTES.EVENTS}/`);
    }

    //Music band
    getMusicBand(slug: string) {
        return this.get<MusicBandDetail>(`/${API_ROUTES.MUSIC_BANDS}/${slug}/`);
    }

    getMusicBands() {
        return this.get<MusicBand[]>(`/${API_ROUTES.MUSIC_BANDS}/`);
    }

    //Bookings
    getBookings() {
        return this.get<Booking[]>(`/${API_ROUTES.BOOKINGS}/`, {
            headers: {
                Authorization: this.token
            }
        });
    }

    getBooking(id: number) {
        return this.get<Booking>(`/${API_ROUTES.BOOKINGS}/${id}/`, {
            headers: {
                Authorization: this.token
            }
        });
    }

    createBooking(input: BookingCreateInput) {
        return this.post<Booking>(`/${API_ROUTES.BOOKINGS}/`, {
            headers: {
                Authorization: this.token
            },
            body: input
        });
    }

    deleteBooking(id: number) {
        return this.delete<ResponseStatus>(`/${API_ROUTES.BOOKINGS}/${id}/`, {
            headers: {
                Authorization: this.token
            }
        });
    }

    //Comment
    getComments(eventId: string) {
        return this.get<CommentModel[]>(`/${API_ROUTES.EVENTS_COMMENT}/?${API_ROUTES.EVENT}=${eventId}`);
    }

    getComment(id: string) {
        return this.get<CommentModel>(`/${API_ROUTES.EVENTS_COMMENT}/${id}`);
    }

    //Feedback
    postFeedback(input: FeedbackInput) {
        return this.post<FeedbackResponse>(`/${API_ROUTES.FEEDBACK}/`, {
            body: input
        });
    }
}
