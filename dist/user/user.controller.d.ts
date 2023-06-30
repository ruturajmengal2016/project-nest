import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): string;
    findAll(): Promise<import(".prisma/client").user[]>;
    findOne(id: string): Promise<import(".prisma/client").user>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import(".prisma/client").user>;
    remove(id: string): string;
}
