import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.schema';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.orderService.createOrder(createOrderDto);
  }

  @Get(':user')
  async getOrdersByUser(@Param('user') user: string): Promise<Order[]> {
    const orders = await this.orderService.getOrdersByUser(user);

    if (orders.length === 0) {
      throw new NotFoundException(`No orders found for user: ${user}`);
    }

    return orders;
  }
}
