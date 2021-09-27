
import { Controller } from '@nestjs/common';
import {PostService} from "./post.service";
import {EventPattern} from "@nestjs/microservices";
import { sendEmail } from '../utils/sendEmail';
@Controller('posts')
export class PostController {
    constructor(
        private postService: PostService
    ) {}
    @EventPattern('post_created')
    async postCreated(post: any) {
         await sendEmail(post.name,post.email);
    }

   
}