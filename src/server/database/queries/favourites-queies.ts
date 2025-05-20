import { PrismaClient } from '../generated';
import { getPrismaClient, saveData } from '../prisma-client';
import type { favourites } from '../generated';

/**
 * `favourites` table queries, only contains static methods
 */
export class FavouritesTable {
  private static readonly PRISMA_CLIENT: PrismaClient = getPrismaClient();

  /**
   * Get all favourites in favourites table
   * @returns List of all favourites in favourites table
   */
  static async getAll(): Promise<favourites[]> {
    return FavouritesTable.PRISMA_CLIENT.favourites.findMany();
  }

  /**
   * Add a formula to favourite by formula UUID, if already exists, skip and directly return the UUID
   * @param formulaUuid Formula UUID
   * @returns Favourite UUID
   */
  static async insertOneByFormulaUuid(formulaUuid: string): Promise<string> {
    // Check if formula favourite already exist
    const existingFavourite =
      await FavouritesTable.PRISMA_CLIENT.favourites.findUnique({
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
    const newFavourite = await FavouritesTable.PRISMA_CLIENT.favourites.create({
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
    // Check if favourite exists
    const existingFavourite =
      await FavouritesTable.PRISMA_CLIENT.favourites.findUnique({
        where: {
          formula_id: formulaUuid,
        },
      });

    // If not exist, return null
    if (!existingFavourite) {
      return null;
    }

    // If exist, delete and return favourite UUID
    await FavouritesTable.PRISMA_CLIENT.favourites.delete({
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
    // Check if favourite exists
    const existingFavourite =
      await FavouritesTable.PRISMA_CLIENT.favourites.findUnique({
        where: {
          favourite_id: favouriteUuid,
        },
      });

    // If not exist, return null
    if (!existingFavourite) {
      return null;
    }

    // If exist, delete and return favourite UUID
    await FavouritesTable.PRISMA_CLIENT.favourites.delete({
      where: { favourite_id: favouriteUuid },
    });

    saveData();

    return existingFavourite.favourite_id;
  }
}
