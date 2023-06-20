import {NotFoundException} from '@nestjs/common';
import {PrivacyClientService} from './privacy-client.service';
import {
  PrivacyCreateOneInput,
  PrivacyFindOneInput,
  PrivacyFindManyInput,
  PrivacyWire,
} from './privacy-client.types';

export class BasePrivacyClientService {
  constructor(
    private readonly serviceKey: string,
    private readonly privacyClientService: PrivacyClientService
  ) {}

  async createOne(
    input: Omit<PrivacyCreateOneInput, 'serviceKey'>
  ): Promise<PrivacyWire> {
    return await this.privacyClientService.createOne({
      ...input,
      serviceKey: this.serviceKey,
    });
  }

  async findOne(
    filter: Omit<PrivacyFindOneInput, 'serviceKey'>
  ): Promise<PrivacyWire> {
    const matchingPrivacy = await this.privacyClientService.findOne({
      ...filter,
      serviceKey: this.serviceKey,
    });

    if (!matchingPrivacy) {
      throw new NotFoundException('Privacy not found');
    }

    return matchingPrivacy;
  }

  async findMany(
    filter: Omit<PrivacyFindManyInput, 'serviceKey'>
  ): Promise<PrivacyWire[]> {
    return await this.privacyClientService.findMany({
      ...filter,
      serviceKey: this.serviceKey,
    });
  }

  async deleteOne(
    filter: Omit<PrivacyFindOneInput, 'serviceKey'>
  ): Promise<boolean> {
    await this.privacyClientService.deleteOne({
      ...filter,
      serviceKey: this.serviceKey,
    });
    return true;
  }
}
