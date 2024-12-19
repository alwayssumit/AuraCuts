import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import {decode,sign,verify} from 'hono/jwt'

export const shopkeeperRouter = new Hono<{
  Bindings:{
    DATABASE_URL:string;
    JWT_SECRET:string
  }
}>()