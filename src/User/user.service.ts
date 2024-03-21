import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user-dto";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class UserService {
    constructor (private readonly prisma: PrismaService) {}
        create({name, email, cpf, password}: CreateUserDTO) {
           return this.prisma.user_login.create({
               data: {
                      name,
                      email,
                      cpf,
                      password
               }
            
            
        

        })
    }
}
