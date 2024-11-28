import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document {
    
    @Prop({ type: String, isRequired: true })
    fname: string

    @Prop({ type: String, isRequired: true })
    lname: string

    @Prop({ type: String, isRequired: true, unique: true })
    email: string

    @Prop({ type: String, isRequired: true })
    password: string

}

export const UserSchema = SchemaFactory.createForClass(User)