import { Injectable } from '@nestjs/common';
import { OrderStatus } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  all() {
    return this.prismaService.order.findMany();
  }

  create({ asset_id, price }) {
    return this.prismaService.order.create({
      data: {
        asset_id: asset_id,
        price: price,
        status: OrderStatus.PENDING,
      },
    });
  }
}
