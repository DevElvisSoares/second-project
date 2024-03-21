import { Body, Controller, Post, Get, Param, Put, Patch, Delete } from "@nestjs/common";
import { get } from "http";

@Controller('users')
export class UserController{
    @Post()
    async create(@Body() body){
        return {body}

    }

    @Get()
    async read(){
        return {user:[]}
    }
    @Get(':id')
    async readOne(@Param() param){
        return { user:{}, param}
    }
    
    @Put(':id')
    async update(@Body() body, @Param() param){
        return{
        method: 'PUT',
        body,
        param
        }
    }
    @Patch(':id')
    async updatePartial(@Body() body, @Param() param) {
        return{
        method: 'PATCH',
        body,
        param
        } 
    }

    @Delete(':id')
    async delete(@Param() param) {
        return { param}
    }
}