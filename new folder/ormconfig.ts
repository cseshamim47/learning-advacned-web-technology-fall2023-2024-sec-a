import { Campaign } from 'src/campaign/entities/campaign.entity';
import { RecipientsManagement } from 'src/recipients-management/entities/recipients-management.entity';
import { TaskManagement } from 'src/task-management/entities/task-management.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const ormConfig: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  entities: [TaskManagement, RecipientsManagement, Campaign],
  synchronize: true,
  logging: true,
  schema: 'public',
};

export default ormConfig;