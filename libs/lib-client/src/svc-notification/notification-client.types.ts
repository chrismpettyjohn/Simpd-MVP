export interface NotificationWire<EventMeta extends NotificationMetadata<any>> {
  id: number;
  profileID: number;
  content: string;
  resourceType: string;
  resourceID: number;
  eventMetadata: EventMeta;
  readAt?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface NotificationFindOneInput {
  id?: number;
}

export enum NotificationResourceType {
  Profile = 'profile',
}

export interface NotificationCreateOneInput<Event extends NotificationEvent> {
  resourceType: NotificationResourceType;
  profileID: number;
  eventKey: Event;
  eventMetadata: NotificationMetadata<Event>;
}

export interface NotificationTypes {
  PROFILE_SUBSCRIPTION_RECEIVED: NotificationProfileSubcriptionReceived;
  PROFILE_TIP_RECEIVED: NotificationProfileTipReceived;
}

export type NotificationEvent = keyof NotificationTypes;
export type NotificationMetadata<N extends NotificationEvent> =
  NotificationTypes[N];

export interface NotificationProfileSubcriptionReceived {
  recipientProfileID: number;
  subscriberProfileID: number;
  subscriptionGroupID: number;
}

export interface NotificationProfileTipReceived {
  tipID: number;
}
