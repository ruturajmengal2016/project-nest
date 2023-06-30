import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<import(".prisma/client").user>;
    findAll(): Promise<import(".prisma/client").user[]>;
    findOne(id: number): Promise<import(".prisma/client").user>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import(".prisma/client").user>;
    remove(id: number): Promise<import(".prisma/client").user>;
}
