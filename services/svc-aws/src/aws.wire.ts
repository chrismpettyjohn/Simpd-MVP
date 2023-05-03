import { AWSWire } from '@simpd/lib-client';
import { AWSEntity } from './aws.entity';

export function awsEntityToAWSWire(
  awsEntity: AWSEntity
): AWSWire {
  return {
    id: awsEntity.id!,
    userID: awsEntity.userID,
    username: awsEntity.username,
  };
}
