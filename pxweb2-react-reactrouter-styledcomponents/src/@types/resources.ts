import enCommon from '../locales/en/common.json';
import enStatistics from '../locales/en/statistics.json';

const resources = {
  common: typeof enCommon,
  statistics: typeof enStatistics,
} as const;

export default resources;
