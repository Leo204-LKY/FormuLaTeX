import { PrismaClient } from '../generated';
import { getPrismaClient } from '../prisma-client';
import type { Prisma, formula_conversations } from '../generated';

/**
 * `formula_conversations` table queries, only contains static methods
 */
export class FormulaConversationsTable {
  private static readonly PRISMA_CLIENT: PrismaClient = getPrismaClient();

  /**
   * Get all conversations in formula_conversations table
   * @returns List of all formula conversations in formula_conversations table
   */
  static async getAll(): Promise<formula_conversations[]> {
    return FormulaConversationsTable.PRISMA_CLIENT.formula_conversations.findMany();
  }

  /**
   * Start a new conversation and add it to formula_conversation table
   * @param formulaConversation Formula conversation to insert
   * @returns Conversation UUID
   */
  static async insertOne(
    formulaConversation: Prisma.formula_conversationsCreateInput
  ): Promise<string> {
    const result =
      await FormulaConversationsTable.PRISMA_CLIENT.formula_conversations.create(
        { data: formulaConversation }
      );

    return result.conversation_id;
  }

  /**
   * Delete one formula conversation by UUID
   * @param uuid Formula conversation UUID
   */
  static async deleteUniqueByUuid(uuid: string): Promise<void> {
    await FormulaConversationsTable.PRISMA_CLIENT.formula_conversations.delete({
      where: { conversation_id: uuid },
    });
  }
}
