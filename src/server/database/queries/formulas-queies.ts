import { PrismaClient } from '@prisma/client';
import { getPrismaClient, saveData } from '../prisma-manager';
import type { formulas, Prisma } from '@prisma/client';

/**
 * `formulas` table queries, only contains static methods
 */
export class FormulasTable {
  private static prisma: PrismaClient | null = null;

  private static async getPrismaClient(): Promise<PrismaClient> {
    if (!FormulasTable.prisma) {
      FormulasTable.prisma = await getPrismaClient();
    }
    return FormulasTable.prisma;
  }

  /**
   * Get all formulas in formulas table
   * @returns List of all formulas in formulas table
   */
  static async getAll(): Promise<formulas[]> {
    const prisma = await FormulasTable.getPrismaClient();
    return prisma.formulas.findMany();
  }

  /**
   * Get one formula by UUID
   * @param uuid Formula UUID
   * @returns Formula with given UUID
   */
  static async getUniqueByUuid(uuid: string): Promise<formulas | null> {
    const prisma = await FormulasTable.getPrismaClient();
    return prisma.formulas.findUnique({
      where: { formula_id: uuid },
    });
  }

  /**
   * Get many formulas by name
   * @param name Formula name
   * @returns Formulas with given name
   */
  static async getManyByName(name: string): Promise<formulas[]> {
    const prisma = await FormulasTable.getPrismaClient();
    return prisma.formulas.findMany({
      where: { name },
    });
  }

  /**
   * Insert one formula into formulas table
   * @param formula Formula to insert
   * @returns The UUID of the inserted formula
   */
  static async insertOne(
    formula: Prisma.formulasCreateManyInput
  ): Promise<string> {
    const prisma = await FormulasTable.getPrismaClient();

    const result = await prisma.formulas.create({
      data: formula,
    });

    saveData();

    return result.formula_id;
  }

  /**
   * Insert many formulas into formulas table
   * @param formulas Formulas to insert
   */
  static async insertMany(
    formulas: Prisma.formulasCreateManyInput[]
  ): Promise<void> {
    const prisma = await FormulasTable.getPrismaClient();

    await prisma.$transaction(async (tx) => {
      await tx.formulas.createMany({
        data: formulas,
      });
    });

    saveData();
  }

  /**
   * Delete one formula by UUID
   * @param uuid Formula UUID
   */
  static async deleteUniqueByUuid(uuid: string): Promise<void> {
    const prisma = await FormulasTable.getPrismaClient();

    await prisma.formulas.delete({
      where: { formula_id: uuid },
    });

    saveData();
  }
}
