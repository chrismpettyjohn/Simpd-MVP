export interface NotificationWire {
  id: number;
  profileID: number;
  content: string;
  resourceType: string;
  resourceID: number;
  readAt?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface NotificationFindOneInput {
  id?: number;
}

export interface NotificationCreateOneInput<EventMeta extends any> {
  resourceType: string;
  profileID: number;
  eventKey: string;
  eventMetadata: EventMeta;
}
