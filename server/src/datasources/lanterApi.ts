import { RESTDataSource } from '@apollo/datasource-rest';
import { API_BASE_URL } from '../config';
import { FeedbackInput, FeedbackResponse, Participant, Performer } from '../types/types';
import { CommentModel, EventModel } from '../types/models';

export class LanternApi extends RESTDataSource {
    baseURL = API_BASE_URL;

    //Event
    getEvent(slug: string) {
        return this.get<EventModel>(`/events/${slug}`);
    }

    getEvents() {
        return this.get<EventModel[]>('/events');
    }

    //Performer
    getPerformer(slug: string) {
        return this.get<Performer>(`/performers/${slug}`);
    }

    getPerformers() {
        return this.get<Performer[]>(`/performers`);
    }

    //Participant
    getParticipant(id: string) {
        return this.get<Participant>(`/participants/${id}`);
    }

    getParticipants() {
        return this.get<Participant[]>(`/participants`);
    }

    //Comment
    getComments(eventId: string) {
        return this.get<CommentModel[]>(`/events-comment/?event=${eventId}`);
    }

    getComment(id: string) {
        return this.get<CommentModel>(`/events-comment/${id}`);
    }

    //Feedback
    postFeedback(input: FeedbackInput) {
        return this.post<FeedbackResponse>(`/feedback/`, {
            body: input
        });
    }
}
