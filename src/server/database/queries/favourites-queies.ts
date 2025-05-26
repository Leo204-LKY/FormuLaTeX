import { PrismaClient } from '@prisma/client';
import { getPrismaClient, saveData } from '../prisma-manager';
import type { favourites } from '@prisma/client';

/**
 * `favourites` table queries, only contains static methods
 */
export class FavouritesTable {
  private static prisma: PrismaClient | null = null;

  private static async getPrismaClient(): Promise<PrismaClient> {
    if (!FavouritesTable.prisma) {
      FavouritesTable.prisma = await getPrismaClient();
    }
    return FavouritesTable.prisma;
  }

  /**
   * Get all favourites in favourites table
   * @returns List of all favourites in favourites table
   */
  static async getAll(): Promise<favourites[]> {
    const prisma = await FavouritesTable.getPrismaClient();
    return prisma.favourites.findMany();
  }

  /**
   * Add a formula to favourite by formula UUID, if already exists, skip and directly return the UUID
   * @param formulaUuid Formula UUID
   * @returns Favourite UUID
   */
  static async insertOneByFormulaUuid(formulaUuid: string): Promise<string> {
    const prisma = await FavouritesTable.getPrismaClient();

    // Check if formula favourite already exist
    const existingFavourite = await prisma.favourites.findUnique({
      where: {
        formula_id: formulaUuid,
      },
      select: {
        favourite_id: true,
      },
    });

    // If exist, directly return favourite UUID
    if (existingFavourite) {
      return existingFavourite.favourite_id;
    }

    // If not exist, create favourite and return favourite UUID
    const newFavourite = await prisma.favourites.create({
      data: { formula_id: formulaUuid },
      select: { favourite_id: true },
    });

    saveData();

    return newFavourite.favourite_id;
  }

  /**
   * Remove a formula favourite by formula UUID
   * @param formulaUuid Formula UUID
   * @returns Removed formula UUID, return null if not in favourite
   */
  static async deleteUniqueByFormulaUuid(
    formulaUuid: string
  ): Promise<string | null> {
    const prisma = await FavouritesTable.getPrismaClient();

    // Check if favourite exists
    const existingFavourite = await prisma.favourites.findUnique({
      where: {
        formula_id: formulaUuid,
      },
    });

    // If not exist, return null
    if (!existingFavourite) {
      return null;
    }

    // If exist, delete and return favourite UUID
    await prisma.favourites.delete({
      where: { formula_id: formulaUuid },
    });

    saveData();

    return existingFavourite.favourite_id;
  }

  /**
   * Remove a formula favourite by favourite UUID
   * @param favouriteUuid Formula UUID
   * @returns Removed formula UUID, return null if not in favourite
   */
  static async deleteUniqueByFavouriteUuid(
    favouriteUuid: string
  ): Promise<string | null> {
    const prisma = await FavouritesTable.getPrismaClient();

    // Check if favourite exists
    const existingFavourite = await prisma.favourites.findUnique({
      where: {
        favourite_id: favouriteUuid,
      },
    });

    // If not exist, return null
    if (!existingFavourite) {
      return null;
    }

    // If exist, delete and return favourite UUID
    await prisma.favourites.delete({
      where: { favourite_id: favouriteUuid },
    });

    saveData();

    return existingFavourite.favourite_id;
  }
}
