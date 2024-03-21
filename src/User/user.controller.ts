import { Body, Controller, Post, Get, Param, Put, Patch, Delete, ParseIntPipe } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user-dto";
import { UpdateUserDTO } from "./dto/update-user-dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user-dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController{
    constructor(private readonly userService: UserService){

    }
    @Post()
    async create(@Body() data: CreateUserDTO){
        return this.userService.create(data)

    }

    @Get()
    async read(){
        return {user:[]}
    }
    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id){
        return { user:{}, id}
    }
    
    @Put(':id')
    async update(@Body() {name, email, cpf, password}: UpdateUserDTO, @Param('id', ParseIntPipe) id){
        return{
        method: 'PUT',
        name, email, cpf, password,
        id
        }
    }
    @Patch(':id')
    async updatePartial(@Body() {name, email, cpf, password}: UpdatePatchUserDTO, @Param('id', ParseIntPipe) param) {
        return{
        method: 'PATCH',
        name, email, cpf, password,
        param
        } 
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return {id}
    }
}