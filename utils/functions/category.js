import prisma from "@/lib/prisma";

export default async function create({ data }) {
    const result = await prisma.category.create({ data })
    return result
}