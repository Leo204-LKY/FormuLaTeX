import { PrismaClient } from '@prisma/client';
import { getPrismaClient, saveData } from '../prisma-manager';
import type { Prisma, formula_conversations } from '@prisma/client';

/**
 * `formula_conversations` table queries, only contains static methods
 */
export class FormulaConversationsTable {
  private static prisma: PrismaClient | null = null;

  private static async getPrismaClient(): Promise<PrismaClient> {
    if (!FormulaConversationsTable.prisma) {
      FormulaConversationsTable.prisma = await getPrismaClient();
    }
    return FormulaConversationsTable.prisma;
  }

  /**
   * Get all conversations in formula_conversations table
   * @returns List of all formula conversations in formula_conversations table
   */
  static async getAll(): Promise<formula_conversations[]> {
    const prisma = await FormulaConversationsTable.getPrismaClient();
    return prisma.formula_conversations.findMany();
  }

  /**
   * Start a new conversation and add it to formula_conversation table
   * @param formulaConversation Formula conversation to insert
   * @returns Conversation UUID
   */
  static async insertOne(
    formulaConversation: Prisma.formula_conversationsCreateManyInput
  ): Promise<string> {
    const prisma = await FormulaConversationsTable.getPrismaClient();
    const result = await prisma.formula_conversations.create({
      data: formulaConversation,
    });

    saveData();

    return result.conversation_id;
  }

  /**
   * Delete one formula conversation by UUID
   * @param uuid Formula conversation UUID
   */
  static async deleteUniqueByUuid(uuid: string): Promise<void> {
    const prisma = await FormulaConversationsTable.getPrismaClient();
    await prisma.formula_conversations.delete({
      where: { conversation_id: uuid },
    });

    saveData();
  }
}
