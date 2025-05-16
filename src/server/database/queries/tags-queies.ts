import { PrismaClient } from '../generated';
import { getPrismaClient } from '../prisma-client';
import type { Prisma, tags } from '../generated';

/**
 * `tags` table queries, only contains static methods
 */
export class TagsTable {
  private static readonly PRISMA_CLIENT: PrismaClient = getPrismaClient();

  /**
   * Get all tags in tags table
   * @returns List of all tags in tags table
   */
  static async getAll(): Promise<tags[]> {
    return TagsTable.PRISMA_CLIENT.tags.findMany();
  }

  /**
   * Get one tag by UUID
   * @param uuid Tag UUID
   * @returns Tag with given UUID
   */
  static async getUniqueByUuid(uuid: string): Promise<tags | null> {
    return TagsTable.PRISMA_CLIENT.tags.findUnique({
      where: { tag_id: uuid },
    });
  }

  /**
   * Get many tags by name
   * @param name Tag name
   * @returns Tags with given name
   */
  static async getManyByName(name: string): Promise<tags[]> {
    return TagsTable.PRISMA_CLIENT.tags.findMany({
      where: { name },
    });
  }

  /**
   * Insert one tag into tags table
   * @param tag Tag to insert
   * @returns The UUID of the inserted tag
   */
  static async insertOne(tag: Prisma.tagsCreateInput): Promise<string> {
    const result = await TagsTable.PRISMA_CLIENT.tags.create({
      data: tag,
    });

    return result.tag_id;
  }

  /**
   * Insert many tags into tags table
   * @param tags Tags to insert
   */
  static async insertMany(tags: Prisma.tagsCreateManyInput[]): Promise<void> {
    await TagsTable.PRISMA_CLIENT.$transaction(async (tx) => {
      await tx.tags.createMany({
        data: tags,
      });
    });
  }

  /**
   * Delete one tag by UUID
   * @param uuid Tag UUID
   */
  static async deleteOne(uuid: string): Promise<void> {
    await TagsTable.PRISMA_CLIENT.tags.delete({
      where: { tag_id: uuid },
    });
  }

  /**
   * Set tag color by UUID
   * @param uuid Tag UUID
   */
  static async setColorByUuid(uuid: string, color: string): Promise<void> {
    await TagsTable.PRISMA_CLIENT.tags.update({
      where: { tag_id: uuid },
      data: { color },
    });
  }
}
