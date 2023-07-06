import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task/entities/task.entity';
import { DataSource } from 'typeorm';

const GRAPHQL = GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  include: [TaskModule],
  typePaths: ['./**/*.graphql'],
  definitions: {
    path: join(process.cwd(), 'src/graphql.ts'),
  },
});

const DATABASE = TypeOrmModule.forRoot({
  type: 'sqlite',
  database: 'db.sqlite3',
  entities: [Task],
  synchronize: true,
  logging: true,
});

@Module({
  imports: [GRAPHQL, DATABASE, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
