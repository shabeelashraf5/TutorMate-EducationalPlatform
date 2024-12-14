import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Admin extends Document {
  @Prop({ type: String, isRequired: true })
  fname: string;

  @Prop({ type: String, isRequired: true })
  email: string;

  @Prop({ type: String, isRequired: true })
  password: string;

  @Prop({ type: String, default: 'admin' })
  role: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
