import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from '../guard/roles/roles.decorator';
import { Role } from '../guard/roles/roles.enum';
import { RolesGuard } from '../guard/roles/roles.guard';

@Controller('user-roles')
export class UserRolesController {
    @Get('admin-data')
    @UseGuards(RolesGuard)
    @Roles(Role.ADMIN)
    getAdminData(){
        return {message: "only admin can access this data"}
    }

    @Get("user-data")
    getUserData(){
        return {message : "only user can access this data"}
    }

}
