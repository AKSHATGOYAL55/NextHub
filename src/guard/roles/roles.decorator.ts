// import { SetMetadata } from "@nestjs/common";

// export const ROLE_KEY = "role";

// // set roles in metadata 

// export const Roles = (...roles : string[])=> SetMetadata(ROLE_KEY, roles)






import { SetMetadata } from "@nestjs/common";

export const ROLES_KEY = "role";

export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles)