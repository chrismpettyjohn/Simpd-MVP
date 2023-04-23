import { Entity } from 'typeorm';

export interface DatabaseModuleOptions {
  host: string;
  username: string;
  password: string;
  database: string;
  ssl: boolean;
  entities: typeof Entity[];
}