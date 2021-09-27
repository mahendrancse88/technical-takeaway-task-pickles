import {Controller, Get,  Param, Inject} from '@nestjs/common';
import { UserService } from './user.service';
import {ClientProxy} from "@nestjs/microservices";

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService,
        @Inject('POST_SERVICE') private readonly client: ClientProxy
    ) {
    }

    @Get(':name/:email/:age')
    async get(@Param('name') name: string,@Param('email') email: string,@Param('age') age: string ) {

    
       const post = this.userService.create({
        name,
        email,
        age
    });
    console.log("successfully added"); 
    
    this.client.emit('post_created', {name,email,age});

    return post;
    }


}