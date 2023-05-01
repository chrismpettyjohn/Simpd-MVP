import {Observable} from 'rxjs';

export interface Session {
  id: number;
  userID: number;
}

export interface SessionFindOneInput {
  id: number;
}

export interface SessionService {
  GetSession(input: SessionFindOneInput): Observable<Session | null>;
}
