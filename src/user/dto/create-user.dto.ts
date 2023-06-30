import { IsNumber, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;
  email: string;

  @IsNotEmpty()
  @MaxLength(8, { message: 'password must be greater than eight charaters' })
  password: string;
}
