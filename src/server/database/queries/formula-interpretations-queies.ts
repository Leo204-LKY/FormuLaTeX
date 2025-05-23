import { PrismaClient } from '@prisma/client';
import { getPrismaClient, saveData } from '../prisma-manager';
import type { Prisma, formula_interpretations } from '@prisma/client';

/**
 * `formula_interpretations` table queries, only contains static methods
 */
export class FormulaInterpretationsTable {
  private static prisma: PrismaClient | null = null;

  private static async getPrismaClient(): Promise<PrismaClient> {
    if (!FormulaInterpretationsTable.prisma) {
      FormulaInterpretationsTable.prisma = await getPrismaClient();
    }
    return FormulaInterpretationsTable.prisma;
  }

  /**
   * Get all formula interpretations in formula_interpretations table
   * @returns List of all formula interpretations in formula_interpretations table
   */
  static async getAll(): Promise<formula_interpretations[]> {
    const prisma = await FormulaInterpretationsTable.getPrismaClient();
    return prisma.formula_interpretations.findMany();
  }

  /**
   * Get one formula interpretation by UUID
   * @param uuid Formula interpretation UUID
   * @returns Formula interpretation with given UUID
   */
  static async getUniqueByUuid(
    uuid: string
  ): Promise<formula_interpretations | null> {
    const prisma = await FormulaInterpretationsTable.getPrismaClient();

    return prisma.formula_interpretations.findUnique({
      where: { interpretation_id: uuid },
    });
  }

  /**
   * Insert one formula interpretation into formula_interpretations table
   * @param formulaInterpretation Formula interpretation to insert
   * @returns The UUID of the inserted formula interpretation
   */
  static async insertOne(
    formulaInterpretation: Prisma.formula_interpretationsCreateManyInput
  ): Promise<string> {
    const prisma = await FormulaInterpretationsTable.getPrismaClient();

    const result = await prisma.formula_interpretations.create({
      data: formulaInterpretation,
    });

    saveData();

    return result.interpretation_id;
  }

  /**
   * Insert many formula interpretations into formula_interpretations table
   * @param formulas Formula interpretations to insert
   */
  static async insertMany(
    formulas: Prisma.formula_interpretationsCreateManyInput[]
  ): Promise<void> {
    const prisma = await FormulaInterpretationsTable.getPrismaClient();

    await prisma.$transaction(async (tx) => {
      await tx.formula_interpretations.createMany({
        data: formulas,
      });
    });

    saveData();
  }

  /**
   * Delete one formula interpretation by UUID
   * @param uuid Formula interpretation UUID
   */
  static async deleteOne(uuid: string): Promise<void> {
    const prisma = await FormulaInterpretationsTable.getPrismaClient();

    await prisma.formula_interpretations.delete({
      where: { interpretation_id: uuid },
    });

    saveData();
  }
}
