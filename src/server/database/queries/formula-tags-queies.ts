import { PrismaClient } from '@prisma/client';
import { getPrismaClient, saveData } from '../prisma-manager';
import type { formula_tags } from '@prisma/client';

/**
 * `formula_tags` table queries, only contains static methods
 */
export class FormulaTagsTable {
  private static prisma: PrismaClient | null = null;

  private static async getPrismaClient(): Promise<PrismaClient> {
    if (!FormulaTagsTable.prisma) {
      FormulaTagsTable.prisma = await getPrismaClient();
    }
    return FormulaTagsTable.prisma;
  }

  /**
   * Get all formula and tags many-to-many mapping
   * @returns List of all mapping in formula_tags table
   */
  static async getAll(): Promise<formula_tags[]> {
    const prisma = await FormulaTagsTable.getPrismaClient();
    return prisma.formula_tags.findMany();
  }

  /**
   * Get a list of formula UUIDs associated with a given tag UUID
   * @param tagId Tag UUID
   * @returns Promise<string[]> List of formula UUIDs
   */
  static async getFormulaIdsByTagId(tagId: string): Promise<string[]> {
    const prisma = await FormulaTagsTable.getPrismaClient();

    const formulaTags = await prisma.formula_tags.findMany({
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
    const prisma = await FormulaTagsTable.getPrismaClient();

    const formulaTags = await prisma.formula_tags.findMany({
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
    const prisma = await FormulaTagsTable.getPrismaClient();

    await prisma.formula_tags.create({
      data: {
        formula_id: formulaId,
        tag_id: tagId,
      },
    });

    saveData();
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
    const prisma = await FormulaTagsTable.getPrismaClient();

    await prisma.formula_tags.deleteMany({
      where: {
        formula_id: formulaId,
        tag_id: tagId,
      },
    });

    saveData();
  }
}
