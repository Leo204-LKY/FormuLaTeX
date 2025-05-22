import { PrismaClient } from '../generated';
import { getPrismaClient, saveData } from '../prisma-client';
import type { messages, Prisma } from '../generated';

/**
 * `messages` table queries, only contains static methods
 */
export class MessagesTable {
  private static prisma: PrismaClient | null = null;

  private static async getPrismaClient(): Promise<PrismaClient> {
    if (!MessagesTable.prisma) {
      MessagesTable.prisma = await getPrismaClient();
    }
    return MessagesTable.prisma;
  }

  /**
   * Get all conversation messages in messages table
   * @returns List of all conversation messages in messages table
   */
  static async getAll(): Promise<messages[]> {
    const prisma = await MessagesTable.getPrismaClient();
    return prisma.messages.findMany();
  }

  /**
   * Get all messages in one specific conversation by conversation UUID
   * @param conversationUuid Conversation UUID
   * @return List of all messages in the conversation
   */
  static async getManyByConversationId(
    conversationUuid: string
  ): Promise<messages[]> {
    const prisma = await MessagesTable.getPrismaClient();

    return prisma.messages.findMany({
      where: { conversation_id: conversationUuid },
      orderBy: { created_at: 'asc' }, // Order by send time
    });
  }

  /**
   * Insert one message into messages table
   * @param message Message to insert
   * @returns The UUID of the inserted message
   */
  static async insertOne(
    message: Prisma.messagesCreateManyInput
  ): Promise<string> {
    const prisma = await MessagesTable.getPrismaClient();

    const result = await prisma.messages.create({
      data: message,
    });

    saveData();

    return result.message_id;
  }

  /**
   * Delete all messages related to given conversation UUID
   * @param conversationUuid Conversation UUID
   */
  static async deleteManyByConversationId(
    conversationUuid: string
  ): Promise<void> {
    const prisma = await MessagesTable.getPrismaClient();

    await prisma.messages.deleteMany({
      where: { conversation_id: conversationUuid },
    });

    saveData();
  }
}
