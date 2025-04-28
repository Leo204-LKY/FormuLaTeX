import { PrismaClient } from '../generated';
import { getPrismaClient } from '../prisma-client';
import type { formula_sessions } from '../generated';

/**
 * `formula_sessions` table queries, only contains static methods
 */
export class FormulaSessionsTable {
  private static readonly PRISMA_CLIENT: PrismaClient = getPrismaClient();

  /**
   * Get all formula sessions in formula_sessions table
   * @returns List of all formula sessions in formula_sessions table
   */
  static async getAll(): Promise<formula_sessions[]> {
    return FormulaSessionsTable.PRISMA_CLIENT.formula_sessions.findMany();
  }

  /**
   * Get one formula session by UUID
   * @param uuid Formula session UUID
   * @returns Formula session with given UUID
   */
  static async getUniqueByUuid(uuid: string): Promise<formula_sessions | null> {
    return FormulaSessionsTable.PRISMA_CLIENT.formula_sessions.findUnique({
      where: { session_id: uuid },
    });
  }

  /**
   * Insert one formula session into formula_sessions table
   * @param formulaSession Formula session to insert
   * @returns The UUID of the inserted formula session
   */
  static async insertOne(formulaSession: formula_sessions): Promise<string> {
    const result =
      await FormulaSessionsTable.PRISMA_CLIENT.formula_sessions.create({
        data: formulaSession,
      });

    return result.session_id;
  }

  /**
   * Insert many formula sessions into formula_sessions table
   * @param formulas Formula sessions to insert
   */
  static async insertMany(formulas: formula_sessions[]): Promise<void> {
    await FormulaSessionsTable.PRISMA_CLIENT.$transaction(async (tx) => {
      await tx.formula_sessions.createMany({
        data: formulas,
      });
    });
  }

  /**
   * Delete one formula session by UUID
   * @param uuid Formula session UUID
   */
  static async deleteOne(uuid: string): Promise<void> {
    await FormulaSessionsTable.PRISMA_CLIENT.formula_sessions.delete({
      where: { session_id: uuid },
    });
  }
}
