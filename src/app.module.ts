import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';

import { EmployeeModule } from './employee/employee.module';
import { StudentModule } from './student/student.module';
import { ProductController } from './product/product.controller';






@Module({
  imports: [ EmployeeModule, StudentModule],
  controllers: [AppController, AdminController, ProductController],
  providers: [AppService, AdminService]
})
export class AppModule {}
