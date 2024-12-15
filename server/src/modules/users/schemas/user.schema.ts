import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ type: String, isRequired: true })
  fname: string;

  @Prop({ type: String, isRequired: true })
  lname: string;

  @Prop({ type: String, isRequired: true, unique: true })
  email: string;

  @Prop({ type: String, isRequired: true })
  password: string;

  @Prop({ type: String, isRequired: true })
  repeat_password: string;

  @Prop({ type: Number, isRequired: true })
  phone: number;

  @Prop({ type: String, isRequired: true })
  location: string;

  @Prop({ type: String, required: true })
  class: string;

  @Prop({ type: String, default: 'user' })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
