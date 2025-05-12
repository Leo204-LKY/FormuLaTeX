import { PrismaClient } from '../generated';
import { getPrismaClient } from '../prisma-client';
import type { formula_interpretations } from '../generated';

/**
 * `formula_interpretations` table queries, only contains static methods
 */
export class FormulaInterpretationsTable {
  private static readonly PRISMA_CLIENT: PrismaClient = getPrismaClient();

  /**
   * Get all formula interpretations in formula_interpretations table
   * @returns List of all formula interpretations in formula_interpretations table
   */
  static async getAll(): Promise<formula_interpretations[]> {
    return FormulaInterpretationsTable.PRISMA_CLIENT.formula_interpretations.findMany();
  }

  /**
   * Get one formula interpretation by UUID
   * @param uuid Formula interpretation UUID
   * @returns Formula interpretation with given UUID
   */
  static async getUniqueByUuid(
    uuid: string
  ): Promise<formula_interpretations | null> {
    return FormulaInterpretationsTable.PRISMA_CLIENT.formula_interpretations.findUnique(
      {
        where: { interpretation_id: uuid },
      }
    );
  }

  /**
   * Insert one formula interpretation into formula_interpretations table
   * @param formulaInterpretation Formula interpretation to insert
   * @returns The UUID of the inserted formula interpretation
   */
  static async insertOne(
    formulaInterpretation: formula_interpretations
  ): Promise<string> {
    const result =
      await FormulaInterpretationsTable.PRISMA_CLIENT.formula_interpretations.create(
        {
          data: formulaInterpretation,
        }
      );

    return result.interpretation_id;
  }

  /**
   * Insert many formula interpretations into formula_interpretations table
   * @param formulas Formula interpretations to insert
   */
  static async insertMany(formulas: formula_interpretations[]): Promise<void> {
    await FormulaInterpretationsTable.PRISMA_CLIENT.$transaction(async (tx) => {
      await tx.formula_interpretations.createMany({
        data: formulas,
      });
    });
  }

  /**
   * Delete one formula interpretation by UUID
   * @param uuid Formula interpretation UUID
   */
  static async deleteOne(uuid: string): Promise<void> {
    await FormulaInterpretationsTable.PRISMA_CLIENT.formula_interpretations.delete(
      {
        where: { interpretation_id: uuid },
      }
    );
  }
}
