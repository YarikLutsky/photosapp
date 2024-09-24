import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  fullName: string;

  @Prop({ type: String, required: true })
  fullAddress: string;

  @Prop({ type: [String], required: true })
  imagesUrls: string[];

  @Prop({ type: String, required: true })
  frameColor: string;

  @Prop({ type: String, required: true })
  user: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);