import { PrismaClient } from '../generated';
import { getPrismaClient } from '../prisma-client';
import type { formula_tags } from '../generated';

/**
 * `formula_tags` table queries, only contains static methods
 */
export class FormulaTagsTable {
  private static readonly PRISMA_CLIENT: PrismaClient = getPrismaClient();

  /**
   * Get all formula and tags many-to-many mapping
   * @returns List of all mapping in formula_tags table
   */
  static async getAll(): Promise<formula_tags[]> {
    return FormulaTagsTable.PRISMA_CLIENT.formula_tags.findMany();
  }

  /**
   * Get a list of formula UUIDs associated with a given tag UUID
   * @param tagId Tag UUID
   * @returns Promise<string[]> List of formula UUIDs
   */
  static async getFormulaIdsByTagId(tagId: string): Promise<string[]> {
    const formulaTags =
      await FormulaTagsTable.PRISMA_CLIENT.formula_tags.findMany({
        where: {
          tag_id: tagId,
        },
        select: {
          formula_id: true,
        },
      });

    return formulaTags.map((item) => item.formula_id);
  }

  /**
   * Get a list of tag UUIDs associated with a given formula UUID
   * @param formulaId Formula UUID
   * @returns Promise<string[]> List of tag UUIDs
   */
  static async getTagIdsByFormulaId(formulaId: string): Promise<string[]> {
    const formulaTags =
      await FormulaTagsTable.PRISMA_CLIENT.formula_tags.findMany({
        where: {
          formula_id: formulaId,
        },
        select: {
          tag_id: true,
        },
      });

    return formulaTags.map((item) => item.tag_id);
  }

  /**
   * Add tag to a formula
   * @param formulaId Formula UUID
   * @param tagId Tag UUID
   */
  static async addTagToFormula(
    formulaId: string,
    tagId: string
  ): Promise<void> {
    await FormulaTagsTable.PRISMA_CLIENT.formula_tags.create({
      data: {
        formula_id: formulaId,
        tag_id: tagId,
      },
    });
  }

  /**
   * Remove tag from a formula
   * @param formulaId Formula UUID
   * @param tagId Tag UUID
   */
  static async deleteTagFromFormula(
    formulaId: string,
    tagId: string
  ): Promise<void> {
    await FormulaTagsTable.PRISMA_CLIENT.formula_tags.deleteMany({
      where: {
        formula_id: formulaId,
        tag_id: tagId,
      },
    });
  }
}
