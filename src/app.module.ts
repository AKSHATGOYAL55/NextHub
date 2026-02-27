import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
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






@Module({
  imports: [ EmployeeModule, StudentModule],
  controllers: [AppController, AdminController, ProductController, UserRolesController, ExceptionController],
  providers: [AppService, AdminService]
})
export class AppModule implements NestModule{
  configure(consumer : MiddlewareConsumer){
    consumer.apply(LoggerMiddleware).forRoutes("*")
  }
}
