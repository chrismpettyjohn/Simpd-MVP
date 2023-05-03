export interface Report {
  id: number;
  email: string;
}

export interface ReportFindOneInput {
  id: number;
}

export interface ReportService {
  findOneByID(input: ReportFindOneInput): Report | null;
}
