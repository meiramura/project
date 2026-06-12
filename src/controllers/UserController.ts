import {Body, Controller, Delete, Get, Post, Route} from "tsoa";
import {UserService} from "../services/UserService";

@Route("users")
export class UserController extends Controller {

    private userService = new UserService();

    @Get()
    public getUsers(){
        return this.userService.getAll();
    }

    @Get("{id}")
    public getUser(id:number){
        return this.userService.getById(id);
    }

    @Post()
    public createUser(@Body() body:any) {
        return this.userService.create(body);
    }

    @Delete("{id}")
    public deleteUser(id:number){
        return this.userService.delete(id);
    }
}