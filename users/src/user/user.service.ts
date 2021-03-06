import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly postRespository: Repository<User>
    ) {}

  
    async create(data): Promise<User> {

       
        return this.postRespository.save(data);
    }

   
}
