import { IsBoolean, IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
export class CreateUserDto {
  /** 用户名 */
  id: number;
  @IsString()
  @IsNotEmpty()
  userName: string;
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  
  password : string

  @IsString()
  @IsNotEmpty()
  @Length(10, 11)
  phone : string

  @IsString()
  @IsNotEmpty()
  role : string

  // @IsBoolean()
  @IsNotEmpty()

  active : string
}
