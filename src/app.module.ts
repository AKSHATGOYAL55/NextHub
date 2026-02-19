import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
import { EditorController } from './editor/editor.controller';
import { EditorService } from './editor/editor.service';
import { EditorModule } from './editor/editor.module';



@Module({
  imports: [EditorModule],
  controllers: [AppController, AdminController, EditorController],
  providers: [AppService, AdminService, EditorService ]
})
export class AppModule {}
