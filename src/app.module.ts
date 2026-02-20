import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
import { ContainerModule } from './container/container.module';
import { EmployeeModule } from './employee/employee.module';






@Module({
  imports: [ContainerModule, EmployeeModule],
  controllers: [AppController, AdminController],
  providers: [AppService, AdminService]
})
export class AppModule {}
