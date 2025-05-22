import { PrismaClient } from '../generated';
import { getPrismaClient, saveData } from '../prisma-client';
import type { Prisma, tags } from '../generated';

/**
 * `tags` table queries, only contains static methods
 */
export class TagsTable {
  private static prisma: PrismaClient | null = null;

  private static async getPrismaClient(): Promise<PrismaClient> {
    if (!TagsTable.prisma) {
      TagsTable.prisma = await getPrismaClient();
    }
    return TagsTable.prisma;
  }

  /**
   * Get all tags in tags table
   * @returns List of all tags in tags table
   */
  static async getAll(): Promise<tags[]> {
    const prisma = await TagsTable.getPrismaClient();
    return prisma.tags.findMany();
  }

  /**
   * Get one tag by UUID
   * @param uuid Tag UUID
   * @returns Tag with given UUID
   */
  static async getUniqueByUuid(uuid: string): Promise<tags | null> {
    const prisma = await TagsTable.getPrismaClient();

    return prisma.tags.findUnique({
      where: { tag_id: uuid },
    });
  }

  /**
   * Get many tags by name
   * @param name Tag name
   * @returns Tags with given name
   */
  static async getManyByName(name: string): Promise<tags[]> {
    const prisma = await TagsTable.getPrismaClient();

    return prisma.tags.findMany({
      where: { name },
    });
  }

  /**
   * Insert one tag into tags table
   * @param tag Tag to insert
   * @returns The UUID of the inserted tag
   */
  static async insertOne(tag: Prisma.tagsCreateManyInput): Promise<string> {
    const prisma = await TagsTable.getPrismaClient();

    const result = await prisma.tags.create({
      data: tag,
    });

    saveData();

    return result.tag_id;
  }

  /**
   * Insert many tags into tags table
   * @param tags Tags to insert
   */
  static async insertMany(tags: Prisma.tagsCreateManyInput[]): Promise<void> {
    const prisma = await TagsTable.getPrismaClient();

    await prisma.$transaction(async (tx) => {
      await tx.tags.createMany({
        data: tags,
      });
    });

    saveData();
  }

  /**
   * Delete one tag by UUID
   * @param uuid Tag UUID
   */
  static async deleteOne(uuid: string): Promise<void> {
    const prisma = await TagsTable.getPrismaClient();

    await prisma.tags.delete({
      where: { tag_id: uuid },
    });

    saveData();
  }

  /**
   * Set tag color by UUID
   * @param uuid Tag UUID
   */
  static async setColorByUuid(uuid: string, color: string): Promise<void> {
    const prisma = await TagsTable.getPrismaClient();

    await prisma.tags.update({
      where: { tag_id: uuid },
      data: { color },
    });

    saveData();
  }
}
