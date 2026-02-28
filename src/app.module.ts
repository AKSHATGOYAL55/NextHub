import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';

import { EmployeeModule } from './employee/employee.module';
import { StudentModule } from './student/student.module';
import { ProductController } from './product/product.controller';
import { UserRolesController } from './user-roles/user-roles.controller';
import { ExceptionController } from './exception/exception.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { DatabaseService } from './database/database.service';
import { DatabaseController } from './database/database.controller';
import { EnService } from './en/en.service';
import { EnController } from './en/en.controller';






@Module({
  imports: [ EmployeeModule, StudentModule, ConfigModule.forRoot({
    isGlobal: true
  })],
  controllers: [AppController, AdminController, ProductController, UserRolesController, ExceptionController, DatabaseController, EnController],
  providers: [AppService, AdminService, DatabaseService, EnService]
})
export class AppModule implements NestModule{
  configure(consumer : MiddlewareConsumer){
    consumer.apply(LoggerMiddleware).forRoutes("*")
  }
}
