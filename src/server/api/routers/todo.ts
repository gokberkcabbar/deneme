import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const todoRouter = createTRPCRouter({
    all: protectedProcedure.query(async ({ctx}) => {

        return await ctx.prisma.toDoList.findMany({
            where : {
                userId : ctx.session.user.id
            }
        })
    }),
})