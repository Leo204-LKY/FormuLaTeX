import { PrismaClient } from '../generated';
import { getPrismaClient } from '../prisma-client';
import type { formulas } from '../generated';

/**
 * `formulas` table queries, only contains static methods
 */
export class FormulasTable {
  private static readonly PRISMA_CLIENT: PrismaClient = getPrismaClient();

  /**
   * Get all formulas in formulas table
   * @returns List of all formulas in formulas table
   */
  static async getAll(): Promise<formulas[]> {
    return FormulasTable.PRISMA_CLIENT.formulas.findMany();
  }

  /**
   * Get one formula by UUID
   * @param uuid Formula UUID
   * @returns Formula with given UUID
   */
  static async getUniqueByUuid(uuid: string): Promise<formulas | null> {
    return FormulasTable.PRISMA_CLIENT.formulas.findUnique({
      where: { formula_id: uuid },
    });
  }

  /**
   * Get many formulas by name
   * @param name Formula name
   * @returns Formulas with given name
   */
  static async getManyByName(name: string): Promise<formulas[]> {
    return FormulasTable.PRISMA_CLIENT.formulas.findMany({
      where: { name },
    });
  }

  /**
   * Insert one formula into formulas table
   * @param formula Formula to insert
   * @returns The UUID of the inserted formula
   */
  static async insertOne(formula: formulas): Promise<string> {
    const result = await FormulasTable.PRISMA_CLIENT.formulas.create({
      data: formula,
    });

    return result.formula_id;
  }

  /**
   * Insert many formulas into formulas table
   * @param formulas Formulas to insert
   */
  static async insertMany(formulas: formulas[]): Promise<void> {
    await FormulasTable.PRISMA_CLIENT.$transaction(async (tx) => {
      await tx.formulas.createMany({
        data: formulas,
      });
    });
  }

  /**
   * Delete one formula by UUID
   */
  static async deleteUniqueByUuid(uuid: string): Promise<void> {
    await FormulasTable.PRISMA_CLIENT.formulas.delete({
      where: { formula_id: uuid },
    });
  }
}
