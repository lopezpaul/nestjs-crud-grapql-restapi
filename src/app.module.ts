import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TaskModule } from './tasks/task.module';

const GRAPHQL = GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  include: [TaskModule],
  typePaths: ['./**/*.graphql'],
  definitions: {
    path: join(process.cwd(), 'src/graphql.ts'),
  },
});

@Module({
  imports: [TasksModule, GRAPHQL],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
