import {Observable} from 'rxjs';

export interface SessionWire {
  id: number;
  userID: number;
}

export interface SessionFindOneInput {
  id: number;
}

export interface SessionService {
  GetSession(input: SessionFindOneInput): Observable<SessionWire | null>;
}
