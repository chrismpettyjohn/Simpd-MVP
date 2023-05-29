import {ProfileModel} from '@simpd/lib-client';
import {MessageContactModel} from './message.model';
import {MessageRepository} from './message.repository';
import {GetSession, HasSession, SessionContents} from '@simpd/lib-api';
import {Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';

@Resolver(() => MessageContactModel)
export class MessageContactResolver {
  constructor(private readonly messageRepo: MessageRepository) {}

  @ResolveField(() => ProfileModel)
  profile(@Parent() messageContact: MessageContactModel): ProfileModel {
    return {
      id: messageContact.profileID!,
    };
  }

  @Query(() => [MessageContactModel])
  @HasSession()
  async messageContacts(
    @GetSession() session: SessionContents
  ): Promise<MessageContactModel[]> {
    const contacts: Array<{sending_profile_id: number}> = await this.messageRepo
      .getInstance()
      .query(
        `
      SELECT *
      FROM (
        SELECT sending_profile_id FROM messages.messages WHERE receiving_profile_id = $1
        UNION 
        SELECT receiving_profile_id FROM messages.messages WHERE receiving_profile_id = $1
      )
      AS profile_id
    `,
        [session.profileID]
      );
    return contacts.map(_ => {
      return {
        profileID: _.sending_profile_id,
      };
    });
  }
}
