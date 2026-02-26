// import { CanActivate, ExecutionContext, Header, Injectable } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { Observable } from 'rxjs';
// import { Role } from './roles.enum';
// import { ROLES_KEY } from './roles.decorator';

// @Injectable()
// export class RolesGuard implements CanActivate {

//   constructor(private reflector : Reflector){}
//   canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
    
//     const requiredRole = this.reflector.getAllAndOverride<Role[]>();
//     if(!requiredRole) return true;
//     const request = context.switchToHttp().getRequest<{headers: Record<string,string>}>();
//     const userRole = request.headers["x-user-role"] as Role;
//     return requiredRole.includes(userRole);
//   }
// }



import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from './roles.enum';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
      ROLES_KEY,
      [
        context.getHandler(),
        context.getClass(),
      ],
    );

    if (!requiredRoles) {
      return true; // no roles required
    }

    const request = context.switchToHttp().getRequest();
    const userRole = request.headers['x-user-role'] as Role;

    if (!userRole) return false;

    return requiredRoles.includes(userRole);
  }
}