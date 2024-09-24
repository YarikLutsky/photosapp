import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { OrderSchema } from './entities/order.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderRepository } from './order.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: "orders", schema: OrderSchema }])],
  controllers: [OrderController],
  providers: [OrderService, OrderRepository]
})
export class OrderModule {}
