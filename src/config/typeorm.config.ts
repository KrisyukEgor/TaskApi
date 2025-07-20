import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "root",
  database: "task-manager",
  entities: [__dirname + "/../**/*.orm-entity{.ts,.js}"],
  synchronize: true,
  logging: true,
  migrations: [__dirname + "/migrations/**/*{.ts,.js}"],
};
