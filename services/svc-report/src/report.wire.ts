import { ReportWire } from '@simpd/lib-client';
import { ReportEntity } from './report.entity';

export function reportEntityToReportWire(reportEntity: ReportEntity): ReportWire {
  return {
    id: reportEntity.id!,
    key: reportEntity.key,
    name: reportEntity.name,
    description: reportEntity.description,
  };
}
