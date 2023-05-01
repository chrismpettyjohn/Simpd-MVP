import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  ObjectLiteral,
  Repository,
} from 'typeorm';

export abstract class BaseRepository<Entity extends ObjectLiteral> {
  constructor(readonly repo: Repository<Entity>) {}

  async create(newEntity: Entity): Promise<Entity> {
    const newObject = await this.repo.save(newEntity);

    // @ts-ignore
    if (!newObject.id) {
      throw new Error('Entity missing `id`');
    }

    // @ts-ignore It's expected for entities to have an `id`
    return this.findOneOrFail({where: {id: newObject.id!}});
  }

  find({...opts}: FindManyOptions<Entity>): Promise<Entity[]> {
    return this.repo.find(opts);
  }

  findOne({...opts}: FindOneOptions<Entity>): Promise<Entity | null> {
    return this.repo.findOne(opts);
  }

  findOneOrFail({...opts}: FindOneOptions<Entity>): Promise<Entity> {
    return this.repo.findOneOrFail(opts);
  }

  async update(
    conditions: FindOptionsWhere<Entity>,
    changes: Partial<Entity>
  ): Promise<void> {
    await this.repo.update(conditions, changes as any);
  }

  async delete(conditions: FindOptionsWhere<Entity>): Promise<void> {
    await this.repo.delete(conditions);
  }

  getInstance(): Repository<Entity> {
    return this.repo;
  }
}
