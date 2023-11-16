import { TaskManagement } from 'src/task-management/entities/task-management.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const ormConfig: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  entities: [TaskManagement],
  synchronize: true,
  // logging: true,
  schema: 'public',
};

export default ormConfig;