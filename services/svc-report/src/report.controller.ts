import {Controller} from '@nestjs/common';
import {MessagePattern} from '@nestjs/microservices';
import {ReportRepository} from './report.repository';
import {reportEntityToReportWire} from './report.wire';
import {
  ReportFindOneInput,
  ReportWire,
  SVC_REPORT_INTERNAL_EVENT_FIND_ONE_BY_ID,
} from '@simpd/lib-client';

@Controller()
export class ReportController {
  constructor(private readonly reportRepo: ReportRepository) {}

  @MessagePattern(SVC_REPORT_INTERNAL_EVENT_FIND_ONE_BY_ID)
  async reportFindOneByID(data: ReportFindOneInput): Promise<ReportWire> {
    const matchingRole = await this.reportRepo.findOneOrFail({
      where: {
        id: data.id,
      },
    });
    return reportEntityToReportWire(matchingRole);
  }
}
