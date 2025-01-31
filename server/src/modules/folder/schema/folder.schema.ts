import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Folder extends Document {
  @Prop({ type: String, isRequired: true })
  title: string;

  @Prop({ type: String, isRequired: true })
  class: string;

  // @Prop({
  //   type: [String],
  // })
  // files: string[];

  @Prop({
    type: [{ path: String, originalName: String }],
  })
  files: { path: string; originalName: string }[];
}

export const FolderSchema = SchemaFactory.createForClass(Folder);
