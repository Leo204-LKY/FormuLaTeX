import { PrismaClient } from '../generated';
import { getPrismaClient } from '../prisma-client';
import type { messages, Prisma } from '../generated';

/**
 * `messages` table queries, only contains static methods
 */
export class MessagesTable {
  private static readonly PRISMA_CLIENT: PrismaClient = getPrismaClient();

  /**
   * Get all conversation messages in messages table
   * @returns List of all conversation messages in messages table
   */
  static async getAll(): Promise<messages[]> {
    return MessagesTable.PRISMA_CLIENT.messages.findMany();
  }

  /**
   * Get all messages in one specific conversation by conversation UUID
   * @param conversationUuid Conversation UUID
   * @return List of all messages in the conversation
   */
  static async getManyByConversationId(
    conversationUuid: string
  ): Promise<messages[]> {
    return MessagesTable.PRISMA_CLIENT.messages.findMany({
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
    const result = await MessagesTable.PRISMA_CLIENT.messages.create({
      data: message,
    });

    return result.message_id;
  }

  /**
   * Delete all messages related to given conversation UUID
   * @param conversationUuid Conversation UUID
   */
  static async deleteManyByConversationId(
    conversationUuid: string
  ): Promise<void> {
    await MessagesTable.PRISMA_CLIENT.messages.deleteMany({
      where: { conversation_id: conversationUuid },
    });
  }
}
