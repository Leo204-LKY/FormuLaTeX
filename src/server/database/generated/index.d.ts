
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model formula_sessions
 * formula_sessions - Session log for each formula operation
 */
export type formula_sessions = $Result.DefaultSelection<Prisma.$formula_sessionsPayload>
/**
 * Model formulas
 * formula - Recognised or generated LaTeX formulas
 */
export type formulas = $Result.DefaultSelection<Prisma.$formulasPayload>
/**
 * Model formula_interpretations
 * formula_interpretations - Semantic interpretation of formulas by AI
 */
export type formula_interpretations = $Result.DefaultSelection<Prisma.$formula_interpretationsPayload>
/**
 * Model tags
 * tags - Formula tags
 */
export type tags = $Result.DefaultSelection<Prisma.$tagsPayload>
/**
 * Model formula_tags
 * formula_tags - Formulas & tags many-to-many mapping
 */
export type formula_tags = $Result.DefaultSelection<Prisma.$formula_tagsPayload>
/**
 * Model favourites
 * favourites - User favourited formulas
 */
export type favourites = $Result.DefaultSelection<Prisma.$favouritesPayload>
/**
 * Model formula_conversations
 * formula_conversations - Conversation record for each conversation
 */
export type formula_conversations = $Result.DefaultSelection<Prisma.$formula_conversationsPayload>
/**
 * Model messages
 * messages - Conversation messages
 */
export type messages = $Result.DefaultSelection<Prisma.$messagesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Formula_sessions
 * const formula_sessions = await prisma.formula_sessions.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Formula_sessions
   * const formula_sessions = await prisma.formula_sessions.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.formula_sessions`: Exposes CRUD operations for the **formula_sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formula_sessions
    * const formula_sessions = await prisma.formula_sessions.findMany()
    * ```
    */
  get formula_sessions(): Prisma.formula_sessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formulas`: Exposes CRUD operations for the **formulas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formulas
    * const formulas = await prisma.formulas.findMany()
    * ```
    */
  get formulas(): Prisma.formulasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formula_interpretations`: Exposes CRUD operations for the **formula_interpretations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formula_interpretations
    * const formula_interpretations = await prisma.formula_interpretations.findMany()
    * ```
    */
  get formula_interpretations(): Prisma.formula_interpretationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formula_tags`: Exposes CRUD operations for the **formula_tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formula_tags
    * const formula_tags = await prisma.formula_tags.findMany()
    * ```
    */
  get formula_tags(): Prisma.formula_tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favourites`: Exposes CRUD operations for the **favourites** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favourites
    * const favourites = await prisma.favourites.findMany()
    * ```
    */
  get favourites(): Prisma.favouritesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formula_conversations`: Exposes CRUD operations for the **formula_conversations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formula_conversations
    * const formula_conversations = await prisma.formula_conversations.findMany()
    * ```
    */
  get formula_conversations(): Prisma.formula_conversationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.messagesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    formula_sessions: 'formula_sessions',
    formulas: 'formulas',
    formula_interpretations: 'formula_interpretations',
    tags: 'tags',
    formula_tags: 'formula_tags',
    favourites: 'favourites',
    formula_conversations: 'formula_conversations',
    messages: 'messages'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "formula_sessions" | "formulas" | "formula_interpretations" | "tags" | "formula_tags" | "favourites" | "formula_conversations" | "messages"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      formula_sessions: {
        payload: Prisma.$formula_sessionsPayload<ExtArgs>
        fields: Prisma.formula_sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.formula_sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.formula_sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_sessionsPayload>
          }
          findFirst: {
            args: Prisma.formula_sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.formula_sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_sessionsPayload>
          }
          findMany: {
            args: Prisma.formula_sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_sessionsPayload>[]
          }
          create: {
            args: Prisma.formula_sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_sessionsPayload>
          }
          createMany: {
            args: Prisma.formula_sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.formula_sessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_sessionsPayload>[]
          }
          delete: {
            args: Prisma.formula_sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_sessionsPayload>
          }
          update: {
            args: Prisma.formula_sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_sessionsPayload>
          }
          deleteMany: {
            args: Prisma.formula_sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.formula_sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.formula_sessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_sessionsPayload>[]
          }
          upsert: {
            args: Prisma.formula_sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_sessionsPayload>
          }
          aggregate: {
            args: Prisma.Formula_sessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormula_sessions>
          }
          groupBy: {
            args: Prisma.formula_sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Formula_sessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.formula_sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<Formula_sessionsCountAggregateOutputType> | number
          }
        }
      }
      formulas: {
        payload: Prisma.$formulasPayload<ExtArgs>
        fields: Prisma.formulasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.formulasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formulasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.formulasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formulasPayload>
          }
          findFirst: {
            args: Prisma.formulasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formulasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.formulasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formulasPayload>
          }
          findMany: {
            args: Prisma.formulasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formulasPayload>[]
          }
          create: {
            args: Prisma.formulasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formulasPayload>
          }
          createMany: {
            args: Prisma.formulasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.formulasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formulasPayload>[]
          }
          delete: {
            args: Prisma.formulasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formulasPayload>
          }
          update: {
            args: Prisma.formulasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formulasPayload>
          }
          deleteMany: {
            args: Prisma.formulasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.formulasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.formulasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formulasPayload>[]
          }
          upsert: {
            args: Prisma.formulasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formulasPayload>
          }
          aggregate: {
            args: Prisma.FormulasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormulas>
          }
          groupBy: {
            args: Prisma.formulasGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormulasGroupByOutputType>[]
          }
          count: {
            args: Prisma.formulasCountArgs<ExtArgs>
            result: $Utils.Optional<FormulasCountAggregateOutputType> | number
          }
        }
      }
      formula_interpretations: {
        payload: Prisma.$formula_interpretationsPayload<ExtArgs>
        fields: Prisma.formula_interpretationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.formula_interpretationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_interpretationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.formula_interpretationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_interpretationsPayload>
          }
          findFirst: {
            args: Prisma.formula_interpretationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_interpretationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.formula_interpretationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_interpretationsPayload>
          }
          findMany: {
            args: Prisma.formula_interpretationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_interpretationsPayload>[]
          }
          create: {
            args: Prisma.formula_interpretationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_interpretationsPayload>
          }
          createMany: {
            args: Prisma.formula_interpretationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.formula_interpretationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_interpretationsPayload>[]
          }
          delete: {
            args: Prisma.formula_interpretationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_interpretationsPayload>
          }
          update: {
            args: Prisma.formula_interpretationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_interpretationsPayload>
          }
          deleteMany: {
            args: Prisma.formula_interpretationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.formula_interpretationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.formula_interpretationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_interpretationsPayload>[]
          }
          upsert: {
            args: Prisma.formula_interpretationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_interpretationsPayload>
          }
          aggregate: {
            args: Prisma.Formula_interpretationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormula_interpretations>
          }
          groupBy: {
            args: Prisma.formula_interpretationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Formula_interpretationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.formula_interpretationsCountArgs<ExtArgs>
            result: $Utils.Optional<Formula_interpretationsCountAggregateOutputType> | number
          }
        }
      }
      tags: {
        payload: Prisma.$tagsPayload<ExtArgs>
        fields: Prisma.tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findFirst: {
            args: Prisma.tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findMany: {
            args: Prisma.tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          create: {
            args: Prisma.tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          createMany: {
            args: Prisma.tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          delete: {
            args: Prisma.tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          update: {
            args: Prisma.tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          deleteMany: {
            args: Prisma.tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          upsert: {
            args: Prisma.tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tagsCountArgs<ExtArgs>
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
          }
        }
      }
      formula_tags: {
        payload: Prisma.$formula_tagsPayload<ExtArgs>
        fields: Prisma.formula_tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.formula_tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.formula_tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_tagsPayload>
          }
          findFirst: {
            args: Prisma.formula_tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.formula_tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_tagsPayload>
          }
          findMany: {
            args: Prisma.formula_tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_tagsPayload>[]
          }
          create: {
            args: Prisma.formula_tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_tagsPayload>
          }
          createMany: {
            args: Prisma.formula_tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.formula_tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_tagsPayload>[]
          }
          delete: {
            args: Prisma.formula_tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_tagsPayload>
          }
          update: {
            args: Prisma.formula_tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_tagsPayload>
          }
          deleteMany: {
            args: Prisma.formula_tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.formula_tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.formula_tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_tagsPayload>[]
          }
          upsert: {
            args: Prisma.formula_tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_tagsPayload>
          }
          aggregate: {
            args: Prisma.Formula_tagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormula_tags>
          }
          groupBy: {
            args: Prisma.formula_tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Formula_tagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.formula_tagsCountArgs<ExtArgs>
            result: $Utils.Optional<Formula_tagsCountAggregateOutputType> | number
          }
        }
      }
      favourites: {
        payload: Prisma.$favouritesPayload<ExtArgs>
        fields: Prisma.favouritesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.favouritesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favouritesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.favouritesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favouritesPayload>
          }
          findFirst: {
            args: Prisma.favouritesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favouritesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.favouritesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favouritesPayload>
          }
          findMany: {
            args: Prisma.favouritesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favouritesPayload>[]
          }
          create: {
            args: Prisma.favouritesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favouritesPayload>
          }
          createMany: {
            args: Prisma.favouritesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.favouritesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favouritesPayload>[]
          }
          delete: {
            args: Prisma.favouritesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favouritesPayload>
          }
          update: {
            args: Prisma.favouritesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favouritesPayload>
          }
          deleteMany: {
            args: Prisma.favouritesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.favouritesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.favouritesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favouritesPayload>[]
          }
          upsert: {
            args: Prisma.favouritesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favouritesPayload>
          }
          aggregate: {
            args: Prisma.FavouritesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavourites>
          }
          groupBy: {
            args: Prisma.favouritesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavouritesGroupByOutputType>[]
          }
          count: {
            args: Prisma.favouritesCountArgs<ExtArgs>
            result: $Utils.Optional<FavouritesCountAggregateOutputType> | number
          }
        }
      }
      formula_conversations: {
        payload: Prisma.$formula_conversationsPayload<ExtArgs>
        fields: Prisma.formula_conversationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.formula_conversationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_conversationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.formula_conversationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_conversationsPayload>
          }
          findFirst: {
            args: Prisma.formula_conversationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_conversationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.formula_conversationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_conversationsPayload>
          }
          findMany: {
            args: Prisma.formula_conversationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_conversationsPayload>[]
          }
          create: {
            args: Prisma.formula_conversationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_conversationsPayload>
          }
          createMany: {
            args: Prisma.formula_conversationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.formula_conversationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_conversationsPayload>[]
          }
          delete: {
            args: Prisma.formula_conversationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_conversationsPayload>
          }
          update: {
            args: Prisma.formula_conversationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_conversationsPayload>
          }
          deleteMany: {
            args: Prisma.formula_conversationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.formula_conversationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.formula_conversationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_conversationsPayload>[]
          }
          upsert: {
            args: Prisma.formula_conversationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formula_conversationsPayload>
          }
          aggregate: {
            args: Prisma.Formula_conversationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormula_conversations>
          }
          groupBy: {
            args: Prisma.formula_conversationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Formula_conversationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.formula_conversationsCountArgs<ExtArgs>
            result: $Utils.Optional<Formula_conversationsCountAggregateOutputType> | number
          }
        }
      }
      messages: {
        payload: Prisma.$messagesPayload<ExtArgs>
        fields: Prisma.messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findFirst: {
            args: Prisma.messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findMany: {
            args: Prisma.messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          create: {
            args: Prisma.messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          createMany: {
            args: Prisma.messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.messagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          delete: {
            args: Prisma.messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          update: {
            args: Prisma.messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          deleteMany: {
            args: Prisma.messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.messagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          upsert: {
            args: Prisma.messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.messagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    formula_sessions?: formula_sessionsOmit
    formulas?: formulasOmit
    formula_interpretations?: formula_interpretationsOmit
    tags?: tagsOmit
    formula_tags?: formula_tagsOmit
    favourites?: favouritesOmit
    formula_conversations?: formula_conversationsOmit
    messages?: messagesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Formula_sessionsCountOutputType
   */

  export type Formula_sessionsCountOutputType = {
    formulas: number
  }

  export type Formula_sessionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formulas?: boolean | Formula_sessionsCountOutputTypeCountFormulasArgs
  }

  // Custom InputTypes
  /**
   * Formula_sessionsCountOutputType without action
   */
  export type Formula_sessionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formula_sessionsCountOutputType
     */
    select?: Formula_sessionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Formula_sessionsCountOutputType without action
   */
  export type Formula_sessionsCountOutputTypeCountFormulasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formulasWhereInput
  }


  /**
   * Count Type FormulasCountOutputType
   */

  export type FormulasCountOutputType = {
    interpretations: number
    conversations: number
    tags: number
    favourties: number
  }

  export type FormulasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interpretations?: boolean | FormulasCountOutputTypeCountInterpretationsArgs
    conversations?: boolean | FormulasCountOutputTypeCountConversationsArgs
    tags?: boolean | FormulasCountOutputTypeCountTagsArgs
    favourties?: boolean | FormulasCountOutputTypeCountFavourtiesArgs
  }

  // Custom InputTypes
  /**
   * FormulasCountOutputType without action
   */
  export type FormulasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormulasCountOutputType
     */
    select?: FormulasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormulasCountOutputType without action
   */
  export type FormulasCountOutputTypeCountInterpretationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formula_interpretationsWhereInput
  }

  /**
   * FormulasCountOutputType without action
   */
  export type FormulasCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formula_conversationsWhereInput
  }

  /**
   * FormulasCountOutputType without action
   */
  export type FormulasCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formula_tagsWhereInput
  }

  /**
   * FormulasCountOutputType without action
   */
  export type FormulasCountOutputTypeCountFavourtiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favouritesWhereInput
  }


  /**
   * Count Type TagsCountOutputType
   */

  export type TagsCountOutputType = {
    formulas: number
  }

  export type TagsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formulas?: boolean | TagsCountOutputTypeCountFormulasArgs
  }

  // Custom InputTypes
  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsCountOutputType
     */
    select?: TagsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeCountFormulasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formula_tagsWhereInput
  }


  /**
   * Count Type Formula_conversationsCountOutputType
   */

  export type Formula_conversationsCountOutputType = {
    messages: number
  }

  export type Formula_conversationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | Formula_conversationsCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * Formula_conversationsCountOutputType without action
   */
  export type Formula_conversationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formula_conversationsCountOutputType
     */
    select?: Formula_conversationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Formula_conversationsCountOutputType without action
   */
  export type Formula_conversationsCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model formula_sessions
   */

  export type AggregateFormula_sessions = {
    _count: Formula_sessionsCountAggregateOutputType | null
    _min: Formula_sessionsMinAggregateOutputType | null
    _max: Formula_sessionsMaxAggregateOutputType | null
  }

  export type Formula_sessionsMinAggregateOutputType = {
    session_id: string | null
    input_type: string | null
    source_content: string | null
    created_at: Date | null
  }

  export type Formula_sessionsMaxAggregateOutputType = {
    session_id: string | null
    input_type: string | null
    source_content: string | null
    created_at: Date | null
  }

  export type Formula_sessionsCountAggregateOutputType = {
    session_id: number
    input_type: number
    source_content: number
    created_at: number
    _all: number
  }


  export type Formula_sessionsMinAggregateInputType = {
    session_id?: true
    input_type?: true
    source_content?: true
    created_at?: true
  }

  export type Formula_sessionsMaxAggregateInputType = {
    session_id?: true
    input_type?: true
    source_content?: true
    created_at?: true
  }

  export type Formula_sessionsCountAggregateInputType = {
    session_id?: true
    input_type?: true
    source_content?: true
    created_at?: true
    _all?: true
  }

  export type Formula_sessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formula_sessions to aggregate.
     */
    where?: formula_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formula_sessions to fetch.
     */
    orderBy?: formula_sessionsOrderByWithRelationInput | formula_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: formula_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formula_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formula_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned formula_sessions
    **/
    _count?: true | Formula_sessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Formula_sessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Formula_sessionsMaxAggregateInputType
  }

  export type GetFormula_sessionsAggregateType<T extends Formula_sessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateFormula_sessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormula_sessions[P]>
      : GetScalarType<T[P], AggregateFormula_sessions[P]>
  }




  export type formula_sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formula_sessionsWhereInput
    orderBy?: formula_sessionsOrderByWithAggregationInput | formula_sessionsOrderByWithAggregationInput[]
    by: Formula_sessionsScalarFieldEnum[] | Formula_sessionsScalarFieldEnum
    having?: formula_sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Formula_sessionsCountAggregateInputType | true
    _min?: Formula_sessionsMinAggregateInputType
    _max?: Formula_sessionsMaxAggregateInputType
  }

  export type Formula_sessionsGroupByOutputType = {
    session_id: string
    input_type: string
    source_content: string | null
    created_at: Date
    _count: Formula_sessionsCountAggregateOutputType | null
    _min: Formula_sessionsMinAggregateOutputType | null
    _max: Formula_sessionsMaxAggregateOutputType | null
  }

  type GetFormula_sessionsGroupByPayload<T extends formula_sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Formula_sessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Formula_sessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Formula_sessionsGroupByOutputType[P]>
            : GetScalarType<T[P], Formula_sessionsGroupByOutputType[P]>
        }
      >
    >


  export type formula_sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    session_id?: boolean
    input_type?: boolean
    source_content?: boolean
    created_at?: boolean
    formulas?: boolean | formula_sessions$formulasArgs<ExtArgs>
    _count?: boolean | Formula_sessionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formula_sessions"]>

  export type formula_sessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    session_id?: boolean
    input_type?: boolean
    source_content?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["formula_sessions"]>

  export type formula_sessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    session_id?: boolean
    input_type?: boolean
    source_content?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["formula_sessions"]>

  export type formula_sessionsSelectScalar = {
    session_id?: boolean
    input_type?: boolean
    source_content?: boolean
    created_at?: boolean
  }

  export type formula_sessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"session_id" | "input_type" | "source_content" | "created_at", ExtArgs["result"]["formula_sessions"]>
  export type formula_sessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formulas?: boolean | formula_sessions$formulasArgs<ExtArgs>
    _count?: boolean | Formula_sessionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type formula_sessionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type formula_sessionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $formula_sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "formula_sessions"
    objects: {
      formulas: Prisma.$formulasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Unique identifier
       */
      session_id: string
      /**
       * Input type (image/handwritting/text)
       */
      input_type: string
      /**
       * (Optional) Original input content (file path, text, etc.)
       */
      source_content: string | null
      /**
       * Create time
       */
      created_at: Date
    }, ExtArgs["result"]["formula_sessions"]>
    composites: {}
  }

  type formula_sessionsGetPayload<S extends boolean | null | undefined | formula_sessionsDefaultArgs> = $Result.GetResult<Prisma.$formula_sessionsPayload, S>

  type formula_sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<formula_sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Formula_sessionsCountAggregateInputType | true
    }

  export interface formula_sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['formula_sessions'], meta: { name: 'formula_sessions' } }
    /**
     * Find zero or one Formula_sessions that matches the filter.
     * @param {formula_sessionsFindUniqueArgs} args - Arguments to find a Formula_sessions
     * @example
     * // Get one Formula_sessions
     * const formula_sessions = await prisma.formula_sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends formula_sessionsFindUniqueArgs>(args: SelectSubset<T, formula_sessionsFindUniqueArgs<ExtArgs>>): Prisma__formula_sessionsClient<$Result.GetResult<Prisma.$formula_sessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Formula_sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {formula_sessionsFindUniqueOrThrowArgs} args - Arguments to find a Formula_sessions
     * @example
     * // Get one Formula_sessions
     * const formula_sessions = await prisma.formula_sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends formula_sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, formula_sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__formula_sessionsClient<$Result.GetResult<Prisma.$formula_sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formula_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formula_sessionsFindFirstArgs} args - Arguments to find a Formula_sessions
     * @example
     * // Get one Formula_sessions
     * const formula_sessions = await prisma.formula_sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends formula_sessionsFindFirstArgs>(args?: SelectSubset<T, formula_sessionsFindFirstArgs<ExtArgs>>): Prisma__formula_sessionsClient<$Result.GetResult<Prisma.$formula_sessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formula_sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formula_sessionsFindFirstOrThrowArgs} args - Arguments to find a Formula_sessions
     * @example
     * // Get one Formula_sessions
     * const formula_sessions = await prisma.formula_sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends formula_sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, formula_sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__formula_sessionsClient<$Result.GetResult<Prisma.$formula_sessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formula_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formula_sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formula_sessions
     * const formula_sessions = await prisma.formula_sessions.findMany()
     * 
     * // Get first 10 Formula_sessions
     * const formula_sessions = await prisma.formula_sessions.findMany({ take: 10 })
     * 
     * // Only select the `session_id`
     * const formula_sessionsWithSession_idOnly = await prisma.formula_sessions.findMany({ select: { session_id: true } })
     * 
     */
    findMany<T extends formula_sessionsFindManyArgs>(args?: SelectSubset<T, formula_sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formula_sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Formula_sessions.
     * @param {formula_sessionsCreateArgs} args - Arguments to create a Formula_sessions.
     * @example
     * // Create one Formula_sessions
     * const Formula_sessions = await prisma.formula_sessions.create({
     *   data: {
     *     // ... data to create a Formula_sessions
     *   }
     * })
     * 
     */
    create<T extends formula_sessionsCreateArgs>(args: SelectSubset<T, formula_sessionsCreateArgs<ExtArgs>>): Prisma__formula_sessionsClient<$Result.GetResult<Prisma.$formula_sessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formula_sessions.
     * @param {formula_sessionsCreateManyArgs} args - Arguments to create many Formula_sessions.
     * @example
     * // Create many Formula_sessions
     * const formula_sessions = await prisma.formula_sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends formula_sessionsCreateManyArgs>(args?: SelectSubset<T, formula_sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Formula_sessions and returns the data saved in the database.
     * @param {formula_sessionsCreateManyAndReturnArgs} args - Arguments to create many Formula_sessions.
     * @example
     * // Create many Formula_sessions
     * const formula_sessions = await prisma.formula_sessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Formula_sessions and only return the `session_id`
     * const formula_sessionsWithSession_idOnly = await prisma.formula_sessions.createManyAndReturn({
     *   select: { session_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends formula_sessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, formula_sessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formula_sessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Formula_sessions.
     * @param {formula_sessionsDeleteArgs} args - Arguments to delete one Formula_sessions.
     * @example
     * // Delete one Formula_sessions
     * const Formula_sessions = await prisma.formula_sessions.delete({
     *   where: {
     *     // ... filter to delete one Formula_sessions
     *   }
     * })
     * 
     */
    delete<T extends formula_sessionsDeleteArgs>(args: SelectSubset<T, formula_sessionsDeleteArgs<ExtArgs>>): Prisma__formula_sessionsClient<$Result.GetResult<Prisma.$formula_sessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Formula_sessions.
     * @param {formula_sessionsUpdateArgs} args - Arguments to update one Formula_sessions.
     * @example
     * // Update one Formula_sessions
     * const formula_sessions = await prisma.formula_sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends formula_sessionsUpdateArgs>(args: SelectSubset<T, formula_sessionsUpdateArgs<ExtArgs>>): Prisma__formula_sessionsClient<$Result.GetResult<Prisma.$formula_sessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formula_sessions.
     * @param {formula_sessionsDeleteManyArgs} args - Arguments to filter Formula_sessions to delete.
     * @example
     * // Delete a few Formula_sessions
     * const { count } = await prisma.formula_sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends formula_sessionsDeleteManyArgs>(args?: SelectSubset<T, formula_sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formula_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formula_sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formula_sessions
     * const formula_sessions = await prisma.formula_sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends formula_sessionsUpdateManyArgs>(args: SelectSubset<T, formula_sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formula_sessions and returns the data updated in the database.
     * @param {formula_sessionsUpdateManyAndReturnArgs} args - Arguments to update many Formula_sessions.
     * @example
     * // Update many Formula_sessions
     * const formula_sessions = await prisma.formula_sessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Formula_sessions and only return the `session_id`
     * const formula_sessionsWithSession_idOnly = await prisma.formula_sessions.updateManyAndReturn({
     *   select: { session_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends formula_sessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, formula_sessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formula_sessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Formula_sessions.
     * @param {formula_sessionsUpsertArgs} args - Arguments to update or create a Formula_sessions.
     * @example
     * // Update or create a Formula_sessions
     * const formula_sessions = await prisma.formula_sessions.upsert({
     *   create: {
     *     // ... data to create a Formula_sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formula_sessions we want to update
     *   }
     * })
     */
    upsert<T extends formula_sessionsUpsertArgs>(args: SelectSubset<T, formula_sessionsUpsertArgs<ExtArgs>>): Prisma__formula_sessionsClient<$Result.GetResult<Prisma.$formula_sessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formula_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formula_sessionsCountArgs} args - Arguments to filter Formula_sessions to count.
     * @example
     * // Count the number of Formula_sessions
     * const count = await prisma.formula_sessions.count({
     *   where: {
     *     // ... the filter for the Formula_sessions we want to count
     *   }
     * })
    **/
    count<T extends formula_sessionsCountArgs>(
      args?: Subset<T, formula_sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Formula_sessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formula_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Formula_sessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Formula_sessionsAggregateArgs>(args: Subset<T, Formula_sessionsAggregateArgs>): Prisma.PrismaPromise<GetFormula_sessionsAggregateType<T>>

    /**
     * Group by Formula_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formula_sessionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends formula_sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: formula_sessionsGroupByArgs['orderBy'] }
        : { orderBy?: formula_sessionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, formula_sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormula_sessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the formula_sessions model
   */
  readonly fields: formula_sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for formula_sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__formula_sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    formulas<T extends formula_sessions$formulasArgs<ExtArgs> = {}>(args?: Subset<T, formula_sessions$formulasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formulasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the formula_sessions model
   */
  interface formula_sessionsFieldRefs {
    readonly session_id: FieldRef<"formula_sessions", 'String'>
    readonly input_type: FieldRef<"formula_sessions", 'String'>
    readonly source_content: FieldRef<"formula_sessions", 'String'>
    readonly created_at: FieldRef<"formula_sessions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * formula_sessions findUnique
   */
  export type formula_sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_sessions
     */
    select?: formula_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_sessions
     */
    omit?: formula_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which formula_sessions to fetch.
     */
    where: formula_sessionsWhereUniqueInput
  }

  /**
   * formula_sessions findUniqueOrThrow
   */
  export type formula_sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_sessions
     */
    select?: formula_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_sessions
     */
    omit?: formula_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which formula_sessions to fetch.
     */
    where: formula_sessionsWhereUniqueInput
  }

  /**
   * formula_sessions findFirst
   */
  export type formula_sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_sessions
     */
    select?: formula_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_sessions
     */
    omit?: formula_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which formula_sessions to fetch.
     */
    where?: formula_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formula_sessions to fetch.
     */
    orderBy?: formula_sessionsOrderByWithRelationInput | formula_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formula_sessions.
     */
    cursor?: formula_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formula_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formula_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formula_sessions.
     */
    distinct?: Formula_sessionsScalarFieldEnum | Formula_sessionsScalarFieldEnum[]
  }

  /**
   * formula_sessions findFirstOrThrow
   */
  export type formula_sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_sessions
     */
    select?: formula_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_sessions
     */
    omit?: formula_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which formula_sessions to fetch.
     */
    where?: formula_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formula_sessions to fetch.
     */
    orderBy?: formula_sessionsOrderByWithRelationInput | formula_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formula_sessions.
     */
    cursor?: formula_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formula_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formula_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formula_sessions.
     */
    distinct?: Formula_sessionsScalarFieldEnum | Formula_sessionsScalarFieldEnum[]
  }

  /**
   * formula_sessions findMany
   */
  export type formula_sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_sessions
     */
    select?: formula_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_sessions
     */
    omit?: formula_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which formula_sessions to fetch.
     */
    where?: formula_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formula_sessions to fetch.
     */
    orderBy?: formula_sessionsOrderByWithRelationInput | formula_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing formula_sessions.
     */
    cursor?: formula_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formula_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formula_sessions.
     */
    skip?: number
    distinct?: Formula_sessionsScalarFieldEnum | Formula_sessionsScalarFieldEnum[]
  }

  /**
   * formula_sessions create
   */
  export type formula_sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_sessions
     */
    select?: formula_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_sessions
     */
    omit?: formula_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_sessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a formula_sessions.
     */
    data: XOR<formula_sessionsCreateInput, formula_sessionsUncheckedCreateInput>
  }

  /**
   * formula_sessions createMany
   */
  export type formula_sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many formula_sessions.
     */
    data: formula_sessionsCreateManyInput | formula_sessionsCreateManyInput[]
  }

  /**
   * formula_sessions createManyAndReturn
   */
  export type formula_sessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_sessions
     */
    select?: formula_sessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the formula_sessions
     */
    omit?: formula_sessionsOmit<ExtArgs> | null
    /**
     * The data used to create many formula_sessions.
     */
    data: formula_sessionsCreateManyInput | formula_sessionsCreateManyInput[]
  }

  /**
   * formula_sessions update
   */
  export type formula_sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_sessions
     */
    select?: formula_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_sessions
     */
    omit?: formula_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_sessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a formula_sessions.
     */
    data: XOR<formula_sessionsUpdateInput, formula_sessionsUncheckedUpdateInput>
    /**
     * Choose, which formula_sessions to update.
     */
    where: formula_sessionsWhereUniqueInput
  }

  /**
   * formula_sessions updateMany
   */
  export type formula_sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update formula_sessions.
     */
    data: XOR<formula_sessionsUpdateManyMutationInput, formula_sessionsUncheckedUpdateManyInput>
    /**
     * Filter which formula_sessions to update
     */
    where?: formula_sessionsWhereInput
    /**
     * Limit how many formula_sessions to update.
     */
    limit?: number
  }

  /**
   * formula_sessions updateManyAndReturn
   */
  export type formula_sessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_sessions
     */
    select?: formula_sessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the formula_sessions
     */
    omit?: formula_sessionsOmit<ExtArgs> | null
    /**
     * The data used to update formula_sessions.
     */
    data: XOR<formula_sessionsUpdateManyMutationInput, formula_sessionsUncheckedUpdateManyInput>
    /**
     * Filter which formula_sessions to update
     */
    where?: formula_sessionsWhereInput
    /**
     * Limit how many formula_sessions to update.
     */
    limit?: number
  }

  /**
   * formula_sessions upsert
   */
  export type formula_sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_sessions
     */
    select?: formula_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_sessions
     */
    omit?: formula_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_sessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the formula_sessions to update in case it exists.
     */
    where: formula_sessionsWhereUniqueInput
    /**
     * In case the formula_sessions found by the `where` argument doesn't exist, create a new formula_sessions with this data.
     */
    create: XOR<formula_sessionsCreateInput, formula_sessionsUncheckedCreateInput>
    /**
     * In case the formula_sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<formula_sessionsUpdateInput, formula_sessionsUncheckedUpdateInput>
  }

  /**
   * formula_sessions delete
   */
  export type formula_sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_sessions
     */
    select?: formula_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_sessions
     */
    omit?: formula_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_sessionsInclude<ExtArgs> | null
    /**
     * Filter which formula_sessions to delete.
     */
    where: formula_sessionsWhereUniqueInput
  }

  /**
   * formula_sessions deleteMany
   */
  export type formula_sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formula_sessions to delete
     */
    where?: formula_sessionsWhereInput
    /**
     * Limit how many formula_sessions to delete.
     */
    limit?: number
  }

  /**
   * formula_sessions.formulas
   */
  export type formula_sessions$formulasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formulas
     */
    select?: formulasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formulas
     */
    omit?: formulasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formulasInclude<ExtArgs> | null
    where?: formulasWhereInput
    orderBy?: formulasOrderByWithRelationInput | formulasOrderByWithRelationInput[]
    cursor?: formulasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormulasScalarFieldEnum | FormulasScalarFieldEnum[]
  }

  /**
   * formula_sessions without action
   */
  export type formula_sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_sessions
     */
    select?: formula_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_sessions
     */
    omit?: formula_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_sessionsInclude<ExtArgs> | null
  }


  /**
   * Model formulas
   */

  export type AggregateFormulas = {
    _count: FormulasCountAggregateOutputType | null
    _avg: FormulasAvgAggregateOutputType | null
    _sum: FormulasSumAggregateOutputType | null
    _min: FormulasMinAggregateOutputType | null
    _max: FormulasMaxAggregateOutputType | null
  }

  export type FormulasAvgAggregateOutputType = {
    confidence: number | null
  }

  export type FormulasSumAggregateOutputType = {
    confidence: number | null
  }

  export type FormulasMinAggregateOutputType = {
    formula_id: string | null
    session_id: string | null
    latex_code: string | null
    recognized_by: string | null
    confidence: number | null
    name: string | null
    description: string | null
    created_at: Date | null
  }

  export type FormulasMaxAggregateOutputType = {
    formula_id: string | null
    session_id: string | null
    latex_code: string | null
    recognized_by: string | null
    confidence: number | null
    name: string | null
    description: string | null
    created_at: Date | null
  }

  export type FormulasCountAggregateOutputType = {
    formula_id: number
    session_id: number
    latex_code: number
    recognized_by: number
    confidence: number
    name: number
    description: number
    created_at: number
    _all: number
  }


  export type FormulasAvgAggregateInputType = {
    confidence?: true
  }

  export type FormulasSumAggregateInputType = {
    confidence?: true
  }

  export type FormulasMinAggregateInputType = {
    formula_id?: true
    session_id?: true
    latex_code?: true
    recognized_by?: true
    confidence?: true
    name?: true
    description?: true
    created_at?: true
  }

  export type FormulasMaxAggregateInputType = {
    formula_id?: true
    session_id?: true
    latex_code?: true
    recognized_by?: true
    confidence?: true
    name?: true
    description?: true
    created_at?: true
  }

  export type FormulasCountAggregateInputType = {
    formula_id?: true
    session_id?: true
    latex_code?: true
    recognized_by?: true
    confidence?: true
    name?: true
    description?: true
    created_at?: true
    _all?: true
  }

  export type FormulasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formulas to aggregate.
     */
    where?: formulasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formulas to fetch.
     */
    orderBy?: formulasOrderByWithRelationInput | formulasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: formulasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned formulas
    **/
    _count?: true | FormulasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormulasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormulasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormulasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormulasMaxAggregateInputType
  }

  export type GetFormulasAggregateType<T extends FormulasAggregateArgs> = {
        [P in keyof T & keyof AggregateFormulas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormulas[P]>
      : GetScalarType<T[P], AggregateFormulas[P]>
  }




  export type formulasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formulasWhereInput
    orderBy?: formulasOrderByWithAggregationInput | formulasOrderByWithAggregationInput[]
    by: FormulasScalarFieldEnum[] | FormulasScalarFieldEnum
    having?: formulasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormulasCountAggregateInputType | true
    _avg?: FormulasAvgAggregateInputType
    _sum?: FormulasSumAggregateInputType
    _min?: FormulasMinAggregateInputType
    _max?: FormulasMaxAggregateInputType
  }

  export type FormulasGroupByOutputType = {
    formula_id: string
    session_id: string
    latex_code: string
    recognized_by: string
    confidence: number | null
    name: string | null
    description: string | null
    created_at: Date
    _count: FormulasCountAggregateOutputType | null
    _avg: FormulasAvgAggregateOutputType | null
    _sum: FormulasSumAggregateOutputType | null
    _min: FormulasMinAggregateOutputType | null
    _max: FormulasMaxAggregateOutputType | null
  }

  type GetFormulasGroupByPayload<T extends formulasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormulasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormulasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormulasGroupByOutputType[P]>
            : GetScalarType<T[P], FormulasGroupByOutputType[P]>
        }
      >
    >


  export type formulasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    formula_id?: boolean
    session_id?: boolean
    latex_code?: boolean
    recognized_by?: boolean
    confidence?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    session?: boolean | formula_sessionsDefaultArgs<ExtArgs>
    interpretations?: boolean | formulas$interpretationsArgs<ExtArgs>
    conversations?: boolean | formulas$conversationsArgs<ExtArgs>
    tags?: boolean | formulas$tagsArgs<ExtArgs>
    favourties?: boolean | formulas$favourtiesArgs<ExtArgs>
    _count?: boolean | FormulasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formulas"]>

  export type formulasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    formula_id?: boolean
    session_id?: boolean
    latex_code?: boolean
    recognized_by?: boolean
    confidence?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    session?: boolean | formula_sessionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formulas"]>

  export type formulasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    formula_id?: boolean
    session_id?: boolean
    latex_code?: boolean
    recognized_by?: boolean
    confidence?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    session?: boolean | formula_sessionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formulas"]>

  export type formulasSelectScalar = {
    formula_id?: boolean
    session_id?: boolean
    latex_code?: boolean
    recognized_by?: boolean
    confidence?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
  }

  export type formulasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"formula_id" | "session_id" | "latex_code" | "recognized_by" | "confidence" | "name" | "description" | "created_at", ExtArgs["result"]["formulas"]>
  export type formulasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | formula_sessionsDefaultArgs<ExtArgs>
    interpretations?: boolean | formulas$interpretationsArgs<ExtArgs>
    conversations?: boolean | formulas$conversationsArgs<ExtArgs>
    tags?: boolean | formulas$tagsArgs<ExtArgs>
    favourties?: boolean | formulas$favourtiesArgs<ExtArgs>
    _count?: boolean | FormulasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type formulasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | formula_sessionsDefaultArgs<ExtArgs>
  }
  export type formulasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | formula_sessionsDefaultArgs<ExtArgs>
  }

  export type $formulasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "formulas"
    objects: {
      session: Prisma.$formula_sessionsPayload<ExtArgs>
      interpretations: Prisma.$formula_interpretationsPayload<ExtArgs>[]
      conversations: Prisma.$formula_conversationsPayload<ExtArgs>[]
      tags: Prisma.$formula_tagsPayload<ExtArgs>[]
      favourties: Prisma.$favouritesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Unique identifier
       */
      formula_id: string
      /**
       * Source session UUID
       */
      session_id: string
      /**
       * Standard LaTeX code
       */
      latex_code: string
      /**
       * Used recognition API name (e.g., SimpleTex)
       */
      recognized_by: string
      /**
       * (Optional) Recognition confidence
       */
      confidence: number | null
      /**
       * (Optional) Formula name by user
       */
      name: string | null
      /**
       * (Optional) Description by user
       */
      description: string | null
      /**
       * Create time
       */
      created_at: Date
    }, ExtArgs["result"]["formulas"]>
    composites: {}
  }

  type formulasGetPayload<S extends boolean | null | undefined | formulasDefaultArgs> = $Result.GetResult<Prisma.$formulasPayload, S>

  type formulasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<formulasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormulasCountAggregateInputType | true
    }

  export interface formulasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['formulas'], meta: { name: 'formulas' } }
    /**
     * Find zero or one Formulas that matches the filter.
     * @param {formulasFindUniqueArgs} args - Arguments to find a Formulas
     * @example
     * // Get one Formulas
     * const formulas = await prisma.formulas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends formulasFindUniqueArgs>(args: SelectSubset<T, formulasFindUniqueArgs<ExtArgs>>): Prisma__formulasClient<$Result.GetResult<Prisma.$formulasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Formulas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {formulasFindUniqueOrThrowArgs} args - Arguments to find a Formulas
     * @example
     * // Get one Formulas
     * const formulas = await prisma.formulas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends formulasFindUniqueOrThrowArgs>(args: SelectSubset<T, formulasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__formulasClient<$Result.GetResult<Prisma.$formulasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formulas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formulasFindFirstArgs} args - Arguments to find a Formulas
     * @example
     * // Get one Formulas
     * const formulas = await prisma.formulas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends formulasFindFirstArgs>(args?: SelectSubset<T, formulasFindFirstArgs<ExtArgs>>): Prisma__formulasClient<$Result.GetResult<Prisma.$formulasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formulas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formulasFindFirstOrThrowArgs} args - Arguments to find a Formulas
     * @example
     * // Get one Formulas
     * const formulas = await prisma.formulas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends formulasFindFirstOrThrowArgs>(args?: SelectSubset<T, formulasFindFirstOrThrowArgs<ExtArgs>>): Prisma__formulasClient<$Result.GetResult<Prisma.$formulasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formulas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formulasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formulas
     * const formulas = await prisma.formulas.findMany()
     * 
     * // Get first 10 Formulas
     * const formulas = await prisma.formulas.findMany({ take: 10 })
     * 
     * // Only select the `formula_id`
     * const formulasWithFormula_idOnly = await prisma.formulas.findMany({ select: { formula_id: true } })
     * 
     */
    findMany<T extends formulasFindManyArgs>(args?: SelectSubset<T, formulasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formulasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Formulas.
     * @param {formulasCreateArgs} args - Arguments to create a Formulas.
     * @example
     * // Create one Formulas
     * const Formulas = await prisma.formulas.create({
     *   data: {
     *     // ... data to create a Formulas
     *   }
     * })
     * 
     */
    create<T extends formulasCreateArgs>(args: SelectSubset<T, formulasCreateArgs<ExtArgs>>): Prisma__formulasClient<$Result.GetResult<Prisma.$formulasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formulas.
     * @param {formulasCreateManyArgs} args - Arguments to create many Formulas.
     * @example
     * // Create many Formulas
     * const formulas = await prisma.formulas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends formulasCreateManyArgs>(args?: SelectSubset<T, formulasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Formulas and returns the data saved in the database.
     * @param {formulasCreateManyAndReturnArgs} args - Arguments to create many Formulas.
     * @example
     * // Create many Formulas
     * const formulas = await prisma.formulas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Formulas and only return the `formula_id`
     * const formulasWithFormula_idOnly = await prisma.formulas.createManyAndReturn({
     *   select: { formula_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends formulasCreateManyAndReturnArgs>(args?: SelectSubset<T, formulasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formulasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Formulas.
     * @param {formulasDeleteArgs} args - Arguments to delete one Formulas.
     * @example
     * // Delete one Formulas
     * const Formulas = await prisma.formulas.delete({
     *   where: {
     *     // ... filter to delete one Formulas
     *   }
     * })
     * 
     */
    delete<T extends formulasDeleteArgs>(args: SelectSubset<T, formulasDeleteArgs<ExtArgs>>): Prisma__formulasClient<$Result.GetResult<Prisma.$formulasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Formulas.
     * @param {formulasUpdateArgs} args - Arguments to update one Formulas.
     * @example
     * // Update one Formulas
     * const formulas = await prisma.formulas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends formulasUpdateArgs>(args: SelectSubset<T, formulasUpdateArgs<ExtArgs>>): Prisma__formulasClient<$Result.GetResult<Prisma.$formulasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formulas.
     * @param {formulasDeleteManyArgs} args - Arguments to filter Formulas to delete.
     * @example
     * // Delete a few Formulas
     * const { count } = await prisma.formulas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends formulasDeleteManyArgs>(args?: SelectSubset<T, formulasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formulasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formulas
     * const formulas = await prisma.formulas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends formulasUpdateManyArgs>(args: SelectSubset<T, formulasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formulas and returns the data updated in the database.
     * @param {formulasUpdateManyAndReturnArgs} args - Arguments to update many Formulas.
     * @example
     * // Update many Formulas
     * const formulas = await prisma.formulas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Formulas and only return the `formula_id`
     * const formulasWithFormula_idOnly = await prisma.formulas.updateManyAndReturn({
     *   select: { formula_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends formulasUpdateManyAndReturnArgs>(args: SelectSubset<T, formulasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formulasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Formulas.
     * @param {formulasUpsertArgs} args - Arguments to update or create a Formulas.
     * @example
     * // Update or create a Formulas
     * const formulas = await prisma.formulas.upsert({
     *   create: {
     *     // ... data to create a Formulas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formulas we want to update
     *   }
     * })
     */
    upsert<T extends formulasUpsertArgs>(args: SelectSubset<T, formulasUpsertArgs<ExtArgs>>): Prisma__formulasClient<$Result.GetResult<Prisma.$formulasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formulasCountArgs} args - Arguments to filter Formulas to count.
     * @example
     * // Count the number of Formulas
     * const count = await prisma.formulas.count({
     *   where: {
     *     // ... the filter for the Formulas we want to count
     *   }
     * })
    **/
    count<T extends formulasCountArgs>(
      args?: Subset<T, formulasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormulasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormulasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormulasAggregateArgs>(args: Subset<T, FormulasAggregateArgs>): Prisma.PrismaPromise<GetFormulasAggregateType<T>>

    /**
     * Group by Formulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formulasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends formulasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: formulasGroupByArgs['orderBy'] }
        : { orderBy?: formulasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, formulasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormulasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the formulas model
   */
  readonly fields: formulasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for formulas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__formulasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends formula_sessionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, formula_sessionsDefaultArgs<ExtArgs>>): Prisma__formula_sessionsClient<$Result.GetResult<Prisma.$formula_sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interpretations<T extends formulas$interpretationsArgs<ExtArgs> = {}>(args?: Subset<T, formulas$interpretationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formula_interpretationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversations<T extends formulas$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, formulas$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formula_conversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends formulas$tagsArgs<ExtArgs> = {}>(args?: Subset<T, formulas$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formula_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favourties<T extends formulas$favourtiesArgs<ExtArgs> = {}>(args?: Subset<T, formulas$favourtiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favouritesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the formulas model
   */
  interface formulasFieldRefs {
    readonly formula_id: FieldRef<"formulas", 'String'>
    readonly session_id: FieldRef<"formulas", 'String'>
    readonly latex_code: FieldRef<"formulas", 'String'>
    readonly recognized_by: FieldRef<"formulas", 'String'>
    readonly confidence: FieldRef<"formulas", 'Float'>
    readonly name: FieldRef<"formulas", 'String'>
    readonly description: FieldRef<"formulas", 'String'>
    readonly created_at: FieldRef<"formulas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * formulas findUnique
   */
  export type formulasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formulas
     */
    select?: formulasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formulas
     */
    omit?: formulasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formulasInclude<ExtArgs> | null
    /**
     * Filter, which formulas to fetch.
     */
    where: formulasWhereUniqueInput
  }

  /**
   * formulas findUniqueOrThrow
   */
  export type formulasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formulas
     */
    select?: formulasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formulas
     */
    omit?: formulasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formulasInclude<ExtArgs> | null
    /**
     * Filter, which formulas to fetch.
     */
    where: formulasWhereUniqueInput
  }

  /**
   * formulas findFirst
   */
  export type formulasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formulas
     */
    select?: formulasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formulas
     */
    omit?: formulasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formulasInclude<ExtArgs> | null
    /**
     * Filter, which formulas to fetch.
     */
    where?: formulasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formulas to fetch.
     */
    orderBy?: formulasOrderByWithRelationInput | formulasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formulas.
     */
    cursor?: formulasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formulas.
     */
    distinct?: FormulasScalarFieldEnum | FormulasScalarFieldEnum[]
  }

  /**
   * formulas findFirstOrThrow
   */
  export type formulasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formulas
     */
    select?: formulasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formulas
     */
    omit?: formulasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formulasInclude<ExtArgs> | null
    /**
     * Filter, which formulas to fetch.
     */
    where?: formulasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formulas to fetch.
     */
    orderBy?: formulasOrderByWithRelationInput | formulasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formulas.
     */
    cursor?: formulasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formulas.
     */
    distinct?: FormulasScalarFieldEnum | FormulasScalarFieldEnum[]
  }

  /**
   * formulas findMany
   */
  export type formulasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formulas
     */
    select?: formulasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formulas
     */
    omit?: formulasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formulasInclude<ExtArgs> | null
    /**
     * Filter, which formulas to fetch.
     */
    where?: formulasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formulas to fetch.
     */
    orderBy?: formulasOrderByWithRelationInput | formulasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing formulas.
     */
    cursor?: formulasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formulas.
     */
    skip?: number
    distinct?: FormulasScalarFieldEnum | FormulasScalarFieldEnum[]
  }

  /**
   * formulas create
   */
  export type formulasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formulas
     */
    select?: formulasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formulas
     */
    omit?: formulasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formulasInclude<ExtArgs> | null
    /**
     * The data needed to create a formulas.
     */
    data: XOR<formulasCreateInput, formulasUncheckedCreateInput>
  }

  /**
   * formulas createMany
   */
  export type formulasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many formulas.
     */
    data: formulasCreateManyInput | formulasCreateManyInput[]
  }

  /**
   * formulas createManyAndReturn
   */
  export type formulasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formulas
     */
    select?: formulasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the formulas
     */
    omit?: formulasOmit<ExtArgs> | null
    /**
     * The data used to create many formulas.
     */
    data: formulasCreateManyInput | formulasCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formulasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * formulas update
   */
  export type formulasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formulas
     */
    select?: formulasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formulas
     */
    omit?: formulasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formulasInclude<ExtArgs> | null
    /**
     * The data needed to update a formulas.
     */
    data: XOR<formulasUpdateInput, formulasUncheckedUpdateInput>
    /**
     * Choose, which formulas to update.
     */
    where: formulasWhereUniqueInput
  }

  /**
   * formulas updateMany
   */
  export type formulasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update formulas.
     */
    data: XOR<formulasUpdateManyMutationInput, formulasUncheckedUpdateManyInput>
    /**
     * Filter which formulas to update
     */
    where?: formulasWhereInput
    /**
     * Limit how many formulas to update.
     */
    limit?: number
  }

  /**
   * formulas updateManyAndReturn
   */
  export type formulasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formulas
     */
    select?: formulasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the formulas
     */
    omit?: formulasOmit<ExtArgs> | null
    /**
     * The data used to update formulas.
     */
    data: XOR<formulasUpdateManyMutationInput, formulasUncheckedUpdateManyInput>
    /**
     * Filter which formulas to update
     */
    where?: formulasWhereInput
    /**
     * Limit how many formulas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formulasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * formulas upsert
   */
  export type formulasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formulas
     */
    select?: formulasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formulas
     */
    omit?: formulasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formulasInclude<ExtArgs> | null
    /**
     * The filter to search for the formulas to update in case it exists.
     */
    where: formulasWhereUniqueInput
    /**
     * In case the formulas found by the `where` argument doesn't exist, create a new formulas with this data.
     */
    create: XOR<formulasCreateInput, formulasUncheckedCreateInput>
    /**
     * In case the formulas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<formulasUpdateInput, formulasUncheckedUpdateInput>
  }

  /**
   * formulas delete
   */
  export type formulasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formulas
     */
    select?: formulasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formulas
     */
    omit?: formulasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formulasInclude<ExtArgs> | null
    /**
     * Filter which formulas to delete.
     */
    where: formulasWhereUniqueInput
  }

  /**
   * formulas deleteMany
   */
  export type formulasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formulas to delete
     */
    where?: formulasWhereInput
    /**
     * Limit how many formulas to delete.
     */
    limit?: number
  }

  /**
   * formulas.interpretations
   */
  export type formulas$interpretationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_interpretations
     */
    select?: formula_interpretationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_interpretations
     */
    omit?: formula_interpretationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_interpretationsInclude<ExtArgs> | null
    where?: formula_interpretationsWhereInput
    orderBy?: formula_interpretationsOrderByWithRelationInput | formula_interpretationsOrderByWithRelationInput[]
    cursor?: formula_interpretationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Formula_interpretationsScalarFieldEnum | Formula_interpretationsScalarFieldEnum[]
  }

  /**
   * formulas.conversations
   */
  export type formulas$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_conversations
     */
    select?: formula_conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_conversations
     */
    omit?: formula_conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_conversationsInclude<ExtArgs> | null
    where?: formula_conversationsWhereInput
    orderBy?: formula_conversationsOrderByWithRelationInput | formula_conversationsOrderByWithRelationInput[]
    cursor?: formula_conversationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Formula_conversationsScalarFieldEnum | Formula_conversationsScalarFieldEnum[]
  }

  /**
   * formulas.tags
   */
  export type formulas$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_tags
     */
    select?: formula_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_tags
     */
    omit?: formula_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_tagsInclude<ExtArgs> | null
    where?: formula_tagsWhereInput
    orderBy?: formula_tagsOrderByWithRelationInput | formula_tagsOrderByWithRelationInput[]
    cursor?: formula_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Formula_tagsScalarFieldEnum | Formula_tagsScalarFieldEnum[]
  }

  /**
   * formulas.favourties
   */
  export type formulas$favourtiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesInclude<ExtArgs> | null
    where?: favouritesWhereInput
    orderBy?: favouritesOrderByWithRelationInput | favouritesOrderByWithRelationInput[]
    cursor?: favouritesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavouritesScalarFieldEnum | FavouritesScalarFieldEnum[]
  }

  /**
   * formulas without action
   */
  export type formulasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formulas
     */
    select?: formulasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formulas
     */
    omit?: formulasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formulasInclude<ExtArgs> | null
  }


  /**
   * Model formula_interpretations
   */

  export type AggregateFormula_interpretations = {
    _count: Formula_interpretationsCountAggregateOutputType | null
    _min: Formula_interpretationsMinAggregateOutputType | null
    _max: Formula_interpretationsMaxAggregateOutputType | null
  }

  export type Formula_interpretationsMinAggregateOutputType = {
    interpretation_id: string | null
    formula_id: string | null
    explanation: string | null
    engine_used: string | null
    generated_at: Date | null
  }

  export type Formula_interpretationsMaxAggregateOutputType = {
    interpretation_id: string | null
    formula_id: string | null
    explanation: string | null
    engine_used: string | null
    generated_at: Date | null
  }

  export type Formula_interpretationsCountAggregateOutputType = {
    interpretation_id: number
    formula_id: number
    explanation: number
    engine_used: number
    generated_at: number
    _all: number
  }


  export type Formula_interpretationsMinAggregateInputType = {
    interpretation_id?: true
    formula_id?: true
    explanation?: true
    engine_used?: true
    generated_at?: true
  }

  export type Formula_interpretationsMaxAggregateInputType = {
    interpretation_id?: true
    formula_id?: true
    explanation?: true
    engine_used?: true
    generated_at?: true
  }

  export type Formula_interpretationsCountAggregateInputType = {
    interpretation_id?: true
    formula_id?: true
    explanation?: true
    engine_used?: true
    generated_at?: true
    _all?: true
  }

  export type Formula_interpretationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formula_interpretations to aggregate.
     */
    where?: formula_interpretationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formula_interpretations to fetch.
     */
    orderBy?: formula_interpretationsOrderByWithRelationInput | formula_interpretationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: formula_interpretationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formula_interpretations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formula_interpretations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned formula_interpretations
    **/
    _count?: true | Formula_interpretationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Formula_interpretationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Formula_interpretationsMaxAggregateInputType
  }

  export type GetFormula_interpretationsAggregateType<T extends Formula_interpretationsAggregateArgs> = {
        [P in keyof T & keyof AggregateFormula_interpretations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormula_interpretations[P]>
      : GetScalarType<T[P], AggregateFormula_interpretations[P]>
  }




  export type formula_interpretationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formula_interpretationsWhereInput
    orderBy?: formula_interpretationsOrderByWithAggregationInput | formula_interpretationsOrderByWithAggregationInput[]
    by: Formula_interpretationsScalarFieldEnum[] | Formula_interpretationsScalarFieldEnum
    having?: formula_interpretationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Formula_interpretationsCountAggregateInputType | true
    _min?: Formula_interpretationsMinAggregateInputType
    _max?: Formula_interpretationsMaxAggregateInputType
  }

  export type Formula_interpretationsGroupByOutputType = {
    interpretation_id: string
    formula_id: string
    explanation: string
    engine_used: string
    generated_at: Date
    _count: Formula_interpretationsCountAggregateOutputType | null
    _min: Formula_interpretationsMinAggregateOutputType | null
    _max: Formula_interpretationsMaxAggregateOutputType | null
  }

  type GetFormula_interpretationsGroupByPayload<T extends formula_interpretationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Formula_interpretationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Formula_interpretationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Formula_interpretationsGroupByOutputType[P]>
            : GetScalarType<T[P], Formula_interpretationsGroupByOutputType[P]>
        }
      >
    >


  export type formula_interpretationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    interpretation_id?: boolean
    formula_id?: boolean
    explanation?: boolean
    engine_used?: boolean
    generated_at?: boolean
    formula?: boolean | formulasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formula_interpretations"]>

  export type formula_interpretationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    interpretation_id?: boolean
    formula_id?: boolean
    explanation?: boolean
    engine_used?: boolean
    generated_at?: boolean
    formula?: boolean | formulasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formula_interpretations"]>

  export type formula_interpretationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    interpretation_id?: boolean
    formula_id?: boolean
    explanation?: boolean
    engine_used?: boolean
    generated_at?: boolean
    formula?: boolean | formulasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formula_interpretations"]>

  export type formula_interpretationsSelectScalar = {
    interpretation_id?: boolean
    formula_id?: boolean
    explanation?: boolean
    engine_used?: boolean
    generated_at?: boolean
  }

  export type formula_interpretationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"interpretation_id" | "formula_id" | "explanation" | "engine_used" | "generated_at", ExtArgs["result"]["formula_interpretations"]>
  export type formula_interpretationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formula?: boolean | formulasDefaultArgs<ExtArgs>
  }
  export type formula_interpretationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formula?: boolean | formulasDefaultArgs<ExtArgs>
  }
  export type formula_interpretationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formula?: boolean | formulasDefaultArgs<ExtArgs>
  }

  export type $formula_interpretationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "formula_interpretations"
    objects: {
      formula: Prisma.$formulasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Unique identifier
       */
      interpretation_id: string
      /**
       * Related formula UUID
       */
      formula_id: string
      /**
       * Semantic interpretation generated by AI
       */
      explanation: string
      /**
       * Used AI models (e.g., OpenAI GPT-4o/4.5 or DeepSeek-V3/R1)
       */
      engine_used: string
      /**
       * Generate time
       */
      generated_at: Date
    }, ExtArgs["result"]["formula_interpretations"]>
    composites: {}
  }

  type formula_interpretationsGetPayload<S extends boolean | null | undefined | formula_interpretationsDefaultArgs> = $Result.GetResult<Prisma.$formula_interpretationsPayload, S>

  type formula_interpretationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<formula_interpretationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Formula_interpretationsCountAggregateInputType | true
    }

  export interface formula_interpretationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['formula_interpretations'], meta: { name: 'formula_interpretations' } }
    /**
     * Find zero or one Formula_interpretations that matches the filter.
     * @param {formula_interpretationsFindUniqueArgs} args - Arguments to find a Formula_interpretations
     * @example
     * // Get one Formula_interpretations
     * const formula_interpretations = await prisma.formula_interpretations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends formula_interpretationsFindUniqueArgs>(args: SelectSubset<T, formula_interpretationsFindUniqueArgs<ExtArgs>>): Prisma__formula_interpretationsClient<$Result.GetResult<Prisma.$formula_interpretationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Formula_interpretations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {formula_interpretationsFindUniqueOrThrowArgs} args - Arguments to find a Formula_interpretations
     * @example
     * // Get one Formula_interpretations
     * const formula_interpretations = await prisma.formula_interpretations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends formula_interpretationsFindUniqueOrThrowArgs>(args: SelectSubset<T, formula_interpretationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__formula_interpretationsClient<$Result.GetResult<Prisma.$formula_interpretationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formula_interpretations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formula_interpretationsFindFirstArgs} args - Arguments to find a Formula_interpretations
     * @example
     * // Get one Formula_interpretations
     * const formula_interpretations = await prisma.formula_interpretations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends formula_interpretationsFindFirstArgs>(args?: SelectSubset<T, formula_interpretationsFindFirstArgs<ExtArgs>>): Prisma__formula_interpretationsClient<$Result.GetResult<Prisma.$formula_interpretationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formula_interpretations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formula_interpretationsFindFirstOrThrowArgs} args - Arguments to find a Formula_interpretations
     * @example
     * // Get one Formula_interpretations
     * const formula_interpretations = await prisma.formula_interpretations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends formula_interpretationsFindFirstOrThrowArgs>(args?: SelectSubset<T, formula_interpretationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__formula_interpretationsClient<$Result.GetResult<Prisma.$formula_interpretationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formula_interpretations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formula_interpretationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formula_interpretations
     * const formula_interpretations = await prisma.formula_interpretations.findMany()
     * 
     * // Get first 10 Formula_interpretations
     * const formula_interpretations = await prisma.formula_interpretations.findMany({ take: 10 })
     * 
     * // Only select the `interpretation_id`
     * const formula_interpretationsWithInterpretation_idOnly = await prisma.formula_interpretations.findMany({ select: { interpretation_id: true } })
     * 
     */
    findMany<T extends formula_interpretationsFindManyArgs>(args?: SelectSubset<T, formula_interpretationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formula_interpretationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Formula_interpretations.
     * @param {formula_interpretationsCreateArgs} args - Arguments to create a Formula_interpretations.
     * @example
     * // Create one Formula_interpretations
     * const Formula_interpretations = await prisma.formula_interpretations.create({
     *   data: {
     *     // ... data to create a Formula_interpretations
     *   }
     * })
     * 
     */
    create<T extends formula_interpretationsCreateArgs>(args: SelectSubset<T, formula_interpretationsCreateArgs<ExtArgs>>): Prisma__formula_interpretationsClient<$Result.GetResult<Prisma.$formula_interpretationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formula_interpretations.
     * @param {formula_interpretationsCreateManyArgs} args - Arguments to create many Formula_interpretations.
     * @example
     * // Create many Formula_interpretations
     * const formula_interpretations = await prisma.formula_interpretations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends formula_interpretationsCreateManyArgs>(args?: SelectSubset<T, formula_interpretationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Formula_interpretations and returns the data saved in the database.
     * @param {formula_interpretationsCreateManyAndReturnArgs} args - Arguments to create many Formula_interpretations.
     * @example
     * // Create many Formula_interpretations
     * const formula_interpretations = await prisma.formula_interpretations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Formula_interpretations and only return the `interpretation_id`
     * const formula_interpretationsWithInterpretation_idOnly = await prisma.formula_interpretations.createManyAndReturn({
     *   select: { interpretation_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends formula_interpretationsCreateManyAndReturnArgs>(args?: SelectSubset<T, formula_interpretationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formula_interpretationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Formula_interpretations.
     * @param {formula_interpretationsDeleteArgs} args - Arguments to delete one Formula_interpretations.
     * @example
     * // Delete one Formula_interpretations
     * const Formula_interpretations = await prisma.formula_interpretations.delete({
     *   where: {
     *     // ... filter to delete one Formula_interpretations
     *   }
     * })
     * 
     */
    delete<T extends formula_interpretationsDeleteArgs>(args: SelectSubset<T, formula_interpretationsDeleteArgs<ExtArgs>>): Prisma__formula_interpretationsClient<$Result.GetResult<Prisma.$formula_interpretationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Formula_interpretations.
     * @param {formula_interpretationsUpdateArgs} args - Arguments to update one Formula_interpretations.
     * @example
     * // Update one Formula_interpretations
     * const formula_interpretations = await prisma.formula_interpretations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends formula_interpretationsUpdateArgs>(args: SelectSubset<T, formula_interpretationsUpdateArgs<ExtArgs>>): Prisma__formula_interpretationsClient<$Result.GetResult<Prisma.$formula_interpretationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formula_interpretations.
     * @param {formula_interpretationsDeleteManyArgs} args - Arguments to filter Formula_interpretations to delete.
     * @example
     * // Delete a few Formula_interpretations
     * const { count } = await prisma.formula_interpretations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends formula_interpretationsDeleteManyArgs>(args?: SelectSubset<T, formula_interpretationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formula_interpretations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formula_interpretationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formula_interpretations
     * const formula_interpretations = await prisma.formula_interpretations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends formula_interpretationsUpdateManyArgs>(args: SelectSubset<T, formula_interpretationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formula_interpretations and returns the data updated in the database.
     * @param {formula_interpretationsUpdateManyAndReturnArgs} args - Arguments to update many Formula_interpretations.
     * @example
     * // Update many Formula_interpretations
     * const formula_interpretations = await prisma.formula_interpretations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Formula_interpretations and only return the `interpretation_id`
     * const formula_interpretationsWithInterpretation_idOnly = await prisma.formula_interpretations.updateManyAndReturn({
     *   select: { interpretation_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends formula_interpretationsUpdateManyAndReturnArgs>(args: SelectSubset<T, formula_interpretationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formula_interpretationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Formula_interpretations.
     * @param {formula_interpretationsUpsertArgs} args - Arguments to update or create a Formula_interpretations.
     * @example
     * // Update or create a Formula_interpretations
     * const formula_interpretations = await prisma.formula_interpretations.upsert({
     *   create: {
     *     // ... data to create a Formula_interpretations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formula_interpretations we want to update
     *   }
     * })
     */
    upsert<T extends formula_interpretationsUpsertArgs>(args: SelectSubset<T, formula_interpretationsUpsertArgs<ExtArgs>>): Prisma__formula_interpretationsClient<$Result.GetResult<Prisma.$formula_interpretationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formula_interpretations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formula_interpretationsCountArgs} args - Arguments to filter Formula_interpretations to count.
     * @example
     * // Count the number of Formula_interpretations
     * const count = await prisma.formula_interpretations.count({
     *   where: {
     *     // ... the filter for the Formula_interpretations we want to count
     *   }
     * })
    **/
    count<T extends formula_interpretationsCountArgs>(
      args?: Subset<T, formula_interpretationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Formula_interpretationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formula_interpretations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Formula_interpretationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Formula_interpretationsAggregateArgs>(args: Subset<T, Formula_interpretationsAggregateArgs>): Prisma.PrismaPromise<GetFormula_interpretationsAggregateType<T>>

    /**
     * Group by Formula_interpretations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formula_interpretationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends formula_interpretationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: formula_interpretationsGroupByArgs['orderBy'] }
        : { orderBy?: formula_interpretationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, formula_interpretationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormula_interpretationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the formula_interpretations model
   */
  readonly fields: formula_interpretationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for formula_interpretations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__formula_interpretationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    formula<T extends formulasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, formulasDefaultArgs<ExtArgs>>): Prisma__formulasClient<$Result.GetResult<Prisma.$formulasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the formula_interpretations model
   */
  interface formula_interpretationsFieldRefs {
    readonly interpretation_id: FieldRef<"formula_interpretations", 'String'>
    readonly formula_id: FieldRef<"formula_interpretations", 'String'>
    readonly explanation: FieldRef<"formula_interpretations", 'String'>
    readonly engine_used: FieldRef<"formula_interpretations", 'String'>
    readonly generated_at: FieldRef<"formula_interpretations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * formula_interpretations findUnique
   */
  export type formula_interpretationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_interpretations
     */
    select?: formula_interpretationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_interpretations
     */
    omit?: formula_interpretationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_interpretationsInclude<ExtArgs> | null
    /**
     * Filter, which formula_interpretations to fetch.
     */
    where: formula_interpretationsWhereUniqueInput
  }

  /**
   * formula_interpretations findUniqueOrThrow
   */
  export type formula_interpretationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_interpretations
     */
    select?: formula_interpretationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_interpretations
     */
    omit?: formula_interpretationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_interpretationsInclude<ExtArgs> | null
    /**
     * Filter, which formula_interpretations to fetch.
     */
    where: formula_interpretationsWhereUniqueInput
  }

  /**
   * formula_interpretations findFirst
   */
  export type formula_interpretationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_interpretations
     */
    select?: formula_interpretationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_interpretations
     */
    omit?: formula_interpretationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_interpretationsInclude<ExtArgs> | null
    /**
     * Filter, which formula_interpretations to fetch.
     */
    where?: formula_interpretationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formula_interpretations to fetch.
     */
    orderBy?: formula_interpretationsOrderByWithRelationInput | formula_interpretationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formula_interpretations.
     */
    cursor?: formula_interpretationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formula_interpretations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formula_interpretations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formula_interpretations.
     */
    distinct?: Formula_interpretationsScalarFieldEnum | Formula_interpretationsScalarFieldEnum[]
  }

  /**
   * formula_interpretations findFirstOrThrow
   */
  export type formula_interpretationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_interpretations
     */
    select?: formula_interpretationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_interpretations
     */
    omit?: formula_interpretationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_interpretationsInclude<ExtArgs> | null
    /**
     * Filter, which formula_interpretations to fetch.
     */
    where?: formula_interpretationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formula_interpretations to fetch.
     */
    orderBy?: formula_interpretationsOrderByWithRelationInput | formula_interpretationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formula_interpretations.
     */
    cursor?: formula_interpretationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formula_interpretations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formula_interpretations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formula_interpretations.
     */
    distinct?: Formula_interpretationsScalarFieldEnum | Formula_interpretationsScalarFieldEnum[]
  }

  /**
   * formula_interpretations findMany
   */
  export type formula_interpretationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_interpretations
     */
    select?: formula_interpretationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_interpretations
     */
    omit?: formula_interpretationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_interpretationsInclude<ExtArgs> | null
    /**
     * Filter, which formula_interpretations to fetch.
     */
    where?: formula_interpretationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formula_interpretations to fetch.
     */
    orderBy?: formula_interpretationsOrderByWithRelationInput | formula_interpretationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing formula_interpretations.
     */
    cursor?: formula_interpretationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formula_interpretations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formula_interpretations.
     */
    skip?: number
    distinct?: Formula_interpretationsScalarFieldEnum | Formula_interpretationsScalarFieldEnum[]
  }

  /**
   * formula_interpretations create
   */
  export type formula_interpretationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_interpretations
     */
    select?: formula_interpretationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_interpretations
     */
    omit?: formula_interpretationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_interpretationsInclude<ExtArgs> | null
    /**
     * The data needed to create a formula_interpretations.
     */
    data: XOR<formula_interpretationsCreateInput, formula_interpretationsUncheckedCreateInput>
  }

  /**
   * formula_interpretations createMany
   */
  export type formula_interpretationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many formula_interpretations.
     */
    data: formula_interpretationsCreateManyInput | formula_interpretationsCreateManyInput[]
  }

  /**
   * formula_interpretations createManyAndReturn
   */
  export type formula_interpretationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_interpretations
     */
    select?: formula_interpretationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the formula_interpretations
     */
    omit?: formula_interpretationsOmit<ExtArgs> | null
    /**
     * The data used to create many formula_interpretations.
     */
    data: formula_interpretationsCreateManyInput | formula_interpretationsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_interpretationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * formula_interpretations update
   */
  export type formula_interpretationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_interpretations
     */
    select?: formula_interpretationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_interpretations
     */
    omit?: formula_interpretationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_interpretationsInclude<ExtArgs> | null
    /**
     * The data needed to update a formula_interpretations.
     */
    data: XOR<formula_interpretationsUpdateInput, formula_interpretationsUncheckedUpdateInput>
    /**
     * Choose, which formula_interpretations to update.
     */
    where: formula_interpretationsWhereUniqueInput
  }

  /**
   * formula_interpretations updateMany
   */
  export type formula_interpretationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update formula_interpretations.
     */
    data: XOR<formula_interpretationsUpdateManyMutationInput, formula_interpretationsUncheckedUpdateManyInput>
    /**
     * Filter which formula_interpretations to update
     */
    where?: formula_interpretationsWhereInput
    /**
     * Limit how many formula_interpretations to update.
     */
    limit?: number
  }

  /**
   * formula_interpretations updateManyAndReturn
   */
  export type formula_interpretationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_interpretations
     */
    select?: formula_interpretationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the formula_interpretations
     */
    omit?: formula_interpretationsOmit<ExtArgs> | null
    /**
     * The data used to update formula_interpretations.
     */
    data: XOR<formula_interpretationsUpdateManyMutationInput, formula_interpretationsUncheckedUpdateManyInput>
    /**
     * Filter which formula_interpretations to update
     */
    where?: formula_interpretationsWhereInput
    /**
     * Limit how many formula_interpretations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_interpretationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * formula_interpretations upsert
   */
  export type formula_interpretationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_interpretations
     */
    select?: formula_interpretationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_interpretations
     */
    omit?: formula_interpretationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_interpretationsInclude<ExtArgs> | null
    /**
     * The filter to search for the formula_interpretations to update in case it exists.
     */
    where: formula_interpretationsWhereUniqueInput
    /**
     * In case the formula_interpretations found by the `where` argument doesn't exist, create a new formula_interpretations with this data.
     */
    create: XOR<formula_interpretationsCreateInput, formula_interpretationsUncheckedCreateInput>
    /**
     * In case the formula_interpretations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<formula_interpretationsUpdateInput, formula_interpretationsUncheckedUpdateInput>
  }

  /**
   * formula_interpretations delete
   */
  export type formula_interpretationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_interpretations
     */
    select?: formula_interpretationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_interpretations
     */
    omit?: formula_interpretationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_interpretationsInclude<ExtArgs> | null
    /**
     * Filter which formula_interpretations to delete.
     */
    where: formula_interpretationsWhereUniqueInput
  }

  /**
   * formula_interpretations deleteMany
   */
  export type formula_interpretationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formula_interpretations to delete
     */
    where?: formula_interpretationsWhereInput
    /**
     * Limit how many formula_interpretations to delete.
     */
    limit?: number
  }

  /**
   * formula_interpretations without action
   */
  export type formula_interpretationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_interpretations
     */
    select?: formula_interpretationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_interpretations
     */
    omit?: formula_interpretationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_interpretationsInclude<ExtArgs> | null
  }


  /**
   * Model tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsMinAggregateOutputType = {
    tag_id: string | null
    name: string | null
    description: string | null
    color: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TagsMaxAggregateOutputType = {
    tag_id: string | null
    name: string | null
    description: string | null
    color: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TagsCountAggregateOutputType = {
    tag_id: number
    name: number
    description: number
    color: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TagsMinAggregateInputType = {
    tag_id?: true
    name?: true
    description?: true
    color?: true
    created_at?: true
    updated_at?: true
  }

  export type TagsMaxAggregateInputType = {
    tag_id?: true
    name?: true
    description?: true
    color?: true
    created_at?: true
    updated_at?: true
  }

  export type TagsCountAggregateInputType = {
    tag_id?: true
    name?: true
    description?: true
    color?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to aggregate.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagsWhereInput
    orderBy?: tagsOrderByWithAggregationInput | tagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    tag_id: string
    name: string
    description: string | null
    color: string
    created_at: Date
    updated_at: Date
    _count: TagsCountAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    created_at?: boolean
    updated_at?: boolean
    formulas?: boolean | tags$formulasArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectScalar = {
    tag_id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tag_id" | "name" | "description" | "color" | "created_at" | "updated_at", ExtArgs["result"]["tags"]>
  export type tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formulas?: boolean | tags$formulasArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tags"
    objects: {
      formulas: Prisma.$formula_tagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Unique identifier
       */
      tag_id: string
      /**
       * Tag name (Unique)
       */
      name: string
      /**
       * (Optional) Tag description
       */
      description: string | null
      /**
       * Tag color for front-end display
       */
      color: string
      /**
       * Tag create time
       */
      created_at: Date
      /**
       * Tag last update time
       */
      updated_at: Date
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }

  type tagsGetPayload<S extends boolean | null | undefined | tagsDefaultArgs> = $Result.GetResult<Prisma.$tagsPayload, S>

  type tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagsCountAggregateInputType | true
    }

  export interface tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tags'], meta: { name: 'tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {tagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tagsFindUniqueArgs>(args: SelectSubset<T, tagsFindUniqueArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tagsFindFirstArgs>(args?: SelectSubset<T, tagsFindFirstArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `tag_id`
     * const tagsWithTag_idOnly = await prisma.tags.findMany({ select: { tag_id: true } })
     * 
     */
    findMany<T extends tagsFindManyArgs>(args?: SelectSubset<T, tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tags.
     * @param {tagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
     */
    create<T extends tagsCreateArgs>(args: SelectSubset<T, tagsCreateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {tagsCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tagsCreateManyArgs>(args?: SelectSubset<T, tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {tagsCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `tag_id`
     * const tagsWithTag_idOnly = await prisma.tags.createManyAndReturn({
     *   select: { tag_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tags.
     * @param {tagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
     */
    delete<T extends tagsDeleteArgs>(args: SelectSubset<T, tagsDeleteArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tags.
     * @param {tagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tagsUpdateArgs>(args: SelectSubset<T, tagsUpdateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {tagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tagsDeleteManyArgs>(args?: SelectSubset<T, tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tagsUpdateManyArgs>(args: SelectSubset<T, tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {tagsUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `tag_id`
     * const tagsWithTag_idOnly = await prisma.tags.updateManyAndReturn({
     *   select: { tag_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tags.
     * @param {tagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
     */
    upsert<T extends tagsUpsertArgs>(args: SelectSubset<T, tagsUpsertArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagsCountArgs>(
      args?: Subset<T, tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tagsGroupByArgs['orderBy'] }
        : { orderBy?: tagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tags model
   */
  readonly fields: tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    formulas<T extends tags$formulasArgs<ExtArgs> = {}>(args?: Subset<T, tags$formulasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formula_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tags model
   */
  interface tagsFieldRefs {
    readonly tag_id: FieldRef<"tags", 'String'>
    readonly name: FieldRef<"tags", 'String'>
    readonly description: FieldRef<"tags", 'String'>
    readonly color: FieldRef<"tags", 'String'>
    readonly created_at: FieldRef<"tags", 'DateTime'>
    readonly updated_at: FieldRef<"tags", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tags findUnique
   */
  export type tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findUniqueOrThrow
   */
  export type tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findFirst
   */
  export type tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findFirstOrThrow
   */
  export type tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findMany
   */
  export type tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags create
   */
  export type tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a tags.
     */
    data: XOR<tagsCreateInput, tagsUncheckedCreateInput>
  }

  /**
   * tags createMany
   */
  export type tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
  }

  /**
   * tags createManyAndReturn
   */
  export type tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
  }

  /**
   * tags update
   */
  export type tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a tags.
     */
    data: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
    /**
     * Choose, which tags to update.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags updateMany
   */
  export type tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tags updateManyAndReturn
   */
  export type tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tags upsert
   */
  export type tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the tags to update in case it exists.
     */
    where: tagsWhereUniqueInput
    /**
     * In case the tags found by the `where` argument doesn't exist, create a new tags with this data.
     */
    create: XOR<tagsCreateInput, tagsUncheckedCreateInput>
    /**
     * In case the tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
  }

  /**
   * tags delete
   */
  export type tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter which tags to delete.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags deleteMany
   */
  export type tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to delete
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to delete.
     */
    limit?: number
  }

  /**
   * tags.formulas
   */
  export type tags$formulasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_tags
     */
    select?: formula_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_tags
     */
    omit?: formula_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_tagsInclude<ExtArgs> | null
    where?: formula_tagsWhereInput
    orderBy?: formula_tagsOrderByWithRelationInput | formula_tagsOrderByWithRelationInput[]
    cursor?: formula_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Formula_tagsScalarFieldEnum | Formula_tagsScalarFieldEnum[]
  }

  /**
   * tags without action
   */
  export type tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
  }


  /**
   * Model formula_tags
   */

  export type AggregateFormula_tags = {
    _count: Formula_tagsCountAggregateOutputType | null
    _min: Formula_tagsMinAggregateOutputType | null
    _max: Formula_tagsMaxAggregateOutputType | null
  }

  export type Formula_tagsMinAggregateOutputType = {
    formula_id: string | null
    tag_id: string | null
    created_at: Date | null
  }

  export type Formula_tagsMaxAggregateOutputType = {
    formula_id: string | null
    tag_id: string | null
    created_at: Date | null
  }

  export type Formula_tagsCountAggregateOutputType = {
    formula_id: number
    tag_id: number
    created_at: number
    _all: number
  }


  export type Formula_tagsMinAggregateInputType = {
    formula_id?: true
    tag_id?: true
    created_at?: true
  }

  export type Formula_tagsMaxAggregateInputType = {
    formula_id?: true
    tag_id?: true
    created_at?: true
  }

  export type Formula_tagsCountAggregateInputType = {
    formula_id?: true
    tag_id?: true
    created_at?: true
    _all?: true
  }

  export type Formula_tagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formula_tags to aggregate.
     */
    where?: formula_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formula_tags to fetch.
     */
    orderBy?: formula_tagsOrderByWithRelationInput | formula_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: formula_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formula_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formula_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned formula_tags
    **/
    _count?: true | Formula_tagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Formula_tagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Formula_tagsMaxAggregateInputType
  }

  export type GetFormula_tagsAggregateType<T extends Formula_tagsAggregateArgs> = {
        [P in keyof T & keyof AggregateFormula_tags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormula_tags[P]>
      : GetScalarType<T[P], AggregateFormula_tags[P]>
  }




  export type formula_tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formula_tagsWhereInput
    orderBy?: formula_tagsOrderByWithAggregationInput | formula_tagsOrderByWithAggregationInput[]
    by: Formula_tagsScalarFieldEnum[] | Formula_tagsScalarFieldEnum
    having?: formula_tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Formula_tagsCountAggregateInputType | true
    _min?: Formula_tagsMinAggregateInputType
    _max?: Formula_tagsMaxAggregateInputType
  }

  export type Formula_tagsGroupByOutputType = {
    formula_id: string
    tag_id: string
    created_at: Date
    _count: Formula_tagsCountAggregateOutputType | null
    _min: Formula_tagsMinAggregateOutputType | null
    _max: Formula_tagsMaxAggregateOutputType | null
  }

  type GetFormula_tagsGroupByPayload<T extends formula_tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Formula_tagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Formula_tagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Formula_tagsGroupByOutputType[P]>
            : GetScalarType<T[P], Formula_tagsGroupByOutputType[P]>
        }
      >
    >


  export type formula_tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    formula_id?: boolean
    tag_id?: boolean
    created_at?: boolean
    formula?: boolean | formulasDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formula_tags"]>

  export type formula_tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    formula_id?: boolean
    tag_id?: boolean
    created_at?: boolean
    formula?: boolean | formulasDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formula_tags"]>

  export type formula_tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    formula_id?: boolean
    tag_id?: boolean
    created_at?: boolean
    formula?: boolean | formulasDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formula_tags"]>

  export type formula_tagsSelectScalar = {
    formula_id?: boolean
    tag_id?: boolean
    created_at?: boolean
  }

  export type formula_tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"formula_id" | "tag_id" | "created_at", ExtArgs["result"]["formula_tags"]>
  export type formula_tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formula?: boolean | formulasDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }
  export type formula_tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formula?: boolean | formulasDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }
  export type formula_tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formula?: boolean | formulasDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }

  export type $formula_tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "formula_tags"
    objects: {
      formula: Prisma.$formulasPayload<ExtArgs>
      tag: Prisma.$tagsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Affiliated formulas
       */
      formula_id: string
      /**
       * Related tags
       */
      tag_id: string
      /**
       * Tag add time
       */
      created_at: Date
    }, ExtArgs["result"]["formula_tags"]>
    composites: {}
  }

  type formula_tagsGetPayload<S extends boolean | null | undefined | formula_tagsDefaultArgs> = $Result.GetResult<Prisma.$formula_tagsPayload, S>

  type formula_tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<formula_tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Formula_tagsCountAggregateInputType | true
    }

  export interface formula_tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['formula_tags'], meta: { name: 'formula_tags' } }
    /**
     * Find zero or one Formula_tags that matches the filter.
     * @param {formula_tagsFindUniqueArgs} args - Arguments to find a Formula_tags
     * @example
     * // Get one Formula_tags
     * const formula_tags = await prisma.formula_tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends formula_tagsFindUniqueArgs>(args: SelectSubset<T, formula_tagsFindUniqueArgs<ExtArgs>>): Prisma__formula_tagsClient<$Result.GetResult<Prisma.$formula_tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Formula_tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {formula_tagsFindUniqueOrThrowArgs} args - Arguments to find a Formula_tags
     * @example
     * // Get one Formula_tags
     * const formula_tags = await prisma.formula_tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends formula_tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, formula_tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__formula_tagsClient<$Result.GetResult<Prisma.$formula_tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formula_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formula_tagsFindFirstArgs} args - Arguments to find a Formula_tags
     * @example
     * // Get one Formula_tags
     * const formula_tags = await prisma.formula_tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends formula_tagsFindFirstArgs>(args?: SelectSubset<T, formula_tagsFindFirstArgs<ExtArgs>>): Prisma__formula_tagsClient<$Result.GetResult<Prisma.$formula_tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formula_tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formula_tagsFindFirstOrThrowArgs} args - Arguments to find a Formula_tags
     * @example
     * // Get one Formula_tags
     * const formula_tags = await prisma.formula_tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends formula_tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, formula_tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__formula_tagsClient<$Result.GetResult<Prisma.$formula_tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formula_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formula_tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formula_tags
     * const formula_tags = await prisma.formula_tags.findMany()
     * 
     * // Get first 10 Formula_tags
     * const formula_tags = await prisma.formula_tags.findMany({ take: 10 })
     * 
     * // Only select the `formula_id`
     * const formula_tagsWithFormula_idOnly = await prisma.formula_tags.findMany({ select: { formula_id: true } })
     * 
     */
    findMany<T extends formula_tagsFindManyArgs>(args?: SelectSubset<T, formula_tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formula_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Formula_tags.
     * @param {formula_tagsCreateArgs} args - Arguments to create a Formula_tags.
     * @example
     * // Create one Formula_tags
     * const Formula_tags = await prisma.formula_tags.create({
     *   data: {
     *     // ... data to create a Formula_tags
     *   }
     * })
     * 
     */
    create<T extends formula_tagsCreateArgs>(args: SelectSubset<T, formula_tagsCreateArgs<ExtArgs>>): Prisma__formula_tagsClient<$Result.GetResult<Prisma.$formula_tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formula_tags.
     * @param {formula_tagsCreateManyArgs} args - Arguments to create many Formula_tags.
     * @example
     * // Create many Formula_tags
     * const formula_tags = await prisma.formula_tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends formula_tagsCreateManyArgs>(args?: SelectSubset<T, formula_tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Formula_tags and returns the data saved in the database.
     * @param {formula_tagsCreateManyAndReturnArgs} args - Arguments to create many Formula_tags.
     * @example
     * // Create many Formula_tags
     * const formula_tags = await prisma.formula_tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Formula_tags and only return the `formula_id`
     * const formula_tagsWithFormula_idOnly = await prisma.formula_tags.createManyAndReturn({
     *   select: { formula_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends formula_tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, formula_tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formula_tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Formula_tags.
     * @param {formula_tagsDeleteArgs} args - Arguments to delete one Formula_tags.
     * @example
     * // Delete one Formula_tags
     * const Formula_tags = await prisma.formula_tags.delete({
     *   where: {
     *     // ... filter to delete one Formula_tags
     *   }
     * })
     * 
     */
    delete<T extends formula_tagsDeleteArgs>(args: SelectSubset<T, formula_tagsDeleteArgs<ExtArgs>>): Prisma__formula_tagsClient<$Result.GetResult<Prisma.$formula_tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Formula_tags.
     * @param {formula_tagsUpdateArgs} args - Arguments to update one Formula_tags.
     * @example
     * // Update one Formula_tags
     * const formula_tags = await prisma.formula_tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends formula_tagsUpdateArgs>(args: SelectSubset<T, formula_tagsUpdateArgs<ExtArgs>>): Prisma__formula_tagsClient<$Result.GetResult<Prisma.$formula_tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formula_tags.
     * @param {formula_tagsDeleteManyArgs} args - Arguments to filter Formula_tags to delete.
     * @example
     * // Delete a few Formula_tags
     * const { count } = await prisma.formula_tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends formula_tagsDeleteManyArgs>(args?: SelectSubset<T, formula_tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formula_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formula_tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formula_tags
     * const formula_tags = await prisma.formula_tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends formula_tagsUpdateManyArgs>(args: SelectSubset<T, formula_tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formula_tags and returns the data updated in the database.
     * @param {formula_tagsUpdateManyAndReturnArgs} args - Arguments to update many Formula_tags.
     * @example
     * // Update many Formula_tags
     * const formula_tags = await prisma.formula_tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Formula_tags and only return the `formula_id`
     * const formula_tagsWithFormula_idOnly = await prisma.formula_tags.updateManyAndReturn({
     *   select: { formula_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends formula_tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, formula_tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formula_tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Formula_tags.
     * @param {formula_tagsUpsertArgs} args - Arguments to update or create a Formula_tags.
     * @example
     * // Update or create a Formula_tags
     * const formula_tags = await prisma.formula_tags.upsert({
     *   create: {
     *     // ... data to create a Formula_tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formula_tags we want to update
     *   }
     * })
     */
    upsert<T extends formula_tagsUpsertArgs>(args: SelectSubset<T, formula_tagsUpsertArgs<ExtArgs>>): Prisma__formula_tagsClient<$Result.GetResult<Prisma.$formula_tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formula_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formula_tagsCountArgs} args - Arguments to filter Formula_tags to count.
     * @example
     * // Count the number of Formula_tags
     * const count = await prisma.formula_tags.count({
     *   where: {
     *     // ... the filter for the Formula_tags we want to count
     *   }
     * })
    **/
    count<T extends formula_tagsCountArgs>(
      args?: Subset<T, formula_tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Formula_tagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formula_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Formula_tagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Formula_tagsAggregateArgs>(args: Subset<T, Formula_tagsAggregateArgs>): Prisma.PrismaPromise<GetFormula_tagsAggregateType<T>>

    /**
     * Group by Formula_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formula_tagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends formula_tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: formula_tagsGroupByArgs['orderBy'] }
        : { orderBy?: formula_tagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, formula_tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormula_tagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the formula_tags model
   */
  readonly fields: formula_tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for formula_tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__formula_tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    formula<T extends formulasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, formulasDefaultArgs<ExtArgs>>): Prisma__formulasClient<$Result.GetResult<Prisma.$formulasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends tagsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagsDefaultArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the formula_tags model
   */
  interface formula_tagsFieldRefs {
    readonly formula_id: FieldRef<"formula_tags", 'String'>
    readonly tag_id: FieldRef<"formula_tags", 'String'>
    readonly created_at: FieldRef<"formula_tags", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * formula_tags findUnique
   */
  export type formula_tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_tags
     */
    select?: formula_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_tags
     */
    omit?: formula_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_tagsInclude<ExtArgs> | null
    /**
     * Filter, which formula_tags to fetch.
     */
    where: formula_tagsWhereUniqueInput
  }

  /**
   * formula_tags findUniqueOrThrow
   */
  export type formula_tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_tags
     */
    select?: formula_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_tags
     */
    omit?: formula_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_tagsInclude<ExtArgs> | null
    /**
     * Filter, which formula_tags to fetch.
     */
    where: formula_tagsWhereUniqueInput
  }

  /**
   * formula_tags findFirst
   */
  export type formula_tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_tags
     */
    select?: formula_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_tags
     */
    omit?: formula_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_tagsInclude<ExtArgs> | null
    /**
     * Filter, which formula_tags to fetch.
     */
    where?: formula_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formula_tags to fetch.
     */
    orderBy?: formula_tagsOrderByWithRelationInput | formula_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formula_tags.
     */
    cursor?: formula_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formula_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formula_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formula_tags.
     */
    distinct?: Formula_tagsScalarFieldEnum | Formula_tagsScalarFieldEnum[]
  }

  /**
   * formula_tags findFirstOrThrow
   */
  export type formula_tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_tags
     */
    select?: formula_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_tags
     */
    omit?: formula_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_tagsInclude<ExtArgs> | null
    /**
     * Filter, which formula_tags to fetch.
     */
    where?: formula_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formula_tags to fetch.
     */
    orderBy?: formula_tagsOrderByWithRelationInput | formula_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formula_tags.
     */
    cursor?: formula_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formula_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formula_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formula_tags.
     */
    distinct?: Formula_tagsScalarFieldEnum | Formula_tagsScalarFieldEnum[]
  }

  /**
   * formula_tags findMany
   */
  export type formula_tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_tags
     */
    select?: formula_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_tags
     */
    omit?: formula_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_tagsInclude<ExtArgs> | null
    /**
     * Filter, which formula_tags to fetch.
     */
    where?: formula_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formula_tags to fetch.
     */
    orderBy?: formula_tagsOrderByWithRelationInput | formula_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing formula_tags.
     */
    cursor?: formula_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formula_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formula_tags.
     */
    skip?: number
    distinct?: Formula_tagsScalarFieldEnum | Formula_tagsScalarFieldEnum[]
  }

  /**
   * formula_tags create
   */
  export type formula_tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_tags
     */
    select?: formula_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_tags
     */
    omit?: formula_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a formula_tags.
     */
    data: XOR<formula_tagsCreateInput, formula_tagsUncheckedCreateInput>
  }

  /**
   * formula_tags createMany
   */
  export type formula_tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many formula_tags.
     */
    data: formula_tagsCreateManyInput | formula_tagsCreateManyInput[]
  }

  /**
   * formula_tags createManyAndReturn
   */
  export type formula_tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_tags
     */
    select?: formula_tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the formula_tags
     */
    omit?: formula_tagsOmit<ExtArgs> | null
    /**
     * The data used to create many formula_tags.
     */
    data: formula_tagsCreateManyInput | formula_tagsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_tagsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * formula_tags update
   */
  export type formula_tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_tags
     */
    select?: formula_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_tags
     */
    omit?: formula_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a formula_tags.
     */
    data: XOR<formula_tagsUpdateInput, formula_tagsUncheckedUpdateInput>
    /**
     * Choose, which formula_tags to update.
     */
    where: formula_tagsWhereUniqueInput
  }

  /**
   * formula_tags updateMany
   */
  export type formula_tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update formula_tags.
     */
    data: XOR<formula_tagsUpdateManyMutationInput, formula_tagsUncheckedUpdateManyInput>
    /**
     * Filter which formula_tags to update
     */
    where?: formula_tagsWhereInput
    /**
     * Limit how many formula_tags to update.
     */
    limit?: number
  }

  /**
   * formula_tags updateManyAndReturn
   */
  export type formula_tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_tags
     */
    select?: formula_tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the formula_tags
     */
    omit?: formula_tagsOmit<ExtArgs> | null
    /**
     * The data used to update formula_tags.
     */
    data: XOR<formula_tagsUpdateManyMutationInput, formula_tagsUncheckedUpdateManyInput>
    /**
     * Filter which formula_tags to update
     */
    where?: formula_tagsWhereInput
    /**
     * Limit how many formula_tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_tagsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * formula_tags upsert
   */
  export type formula_tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_tags
     */
    select?: formula_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_tags
     */
    omit?: formula_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the formula_tags to update in case it exists.
     */
    where: formula_tagsWhereUniqueInput
    /**
     * In case the formula_tags found by the `where` argument doesn't exist, create a new formula_tags with this data.
     */
    create: XOR<formula_tagsCreateInput, formula_tagsUncheckedCreateInput>
    /**
     * In case the formula_tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<formula_tagsUpdateInput, formula_tagsUncheckedUpdateInput>
  }

  /**
   * formula_tags delete
   */
  export type formula_tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_tags
     */
    select?: formula_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_tags
     */
    omit?: formula_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_tagsInclude<ExtArgs> | null
    /**
     * Filter which formula_tags to delete.
     */
    where: formula_tagsWhereUniqueInput
  }

  /**
   * formula_tags deleteMany
   */
  export type formula_tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formula_tags to delete
     */
    where?: formula_tagsWhereInput
    /**
     * Limit how many formula_tags to delete.
     */
    limit?: number
  }

  /**
   * formula_tags without action
   */
  export type formula_tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_tags
     */
    select?: formula_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_tags
     */
    omit?: formula_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_tagsInclude<ExtArgs> | null
  }


  /**
   * Model favourites
   */

  export type AggregateFavourites = {
    _count: FavouritesCountAggregateOutputType | null
    _min: FavouritesMinAggregateOutputType | null
    _max: FavouritesMaxAggregateOutputType | null
  }

  export type FavouritesMinAggregateOutputType = {
    favourite_id: string | null
    formula_id: string | null
    created_at: Date | null
  }

  export type FavouritesMaxAggregateOutputType = {
    favourite_id: string | null
    formula_id: string | null
    created_at: Date | null
  }

  export type FavouritesCountAggregateOutputType = {
    favourite_id: number
    formula_id: number
    created_at: number
    _all: number
  }


  export type FavouritesMinAggregateInputType = {
    favourite_id?: true
    formula_id?: true
    created_at?: true
  }

  export type FavouritesMaxAggregateInputType = {
    favourite_id?: true
    formula_id?: true
    created_at?: true
  }

  export type FavouritesCountAggregateInputType = {
    favourite_id?: true
    formula_id?: true
    created_at?: true
    _all?: true
  }

  export type FavouritesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which favourites to aggregate.
     */
    where?: favouritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favourites to fetch.
     */
    orderBy?: favouritesOrderByWithRelationInput | favouritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: favouritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned favourites
    **/
    _count?: true | FavouritesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavouritesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavouritesMaxAggregateInputType
  }

  export type GetFavouritesAggregateType<T extends FavouritesAggregateArgs> = {
        [P in keyof T & keyof AggregateFavourites]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavourites[P]>
      : GetScalarType<T[P], AggregateFavourites[P]>
  }




  export type favouritesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favouritesWhereInput
    orderBy?: favouritesOrderByWithAggregationInput | favouritesOrderByWithAggregationInput[]
    by: FavouritesScalarFieldEnum[] | FavouritesScalarFieldEnum
    having?: favouritesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavouritesCountAggregateInputType | true
    _min?: FavouritesMinAggregateInputType
    _max?: FavouritesMaxAggregateInputType
  }

  export type FavouritesGroupByOutputType = {
    favourite_id: string
    formula_id: string
    created_at: Date
    _count: FavouritesCountAggregateOutputType | null
    _min: FavouritesMinAggregateOutputType | null
    _max: FavouritesMaxAggregateOutputType | null
  }

  type GetFavouritesGroupByPayload<T extends favouritesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavouritesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavouritesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavouritesGroupByOutputType[P]>
            : GetScalarType<T[P], FavouritesGroupByOutputType[P]>
        }
      >
    >


  export type favouritesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    favourite_id?: boolean
    formula_id?: boolean
    created_at?: boolean
    formula?: boolean | formulasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favourites"]>

  export type favouritesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    favourite_id?: boolean
    formula_id?: boolean
    created_at?: boolean
    formula?: boolean | formulasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favourites"]>

  export type favouritesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    favourite_id?: boolean
    formula_id?: boolean
    created_at?: boolean
    formula?: boolean | formulasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favourites"]>

  export type favouritesSelectScalar = {
    favourite_id?: boolean
    formula_id?: boolean
    created_at?: boolean
  }

  export type favouritesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"favourite_id" | "formula_id" | "created_at", ExtArgs["result"]["favourites"]>
  export type favouritesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formula?: boolean | formulasDefaultArgs<ExtArgs>
  }
  export type favouritesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formula?: boolean | formulasDefaultArgs<ExtArgs>
  }
  export type favouritesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formula?: boolean | formulasDefaultArgs<ExtArgs>
  }

  export type $favouritesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "favourites"
    objects: {
      formula: Prisma.$formulasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Unique identifier
       */
      favourite_id: string
      /**
       * Favourited formula UUID
       */
      formula_id: string
      /**
       * Favourite time
       */
      created_at: Date
    }, ExtArgs["result"]["favourites"]>
    composites: {}
  }

  type favouritesGetPayload<S extends boolean | null | undefined | favouritesDefaultArgs> = $Result.GetResult<Prisma.$favouritesPayload, S>

  type favouritesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<favouritesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavouritesCountAggregateInputType | true
    }

  export interface favouritesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['favourites'], meta: { name: 'favourites' } }
    /**
     * Find zero or one Favourites that matches the filter.
     * @param {favouritesFindUniqueArgs} args - Arguments to find a Favourites
     * @example
     * // Get one Favourites
     * const favourites = await prisma.favourites.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends favouritesFindUniqueArgs>(args: SelectSubset<T, favouritesFindUniqueArgs<ExtArgs>>): Prisma__favouritesClient<$Result.GetResult<Prisma.$favouritesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favourites that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {favouritesFindUniqueOrThrowArgs} args - Arguments to find a Favourites
     * @example
     * // Get one Favourites
     * const favourites = await prisma.favourites.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends favouritesFindUniqueOrThrowArgs>(args: SelectSubset<T, favouritesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__favouritesClient<$Result.GetResult<Prisma.$favouritesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favourites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favouritesFindFirstArgs} args - Arguments to find a Favourites
     * @example
     * // Get one Favourites
     * const favourites = await prisma.favourites.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends favouritesFindFirstArgs>(args?: SelectSubset<T, favouritesFindFirstArgs<ExtArgs>>): Prisma__favouritesClient<$Result.GetResult<Prisma.$favouritesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favourites that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favouritesFindFirstOrThrowArgs} args - Arguments to find a Favourites
     * @example
     * // Get one Favourites
     * const favourites = await prisma.favourites.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends favouritesFindFirstOrThrowArgs>(args?: SelectSubset<T, favouritesFindFirstOrThrowArgs<ExtArgs>>): Prisma__favouritesClient<$Result.GetResult<Prisma.$favouritesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favourites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favouritesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favourites
     * const favourites = await prisma.favourites.findMany()
     * 
     * // Get first 10 Favourites
     * const favourites = await prisma.favourites.findMany({ take: 10 })
     * 
     * // Only select the `favourite_id`
     * const favouritesWithFavourite_idOnly = await prisma.favourites.findMany({ select: { favourite_id: true } })
     * 
     */
    findMany<T extends favouritesFindManyArgs>(args?: SelectSubset<T, favouritesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favouritesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favourites.
     * @param {favouritesCreateArgs} args - Arguments to create a Favourites.
     * @example
     * // Create one Favourites
     * const Favourites = await prisma.favourites.create({
     *   data: {
     *     // ... data to create a Favourites
     *   }
     * })
     * 
     */
    create<T extends favouritesCreateArgs>(args: SelectSubset<T, favouritesCreateArgs<ExtArgs>>): Prisma__favouritesClient<$Result.GetResult<Prisma.$favouritesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favourites.
     * @param {favouritesCreateManyArgs} args - Arguments to create many Favourites.
     * @example
     * // Create many Favourites
     * const favourites = await prisma.favourites.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends favouritesCreateManyArgs>(args?: SelectSubset<T, favouritesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favourites and returns the data saved in the database.
     * @param {favouritesCreateManyAndReturnArgs} args - Arguments to create many Favourites.
     * @example
     * // Create many Favourites
     * const favourites = await prisma.favourites.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favourites and only return the `favourite_id`
     * const favouritesWithFavourite_idOnly = await prisma.favourites.createManyAndReturn({
     *   select: { favourite_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends favouritesCreateManyAndReturnArgs>(args?: SelectSubset<T, favouritesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favouritesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favourites.
     * @param {favouritesDeleteArgs} args - Arguments to delete one Favourites.
     * @example
     * // Delete one Favourites
     * const Favourites = await prisma.favourites.delete({
     *   where: {
     *     // ... filter to delete one Favourites
     *   }
     * })
     * 
     */
    delete<T extends favouritesDeleteArgs>(args: SelectSubset<T, favouritesDeleteArgs<ExtArgs>>): Prisma__favouritesClient<$Result.GetResult<Prisma.$favouritesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favourites.
     * @param {favouritesUpdateArgs} args - Arguments to update one Favourites.
     * @example
     * // Update one Favourites
     * const favourites = await prisma.favourites.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends favouritesUpdateArgs>(args: SelectSubset<T, favouritesUpdateArgs<ExtArgs>>): Prisma__favouritesClient<$Result.GetResult<Prisma.$favouritesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favourites.
     * @param {favouritesDeleteManyArgs} args - Arguments to filter Favourites to delete.
     * @example
     * // Delete a few Favourites
     * const { count } = await prisma.favourites.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends favouritesDeleteManyArgs>(args?: SelectSubset<T, favouritesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favouritesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favourites
     * const favourites = await prisma.favourites.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends favouritesUpdateManyArgs>(args: SelectSubset<T, favouritesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favourites and returns the data updated in the database.
     * @param {favouritesUpdateManyAndReturnArgs} args - Arguments to update many Favourites.
     * @example
     * // Update many Favourites
     * const favourites = await prisma.favourites.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favourites and only return the `favourite_id`
     * const favouritesWithFavourite_idOnly = await prisma.favourites.updateManyAndReturn({
     *   select: { favourite_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends favouritesUpdateManyAndReturnArgs>(args: SelectSubset<T, favouritesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favouritesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favourites.
     * @param {favouritesUpsertArgs} args - Arguments to update or create a Favourites.
     * @example
     * // Update or create a Favourites
     * const favourites = await prisma.favourites.upsert({
     *   create: {
     *     // ... data to create a Favourites
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favourites we want to update
     *   }
     * })
     */
    upsert<T extends favouritesUpsertArgs>(args: SelectSubset<T, favouritesUpsertArgs<ExtArgs>>): Prisma__favouritesClient<$Result.GetResult<Prisma.$favouritesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favouritesCountArgs} args - Arguments to filter Favourites to count.
     * @example
     * // Count the number of Favourites
     * const count = await prisma.favourites.count({
     *   where: {
     *     // ... the filter for the Favourites we want to count
     *   }
     * })
    **/
    count<T extends favouritesCountArgs>(
      args?: Subset<T, favouritesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavouritesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouritesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavouritesAggregateArgs>(args: Subset<T, FavouritesAggregateArgs>): Prisma.PrismaPromise<GetFavouritesAggregateType<T>>

    /**
     * Group by Favourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favouritesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends favouritesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: favouritesGroupByArgs['orderBy'] }
        : { orderBy?: favouritesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, favouritesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavouritesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the favourites model
   */
  readonly fields: favouritesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for favourites.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__favouritesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    formula<T extends formulasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, formulasDefaultArgs<ExtArgs>>): Prisma__formulasClient<$Result.GetResult<Prisma.$formulasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the favourites model
   */
  interface favouritesFieldRefs {
    readonly favourite_id: FieldRef<"favourites", 'String'>
    readonly formula_id: FieldRef<"favourites", 'String'>
    readonly created_at: FieldRef<"favourites", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * favourites findUnique
   */
  export type favouritesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesInclude<ExtArgs> | null
    /**
     * Filter, which favourites to fetch.
     */
    where: favouritesWhereUniqueInput
  }

  /**
   * favourites findUniqueOrThrow
   */
  export type favouritesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesInclude<ExtArgs> | null
    /**
     * Filter, which favourites to fetch.
     */
    where: favouritesWhereUniqueInput
  }

  /**
   * favourites findFirst
   */
  export type favouritesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesInclude<ExtArgs> | null
    /**
     * Filter, which favourites to fetch.
     */
    where?: favouritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favourites to fetch.
     */
    orderBy?: favouritesOrderByWithRelationInput | favouritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for favourites.
     */
    cursor?: favouritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favourites.
     */
    distinct?: FavouritesScalarFieldEnum | FavouritesScalarFieldEnum[]
  }

  /**
   * favourites findFirstOrThrow
   */
  export type favouritesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesInclude<ExtArgs> | null
    /**
     * Filter, which favourites to fetch.
     */
    where?: favouritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favourites to fetch.
     */
    orderBy?: favouritesOrderByWithRelationInput | favouritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for favourites.
     */
    cursor?: favouritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favourites.
     */
    distinct?: FavouritesScalarFieldEnum | FavouritesScalarFieldEnum[]
  }

  /**
   * favourites findMany
   */
  export type favouritesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesInclude<ExtArgs> | null
    /**
     * Filter, which favourites to fetch.
     */
    where?: favouritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favourites to fetch.
     */
    orderBy?: favouritesOrderByWithRelationInput | favouritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing favourites.
     */
    cursor?: favouritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favourites.
     */
    skip?: number
    distinct?: FavouritesScalarFieldEnum | FavouritesScalarFieldEnum[]
  }

  /**
   * favourites create
   */
  export type favouritesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesInclude<ExtArgs> | null
    /**
     * The data needed to create a favourites.
     */
    data: XOR<favouritesCreateInput, favouritesUncheckedCreateInput>
  }

  /**
   * favourites createMany
   */
  export type favouritesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many favourites.
     */
    data: favouritesCreateManyInput | favouritesCreateManyInput[]
  }

  /**
   * favourites createManyAndReturn
   */
  export type favouritesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * The data used to create many favourites.
     */
    data: favouritesCreateManyInput | favouritesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * favourites update
   */
  export type favouritesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesInclude<ExtArgs> | null
    /**
     * The data needed to update a favourites.
     */
    data: XOR<favouritesUpdateInput, favouritesUncheckedUpdateInput>
    /**
     * Choose, which favourites to update.
     */
    where: favouritesWhereUniqueInput
  }

  /**
   * favourites updateMany
   */
  export type favouritesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update favourites.
     */
    data: XOR<favouritesUpdateManyMutationInput, favouritesUncheckedUpdateManyInput>
    /**
     * Filter which favourites to update
     */
    where?: favouritesWhereInput
    /**
     * Limit how many favourites to update.
     */
    limit?: number
  }

  /**
   * favourites updateManyAndReturn
   */
  export type favouritesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * The data used to update favourites.
     */
    data: XOR<favouritesUpdateManyMutationInput, favouritesUncheckedUpdateManyInput>
    /**
     * Filter which favourites to update
     */
    where?: favouritesWhereInput
    /**
     * Limit how many favourites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * favourites upsert
   */
  export type favouritesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesInclude<ExtArgs> | null
    /**
     * The filter to search for the favourites to update in case it exists.
     */
    where: favouritesWhereUniqueInput
    /**
     * In case the favourites found by the `where` argument doesn't exist, create a new favourites with this data.
     */
    create: XOR<favouritesCreateInput, favouritesUncheckedCreateInput>
    /**
     * In case the favourites was found with the provided `where` argument, update it with this data.
     */
    update: XOR<favouritesUpdateInput, favouritesUncheckedUpdateInput>
  }

  /**
   * favourites delete
   */
  export type favouritesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesInclude<ExtArgs> | null
    /**
     * Filter which favourites to delete.
     */
    where: favouritesWhereUniqueInput
  }

  /**
   * favourites deleteMany
   */
  export type favouritesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which favourites to delete
     */
    where?: favouritesWhereInput
    /**
     * Limit how many favourites to delete.
     */
    limit?: number
  }

  /**
   * favourites without action
   */
  export type favouritesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favourites
     */
    select?: favouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favourites
     */
    omit?: favouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favouritesInclude<ExtArgs> | null
  }


  /**
   * Model formula_conversations
   */

  export type AggregateFormula_conversations = {
    _count: Formula_conversationsCountAggregateOutputType | null
    _min: Formula_conversationsMinAggregateOutputType | null
    _max: Formula_conversationsMaxAggregateOutputType | null
  }

  export type Formula_conversationsMinAggregateOutputType = {
    conversation_id: string | null
    formula_id: string | null
    started_at: Date | null
    updated_at: Date | null
  }

  export type Formula_conversationsMaxAggregateOutputType = {
    conversation_id: string | null
    formula_id: string | null
    started_at: Date | null
    updated_at: Date | null
  }

  export type Formula_conversationsCountAggregateOutputType = {
    conversation_id: number
    formula_id: number
    started_at: number
    updated_at: number
    _all: number
  }


  export type Formula_conversationsMinAggregateInputType = {
    conversation_id?: true
    formula_id?: true
    started_at?: true
    updated_at?: true
  }

  export type Formula_conversationsMaxAggregateInputType = {
    conversation_id?: true
    formula_id?: true
    started_at?: true
    updated_at?: true
  }

  export type Formula_conversationsCountAggregateInputType = {
    conversation_id?: true
    formula_id?: true
    started_at?: true
    updated_at?: true
    _all?: true
  }

  export type Formula_conversationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formula_conversations to aggregate.
     */
    where?: formula_conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formula_conversations to fetch.
     */
    orderBy?: formula_conversationsOrderByWithRelationInput | formula_conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: formula_conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formula_conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formula_conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned formula_conversations
    **/
    _count?: true | Formula_conversationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Formula_conversationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Formula_conversationsMaxAggregateInputType
  }

  export type GetFormula_conversationsAggregateType<T extends Formula_conversationsAggregateArgs> = {
        [P in keyof T & keyof AggregateFormula_conversations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormula_conversations[P]>
      : GetScalarType<T[P], AggregateFormula_conversations[P]>
  }




  export type formula_conversationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formula_conversationsWhereInput
    orderBy?: formula_conversationsOrderByWithAggregationInput | formula_conversationsOrderByWithAggregationInput[]
    by: Formula_conversationsScalarFieldEnum[] | Formula_conversationsScalarFieldEnum
    having?: formula_conversationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Formula_conversationsCountAggregateInputType | true
    _min?: Formula_conversationsMinAggregateInputType
    _max?: Formula_conversationsMaxAggregateInputType
  }

  export type Formula_conversationsGroupByOutputType = {
    conversation_id: string
    formula_id: string
    started_at: Date
    updated_at: Date
    _count: Formula_conversationsCountAggregateOutputType | null
    _min: Formula_conversationsMinAggregateOutputType | null
    _max: Formula_conversationsMaxAggregateOutputType | null
  }

  type GetFormula_conversationsGroupByPayload<T extends formula_conversationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Formula_conversationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Formula_conversationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Formula_conversationsGroupByOutputType[P]>
            : GetScalarType<T[P], Formula_conversationsGroupByOutputType[P]>
        }
      >
    >


  export type formula_conversationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    conversation_id?: boolean
    formula_id?: boolean
    started_at?: boolean
    updated_at?: boolean
    formula?: boolean | formulasDefaultArgs<ExtArgs>
    messages?: boolean | formula_conversations$messagesArgs<ExtArgs>
    _count?: boolean | Formula_conversationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formula_conversations"]>

  export type formula_conversationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    conversation_id?: boolean
    formula_id?: boolean
    started_at?: boolean
    updated_at?: boolean
    formula?: boolean | formulasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formula_conversations"]>

  export type formula_conversationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    conversation_id?: boolean
    formula_id?: boolean
    started_at?: boolean
    updated_at?: boolean
    formula?: boolean | formulasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formula_conversations"]>

  export type formula_conversationsSelectScalar = {
    conversation_id?: boolean
    formula_id?: boolean
    started_at?: boolean
    updated_at?: boolean
  }

  export type formula_conversationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"conversation_id" | "formula_id" | "started_at" | "updated_at", ExtArgs["result"]["formula_conversations"]>
  export type formula_conversationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formula?: boolean | formulasDefaultArgs<ExtArgs>
    messages?: boolean | formula_conversations$messagesArgs<ExtArgs>
    _count?: boolean | Formula_conversationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type formula_conversationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formula?: boolean | formulasDefaultArgs<ExtArgs>
  }
  export type formula_conversationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formula?: boolean | formulasDefaultArgs<ExtArgs>
  }

  export type $formula_conversationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "formula_conversations"
    objects: {
      formula: Prisma.$formulasPayload<ExtArgs>
      messages: Prisma.$messagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Conversation unique identifier
       */
      conversation_id: string
      /**
       * Related formula UUID
       */
      formula_id: string
      /**
       * Conversation start time
       */
      started_at: Date
      /**
       * Conversation last update time
       */
      updated_at: Date
    }, ExtArgs["result"]["formula_conversations"]>
    composites: {}
  }

  type formula_conversationsGetPayload<S extends boolean | null | undefined | formula_conversationsDefaultArgs> = $Result.GetResult<Prisma.$formula_conversationsPayload, S>

  type formula_conversationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<formula_conversationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Formula_conversationsCountAggregateInputType | true
    }

  export interface formula_conversationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['formula_conversations'], meta: { name: 'formula_conversations' } }
    /**
     * Find zero or one Formula_conversations that matches the filter.
     * @param {formula_conversationsFindUniqueArgs} args - Arguments to find a Formula_conversations
     * @example
     * // Get one Formula_conversations
     * const formula_conversations = await prisma.formula_conversations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends formula_conversationsFindUniqueArgs>(args: SelectSubset<T, formula_conversationsFindUniqueArgs<ExtArgs>>): Prisma__formula_conversationsClient<$Result.GetResult<Prisma.$formula_conversationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Formula_conversations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {formula_conversationsFindUniqueOrThrowArgs} args - Arguments to find a Formula_conversations
     * @example
     * // Get one Formula_conversations
     * const formula_conversations = await prisma.formula_conversations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends formula_conversationsFindUniqueOrThrowArgs>(args: SelectSubset<T, formula_conversationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__formula_conversationsClient<$Result.GetResult<Prisma.$formula_conversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formula_conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formula_conversationsFindFirstArgs} args - Arguments to find a Formula_conversations
     * @example
     * // Get one Formula_conversations
     * const formula_conversations = await prisma.formula_conversations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends formula_conversationsFindFirstArgs>(args?: SelectSubset<T, formula_conversationsFindFirstArgs<ExtArgs>>): Prisma__formula_conversationsClient<$Result.GetResult<Prisma.$formula_conversationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formula_conversations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formula_conversationsFindFirstOrThrowArgs} args - Arguments to find a Formula_conversations
     * @example
     * // Get one Formula_conversations
     * const formula_conversations = await prisma.formula_conversations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends formula_conversationsFindFirstOrThrowArgs>(args?: SelectSubset<T, formula_conversationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__formula_conversationsClient<$Result.GetResult<Prisma.$formula_conversationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formula_conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formula_conversationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formula_conversations
     * const formula_conversations = await prisma.formula_conversations.findMany()
     * 
     * // Get first 10 Formula_conversations
     * const formula_conversations = await prisma.formula_conversations.findMany({ take: 10 })
     * 
     * // Only select the `conversation_id`
     * const formula_conversationsWithConversation_idOnly = await prisma.formula_conversations.findMany({ select: { conversation_id: true } })
     * 
     */
    findMany<T extends formula_conversationsFindManyArgs>(args?: SelectSubset<T, formula_conversationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formula_conversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Formula_conversations.
     * @param {formula_conversationsCreateArgs} args - Arguments to create a Formula_conversations.
     * @example
     * // Create one Formula_conversations
     * const Formula_conversations = await prisma.formula_conversations.create({
     *   data: {
     *     // ... data to create a Formula_conversations
     *   }
     * })
     * 
     */
    create<T extends formula_conversationsCreateArgs>(args: SelectSubset<T, formula_conversationsCreateArgs<ExtArgs>>): Prisma__formula_conversationsClient<$Result.GetResult<Prisma.$formula_conversationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formula_conversations.
     * @param {formula_conversationsCreateManyArgs} args - Arguments to create many Formula_conversations.
     * @example
     * // Create many Formula_conversations
     * const formula_conversations = await prisma.formula_conversations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends formula_conversationsCreateManyArgs>(args?: SelectSubset<T, formula_conversationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Formula_conversations and returns the data saved in the database.
     * @param {formula_conversationsCreateManyAndReturnArgs} args - Arguments to create many Formula_conversations.
     * @example
     * // Create many Formula_conversations
     * const formula_conversations = await prisma.formula_conversations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Formula_conversations and only return the `conversation_id`
     * const formula_conversationsWithConversation_idOnly = await prisma.formula_conversations.createManyAndReturn({
     *   select: { conversation_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends formula_conversationsCreateManyAndReturnArgs>(args?: SelectSubset<T, formula_conversationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formula_conversationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Formula_conversations.
     * @param {formula_conversationsDeleteArgs} args - Arguments to delete one Formula_conversations.
     * @example
     * // Delete one Formula_conversations
     * const Formula_conversations = await prisma.formula_conversations.delete({
     *   where: {
     *     // ... filter to delete one Formula_conversations
     *   }
     * })
     * 
     */
    delete<T extends formula_conversationsDeleteArgs>(args: SelectSubset<T, formula_conversationsDeleteArgs<ExtArgs>>): Prisma__formula_conversationsClient<$Result.GetResult<Prisma.$formula_conversationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Formula_conversations.
     * @param {formula_conversationsUpdateArgs} args - Arguments to update one Formula_conversations.
     * @example
     * // Update one Formula_conversations
     * const formula_conversations = await prisma.formula_conversations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends formula_conversationsUpdateArgs>(args: SelectSubset<T, formula_conversationsUpdateArgs<ExtArgs>>): Prisma__formula_conversationsClient<$Result.GetResult<Prisma.$formula_conversationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formula_conversations.
     * @param {formula_conversationsDeleteManyArgs} args - Arguments to filter Formula_conversations to delete.
     * @example
     * // Delete a few Formula_conversations
     * const { count } = await prisma.formula_conversations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends formula_conversationsDeleteManyArgs>(args?: SelectSubset<T, formula_conversationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formula_conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formula_conversationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formula_conversations
     * const formula_conversations = await prisma.formula_conversations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends formula_conversationsUpdateManyArgs>(args: SelectSubset<T, formula_conversationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formula_conversations and returns the data updated in the database.
     * @param {formula_conversationsUpdateManyAndReturnArgs} args - Arguments to update many Formula_conversations.
     * @example
     * // Update many Formula_conversations
     * const formula_conversations = await prisma.formula_conversations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Formula_conversations and only return the `conversation_id`
     * const formula_conversationsWithConversation_idOnly = await prisma.formula_conversations.updateManyAndReturn({
     *   select: { conversation_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends formula_conversationsUpdateManyAndReturnArgs>(args: SelectSubset<T, formula_conversationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formula_conversationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Formula_conversations.
     * @param {formula_conversationsUpsertArgs} args - Arguments to update or create a Formula_conversations.
     * @example
     * // Update or create a Formula_conversations
     * const formula_conversations = await prisma.formula_conversations.upsert({
     *   create: {
     *     // ... data to create a Formula_conversations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formula_conversations we want to update
     *   }
     * })
     */
    upsert<T extends formula_conversationsUpsertArgs>(args: SelectSubset<T, formula_conversationsUpsertArgs<ExtArgs>>): Prisma__formula_conversationsClient<$Result.GetResult<Prisma.$formula_conversationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formula_conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formula_conversationsCountArgs} args - Arguments to filter Formula_conversations to count.
     * @example
     * // Count the number of Formula_conversations
     * const count = await prisma.formula_conversations.count({
     *   where: {
     *     // ... the filter for the Formula_conversations we want to count
     *   }
     * })
    **/
    count<T extends formula_conversationsCountArgs>(
      args?: Subset<T, formula_conversationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Formula_conversationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formula_conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Formula_conversationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Formula_conversationsAggregateArgs>(args: Subset<T, Formula_conversationsAggregateArgs>): Prisma.PrismaPromise<GetFormula_conversationsAggregateType<T>>

    /**
     * Group by Formula_conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formula_conversationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends formula_conversationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: formula_conversationsGroupByArgs['orderBy'] }
        : { orderBy?: formula_conversationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, formula_conversationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormula_conversationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the formula_conversations model
   */
  readonly fields: formula_conversationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for formula_conversations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__formula_conversationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    formula<T extends formulasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, formulasDefaultArgs<ExtArgs>>): Prisma__formulasClient<$Result.GetResult<Prisma.$formulasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends formula_conversations$messagesArgs<ExtArgs> = {}>(args?: Subset<T, formula_conversations$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the formula_conversations model
   */
  interface formula_conversationsFieldRefs {
    readonly conversation_id: FieldRef<"formula_conversations", 'String'>
    readonly formula_id: FieldRef<"formula_conversations", 'String'>
    readonly started_at: FieldRef<"formula_conversations", 'DateTime'>
    readonly updated_at: FieldRef<"formula_conversations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * formula_conversations findUnique
   */
  export type formula_conversationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_conversations
     */
    select?: formula_conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_conversations
     */
    omit?: formula_conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_conversationsInclude<ExtArgs> | null
    /**
     * Filter, which formula_conversations to fetch.
     */
    where: formula_conversationsWhereUniqueInput
  }

  /**
   * formula_conversations findUniqueOrThrow
   */
  export type formula_conversationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_conversations
     */
    select?: formula_conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_conversations
     */
    omit?: formula_conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_conversationsInclude<ExtArgs> | null
    /**
     * Filter, which formula_conversations to fetch.
     */
    where: formula_conversationsWhereUniqueInput
  }

  /**
   * formula_conversations findFirst
   */
  export type formula_conversationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_conversations
     */
    select?: formula_conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_conversations
     */
    omit?: formula_conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_conversationsInclude<ExtArgs> | null
    /**
     * Filter, which formula_conversations to fetch.
     */
    where?: formula_conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formula_conversations to fetch.
     */
    orderBy?: formula_conversationsOrderByWithRelationInput | formula_conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formula_conversations.
     */
    cursor?: formula_conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formula_conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formula_conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formula_conversations.
     */
    distinct?: Formula_conversationsScalarFieldEnum | Formula_conversationsScalarFieldEnum[]
  }

  /**
   * formula_conversations findFirstOrThrow
   */
  export type formula_conversationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_conversations
     */
    select?: formula_conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_conversations
     */
    omit?: formula_conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_conversationsInclude<ExtArgs> | null
    /**
     * Filter, which formula_conversations to fetch.
     */
    where?: formula_conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formula_conversations to fetch.
     */
    orderBy?: formula_conversationsOrderByWithRelationInput | formula_conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formula_conversations.
     */
    cursor?: formula_conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formula_conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formula_conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formula_conversations.
     */
    distinct?: Formula_conversationsScalarFieldEnum | Formula_conversationsScalarFieldEnum[]
  }

  /**
   * formula_conversations findMany
   */
  export type formula_conversationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_conversations
     */
    select?: formula_conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_conversations
     */
    omit?: formula_conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_conversationsInclude<ExtArgs> | null
    /**
     * Filter, which formula_conversations to fetch.
     */
    where?: formula_conversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formula_conversations to fetch.
     */
    orderBy?: formula_conversationsOrderByWithRelationInput | formula_conversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing formula_conversations.
     */
    cursor?: formula_conversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formula_conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formula_conversations.
     */
    skip?: number
    distinct?: Formula_conversationsScalarFieldEnum | Formula_conversationsScalarFieldEnum[]
  }

  /**
   * formula_conversations create
   */
  export type formula_conversationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_conversations
     */
    select?: formula_conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_conversations
     */
    omit?: formula_conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_conversationsInclude<ExtArgs> | null
    /**
     * The data needed to create a formula_conversations.
     */
    data: XOR<formula_conversationsCreateInput, formula_conversationsUncheckedCreateInput>
  }

  /**
   * formula_conversations createMany
   */
  export type formula_conversationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many formula_conversations.
     */
    data: formula_conversationsCreateManyInput | formula_conversationsCreateManyInput[]
  }

  /**
   * formula_conversations createManyAndReturn
   */
  export type formula_conversationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_conversations
     */
    select?: formula_conversationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the formula_conversations
     */
    omit?: formula_conversationsOmit<ExtArgs> | null
    /**
     * The data used to create many formula_conversations.
     */
    data: formula_conversationsCreateManyInput | formula_conversationsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_conversationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * formula_conversations update
   */
  export type formula_conversationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_conversations
     */
    select?: formula_conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_conversations
     */
    omit?: formula_conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_conversationsInclude<ExtArgs> | null
    /**
     * The data needed to update a formula_conversations.
     */
    data: XOR<formula_conversationsUpdateInput, formula_conversationsUncheckedUpdateInput>
    /**
     * Choose, which formula_conversations to update.
     */
    where: formula_conversationsWhereUniqueInput
  }

  /**
   * formula_conversations updateMany
   */
  export type formula_conversationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update formula_conversations.
     */
    data: XOR<formula_conversationsUpdateManyMutationInput, formula_conversationsUncheckedUpdateManyInput>
    /**
     * Filter which formula_conversations to update
     */
    where?: formula_conversationsWhereInput
    /**
     * Limit how many formula_conversations to update.
     */
    limit?: number
  }

  /**
   * formula_conversations updateManyAndReturn
   */
  export type formula_conversationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_conversations
     */
    select?: formula_conversationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the formula_conversations
     */
    omit?: formula_conversationsOmit<ExtArgs> | null
    /**
     * The data used to update formula_conversations.
     */
    data: XOR<formula_conversationsUpdateManyMutationInput, formula_conversationsUncheckedUpdateManyInput>
    /**
     * Filter which formula_conversations to update
     */
    where?: formula_conversationsWhereInput
    /**
     * Limit how many formula_conversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_conversationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * formula_conversations upsert
   */
  export type formula_conversationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_conversations
     */
    select?: formula_conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_conversations
     */
    omit?: formula_conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_conversationsInclude<ExtArgs> | null
    /**
     * The filter to search for the formula_conversations to update in case it exists.
     */
    where: formula_conversationsWhereUniqueInput
    /**
     * In case the formula_conversations found by the `where` argument doesn't exist, create a new formula_conversations with this data.
     */
    create: XOR<formula_conversationsCreateInput, formula_conversationsUncheckedCreateInput>
    /**
     * In case the formula_conversations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<formula_conversationsUpdateInput, formula_conversationsUncheckedUpdateInput>
  }

  /**
   * formula_conversations delete
   */
  export type formula_conversationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_conversations
     */
    select?: formula_conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_conversations
     */
    omit?: formula_conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_conversationsInclude<ExtArgs> | null
    /**
     * Filter which formula_conversations to delete.
     */
    where: formula_conversationsWhereUniqueInput
  }

  /**
   * formula_conversations deleteMany
   */
  export type formula_conversationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formula_conversations to delete
     */
    where?: formula_conversationsWhereInput
    /**
     * Limit how many formula_conversations to delete.
     */
    limit?: number
  }

  /**
   * formula_conversations.messages
   */
  export type formula_conversations$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * formula_conversations without action
   */
  export type formula_conversationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formula_conversations
     */
    select?: formula_conversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formula_conversations
     */
    omit?: formula_conversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formula_conversationsInclude<ExtArgs> | null
  }


  /**
   * Model messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesMinAggregateOutputType = {
    message_id: string | null
    conversation_id: string | null
    role: string | null
    content: string | null
    created_at: Date | null
  }

  export type MessagesMaxAggregateOutputType = {
    message_id: string | null
    conversation_id: string | null
    role: string | null
    content: string | null
    created_at: Date | null
  }

  export type MessagesCountAggregateOutputType = {
    message_id: number
    conversation_id: number
    role: number
    content: number
    created_at: number
    _all: number
  }


  export type MessagesMinAggregateInputType = {
    message_id?: true
    conversation_id?: true
    role?: true
    content?: true
    created_at?: true
  }

  export type MessagesMaxAggregateInputType = {
    message_id?: true
    conversation_id?: true
    role?: true
    content?: true
    created_at?: true
  }

  export type MessagesCountAggregateInputType = {
    message_id?: true
    conversation_id?: true
    role?: true
    content?: true
    created_at?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to aggregate.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithAggregationInput | messagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    message_id: string
    conversation_id: string
    role: string
    content: string
    created_at: Date
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    message_id?: boolean
    conversation_id?: boolean
    role?: boolean
    content?: boolean
    created_at?: boolean
    conversation?: boolean | formula_conversationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    message_id?: boolean
    conversation_id?: boolean
    role?: boolean
    content?: boolean
    created_at?: boolean
    conversation?: boolean | formula_conversationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    message_id?: boolean
    conversation_id?: boolean
    role?: boolean
    content?: boolean
    created_at?: boolean
    conversation?: boolean | formula_conversationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectScalar = {
    message_id?: boolean
    conversation_id?: boolean
    role?: boolean
    content?: boolean
    created_at?: boolean
  }

  export type messagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"message_id" | "conversation_id" | "role" | "content" | "created_at", ExtArgs["result"]["messages"]>
  export type messagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | formula_conversationsDefaultArgs<ExtArgs>
  }
  export type messagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | formula_conversationsDefaultArgs<ExtArgs>
  }
  export type messagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | formula_conversationsDefaultArgs<ExtArgs>
  }

  export type $messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "messages"
    objects: {
      conversation: Prisma.$formula_conversationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Message unique identifier
       */
      message_id: string
      /**
       * Related conversation UUID
       */
      conversation_id: string
      /**
       * system/user/assistant
       */
      role: string
      /**
       * Message content
       */
      content: string
      /**
       * Send time
       */
      created_at: Date
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type messagesGetPayload<S extends boolean | null | undefined | messagesDefaultArgs> = $Result.GetResult<Prisma.$messagesPayload, S>

  type messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['messages'], meta: { name: 'messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {messagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messagesFindUniqueArgs>(args: SelectSubset<T, messagesFindUniqueArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messagesFindFirstArgs>(args?: SelectSubset<T, messagesFindFirstArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `message_id`
     * const messagesWithMessage_idOnly = await prisma.messages.findMany({ select: { message_id: true } })
     * 
     */
    findMany<T extends messagesFindManyArgs>(args?: SelectSubset<T, messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {messagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends messagesCreateArgs>(args: SelectSubset<T, messagesCreateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messagesCreateManyArgs>(args?: SelectSubset<T, messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {messagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `message_id`
     * const messagesWithMessage_idOnly = await prisma.messages.createManyAndReturn({
     *   select: { message_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends messagesCreateManyAndReturnArgs>(args?: SelectSubset<T, messagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {messagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends messagesDeleteArgs>(args: SelectSubset<T, messagesDeleteArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {messagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messagesUpdateArgs>(args: SelectSubset<T, messagesUpdateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messagesDeleteManyArgs>(args?: SelectSubset<T, messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messagesUpdateManyArgs>(args: SelectSubset<T, messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {messagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `message_id`
     * const messagesWithMessage_idOnly = await prisma.messages.updateManyAndReturn({
     *   select: { message_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends messagesUpdateManyAndReturnArgs>(args: SelectSubset<T, messagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {messagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends messagesUpsertArgs>(args: SelectSubset<T, messagesUpsertArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messagesCountArgs>(
      args?: Subset<T, messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messagesGroupByArgs['orderBy'] }
        : { orderBy?: messagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the messages model
   */
  readonly fields: messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends formula_conversationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, formula_conversationsDefaultArgs<ExtArgs>>): Prisma__formula_conversationsClient<$Result.GetResult<Prisma.$formula_conversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the messages model
   */
  interface messagesFieldRefs {
    readonly message_id: FieldRef<"messages", 'String'>
    readonly conversation_id: FieldRef<"messages", 'String'>
    readonly role: FieldRef<"messages", 'String'>
    readonly content: FieldRef<"messages", 'String'>
    readonly created_at: FieldRef<"messages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * messages findUnique
   */
  export type messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findUniqueOrThrow
   */
  export type messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findFirst
   */
  export type messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findFirstOrThrow
   */
  export type messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findMany
   */
  export type messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages create
   */
  export type messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to create a messages.
     */
    data: XOR<messagesCreateInput, messagesUncheckedCreateInput>
  }

  /**
   * messages createMany
   */
  export type messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
  }

  /**
   * messages createManyAndReturn
   */
  export type messagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * messages update
   */
  export type messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to update a messages.
     */
    data: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
    /**
     * Choose, which messages to update.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages updateMany
   */
  export type messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * messages updateManyAndReturn
   */
  export type messagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * messages upsert
   */
  export type messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The filter to search for the messages to update in case it exists.
     */
    where: messagesWhereUniqueInput
    /**
     * In case the messages found by the `where` argument doesn't exist, create a new messages with this data.
     */
    create: XOR<messagesCreateInput, messagesUncheckedCreateInput>
    /**
     * In case the messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
  }

  /**
   * messages delete
   */
  export type messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter which messages to delete.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages deleteMany
   */
  export type messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * messages without action
   */
  export type messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Formula_sessionsScalarFieldEnum: {
    session_id: 'session_id',
    input_type: 'input_type',
    source_content: 'source_content',
    created_at: 'created_at'
  };

  export type Formula_sessionsScalarFieldEnum = (typeof Formula_sessionsScalarFieldEnum)[keyof typeof Formula_sessionsScalarFieldEnum]


  export const FormulasScalarFieldEnum: {
    formula_id: 'formula_id',
    session_id: 'session_id',
    latex_code: 'latex_code',
    recognized_by: 'recognized_by',
    confidence: 'confidence',
    name: 'name',
    description: 'description',
    created_at: 'created_at'
  };

  export type FormulasScalarFieldEnum = (typeof FormulasScalarFieldEnum)[keyof typeof FormulasScalarFieldEnum]


  export const Formula_interpretationsScalarFieldEnum: {
    interpretation_id: 'interpretation_id',
    formula_id: 'formula_id',
    explanation: 'explanation',
    engine_used: 'engine_used',
    generated_at: 'generated_at'
  };

  export type Formula_interpretationsScalarFieldEnum = (typeof Formula_interpretationsScalarFieldEnum)[keyof typeof Formula_interpretationsScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    tag_id: 'tag_id',
    name: 'name',
    description: 'description',
    color: 'color',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const Formula_tagsScalarFieldEnum: {
    formula_id: 'formula_id',
    tag_id: 'tag_id',
    created_at: 'created_at'
  };

  export type Formula_tagsScalarFieldEnum = (typeof Formula_tagsScalarFieldEnum)[keyof typeof Formula_tagsScalarFieldEnum]


  export const FavouritesScalarFieldEnum: {
    favourite_id: 'favourite_id',
    formula_id: 'formula_id',
    created_at: 'created_at'
  };

  export type FavouritesScalarFieldEnum = (typeof FavouritesScalarFieldEnum)[keyof typeof FavouritesScalarFieldEnum]


  export const Formula_conversationsScalarFieldEnum: {
    conversation_id: 'conversation_id',
    formula_id: 'formula_id',
    started_at: 'started_at',
    updated_at: 'updated_at'
  };

  export type Formula_conversationsScalarFieldEnum = (typeof Formula_conversationsScalarFieldEnum)[keyof typeof Formula_conversationsScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    message_id: 'message_id',
    conversation_id: 'conversation_id',
    role: 'role',
    content: 'content',
    created_at: 'created_at'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type formula_sessionsWhereInput = {
    AND?: formula_sessionsWhereInput | formula_sessionsWhereInput[]
    OR?: formula_sessionsWhereInput[]
    NOT?: formula_sessionsWhereInput | formula_sessionsWhereInput[]
    session_id?: StringFilter<"formula_sessions"> | string
    input_type?: StringFilter<"formula_sessions"> | string
    source_content?: StringNullableFilter<"formula_sessions"> | string | null
    created_at?: DateTimeFilter<"formula_sessions"> | Date | string
    formulas?: FormulasListRelationFilter
  }

  export type formula_sessionsOrderByWithRelationInput = {
    session_id?: SortOrder
    input_type?: SortOrder
    source_content?: SortOrderInput | SortOrder
    created_at?: SortOrder
    formulas?: formulasOrderByRelationAggregateInput
  }

  export type formula_sessionsWhereUniqueInput = Prisma.AtLeast<{
    session_id?: string
    AND?: formula_sessionsWhereInput | formula_sessionsWhereInput[]
    OR?: formula_sessionsWhereInput[]
    NOT?: formula_sessionsWhereInput | formula_sessionsWhereInput[]
    input_type?: StringFilter<"formula_sessions"> | string
    source_content?: StringNullableFilter<"formula_sessions"> | string | null
    created_at?: DateTimeFilter<"formula_sessions"> | Date | string
    formulas?: FormulasListRelationFilter
  }, "session_id">

  export type formula_sessionsOrderByWithAggregationInput = {
    session_id?: SortOrder
    input_type?: SortOrder
    source_content?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: formula_sessionsCountOrderByAggregateInput
    _max?: formula_sessionsMaxOrderByAggregateInput
    _min?: formula_sessionsMinOrderByAggregateInput
  }

  export type formula_sessionsScalarWhereWithAggregatesInput = {
    AND?: formula_sessionsScalarWhereWithAggregatesInput | formula_sessionsScalarWhereWithAggregatesInput[]
    OR?: formula_sessionsScalarWhereWithAggregatesInput[]
    NOT?: formula_sessionsScalarWhereWithAggregatesInput | formula_sessionsScalarWhereWithAggregatesInput[]
    session_id?: StringWithAggregatesFilter<"formula_sessions"> | string
    input_type?: StringWithAggregatesFilter<"formula_sessions"> | string
    source_content?: StringNullableWithAggregatesFilter<"formula_sessions"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"formula_sessions"> | Date | string
  }

  export type formulasWhereInput = {
    AND?: formulasWhereInput | formulasWhereInput[]
    OR?: formulasWhereInput[]
    NOT?: formulasWhereInput | formulasWhereInput[]
    formula_id?: StringFilter<"formulas"> | string
    session_id?: StringFilter<"formulas"> | string
    latex_code?: StringFilter<"formulas"> | string
    recognized_by?: StringFilter<"formulas"> | string
    confidence?: FloatNullableFilter<"formulas"> | number | null
    name?: StringNullableFilter<"formulas"> | string | null
    description?: StringNullableFilter<"formulas"> | string | null
    created_at?: DateTimeFilter<"formulas"> | Date | string
    session?: XOR<Formula_sessionsScalarRelationFilter, formula_sessionsWhereInput>
    interpretations?: Formula_interpretationsListRelationFilter
    conversations?: Formula_conversationsListRelationFilter
    tags?: Formula_tagsListRelationFilter
    favourties?: FavouritesListRelationFilter
  }

  export type formulasOrderByWithRelationInput = {
    formula_id?: SortOrder
    session_id?: SortOrder
    latex_code?: SortOrder
    recognized_by?: SortOrder
    confidence?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    session?: formula_sessionsOrderByWithRelationInput
    interpretations?: formula_interpretationsOrderByRelationAggregateInput
    conversations?: formula_conversationsOrderByRelationAggregateInput
    tags?: formula_tagsOrderByRelationAggregateInput
    favourties?: favouritesOrderByRelationAggregateInput
  }

  export type formulasWhereUniqueInput = Prisma.AtLeast<{
    formula_id?: string
    AND?: formulasWhereInput | formulasWhereInput[]
    OR?: formulasWhereInput[]
    NOT?: formulasWhereInput | formulasWhereInput[]
    session_id?: StringFilter<"formulas"> | string
    latex_code?: StringFilter<"formulas"> | string
    recognized_by?: StringFilter<"formulas"> | string
    confidence?: FloatNullableFilter<"formulas"> | number | null
    name?: StringNullableFilter<"formulas"> | string | null
    description?: StringNullableFilter<"formulas"> | string | null
    created_at?: DateTimeFilter<"formulas"> | Date | string
    session?: XOR<Formula_sessionsScalarRelationFilter, formula_sessionsWhereInput>
    interpretations?: Formula_interpretationsListRelationFilter
    conversations?: Formula_conversationsListRelationFilter
    tags?: Formula_tagsListRelationFilter
    favourties?: FavouritesListRelationFilter
  }, "formula_id">

  export type formulasOrderByWithAggregationInput = {
    formula_id?: SortOrder
    session_id?: SortOrder
    latex_code?: SortOrder
    recognized_by?: SortOrder
    confidence?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: formulasCountOrderByAggregateInput
    _avg?: formulasAvgOrderByAggregateInput
    _max?: formulasMaxOrderByAggregateInput
    _min?: formulasMinOrderByAggregateInput
    _sum?: formulasSumOrderByAggregateInput
  }

  export type formulasScalarWhereWithAggregatesInput = {
    AND?: formulasScalarWhereWithAggregatesInput | formulasScalarWhereWithAggregatesInput[]
    OR?: formulasScalarWhereWithAggregatesInput[]
    NOT?: formulasScalarWhereWithAggregatesInput | formulasScalarWhereWithAggregatesInput[]
    formula_id?: StringWithAggregatesFilter<"formulas"> | string
    session_id?: StringWithAggregatesFilter<"formulas"> | string
    latex_code?: StringWithAggregatesFilter<"formulas"> | string
    recognized_by?: StringWithAggregatesFilter<"formulas"> | string
    confidence?: FloatNullableWithAggregatesFilter<"formulas"> | number | null
    name?: StringNullableWithAggregatesFilter<"formulas"> | string | null
    description?: StringNullableWithAggregatesFilter<"formulas"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"formulas"> | Date | string
  }

  export type formula_interpretationsWhereInput = {
    AND?: formula_interpretationsWhereInput | formula_interpretationsWhereInput[]
    OR?: formula_interpretationsWhereInput[]
    NOT?: formula_interpretationsWhereInput | formula_interpretationsWhereInput[]
    interpretation_id?: StringFilter<"formula_interpretations"> | string
    formula_id?: StringFilter<"formula_interpretations"> | string
    explanation?: StringFilter<"formula_interpretations"> | string
    engine_used?: StringFilter<"formula_interpretations"> | string
    generated_at?: DateTimeFilter<"formula_interpretations"> | Date | string
    formula?: XOR<FormulasScalarRelationFilter, formulasWhereInput>
  }

  export type formula_interpretationsOrderByWithRelationInput = {
    interpretation_id?: SortOrder
    formula_id?: SortOrder
    explanation?: SortOrder
    engine_used?: SortOrder
    generated_at?: SortOrder
    formula?: formulasOrderByWithRelationInput
  }

  export type formula_interpretationsWhereUniqueInput = Prisma.AtLeast<{
    interpretation_id?: string
    AND?: formula_interpretationsWhereInput | formula_interpretationsWhereInput[]
    OR?: formula_interpretationsWhereInput[]
    NOT?: formula_interpretationsWhereInput | formula_interpretationsWhereInput[]
    formula_id?: StringFilter<"formula_interpretations"> | string
    explanation?: StringFilter<"formula_interpretations"> | string
    engine_used?: StringFilter<"formula_interpretations"> | string
    generated_at?: DateTimeFilter<"formula_interpretations"> | Date | string
    formula?: XOR<FormulasScalarRelationFilter, formulasWhereInput>
  }, "interpretation_id">

  export type formula_interpretationsOrderByWithAggregationInput = {
    interpretation_id?: SortOrder
    formula_id?: SortOrder
    explanation?: SortOrder
    engine_used?: SortOrder
    generated_at?: SortOrder
    _count?: formula_interpretationsCountOrderByAggregateInput
    _max?: formula_interpretationsMaxOrderByAggregateInput
    _min?: formula_interpretationsMinOrderByAggregateInput
  }

  export type formula_interpretationsScalarWhereWithAggregatesInput = {
    AND?: formula_interpretationsScalarWhereWithAggregatesInput | formula_interpretationsScalarWhereWithAggregatesInput[]
    OR?: formula_interpretationsScalarWhereWithAggregatesInput[]
    NOT?: formula_interpretationsScalarWhereWithAggregatesInput | formula_interpretationsScalarWhereWithAggregatesInput[]
    interpretation_id?: StringWithAggregatesFilter<"formula_interpretations"> | string
    formula_id?: StringWithAggregatesFilter<"formula_interpretations"> | string
    explanation?: StringWithAggregatesFilter<"formula_interpretations"> | string
    engine_used?: StringWithAggregatesFilter<"formula_interpretations"> | string
    generated_at?: DateTimeWithAggregatesFilter<"formula_interpretations"> | Date | string
  }

  export type tagsWhereInput = {
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    tag_id?: StringFilter<"tags"> | string
    name?: StringFilter<"tags"> | string
    description?: StringNullableFilter<"tags"> | string | null
    color?: StringFilter<"tags"> | string
    created_at?: DateTimeFilter<"tags"> | Date | string
    updated_at?: DateTimeFilter<"tags"> | Date | string
    formulas?: Formula_tagsListRelationFilter
  }

  export type tagsOrderByWithRelationInput = {
    tag_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    color?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    formulas?: formula_tagsOrderByRelationAggregateInput
  }

  export type tagsWhereUniqueInput = Prisma.AtLeast<{
    tag_id?: string
    name?: string
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    description?: StringNullableFilter<"tags"> | string | null
    color?: StringFilter<"tags"> | string
    created_at?: DateTimeFilter<"tags"> | Date | string
    updated_at?: DateTimeFilter<"tags"> | Date | string
    formulas?: Formula_tagsListRelationFilter
  }, "tag_id" | "name">

  export type tagsOrderByWithAggregationInput = {
    tag_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    color?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: tagsCountOrderByAggregateInput
    _max?: tagsMaxOrderByAggregateInput
    _min?: tagsMinOrderByAggregateInput
  }

  export type tagsScalarWhereWithAggregatesInput = {
    AND?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    OR?: tagsScalarWhereWithAggregatesInput[]
    NOT?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    tag_id?: StringWithAggregatesFilter<"tags"> | string
    name?: StringWithAggregatesFilter<"tags"> | string
    description?: StringNullableWithAggregatesFilter<"tags"> | string | null
    color?: StringWithAggregatesFilter<"tags"> | string
    created_at?: DateTimeWithAggregatesFilter<"tags"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"tags"> | Date | string
  }

  export type formula_tagsWhereInput = {
    AND?: formula_tagsWhereInput | formula_tagsWhereInput[]
    OR?: formula_tagsWhereInput[]
    NOT?: formula_tagsWhereInput | formula_tagsWhereInput[]
    formula_id?: StringFilter<"formula_tags"> | string
    tag_id?: StringFilter<"formula_tags"> | string
    created_at?: DateTimeFilter<"formula_tags"> | Date | string
    formula?: XOR<FormulasScalarRelationFilter, formulasWhereInput>
    tag?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }

  export type formula_tagsOrderByWithRelationInput = {
    formula_id?: SortOrder
    tag_id?: SortOrder
    created_at?: SortOrder
    formula?: formulasOrderByWithRelationInput
    tag?: tagsOrderByWithRelationInput
  }

  export type formula_tagsWhereUniqueInput = Prisma.AtLeast<{
    formula_id_tag_id?: formula_tagsFormula_idTag_idCompoundUniqueInput
    AND?: formula_tagsWhereInput | formula_tagsWhereInput[]
    OR?: formula_tagsWhereInput[]
    NOT?: formula_tagsWhereInput | formula_tagsWhereInput[]
    formula_id?: StringFilter<"formula_tags"> | string
    tag_id?: StringFilter<"formula_tags"> | string
    created_at?: DateTimeFilter<"formula_tags"> | Date | string
    formula?: XOR<FormulasScalarRelationFilter, formulasWhereInput>
    tag?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }, "formula_id_tag_id">

  export type formula_tagsOrderByWithAggregationInput = {
    formula_id?: SortOrder
    tag_id?: SortOrder
    created_at?: SortOrder
    _count?: formula_tagsCountOrderByAggregateInput
    _max?: formula_tagsMaxOrderByAggregateInput
    _min?: formula_tagsMinOrderByAggregateInput
  }

  export type formula_tagsScalarWhereWithAggregatesInput = {
    AND?: formula_tagsScalarWhereWithAggregatesInput | formula_tagsScalarWhereWithAggregatesInput[]
    OR?: formula_tagsScalarWhereWithAggregatesInput[]
    NOT?: formula_tagsScalarWhereWithAggregatesInput | formula_tagsScalarWhereWithAggregatesInput[]
    formula_id?: StringWithAggregatesFilter<"formula_tags"> | string
    tag_id?: StringWithAggregatesFilter<"formula_tags"> | string
    created_at?: DateTimeWithAggregatesFilter<"formula_tags"> | Date | string
  }

  export type favouritesWhereInput = {
    AND?: favouritesWhereInput | favouritesWhereInput[]
    OR?: favouritesWhereInput[]
    NOT?: favouritesWhereInput | favouritesWhereInput[]
    favourite_id?: StringFilter<"favourites"> | string
    formula_id?: StringFilter<"favourites"> | string
    created_at?: DateTimeFilter<"favourites"> | Date | string
    formula?: XOR<FormulasScalarRelationFilter, formulasWhereInput>
  }

  export type favouritesOrderByWithRelationInput = {
    favourite_id?: SortOrder
    formula_id?: SortOrder
    created_at?: SortOrder
    formula?: formulasOrderByWithRelationInput
  }

  export type favouritesWhereUniqueInput = Prisma.AtLeast<{
    favourite_id?: string
    formula_id?: string
    AND?: favouritesWhereInput | favouritesWhereInput[]
    OR?: favouritesWhereInput[]
    NOT?: favouritesWhereInput | favouritesWhereInput[]
    created_at?: DateTimeFilter<"favourites"> | Date | string
    formula?: XOR<FormulasScalarRelationFilter, formulasWhereInput>
  }, "favourite_id" | "formula_id">

  export type favouritesOrderByWithAggregationInput = {
    favourite_id?: SortOrder
    formula_id?: SortOrder
    created_at?: SortOrder
    _count?: favouritesCountOrderByAggregateInput
    _max?: favouritesMaxOrderByAggregateInput
    _min?: favouritesMinOrderByAggregateInput
  }

  export type favouritesScalarWhereWithAggregatesInput = {
    AND?: favouritesScalarWhereWithAggregatesInput | favouritesScalarWhereWithAggregatesInput[]
    OR?: favouritesScalarWhereWithAggregatesInput[]
    NOT?: favouritesScalarWhereWithAggregatesInput | favouritesScalarWhereWithAggregatesInput[]
    favourite_id?: StringWithAggregatesFilter<"favourites"> | string
    formula_id?: StringWithAggregatesFilter<"favourites"> | string
    created_at?: DateTimeWithAggregatesFilter<"favourites"> | Date | string
  }

  export type formula_conversationsWhereInput = {
    AND?: formula_conversationsWhereInput | formula_conversationsWhereInput[]
    OR?: formula_conversationsWhereInput[]
    NOT?: formula_conversationsWhereInput | formula_conversationsWhereInput[]
    conversation_id?: StringFilter<"formula_conversations"> | string
    formula_id?: StringFilter<"formula_conversations"> | string
    started_at?: DateTimeFilter<"formula_conversations"> | Date | string
    updated_at?: DateTimeFilter<"formula_conversations"> | Date | string
    formula?: XOR<FormulasScalarRelationFilter, formulasWhereInput>
    messages?: MessagesListRelationFilter
  }

  export type formula_conversationsOrderByWithRelationInput = {
    conversation_id?: SortOrder
    formula_id?: SortOrder
    started_at?: SortOrder
    updated_at?: SortOrder
    formula?: formulasOrderByWithRelationInput
    messages?: messagesOrderByRelationAggregateInput
  }

  export type formula_conversationsWhereUniqueInput = Prisma.AtLeast<{
    conversation_id?: string
    AND?: formula_conversationsWhereInput | formula_conversationsWhereInput[]
    OR?: formula_conversationsWhereInput[]
    NOT?: formula_conversationsWhereInput | formula_conversationsWhereInput[]
    formula_id?: StringFilter<"formula_conversations"> | string
    started_at?: DateTimeFilter<"formula_conversations"> | Date | string
    updated_at?: DateTimeFilter<"formula_conversations"> | Date | string
    formula?: XOR<FormulasScalarRelationFilter, formulasWhereInput>
    messages?: MessagesListRelationFilter
  }, "conversation_id">

  export type formula_conversationsOrderByWithAggregationInput = {
    conversation_id?: SortOrder
    formula_id?: SortOrder
    started_at?: SortOrder
    updated_at?: SortOrder
    _count?: formula_conversationsCountOrderByAggregateInput
    _max?: formula_conversationsMaxOrderByAggregateInput
    _min?: formula_conversationsMinOrderByAggregateInput
  }

  export type formula_conversationsScalarWhereWithAggregatesInput = {
    AND?: formula_conversationsScalarWhereWithAggregatesInput | formula_conversationsScalarWhereWithAggregatesInput[]
    OR?: formula_conversationsScalarWhereWithAggregatesInput[]
    NOT?: formula_conversationsScalarWhereWithAggregatesInput | formula_conversationsScalarWhereWithAggregatesInput[]
    conversation_id?: StringWithAggregatesFilter<"formula_conversations"> | string
    formula_id?: StringWithAggregatesFilter<"formula_conversations"> | string
    started_at?: DateTimeWithAggregatesFilter<"formula_conversations"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"formula_conversations"> | Date | string
  }

  export type messagesWhereInput = {
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    message_id?: StringFilter<"messages"> | string
    conversation_id?: StringFilter<"messages"> | string
    role?: StringFilter<"messages"> | string
    content?: StringFilter<"messages"> | string
    created_at?: DateTimeFilter<"messages"> | Date | string
    conversation?: XOR<Formula_conversationsScalarRelationFilter, formula_conversationsWhereInput>
  }

  export type messagesOrderByWithRelationInput = {
    message_id?: SortOrder
    conversation_id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    conversation?: formula_conversationsOrderByWithRelationInput
  }

  export type messagesWhereUniqueInput = Prisma.AtLeast<{
    message_id?: string
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    conversation_id?: StringFilter<"messages"> | string
    role?: StringFilter<"messages"> | string
    content?: StringFilter<"messages"> | string
    created_at?: DateTimeFilter<"messages"> | Date | string
    conversation?: XOR<Formula_conversationsScalarRelationFilter, formula_conversationsWhereInput>
  }, "message_id">

  export type messagesOrderByWithAggregationInput = {
    message_id?: SortOrder
    conversation_id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    _count?: messagesCountOrderByAggregateInput
    _max?: messagesMaxOrderByAggregateInput
    _min?: messagesMinOrderByAggregateInput
  }

  export type messagesScalarWhereWithAggregatesInput = {
    AND?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    OR?: messagesScalarWhereWithAggregatesInput[]
    NOT?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    message_id?: StringWithAggregatesFilter<"messages"> | string
    conversation_id?: StringWithAggregatesFilter<"messages"> | string
    role?: StringWithAggregatesFilter<"messages"> | string
    content?: StringWithAggregatesFilter<"messages"> | string
    created_at?: DateTimeWithAggregatesFilter<"messages"> | Date | string
  }

  export type formula_sessionsCreateInput = {
    session_id?: string
    input_type: string
    source_content?: string | null
    created_at?: Date | string
    formulas?: formulasCreateNestedManyWithoutSessionInput
  }

  export type formula_sessionsUncheckedCreateInput = {
    session_id?: string
    input_type: string
    source_content?: string | null
    created_at?: Date | string
    formulas?: formulasUncheckedCreateNestedManyWithoutSessionInput
  }

  export type formula_sessionsUpdateInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    input_type?: StringFieldUpdateOperationsInput | string
    source_content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    formulas?: formulasUpdateManyWithoutSessionNestedInput
  }

  export type formula_sessionsUncheckedUpdateInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    input_type?: StringFieldUpdateOperationsInput | string
    source_content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    formulas?: formulasUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type formula_sessionsCreateManyInput = {
    session_id?: string
    input_type: string
    source_content?: string | null
    created_at?: Date | string
  }

  export type formula_sessionsUpdateManyMutationInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    input_type?: StringFieldUpdateOperationsInput | string
    source_content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formula_sessionsUncheckedUpdateManyInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    input_type?: StringFieldUpdateOperationsInput | string
    source_content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formulasCreateInput = {
    formula_id?: string
    latex_code: string
    recognized_by: string
    confidence?: number | null
    name?: string | null
    description?: string | null
    created_at?: Date | string
    session: formula_sessionsCreateNestedOneWithoutFormulasInput
    interpretations?: formula_interpretationsCreateNestedManyWithoutFormulaInput
    conversations?: formula_conversationsCreateNestedManyWithoutFormulaInput
    tags?: formula_tagsCreateNestedManyWithoutFormulaInput
    favourties?: favouritesCreateNestedManyWithoutFormulaInput
  }

  export type formulasUncheckedCreateInput = {
    formula_id?: string
    session_id: string
    latex_code: string
    recognized_by: string
    confidence?: number | null
    name?: string | null
    description?: string | null
    created_at?: Date | string
    interpretations?: formula_interpretationsUncheckedCreateNestedManyWithoutFormulaInput
    conversations?: formula_conversationsUncheckedCreateNestedManyWithoutFormulaInput
    tags?: formula_tagsUncheckedCreateNestedManyWithoutFormulaInput
    favourties?: favouritesUncheckedCreateNestedManyWithoutFormulaInput
  }

  export type formulasUpdateInput = {
    formula_id?: StringFieldUpdateOperationsInput | string
    latex_code?: StringFieldUpdateOperationsInput | string
    recognized_by?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: formula_sessionsUpdateOneRequiredWithoutFormulasNestedInput
    interpretations?: formula_interpretationsUpdateManyWithoutFormulaNestedInput
    conversations?: formula_conversationsUpdateManyWithoutFormulaNestedInput
    tags?: formula_tagsUpdateManyWithoutFormulaNestedInput
    favourties?: favouritesUpdateManyWithoutFormulaNestedInput
  }

  export type formulasUncheckedUpdateInput = {
    formula_id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    latex_code?: StringFieldUpdateOperationsInput | string
    recognized_by?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    interpretations?: formula_interpretationsUncheckedUpdateManyWithoutFormulaNestedInput
    conversations?: formula_conversationsUncheckedUpdateManyWithoutFormulaNestedInput
    tags?: formula_tagsUncheckedUpdateManyWithoutFormulaNestedInput
    favourties?: favouritesUncheckedUpdateManyWithoutFormulaNestedInput
  }

  export type formulasCreateManyInput = {
    formula_id?: string
    session_id: string
    latex_code: string
    recognized_by: string
    confidence?: number | null
    name?: string | null
    description?: string | null
    created_at?: Date | string
  }

  export type formulasUpdateManyMutationInput = {
    formula_id?: StringFieldUpdateOperationsInput | string
    latex_code?: StringFieldUpdateOperationsInput | string
    recognized_by?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formulasUncheckedUpdateManyInput = {
    formula_id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    latex_code?: StringFieldUpdateOperationsInput | string
    recognized_by?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formula_interpretationsCreateInput = {
    interpretation_id?: string
    explanation: string
    engine_used: string
    generated_at?: Date | string
    formula: formulasCreateNestedOneWithoutInterpretationsInput
  }

  export type formula_interpretationsUncheckedCreateInput = {
    interpretation_id?: string
    formula_id: string
    explanation: string
    engine_used: string
    generated_at?: Date | string
  }

  export type formula_interpretationsUpdateInput = {
    interpretation_id?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    engine_used?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    formula?: formulasUpdateOneRequiredWithoutInterpretationsNestedInput
  }

  export type formula_interpretationsUncheckedUpdateInput = {
    interpretation_id?: StringFieldUpdateOperationsInput | string
    formula_id?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    engine_used?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formula_interpretationsCreateManyInput = {
    interpretation_id?: string
    formula_id: string
    explanation: string
    engine_used: string
    generated_at?: Date | string
  }

  export type formula_interpretationsUpdateManyMutationInput = {
    interpretation_id?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    engine_used?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formula_interpretationsUncheckedUpdateManyInput = {
    interpretation_id?: StringFieldUpdateOperationsInput | string
    formula_id?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    engine_used?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tagsCreateInput = {
    tag_id: string
    name: string
    description?: string | null
    color?: string
    created_at?: Date | string
    updated_at?: Date | string
    formulas?: formula_tagsCreateNestedManyWithoutTagInput
  }

  export type tagsUncheckedCreateInput = {
    tag_id: string
    name: string
    description?: string | null
    color?: string
    created_at?: Date | string
    updated_at?: Date | string
    formulas?: formula_tagsUncheckedCreateNestedManyWithoutTagInput
  }

  export type tagsUpdateInput = {
    tag_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    formulas?: formula_tagsUpdateManyWithoutTagNestedInput
  }

  export type tagsUncheckedUpdateInput = {
    tag_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    formulas?: formula_tagsUncheckedUpdateManyWithoutTagNestedInput
  }

  export type tagsCreateManyInput = {
    tag_id: string
    name: string
    description?: string | null
    color?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type tagsUpdateManyMutationInput = {
    tag_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tagsUncheckedUpdateManyInput = {
    tag_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formula_tagsCreateInput = {
    created_at?: Date | string
    formula: formulasCreateNestedOneWithoutTagsInput
    tag: tagsCreateNestedOneWithoutFormulasInput
  }

  export type formula_tagsUncheckedCreateInput = {
    formula_id: string
    tag_id: string
    created_at?: Date | string
  }

  export type formula_tagsUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    formula?: formulasUpdateOneRequiredWithoutTagsNestedInput
    tag?: tagsUpdateOneRequiredWithoutFormulasNestedInput
  }

  export type formula_tagsUncheckedUpdateInput = {
    formula_id?: StringFieldUpdateOperationsInput | string
    tag_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formula_tagsCreateManyInput = {
    formula_id: string
    tag_id: string
    created_at?: Date | string
  }

  export type formula_tagsUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formula_tagsUncheckedUpdateManyInput = {
    formula_id?: StringFieldUpdateOperationsInput | string
    tag_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type favouritesCreateInput = {
    favourite_id?: string
    created_at?: Date | string
    formula: formulasCreateNestedOneWithoutFavourtiesInput
  }

  export type favouritesUncheckedCreateInput = {
    favourite_id?: string
    formula_id: string
    created_at?: Date | string
  }

  export type favouritesUpdateInput = {
    favourite_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    formula?: formulasUpdateOneRequiredWithoutFavourtiesNestedInput
  }

  export type favouritesUncheckedUpdateInput = {
    favourite_id?: StringFieldUpdateOperationsInput | string
    formula_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type favouritesCreateManyInput = {
    favourite_id?: string
    formula_id: string
    created_at?: Date | string
  }

  export type favouritesUpdateManyMutationInput = {
    favourite_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type favouritesUncheckedUpdateManyInput = {
    favourite_id?: StringFieldUpdateOperationsInput | string
    formula_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formula_conversationsCreateInput = {
    conversation_id?: string
    started_at?: Date | string
    updated_at?: Date | string
    formula: formulasCreateNestedOneWithoutConversationsInput
    messages?: messagesCreateNestedManyWithoutConversationInput
  }

  export type formula_conversationsUncheckedCreateInput = {
    conversation_id?: string
    formula_id: string
    started_at?: Date | string
    updated_at?: Date | string
    messages?: messagesUncheckedCreateNestedManyWithoutConversationInput
  }

  export type formula_conversationsUpdateInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    formula?: formulasUpdateOneRequiredWithoutConversationsNestedInput
    messages?: messagesUpdateManyWithoutConversationNestedInput
  }

  export type formula_conversationsUncheckedUpdateInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    formula_id?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: messagesUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type formula_conversationsCreateManyInput = {
    conversation_id?: string
    formula_id: string
    started_at?: Date | string
    updated_at?: Date | string
  }

  export type formula_conversationsUpdateManyMutationInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formula_conversationsUncheckedUpdateManyInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    formula_id?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesCreateInput = {
    message_id?: string
    role: string
    content: string
    created_at?: Date | string
    conversation: formula_conversationsCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateInput = {
    message_id?: string
    conversation_id: string
    role: string
    content: string
    created_at?: Date | string
  }

  export type messagesUpdateInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: formula_conversationsUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    conversation_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesCreateManyInput = {
    message_id?: string
    conversation_id: string
    role: string
    content: string
    created_at?: Date | string
  }

  export type messagesUpdateManyMutationInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUncheckedUpdateManyInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    conversation_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FormulasListRelationFilter = {
    every?: formulasWhereInput
    some?: formulasWhereInput
    none?: formulasWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type formulasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type formula_sessionsCountOrderByAggregateInput = {
    session_id?: SortOrder
    input_type?: SortOrder
    source_content?: SortOrder
    created_at?: SortOrder
  }

  export type formula_sessionsMaxOrderByAggregateInput = {
    session_id?: SortOrder
    input_type?: SortOrder
    source_content?: SortOrder
    created_at?: SortOrder
  }

  export type formula_sessionsMinOrderByAggregateInput = {
    session_id?: SortOrder
    input_type?: SortOrder
    source_content?: SortOrder
    created_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type Formula_sessionsScalarRelationFilter = {
    is?: formula_sessionsWhereInput
    isNot?: formula_sessionsWhereInput
  }

  export type Formula_interpretationsListRelationFilter = {
    every?: formula_interpretationsWhereInput
    some?: formula_interpretationsWhereInput
    none?: formula_interpretationsWhereInput
  }

  export type Formula_conversationsListRelationFilter = {
    every?: formula_conversationsWhereInput
    some?: formula_conversationsWhereInput
    none?: formula_conversationsWhereInput
  }

  export type Formula_tagsListRelationFilter = {
    every?: formula_tagsWhereInput
    some?: formula_tagsWhereInput
    none?: formula_tagsWhereInput
  }

  export type FavouritesListRelationFilter = {
    every?: favouritesWhereInput
    some?: favouritesWhereInput
    none?: favouritesWhereInput
  }

  export type formula_interpretationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type formula_conversationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type formula_tagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type favouritesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type formulasCountOrderByAggregateInput = {
    formula_id?: SortOrder
    session_id?: SortOrder
    latex_code?: SortOrder
    recognized_by?: SortOrder
    confidence?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type formulasAvgOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type formulasMaxOrderByAggregateInput = {
    formula_id?: SortOrder
    session_id?: SortOrder
    latex_code?: SortOrder
    recognized_by?: SortOrder
    confidence?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type formulasMinOrderByAggregateInput = {
    formula_id?: SortOrder
    session_id?: SortOrder
    latex_code?: SortOrder
    recognized_by?: SortOrder
    confidence?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type formulasSumOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FormulasScalarRelationFilter = {
    is?: formulasWhereInput
    isNot?: formulasWhereInput
  }

  export type formula_interpretationsCountOrderByAggregateInput = {
    interpretation_id?: SortOrder
    formula_id?: SortOrder
    explanation?: SortOrder
    engine_used?: SortOrder
    generated_at?: SortOrder
  }

  export type formula_interpretationsMaxOrderByAggregateInput = {
    interpretation_id?: SortOrder
    formula_id?: SortOrder
    explanation?: SortOrder
    engine_used?: SortOrder
    generated_at?: SortOrder
  }

  export type formula_interpretationsMinOrderByAggregateInput = {
    interpretation_id?: SortOrder
    formula_id?: SortOrder
    explanation?: SortOrder
    engine_used?: SortOrder
    generated_at?: SortOrder
  }

  export type tagsCountOrderByAggregateInput = {
    tag_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tagsMaxOrderByAggregateInput = {
    tag_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tagsMinOrderByAggregateInput = {
    tag_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TagsScalarRelationFilter = {
    is?: tagsWhereInput
    isNot?: tagsWhereInput
  }

  export type formula_tagsFormula_idTag_idCompoundUniqueInput = {
    formula_id: string
    tag_id: string
  }

  export type formula_tagsCountOrderByAggregateInput = {
    formula_id?: SortOrder
    tag_id?: SortOrder
    created_at?: SortOrder
  }

  export type formula_tagsMaxOrderByAggregateInput = {
    formula_id?: SortOrder
    tag_id?: SortOrder
    created_at?: SortOrder
  }

  export type formula_tagsMinOrderByAggregateInput = {
    formula_id?: SortOrder
    tag_id?: SortOrder
    created_at?: SortOrder
  }

  export type favouritesCountOrderByAggregateInput = {
    favourite_id?: SortOrder
    formula_id?: SortOrder
    created_at?: SortOrder
  }

  export type favouritesMaxOrderByAggregateInput = {
    favourite_id?: SortOrder
    formula_id?: SortOrder
    created_at?: SortOrder
  }

  export type favouritesMinOrderByAggregateInput = {
    favourite_id?: SortOrder
    formula_id?: SortOrder
    created_at?: SortOrder
  }

  export type MessagesListRelationFilter = {
    every?: messagesWhereInput
    some?: messagesWhereInput
    none?: messagesWhereInput
  }

  export type messagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type formula_conversationsCountOrderByAggregateInput = {
    conversation_id?: SortOrder
    formula_id?: SortOrder
    started_at?: SortOrder
    updated_at?: SortOrder
  }

  export type formula_conversationsMaxOrderByAggregateInput = {
    conversation_id?: SortOrder
    formula_id?: SortOrder
    started_at?: SortOrder
    updated_at?: SortOrder
  }

  export type formula_conversationsMinOrderByAggregateInput = {
    conversation_id?: SortOrder
    formula_id?: SortOrder
    started_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Formula_conversationsScalarRelationFilter = {
    is?: formula_conversationsWhereInput
    isNot?: formula_conversationsWhereInput
  }

  export type messagesCountOrderByAggregateInput = {
    message_id?: SortOrder
    conversation_id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type messagesMaxOrderByAggregateInput = {
    message_id?: SortOrder
    conversation_id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type messagesMinOrderByAggregateInput = {
    message_id?: SortOrder
    conversation_id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type formulasCreateNestedManyWithoutSessionInput = {
    create?: XOR<formulasCreateWithoutSessionInput, formulasUncheckedCreateWithoutSessionInput> | formulasCreateWithoutSessionInput[] | formulasUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: formulasCreateOrConnectWithoutSessionInput | formulasCreateOrConnectWithoutSessionInput[]
    createMany?: formulasCreateManySessionInputEnvelope
    connect?: formulasWhereUniqueInput | formulasWhereUniqueInput[]
  }

  export type formulasUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<formulasCreateWithoutSessionInput, formulasUncheckedCreateWithoutSessionInput> | formulasCreateWithoutSessionInput[] | formulasUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: formulasCreateOrConnectWithoutSessionInput | formulasCreateOrConnectWithoutSessionInput[]
    createMany?: formulasCreateManySessionInputEnvelope
    connect?: formulasWhereUniqueInput | formulasWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type formulasUpdateManyWithoutSessionNestedInput = {
    create?: XOR<formulasCreateWithoutSessionInput, formulasUncheckedCreateWithoutSessionInput> | formulasCreateWithoutSessionInput[] | formulasUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: formulasCreateOrConnectWithoutSessionInput | formulasCreateOrConnectWithoutSessionInput[]
    upsert?: formulasUpsertWithWhereUniqueWithoutSessionInput | formulasUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: formulasCreateManySessionInputEnvelope
    set?: formulasWhereUniqueInput | formulasWhereUniqueInput[]
    disconnect?: formulasWhereUniqueInput | formulasWhereUniqueInput[]
    delete?: formulasWhereUniqueInput | formulasWhereUniqueInput[]
    connect?: formulasWhereUniqueInput | formulasWhereUniqueInput[]
    update?: formulasUpdateWithWhereUniqueWithoutSessionInput | formulasUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: formulasUpdateManyWithWhereWithoutSessionInput | formulasUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: formulasScalarWhereInput | formulasScalarWhereInput[]
  }

  export type formulasUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<formulasCreateWithoutSessionInput, formulasUncheckedCreateWithoutSessionInput> | formulasCreateWithoutSessionInput[] | formulasUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: formulasCreateOrConnectWithoutSessionInput | formulasCreateOrConnectWithoutSessionInput[]
    upsert?: formulasUpsertWithWhereUniqueWithoutSessionInput | formulasUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: formulasCreateManySessionInputEnvelope
    set?: formulasWhereUniqueInput | formulasWhereUniqueInput[]
    disconnect?: formulasWhereUniqueInput | formulasWhereUniqueInput[]
    delete?: formulasWhereUniqueInput | formulasWhereUniqueInput[]
    connect?: formulasWhereUniqueInput | formulasWhereUniqueInput[]
    update?: formulasUpdateWithWhereUniqueWithoutSessionInput | formulasUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: formulasUpdateManyWithWhereWithoutSessionInput | formulasUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: formulasScalarWhereInput | formulasScalarWhereInput[]
  }

  export type formula_sessionsCreateNestedOneWithoutFormulasInput = {
    create?: XOR<formula_sessionsCreateWithoutFormulasInput, formula_sessionsUncheckedCreateWithoutFormulasInput>
    connectOrCreate?: formula_sessionsCreateOrConnectWithoutFormulasInput
    connect?: formula_sessionsWhereUniqueInput
  }

  export type formula_interpretationsCreateNestedManyWithoutFormulaInput = {
    create?: XOR<formula_interpretationsCreateWithoutFormulaInput, formula_interpretationsUncheckedCreateWithoutFormulaInput> | formula_interpretationsCreateWithoutFormulaInput[] | formula_interpretationsUncheckedCreateWithoutFormulaInput[]
    connectOrCreate?: formula_interpretationsCreateOrConnectWithoutFormulaInput | formula_interpretationsCreateOrConnectWithoutFormulaInput[]
    createMany?: formula_interpretationsCreateManyFormulaInputEnvelope
    connect?: formula_interpretationsWhereUniqueInput | formula_interpretationsWhereUniqueInput[]
  }

  export type formula_conversationsCreateNestedManyWithoutFormulaInput = {
    create?: XOR<formula_conversationsCreateWithoutFormulaInput, formula_conversationsUncheckedCreateWithoutFormulaInput> | formula_conversationsCreateWithoutFormulaInput[] | formula_conversationsUncheckedCreateWithoutFormulaInput[]
    connectOrCreate?: formula_conversationsCreateOrConnectWithoutFormulaInput | formula_conversationsCreateOrConnectWithoutFormulaInput[]
    createMany?: formula_conversationsCreateManyFormulaInputEnvelope
    connect?: formula_conversationsWhereUniqueInput | formula_conversationsWhereUniqueInput[]
  }

  export type formula_tagsCreateNestedManyWithoutFormulaInput = {
    create?: XOR<formula_tagsCreateWithoutFormulaInput, formula_tagsUncheckedCreateWithoutFormulaInput> | formula_tagsCreateWithoutFormulaInput[] | formula_tagsUncheckedCreateWithoutFormulaInput[]
    connectOrCreate?: formula_tagsCreateOrConnectWithoutFormulaInput | formula_tagsCreateOrConnectWithoutFormulaInput[]
    createMany?: formula_tagsCreateManyFormulaInputEnvelope
    connect?: formula_tagsWhereUniqueInput | formula_tagsWhereUniqueInput[]
  }

  export type favouritesCreateNestedManyWithoutFormulaInput = {
    create?: XOR<favouritesCreateWithoutFormulaInput, favouritesUncheckedCreateWithoutFormulaInput> | favouritesCreateWithoutFormulaInput[] | favouritesUncheckedCreateWithoutFormulaInput[]
    connectOrCreate?: favouritesCreateOrConnectWithoutFormulaInput | favouritesCreateOrConnectWithoutFormulaInput[]
    createMany?: favouritesCreateManyFormulaInputEnvelope
    connect?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
  }

  export type formula_interpretationsUncheckedCreateNestedManyWithoutFormulaInput = {
    create?: XOR<formula_interpretationsCreateWithoutFormulaInput, formula_interpretationsUncheckedCreateWithoutFormulaInput> | formula_interpretationsCreateWithoutFormulaInput[] | formula_interpretationsUncheckedCreateWithoutFormulaInput[]
    connectOrCreate?: formula_interpretationsCreateOrConnectWithoutFormulaInput | formula_interpretationsCreateOrConnectWithoutFormulaInput[]
    createMany?: formula_interpretationsCreateManyFormulaInputEnvelope
    connect?: formula_interpretationsWhereUniqueInput | formula_interpretationsWhereUniqueInput[]
  }

  export type formula_conversationsUncheckedCreateNestedManyWithoutFormulaInput = {
    create?: XOR<formula_conversationsCreateWithoutFormulaInput, formula_conversationsUncheckedCreateWithoutFormulaInput> | formula_conversationsCreateWithoutFormulaInput[] | formula_conversationsUncheckedCreateWithoutFormulaInput[]
    connectOrCreate?: formula_conversationsCreateOrConnectWithoutFormulaInput | formula_conversationsCreateOrConnectWithoutFormulaInput[]
    createMany?: formula_conversationsCreateManyFormulaInputEnvelope
    connect?: formula_conversationsWhereUniqueInput | formula_conversationsWhereUniqueInput[]
  }

  export type formula_tagsUncheckedCreateNestedManyWithoutFormulaInput = {
    create?: XOR<formula_tagsCreateWithoutFormulaInput, formula_tagsUncheckedCreateWithoutFormulaInput> | formula_tagsCreateWithoutFormulaInput[] | formula_tagsUncheckedCreateWithoutFormulaInput[]
    connectOrCreate?: formula_tagsCreateOrConnectWithoutFormulaInput | formula_tagsCreateOrConnectWithoutFormulaInput[]
    createMany?: formula_tagsCreateManyFormulaInputEnvelope
    connect?: formula_tagsWhereUniqueInput | formula_tagsWhereUniqueInput[]
  }

  export type favouritesUncheckedCreateNestedManyWithoutFormulaInput = {
    create?: XOR<favouritesCreateWithoutFormulaInput, favouritesUncheckedCreateWithoutFormulaInput> | favouritesCreateWithoutFormulaInput[] | favouritesUncheckedCreateWithoutFormulaInput[]
    connectOrCreate?: favouritesCreateOrConnectWithoutFormulaInput | favouritesCreateOrConnectWithoutFormulaInput[]
    createMany?: favouritesCreateManyFormulaInputEnvelope
    connect?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type formula_sessionsUpdateOneRequiredWithoutFormulasNestedInput = {
    create?: XOR<formula_sessionsCreateWithoutFormulasInput, formula_sessionsUncheckedCreateWithoutFormulasInput>
    connectOrCreate?: formula_sessionsCreateOrConnectWithoutFormulasInput
    upsert?: formula_sessionsUpsertWithoutFormulasInput
    connect?: formula_sessionsWhereUniqueInput
    update?: XOR<XOR<formula_sessionsUpdateToOneWithWhereWithoutFormulasInput, formula_sessionsUpdateWithoutFormulasInput>, formula_sessionsUncheckedUpdateWithoutFormulasInput>
  }

  export type formula_interpretationsUpdateManyWithoutFormulaNestedInput = {
    create?: XOR<formula_interpretationsCreateWithoutFormulaInput, formula_interpretationsUncheckedCreateWithoutFormulaInput> | formula_interpretationsCreateWithoutFormulaInput[] | formula_interpretationsUncheckedCreateWithoutFormulaInput[]
    connectOrCreate?: formula_interpretationsCreateOrConnectWithoutFormulaInput | formula_interpretationsCreateOrConnectWithoutFormulaInput[]
    upsert?: formula_interpretationsUpsertWithWhereUniqueWithoutFormulaInput | formula_interpretationsUpsertWithWhereUniqueWithoutFormulaInput[]
    createMany?: formula_interpretationsCreateManyFormulaInputEnvelope
    set?: formula_interpretationsWhereUniqueInput | formula_interpretationsWhereUniqueInput[]
    disconnect?: formula_interpretationsWhereUniqueInput | formula_interpretationsWhereUniqueInput[]
    delete?: formula_interpretationsWhereUniqueInput | formula_interpretationsWhereUniqueInput[]
    connect?: formula_interpretationsWhereUniqueInput | formula_interpretationsWhereUniqueInput[]
    update?: formula_interpretationsUpdateWithWhereUniqueWithoutFormulaInput | formula_interpretationsUpdateWithWhereUniqueWithoutFormulaInput[]
    updateMany?: formula_interpretationsUpdateManyWithWhereWithoutFormulaInput | formula_interpretationsUpdateManyWithWhereWithoutFormulaInput[]
    deleteMany?: formula_interpretationsScalarWhereInput | formula_interpretationsScalarWhereInput[]
  }

  export type formula_conversationsUpdateManyWithoutFormulaNestedInput = {
    create?: XOR<formula_conversationsCreateWithoutFormulaInput, formula_conversationsUncheckedCreateWithoutFormulaInput> | formula_conversationsCreateWithoutFormulaInput[] | formula_conversationsUncheckedCreateWithoutFormulaInput[]
    connectOrCreate?: formula_conversationsCreateOrConnectWithoutFormulaInput | formula_conversationsCreateOrConnectWithoutFormulaInput[]
    upsert?: formula_conversationsUpsertWithWhereUniqueWithoutFormulaInput | formula_conversationsUpsertWithWhereUniqueWithoutFormulaInput[]
    createMany?: formula_conversationsCreateManyFormulaInputEnvelope
    set?: formula_conversationsWhereUniqueInput | formula_conversationsWhereUniqueInput[]
    disconnect?: formula_conversationsWhereUniqueInput | formula_conversationsWhereUniqueInput[]
    delete?: formula_conversationsWhereUniqueInput | formula_conversationsWhereUniqueInput[]
    connect?: formula_conversationsWhereUniqueInput | formula_conversationsWhereUniqueInput[]
    update?: formula_conversationsUpdateWithWhereUniqueWithoutFormulaInput | formula_conversationsUpdateWithWhereUniqueWithoutFormulaInput[]
    updateMany?: formula_conversationsUpdateManyWithWhereWithoutFormulaInput | formula_conversationsUpdateManyWithWhereWithoutFormulaInput[]
    deleteMany?: formula_conversationsScalarWhereInput | formula_conversationsScalarWhereInput[]
  }

  export type formula_tagsUpdateManyWithoutFormulaNestedInput = {
    create?: XOR<formula_tagsCreateWithoutFormulaInput, formula_tagsUncheckedCreateWithoutFormulaInput> | formula_tagsCreateWithoutFormulaInput[] | formula_tagsUncheckedCreateWithoutFormulaInput[]
    connectOrCreate?: formula_tagsCreateOrConnectWithoutFormulaInput | formula_tagsCreateOrConnectWithoutFormulaInput[]
    upsert?: formula_tagsUpsertWithWhereUniqueWithoutFormulaInput | formula_tagsUpsertWithWhereUniqueWithoutFormulaInput[]
    createMany?: formula_tagsCreateManyFormulaInputEnvelope
    set?: formula_tagsWhereUniqueInput | formula_tagsWhereUniqueInput[]
    disconnect?: formula_tagsWhereUniqueInput | formula_tagsWhereUniqueInput[]
    delete?: formula_tagsWhereUniqueInput | formula_tagsWhereUniqueInput[]
    connect?: formula_tagsWhereUniqueInput | formula_tagsWhereUniqueInput[]
    update?: formula_tagsUpdateWithWhereUniqueWithoutFormulaInput | formula_tagsUpdateWithWhereUniqueWithoutFormulaInput[]
    updateMany?: formula_tagsUpdateManyWithWhereWithoutFormulaInput | formula_tagsUpdateManyWithWhereWithoutFormulaInput[]
    deleteMany?: formula_tagsScalarWhereInput | formula_tagsScalarWhereInput[]
  }

  export type favouritesUpdateManyWithoutFormulaNestedInput = {
    create?: XOR<favouritesCreateWithoutFormulaInput, favouritesUncheckedCreateWithoutFormulaInput> | favouritesCreateWithoutFormulaInput[] | favouritesUncheckedCreateWithoutFormulaInput[]
    connectOrCreate?: favouritesCreateOrConnectWithoutFormulaInput | favouritesCreateOrConnectWithoutFormulaInput[]
    upsert?: favouritesUpsertWithWhereUniqueWithoutFormulaInput | favouritesUpsertWithWhereUniqueWithoutFormulaInput[]
    createMany?: favouritesCreateManyFormulaInputEnvelope
    set?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
    disconnect?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
    delete?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
    connect?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
    update?: favouritesUpdateWithWhereUniqueWithoutFormulaInput | favouritesUpdateWithWhereUniqueWithoutFormulaInput[]
    updateMany?: favouritesUpdateManyWithWhereWithoutFormulaInput | favouritesUpdateManyWithWhereWithoutFormulaInput[]
    deleteMany?: favouritesScalarWhereInput | favouritesScalarWhereInput[]
  }

  export type formula_interpretationsUncheckedUpdateManyWithoutFormulaNestedInput = {
    create?: XOR<formula_interpretationsCreateWithoutFormulaInput, formula_interpretationsUncheckedCreateWithoutFormulaInput> | formula_interpretationsCreateWithoutFormulaInput[] | formula_interpretationsUncheckedCreateWithoutFormulaInput[]
    connectOrCreate?: formula_interpretationsCreateOrConnectWithoutFormulaInput | formula_interpretationsCreateOrConnectWithoutFormulaInput[]
    upsert?: formula_interpretationsUpsertWithWhereUniqueWithoutFormulaInput | formula_interpretationsUpsertWithWhereUniqueWithoutFormulaInput[]
    createMany?: formula_interpretationsCreateManyFormulaInputEnvelope
    set?: formula_interpretationsWhereUniqueInput | formula_interpretationsWhereUniqueInput[]
    disconnect?: formula_interpretationsWhereUniqueInput | formula_interpretationsWhereUniqueInput[]
    delete?: formula_interpretationsWhereUniqueInput | formula_interpretationsWhereUniqueInput[]
    connect?: formula_interpretationsWhereUniqueInput | formula_interpretationsWhereUniqueInput[]
    update?: formula_interpretationsUpdateWithWhereUniqueWithoutFormulaInput | formula_interpretationsUpdateWithWhereUniqueWithoutFormulaInput[]
    updateMany?: formula_interpretationsUpdateManyWithWhereWithoutFormulaInput | formula_interpretationsUpdateManyWithWhereWithoutFormulaInput[]
    deleteMany?: formula_interpretationsScalarWhereInput | formula_interpretationsScalarWhereInput[]
  }

  export type formula_conversationsUncheckedUpdateManyWithoutFormulaNestedInput = {
    create?: XOR<formula_conversationsCreateWithoutFormulaInput, formula_conversationsUncheckedCreateWithoutFormulaInput> | formula_conversationsCreateWithoutFormulaInput[] | formula_conversationsUncheckedCreateWithoutFormulaInput[]
    connectOrCreate?: formula_conversationsCreateOrConnectWithoutFormulaInput | formula_conversationsCreateOrConnectWithoutFormulaInput[]
    upsert?: formula_conversationsUpsertWithWhereUniqueWithoutFormulaInput | formula_conversationsUpsertWithWhereUniqueWithoutFormulaInput[]
    createMany?: formula_conversationsCreateManyFormulaInputEnvelope
    set?: formula_conversationsWhereUniqueInput | formula_conversationsWhereUniqueInput[]
    disconnect?: formula_conversationsWhereUniqueInput | formula_conversationsWhereUniqueInput[]
    delete?: formula_conversationsWhereUniqueInput | formula_conversationsWhereUniqueInput[]
    connect?: formula_conversationsWhereUniqueInput | formula_conversationsWhereUniqueInput[]
    update?: formula_conversationsUpdateWithWhereUniqueWithoutFormulaInput | formula_conversationsUpdateWithWhereUniqueWithoutFormulaInput[]
    updateMany?: formula_conversationsUpdateManyWithWhereWithoutFormulaInput | formula_conversationsUpdateManyWithWhereWithoutFormulaInput[]
    deleteMany?: formula_conversationsScalarWhereInput | formula_conversationsScalarWhereInput[]
  }

  export type formula_tagsUncheckedUpdateManyWithoutFormulaNestedInput = {
    create?: XOR<formula_tagsCreateWithoutFormulaInput, formula_tagsUncheckedCreateWithoutFormulaInput> | formula_tagsCreateWithoutFormulaInput[] | formula_tagsUncheckedCreateWithoutFormulaInput[]
    connectOrCreate?: formula_tagsCreateOrConnectWithoutFormulaInput | formula_tagsCreateOrConnectWithoutFormulaInput[]
    upsert?: formula_tagsUpsertWithWhereUniqueWithoutFormulaInput | formula_tagsUpsertWithWhereUniqueWithoutFormulaInput[]
    createMany?: formula_tagsCreateManyFormulaInputEnvelope
    set?: formula_tagsWhereUniqueInput | formula_tagsWhereUniqueInput[]
    disconnect?: formula_tagsWhereUniqueInput | formula_tagsWhereUniqueInput[]
    delete?: formula_tagsWhereUniqueInput | formula_tagsWhereUniqueInput[]
    connect?: formula_tagsWhereUniqueInput | formula_tagsWhereUniqueInput[]
    update?: formula_tagsUpdateWithWhereUniqueWithoutFormulaInput | formula_tagsUpdateWithWhereUniqueWithoutFormulaInput[]
    updateMany?: formula_tagsUpdateManyWithWhereWithoutFormulaInput | formula_tagsUpdateManyWithWhereWithoutFormulaInput[]
    deleteMany?: formula_tagsScalarWhereInput | formula_tagsScalarWhereInput[]
  }

  export type favouritesUncheckedUpdateManyWithoutFormulaNestedInput = {
    create?: XOR<favouritesCreateWithoutFormulaInput, favouritesUncheckedCreateWithoutFormulaInput> | favouritesCreateWithoutFormulaInput[] | favouritesUncheckedCreateWithoutFormulaInput[]
    connectOrCreate?: favouritesCreateOrConnectWithoutFormulaInput | favouritesCreateOrConnectWithoutFormulaInput[]
    upsert?: favouritesUpsertWithWhereUniqueWithoutFormulaInput | favouritesUpsertWithWhereUniqueWithoutFormulaInput[]
    createMany?: favouritesCreateManyFormulaInputEnvelope
    set?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
    disconnect?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
    delete?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
    connect?: favouritesWhereUniqueInput | favouritesWhereUniqueInput[]
    update?: favouritesUpdateWithWhereUniqueWithoutFormulaInput | favouritesUpdateWithWhereUniqueWithoutFormulaInput[]
    updateMany?: favouritesUpdateManyWithWhereWithoutFormulaInput | favouritesUpdateManyWithWhereWithoutFormulaInput[]
    deleteMany?: favouritesScalarWhereInput | favouritesScalarWhereInput[]
  }

  export type formulasCreateNestedOneWithoutInterpretationsInput = {
    create?: XOR<formulasCreateWithoutInterpretationsInput, formulasUncheckedCreateWithoutInterpretationsInput>
    connectOrCreate?: formulasCreateOrConnectWithoutInterpretationsInput
    connect?: formulasWhereUniqueInput
  }

  export type formulasUpdateOneRequiredWithoutInterpretationsNestedInput = {
    create?: XOR<formulasCreateWithoutInterpretationsInput, formulasUncheckedCreateWithoutInterpretationsInput>
    connectOrCreate?: formulasCreateOrConnectWithoutInterpretationsInput
    upsert?: formulasUpsertWithoutInterpretationsInput
    connect?: formulasWhereUniqueInput
    update?: XOR<XOR<formulasUpdateToOneWithWhereWithoutInterpretationsInput, formulasUpdateWithoutInterpretationsInput>, formulasUncheckedUpdateWithoutInterpretationsInput>
  }

  export type formula_tagsCreateNestedManyWithoutTagInput = {
    create?: XOR<formula_tagsCreateWithoutTagInput, formula_tagsUncheckedCreateWithoutTagInput> | formula_tagsCreateWithoutTagInput[] | formula_tagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: formula_tagsCreateOrConnectWithoutTagInput | formula_tagsCreateOrConnectWithoutTagInput[]
    createMany?: formula_tagsCreateManyTagInputEnvelope
    connect?: formula_tagsWhereUniqueInput | formula_tagsWhereUniqueInput[]
  }

  export type formula_tagsUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<formula_tagsCreateWithoutTagInput, formula_tagsUncheckedCreateWithoutTagInput> | formula_tagsCreateWithoutTagInput[] | formula_tagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: formula_tagsCreateOrConnectWithoutTagInput | formula_tagsCreateOrConnectWithoutTagInput[]
    createMany?: formula_tagsCreateManyTagInputEnvelope
    connect?: formula_tagsWhereUniqueInput | formula_tagsWhereUniqueInput[]
  }

  export type formula_tagsUpdateManyWithoutTagNestedInput = {
    create?: XOR<formula_tagsCreateWithoutTagInput, formula_tagsUncheckedCreateWithoutTagInput> | formula_tagsCreateWithoutTagInput[] | formula_tagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: formula_tagsCreateOrConnectWithoutTagInput | formula_tagsCreateOrConnectWithoutTagInput[]
    upsert?: formula_tagsUpsertWithWhereUniqueWithoutTagInput | formula_tagsUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: formula_tagsCreateManyTagInputEnvelope
    set?: formula_tagsWhereUniqueInput | formula_tagsWhereUniqueInput[]
    disconnect?: formula_tagsWhereUniqueInput | formula_tagsWhereUniqueInput[]
    delete?: formula_tagsWhereUniqueInput | formula_tagsWhereUniqueInput[]
    connect?: formula_tagsWhereUniqueInput | formula_tagsWhereUniqueInput[]
    update?: formula_tagsUpdateWithWhereUniqueWithoutTagInput | formula_tagsUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: formula_tagsUpdateManyWithWhereWithoutTagInput | formula_tagsUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: formula_tagsScalarWhereInput | formula_tagsScalarWhereInput[]
  }

  export type formula_tagsUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<formula_tagsCreateWithoutTagInput, formula_tagsUncheckedCreateWithoutTagInput> | formula_tagsCreateWithoutTagInput[] | formula_tagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: formula_tagsCreateOrConnectWithoutTagInput | formula_tagsCreateOrConnectWithoutTagInput[]
    upsert?: formula_tagsUpsertWithWhereUniqueWithoutTagInput | formula_tagsUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: formula_tagsCreateManyTagInputEnvelope
    set?: formula_tagsWhereUniqueInput | formula_tagsWhereUniqueInput[]
    disconnect?: formula_tagsWhereUniqueInput | formula_tagsWhereUniqueInput[]
    delete?: formula_tagsWhereUniqueInput | formula_tagsWhereUniqueInput[]
    connect?: formula_tagsWhereUniqueInput | formula_tagsWhereUniqueInput[]
    update?: formula_tagsUpdateWithWhereUniqueWithoutTagInput | formula_tagsUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: formula_tagsUpdateManyWithWhereWithoutTagInput | formula_tagsUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: formula_tagsScalarWhereInput | formula_tagsScalarWhereInput[]
  }

  export type formulasCreateNestedOneWithoutTagsInput = {
    create?: XOR<formulasCreateWithoutTagsInput, formulasUncheckedCreateWithoutTagsInput>
    connectOrCreate?: formulasCreateOrConnectWithoutTagsInput
    connect?: formulasWhereUniqueInput
  }

  export type tagsCreateNestedOneWithoutFormulasInput = {
    create?: XOR<tagsCreateWithoutFormulasInput, tagsUncheckedCreateWithoutFormulasInput>
    connectOrCreate?: tagsCreateOrConnectWithoutFormulasInput
    connect?: tagsWhereUniqueInput
  }

  export type formulasUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<formulasCreateWithoutTagsInput, formulasUncheckedCreateWithoutTagsInput>
    connectOrCreate?: formulasCreateOrConnectWithoutTagsInput
    upsert?: formulasUpsertWithoutTagsInput
    connect?: formulasWhereUniqueInput
    update?: XOR<XOR<formulasUpdateToOneWithWhereWithoutTagsInput, formulasUpdateWithoutTagsInput>, formulasUncheckedUpdateWithoutTagsInput>
  }

  export type tagsUpdateOneRequiredWithoutFormulasNestedInput = {
    create?: XOR<tagsCreateWithoutFormulasInput, tagsUncheckedCreateWithoutFormulasInput>
    connectOrCreate?: tagsCreateOrConnectWithoutFormulasInput
    upsert?: tagsUpsertWithoutFormulasInput
    connect?: tagsWhereUniqueInput
    update?: XOR<XOR<tagsUpdateToOneWithWhereWithoutFormulasInput, tagsUpdateWithoutFormulasInput>, tagsUncheckedUpdateWithoutFormulasInput>
  }

  export type formulasCreateNestedOneWithoutFavourtiesInput = {
    create?: XOR<formulasCreateWithoutFavourtiesInput, formulasUncheckedCreateWithoutFavourtiesInput>
    connectOrCreate?: formulasCreateOrConnectWithoutFavourtiesInput
    connect?: formulasWhereUniqueInput
  }

  export type formulasUpdateOneRequiredWithoutFavourtiesNestedInput = {
    create?: XOR<formulasCreateWithoutFavourtiesInput, formulasUncheckedCreateWithoutFavourtiesInput>
    connectOrCreate?: formulasCreateOrConnectWithoutFavourtiesInput
    upsert?: formulasUpsertWithoutFavourtiesInput
    connect?: formulasWhereUniqueInput
    update?: XOR<XOR<formulasUpdateToOneWithWhereWithoutFavourtiesInput, formulasUpdateWithoutFavourtiesInput>, formulasUncheckedUpdateWithoutFavourtiesInput>
  }

  export type formulasCreateNestedOneWithoutConversationsInput = {
    create?: XOR<formulasCreateWithoutConversationsInput, formulasUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: formulasCreateOrConnectWithoutConversationsInput
    connect?: formulasWhereUniqueInput
  }

  export type messagesCreateNestedManyWithoutConversationInput = {
    create?: XOR<messagesCreateWithoutConversationInput, messagesUncheckedCreateWithoutConversationInput> | messagesCreateWithoutConversationInput[] | messagesUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationInput | messagesCreateOrConnectWithoutConversationInput[]
    createMany?: messagesCreateManyConversationInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<messagesCreateWithoutConversationInput, messagesUncheckedCreateWithoutConversationInput> | messagesCreateWithoutConversationInput[] | messagesUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationInput | messagesCreateOrConnectWithoutConversationInput[]
    createMany?: messagesCreateManyConversationInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type formulasUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<formulasCreateWithoutConversationsInput, formulasUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: formulasCreateOrConnectWithoutConversationsInput
    upsert?: formulasUpsertWithoutConversationsInput
    connect?: formulasWhereUniqueInput
    update?: XOR<XOR<formulasUpdateToOneWithWhereWithoutConversationsInput, formulasUpdateWithoutConversationsInput>, formulasUncheckedUpdateWithoutConversationsInput>
  }

  export type messagesUpdateManyWithoutConversationNestedInput = {
    create?: XOR<messagesCreateWithoutConversationInput, messagesUncheckedCreateWithoutConversationInput> | messagesCreateWithoutConversationInput[] | messagesUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationInput | messagesCreateOrConnectWithoutConversationInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutConversationInput | messagesUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: messagesCreateManyConversationInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutConversationInput | messagesUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutConversationInput | messagesUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<messagesCreateWithoutConversationInput, messagesUncheckedCreateWithoutConversationInput> | messagesCreateWithoutConversationInput[] | messagesUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutConversationInput | messagesCreateOrConnectWithoutConversationInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutConversationInput | messagesUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: messagesCreateManyConversationInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutConversationInput | messagesUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutConversationInput | messagesUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type formula_conversationsCreateNestedOneWithoutMessagesInput = {
    create?: XOR<formula_conversationsCreateWithoutMessagesInput, formula_conversationsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: formula_conversationsCreateOrConnectWithoutMessagesInput
    connect?: formula_conversationsWhereUniqueInput
  }

  export type formula_conversationsUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<formula_conversationsCreateWithoutMessagesInput, formula_conversationsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: formula_conversationsCreateOrConnectWithoutMessagesInput
    upsert?: formula_conversationsUpsertWithoutMessagesInput
    connect?: formula_conversationsWhereUniqueInput
    update?: XOR<XOR<formula_conversationsUpdateToOneWithWhereWithoutMessagesInput, formula_conversationsUpdateWithoutMessagesInput>, formula_conversationsUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type formulasCreateWithoutSessionInput = {
    formula_id?: string
    latex_code: string
    recognized_by: string
    confidence?: number | null
    name?: string | null
    description?: string | null
    created_at?: Date | string
    interpretations?: formula_interpretationsCreateNestedManyWithoutFormulaInput
    conversations?: formula_conversationsCreateNestedManyWithoutFormulaInput
    tags?: formula_tagsCreateNestedManyWithoutFormulaInput
    favourties?: favouritesCreateNestedManyWithoutFormulaInput
  }

  export type formulasUncheckedCreateWithoutSessionInput = {
    formula_id?: string
    latex_code: string
    recognized_by: string
    confidence?: number | null
    name?: string | null
    description?: string | null
    created_at?: Date | string
    interpretations?: formula_interpretationsUncheckedCreateNestedManyWithoutFormulaInput
    conversations?: formula_conversationsUncheckedCreateNestedManyWithoutFormulaInput
    tags?: formula_tagsUncheckedCreateNestedManyWithoutFormulaInput
    favourties?: favouritesUncheckedCreateNestedManyWithoutFormulaInput
  }

  export type formulasCreateOrConnectWithoutSessionInput = {
    where: formulasWhereUniqueInput
    create: XOR<formulasCreateWithoutSessionInput, formulasUncheckedCreateWithoutSessionInput>
  }

  export type formulasCreateManySessionInputEnvelope = {
    data: formulasCreateManySessionInput | formulasCreateManySessionInput[]
  }

  export type formulasUpsertWithWhereUniqueWithoutSessionInput = {
    where: formulasWhereUniqueInput
    update: XOR<formulasUpdateWithoutSessionInput, formulasUncheckedUpdateWithoutSessionInput>
    create: XOR<formulasCreateWithoutSessionInput, formulasUncheckedCreateWithoutSessionInput>
  }

  export type formulasUpdateWithWhereUniqueWithoutSessionInput = {
    where: formulasWhereUniqueInput
    data: XOR<formulasUpdateWithoutSessionInput, formulasUncheckedUpdateWithoutSessionInput>
  }

  export type formulasUpdateManyWithWhereWithoutSessionInput = {
    where: formulasScalarWhereInput
    data: XOR<formulasUpdateManyMutationInput, formulasUncheckedUpdateManyWithoutSessionInput>
  }

  export type formulasScalarWhereInput = {
    AND?: formulasScalarWhereInput | formulasScalarWhereInput[]
    OR?: formulasScalarWhereInput[]
    NOT?: formulasScalarWhereInput | formulasScalarWhereInput[]
    formula_id?: StringFilter<"formulas"> | string
    session_id?: StringFilter<"formulas"> | string
    latex_code?: StringFilter<"formulas"> | string
    recognized_by?: StringFilter<"formulas"> | string
    confidence?: FloatNullableFilter<"formulas"> | number | null
    name?: StringNullableFilter<"formulas"> | string | null
    description?: StringNullableFilter<"formulas"> | string | null
    created_at?: DateTimeFilter<"formulas"> | Date | string
  }

  export type formula_sessionsCreateWithoutFormulasInput = {
    session_id?: string
    input_type: string
    source_content?: string | null
    created_at?: Date | string
  }

  export type formula_sessionsUncheckedCreateWithoutFormulasInput = {
    session_id?: string
    input_type: string
    source_content?: string | null
    created_at?: Date | string
  }

  export type formula_sessionsCreateOrConnectWithoutFormulasInput = {
    where: formula_sessionsWhereUniqueInput
    create: XOR<formula_sessionsCreateWithoutFormulasInput, formula_sessionsUncheckedCreateWithoutFormulasInput>
  }

  export type formula_interpretationsCreateWithoutFormulaInput = {
    interpretation_id?: string
    explanation: string
    engine_used: string
    generated_at?: Date | string
  }

  export type formula_interpretationsUncheckedCreateWithoutFormulaInput = {
    interpretation_id?: string
    explanation: string
    engine_used: string
    generated_at?: Date | string
  }

  export type formula_interpretationsCreateOrConnectWithoutFormulaInput = {
    where: formula_interpretationsWhereUniqueInput
    create: XOR<formula_interpretationsCreateWithoutFormulaInput, formula_interpretationsUncheckedCreateWithoutFormulaInput>
  }

  export type formula_interpretationsCreateManyFormulaInputEnvelope = {
    data: formula_interpretationsCreateManyFormulaInput | formula_interpretationsCreateManyFormulaInput[]
  }

  export type formula_conversationsCreateWithoutFormulaInput = {
    conversation_id?: string
    started_at?: Date | string
    updated_at?: Date | string
    messages?: messagesCreateNestedManyWithoutConversationInput
  }

  export type formula_conversationsUncheckedCreateWithoutFormulaInput = {
    conversation_id?: string
    started_at?: Date | string
    updated_at?: Date | string
    messages?: messagesUncheckedCreateNestedManyWithoutConversationInput
  }

  export type formula_conversationsCreateOrConnectWithoutFormulaInput = {
    where: formula_conversationsWhereUniqueInput
    create: XOR<formula_conversationsCreateWithoutFormulaInput, formula_conversationsUncheckedCreateWithoutFormulaInput>
  }

  export type formula_conversationsCreateManyFormulaInputEnvelope = {
    data: formula_conversationsCreateManyFormulaInput | formula_conversationsCreateManyFormulaInput[]
  }

  export type formula_tagsCreateWithoutFormulaInput = {
    created_at?: Date | string
    tag: tagsCreateNestedOneWithoutFormulasInput
  }

  export type formula_tagsUncheckedCreateWithoutFormulaInput = {
    tag_id: string
    created_at?: Date | string
  }

  export type formula_tagsCreateOrConnectWithoutFormulaInput = {
    where: formula_tagsWhereUniqueInput
    create: XOR<formula_tagsCreateWithoutFormulaInput, formula_tagsUncheckedCreateWithoutFormulaInput>
  }

  export type formula_tagsCreateManyFormulaInputEnvelope = {
    data: formula_tagsCreateManyFormulaInput | formula_tagsCreateManyFormulaInput[]
  }

  export type favouritesCreateWithoutFormulaInput = {
    favourite_id?: string
    created_at?: Date | string
  }

  export type favouritesUncheckedCreateWithoutFormulaInput = {
    favourite_id?: string
    created_at?: Date | string
  }

  export type favouritesCreateOrConnectWithoutFormulaInput = {
    where: favouritesWhereUniqueInput
    create: XOR<favouritesCreateWithoutFormulaInput, favouritesUncheckedCreateWithoutFormulaInput>
  }

  export type favouritesCreateManyFormulaInputEnvelope = {
    data: favouritesCreateManyFormulaInput | favouritesCreateManyFormulaInput[]
  }

  export type formula_sessionsUpsertWithoutFormulasInput = {
    update: XOR<formula_sessionsUpdateWithoutFormulasInput, formula_sessionsUncheckedUpdateWithoutFormulasInput>
    create: XOR<formula_sessionsCreateWithoutFormulasInput, formula_sessionsUncheckedCreateWithoutFormulasInput>
    where?: formula_sessionsWhereInput
  }

  export type formula_sessionsUpdateToOneWithWhereWithoutFormulasInput = {
    where?: formula_sessionsWhereInput
    data: XOR<formula_sessionsUpdateWithoutFormulasInput, formula_sessionsUncheckedUpdateWithoutFormulasInput>
  }

  export type formula_sessionsUpdateWithoutFormulasInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    input_type?: StringFieldUpdateOperationsInput | string
    source_content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formula_sessionsUncheckedUpdateWithoutFormulasInput = {
    session_id?: StringFieldUpdateOperationsInput | string
    input_type?: StringFieldUpdateOperationsInput | string
    source_content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formula_interpretationsUpsertWithWhereUniqueWithoutFormulaInput = {
    where: formula_interpretationsWhereUniqueInput
    update: XOR<formula_interpretationsUpdateWithoutFormulaInput, formula_interpretationsUncheckedUpdateWithoutFormulaInput>
    create: XOR<formula_interpretationsCreateWithoutFormulaInput, formula_interpretationsUncheckedCreateWithoutFormulaInput>
  }

  export type formula_interpretationsUpdateWithWhereUniqueWithoutFormulaInput = {
    where: formula_interpretationsWhereUniqueInput
    data: XOR<formula_interpretationsUpdateWithoutFormulaInput, formula_interpretationsUncheckedUpdateWithoutFormulaInput>
  }

  export type formula_interpretationsUpdateManyWithWhereWithoutFormulaInput = {
    where: formula_interpretationsScalarWhereInput
    data: XOR<formula_interpretationsUpdateManyMutationInput, formula_interpretationsUncheckedUpdateManyWithoutFormulaInput>
  }

  export type formula_interpretationsScalarWhereInput = {
    AND?: formula_interpretationsScalarWhereInput | formula_interpretationsScalarWhereInput[]
    OR?: formula_interpretationsScalarWhereInput[]
    NOT?: formula_interpretationsScalarWhereInput | formula_interpretationsScalarWhereInput[]
    interpretation_id?: StringFilter<"formula_interpretations"> | string
    formula_id?: StringFilter<"formula_interpretations"> | string
    explanation?: StringFilter<"formula_interpretations"> | string
    engine_used?: StringFilter<"formula_interpretations"> | string
    generated_at?: DateTimeFilter<"formula_interpretations"> | Date | string
  }

  export type formula_conversationsUpsertWithWhereUniqueWithoutFormulaInput = {
    where: formula_conversationsWhereUniqueInput
    update: XOR<formula_conversationsUpdateWithoutFormulaInput, formula_conversationsUncheckedUpdateWithoutFormulaInput>
    create: XOR<formula_conversationsCreateWithoutFormulaInput, formula_conversationsUncheckedCreateWithoutFormulaInput>
  }

  export type formula_conversationsUpdateWithWhereUniqueWithoutFormulaInput = {
    where: formula_conversationsWhereUniqueInput
    data: XOR<formula_conversationsUpdateWithoutFormulaInput, formula_conversationsUncheckedUpdateWithoutFormulaInput>
  }

  export type formula_conversationsUpdateManyWithWhereWithoutFormulaInput = {
    where: formula_conversationsScalarWhereInput
    data: XOR<formula_conversationsUpdateManyMutationInput, formula_conversationsUncheckedUpdateManyWithoutFormulaInput>
  }

  export type formula_conversationsScalarWhereInput = {
    AND?: formula_conversationsScalarWhereInput | formula_conversationsScalarWhereInput[]
    OR?: formula_conversationsScalarWhereInput[]
    NOT?: formula_conversationsScalarWhereInput | formula_conversationsScalarWhereInput[]
    conversation_id?: StringFilter<"formula_conversations"> | string
    formula_id?: StringFilter<"formula_conversations"> | string
    started_at?: DateTimeFilter<"formula_conversations"> | Date | string
    updated_at?: DateTimeFilter<"formula_conversations"> | Date | string
  }

  export type formula_tagsUpsertWithWhereUniqueWithoutFormulaInput = {
    where: formula_tagsWhereUniqueInput
    update: XOR<formula_tagsUpdateWithoutFormulaInput, formula_tagsUncheckedUpdateWithoutFormulaInput>
    create: XOR<formula_tagsCreateWithoutFormulaInput, formula_tagsUncheckedCreateWithoutFormulaInput>
  }

  export type formula_tagsUpdateWithWhereUniqueWithoutFormulaInput = {
    where: formula_tagsWhereUniqueInput
    data: XOR<formula_tagsUpdateWithoutFormulaInput, formula_tagsUncheckedUpdateWithoutFormulaInput>
  }

  export type formula_tagsUpdateManyWithWhereWithoutFormulaInput = {
    where: formula_tagsScalarWhereInput
    data: XOR<formula_tagsUpdateManyMutationInput, formula_tagsUncheckedUpdateManyWithoutFormulaInput>
  }

  export type formula_tagsScalarWhereInput = {
    AND?: formula_tagsScalarWhereInput | formula_tagsScalarWhereInput[]
    OR?: formula_tagsScalarWhereInput[]
    NOT?: formula_tagsScalarWhereInput | formula_tagsScalarWhereInput[]
    formula_id?: StringFilter<"formula_tags"> | string
    tag_id?: StringFilter<"formula_tags"> | string
    created_at?: DateTimeFilter<"formula_tags"> | Date | string
  }

  export type favouritesUpsertWithWhereUniqueWithoutFormulaInput = {
    where: favouritesWhereUniqueInput
    update: XOR<favouritesUpdateWithoutFormulaInput, favouritesUncheckedUpdateWithoutFormulaInput>
    create: XOR<favouritesCreateWithoutFormulaInput, favouritesUncheckedCreateWithoutFormulaInput>
  }

  export type favouritesUpdateWithWhereUniqueWithoutFormulaInput = {
    where: favouritesWhereUniqueInput
    data: XOR<favouritesUpdateWithoutFormulaInput, favouritesUncheckedUpdateWithoutFormulaInput>
  }

  export type favouritesUpdateManyWithWhereWithoutFormulaInput = {
    where: favouritesScalarWhereInput
    data: XOR<favouritesUpdateManyMutationInput, favouritesUncheckedUpdateManyWithoutFormulaInput>
  }

  export type favouritesScalarWhereInput = {
    AND?: favouritesScalarWhereInput | favouritesScalarWhereInput[]
    OR?: favouritesScalarWhereInput[]
    NOT?: favouritesScalarWhereInput | favouritesScalarWhereInput[]
    favourite_id?: StringFilter<"favourites"> | string
    formula_id?: StringFilter<"favourites"> | string
    created_at?: DateTimeFilter<"favourites"> | Date | string
  }

  export type formulasCreateWithoutInterpretationsInput = {
    formula_id?: string
    latex_code: string
    recognized_by: string
    confidence?: number | null
    name?: string | null
    description?: string | null
    created_at?: Date | string
    session: formula_sessionsCreateNestedOneWithoutFormulasInput
    conversations?: formula_conversationsCreateNestedManyWithoutFormulaInput
    tags?: formula_tagsCreateNestedManyWithoutFormulaInput
    favourties?: favouritesCreateNestedManyWithoutFormulaInput
  }

  export type formulasUncheckedCreateWithoutInterpretationsInput = {
    formula_id?: string
    session_id: string
    latex_code: string
    recognized_by: string
    confidence?: number | null
    name?: string | null
    description?: string | null
    created_at?: Date | string
    conversations?: formula_conversationsUncheckedCreateNestedManyWithoutFormulaInput
    tags?: formula_tagsUncheckedCreateNestedManyWithoutFormulaInput
    favourties?: favouritesUncheckedCreateNestedManyWithoutFormulaInput
  }

  export type formulasCreateOrConnectWithoutInterpretationsInput = {
    where: formulasWhereUniqueInput
    create: XOR<formulasCreateWithoutInterpretationsInput, formulasUncheckedCreateWithoutInterpretationsInput>
  }

  export type formulasUpsertWithoutInterpretationsInput = {
    update: XOR<formulasUpdateWithoutInterpretationsInput, formulasUncheckedUpdateWithoutInterpretationsInput>
    create: XOR<formulasCreateWithoutInterpretationsInput, formulasUncheckedCreateWithoutInterpretationsInput>
    where?: formulasWhereInput
  }

  export type formulasUpdateToOneWithWhereWithoutInterpretationsInput = {
    where?: formulasWhereInput
    data: XOR<formulasUpdateWithoutInterpretationsInput, formulasUncheckedUpdateWithoutInterpretationsInput>
  }

  export type formulasUpdateWithoutInterpretationsInput = {
    formula_id?: StringFieldUpdateOperationsInput | string
    latex_code?: StringFieldUpdateOperationsInput | string
    recognized_by?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: formula_sessionsUpdateOneRequiredWithoutFormulasNestedInput
    conversations?: formula_conversationsUpdateManyWithoutFormulaNestedInput
    tags?: formula_tagsUpdateManyWithoutFormulaNestedInput
    favourties?: favouritesUpdateManyWithoutFormulaNestedInput
  }

  export type formulasUncheckedUpdateWithoutInterpretationsInput = {
    formula_id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    latex_code?: StringFieldUpdateOperationsInput | string
    recognized_by?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: formula_conversationsUncheckedUpdateManyWithoutFormulaNestedInput
    tags?: formula_tagsUncheckedUpdateManyWithoutFormulaNestedInput
    favourties?: favouritesUncheckedUpdateManyWithoutFormulaNestedInput
  }

  export type formula_tagsCreateWithoutTagInput = {
    created_at?: Date | string
    formula: formulasCreateNestedOneWithoutTagsInput
  }

  export type formula_tagsUncheckedCreateWithoutTagInput = {
    formula_id: string
    created_at?: Date | string
  }

  export type formula_tagsCreateOrConnectWithoutTagInput = {
    where: formula_tagsWhereUniqueInput
    create: XOR<formula_tagsCreateWithoutTagInput, formula_tagsUncheckedCreateWithoutTagInput>
  }

  export type formula_tagsCreateManyTagInputEnvelope = {
    data: formula_tagsCreateManyTagInput | formula_tagsCreateManyTagInput[]
  }

  export type formula_tagsUpsertWithWhereUniqueWithoutTagInput = {
    where: formula_tagsWhereUniqueInput
    update: XOR<formula_tagsUpdateWithoutTagInput, formula_tagsUncheckedUpdateWithoutTagInput>
    create: XOR<formula_tagsCreateWithoutTagInput, formula_tagsUncheckedCreateWithoutTagInput>
  }

  export type formula_tagsUpdateWithWhereUniqueWithoutTagInput = {
    where: formula_tagsWhereUniqueInput
    data: XOR<formula_tagsUpdateWithoutTagInput, formula_tagsUncheckedUpdateWithoutTagInput>
  }

  export type formula_tagsUpdateManyWithWhereWithoutTagInput = {
    where: formula_tagsScalarWhereInput
    data: XOR<formula_tagsUpdateManyMutationInput, formula_tagsUncheckedUpdateManyWithoutTagInput>
  }

  export type formulasCreateWithoutTagsInput = {
    formula_id?: string
    latex_code: string
    recognized_by: string
    confidence?: number | null
    name?: string | null
    description?: string | null
    created_at?: Date | string
    session: formula_sessionsCreateNestedOneWithoutFormulasInput
    interpretations?: formula_interpretationsCreateNestedManyWithoutFormulaInput
    conversations?: formula_conversationsCreateNestedManyWithoutFormulaInput
    favourties?: favouritesCreateNestedManyWithoutFormulaInput
  }

  export type formulasUncheckedCreateWithoutTagsInput = {
    formula_id?: string
    session_id: string
    latex_code: string
    recognized_by: string
    confidence?: number | null
    name?: string | null
    description?: string | null
    created_at?: Date | string
    interpretations?: formula_interpretationsUncheckedCreateNestedManyWithoutFormulaInput
    conversations?: formula_conversationsUncheckedCreateNestedManyWithoutFormulaInput
    favourties?: favouritesUncheckedCreateNestedManyWithoutFormulaInput
  }

  export type formulasCreateOrConnectWithoutTagsInput = {
    where: formulasWhereUniqueInput
    create: XOR<formulasCreateWithoutTagsInput, formulasUncheckedCreateWithoutTagsInput>
  }

  export type tagsCreateWithoutFormulasInput = {
    tag_id: string
    name: string
    description?: string | null
    color?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type tagsUncheckedCreateWithoutFormulasInput = {
    tag_id: string
    name: string
    description?: string | null
    color?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type tagsCreateOrConnectWithoutFormulasInput = {
    where: tagsWhereUniqueInput
    create: XOR<tagsCreateWithoutFormulasInput, tagsUncheckedCreateWithoutFormulasInput>
  }

  export type formulasUpsertWithoutTagsInput = {
    update: XOR<formulasUpdateWithoutTagsInput, formulasUncheckedUpdateWithoutTagsInput>
    create: XOR<formulasCreateWithoutTagsInput, formulasUncheckedCreateWithoutTagsInput>
    where?: formulasWhereInput
  }

  export type formulasUpdateToOneWithWhereWithoutTagsInput = {
    where?: formulasWhereInput
    data: XOR<formulasUpdateWithoutTagsInput, formulasUncheckedUpdateWithoutTagsInput>
  }

  export type formulasUpdateWithoutTagsInput = {
    formula_id?: StringFieldUpdateOperationsInput | string
    latex_code?: StringFieldUpdateOperationsInput | string
    recognized_by?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: formula_sessionsUpdateOneRequiredWithoutFormulasNestedInput
    interpretations?: formula_interpretationsUpdateManyWithoutFormulaNestedInput
    conversations?: formula_conversationsUpdateManyWithoutFormulaNestedInput
    favourties?: favouritesUpdateManyWithoutFormulaNestedInput
  }

  export type formulasUncheckedUpdateWithoutTagsInput = {
    formula_id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    latex_code?: StringFieldUpdateOperationsInput | string
    recognized_by?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    interpretations?: formula_interpretationsUncheckedUpdateManyWithoutFormulaNestedInput
    conversations?: formula_conversationsUncheckedUpdateManyWithoutFormulaNestedInput
    favourties?: favouritesUncheckedUpdateManyWithoutFormulaNestedInput
  }

  export type tagsUpsertWithoutFormulasInput = {
    update: XOR<tagsUpdateWithoutFormulasInput, tagsUncheckedUpdateWithoutFormulasInput>
    create: XOR<tagsCreateWithoutFormulasInput, tagsUncheckedCreateWithoutFormulasInput>
    where?: tagsWhereInput
  }

  export type tagsUpdateToOneWithWhereWithoutFormulasInput = {
    where?: tagsWhereInput
    data: XOR<tagsUpdateWithoutFormulasInput, tagsUncheckedUpdateWithoutFormulasInput>
  }

  export type tagsUpdateWithoutFormulasInput = {
    tag_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tagsUncheckedUpdateWithoutFormulasInput = {
    tag_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formulasCreateWithoutFavourtiesInput = {
    formula_id?: string
    latex_code: string
    recognized_by: string
    confidence?: number | null
    name?: string | null
    description?: string | null
    created_at?: Date | string
    session: formula_sessionsCreateNestedOneWithoutFormulasInput
    interpretations?: formula_interpretationsCreateNestedManyWithoutFormulaInput
    conversations?: formula_conversationsCreateNestedManyWithoutFormulaInput
    tags?: formula_tagsCreateNestedManyWithoutFormulaInput
  }

  export type formulasUncheckedCreateWithoutFavourtiesInput = {
    formula_id?: string
    session_id: string
    latex_code: string
    recognized_by: string
    confidence?: number | null
    name?: string | null
    description?: string | null
    created_at?: Date | string
    interpretations?: formula_interpretationsUncheckedCreateNestedManyWithoutFormulaInput
    conversations?: formula_conversationsUncheckedCreateNestedManyWithoutFormulaInput
    tags?: formula_tagsUncheckedCreateNestedManyWithoutFormulaInput
  }

  export type formulasCreateOrConnectWithoutFavourtiesInput = {
    where: formulasWhereUniqueInput
    create: XOR<formulasCreateWithoutFavourtiesInput, formulasUncheckedCreateWithoutFavourtiesInput>
  }

  export type formulasUpsertWithoutFavourtiesInput = {
    update: XOR<formulasUpdateWithoutFavourtiesInput, formulasUncheckedUpdateWithoutFavourtiesInput>
    create: XOR<formulasCreateWithoutFavourtiesInput, formulasUncheckedCreateWithoutFavourtiesInput>
    where?: formulasWhereInput
  }

  export type formulasUpdateToOneWithWhereWithoutFavourtiesInput = {
    where?: formulasWhereInput
    data: XOR<formulasUpdateWithoutFavourtiesInput, formulasUncheckedUpdateWithoutFavourtiesInput>
  }

  export type formulasUpdateWithoutFavourtiesInput = {
    formula_id?: StringFieldUpdateOperationsInput | string
    latex_code?: StringFieldUpdateOperationsInput | string
    recognized_by?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: formula_sessionsUpdateOneRequiredWithoutFormulasNestedInput
    interpretations?: formula_interpretationsUpdateManyWithoutFormulaNestedInput
    conversations?: formula_conversationsUpdateManyWithoutFormulaNestedInput
    tags?: formula_tagsUpdateManyWithoutFormulaNestedInput
  }

  export type formulasUncheckedUpdateWithoutFavourtiesInput = {
    formula_id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    latex_code?: StringFieldUpdateOperationsInput | string
    recognized_by?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    interpretations?: formula_interpretationsUncheckedUpdateManyWithoutFormulaNestedInput
    conversations?: formula_conversationsUncheckedUpdateManyWithoutFormulaNestedInput
    tags?: formula_tagsUncheckedUpdateManyWithoutFormulaNestedInput
  }

  export type formulasCreateWithoutConversationsInput = {
    formula_id?: string
    latex_code: string
    recognized_by: string
    confidence?: number | null
    name?: string | null
    description?: string | null
    created_at?: Date | string
    session: formula_sessionsCreateNestedOneWithoutFormulasInput
    interpretations?: formula_interpretationsCreateNestedManyWithoutFormulaInput
    tags?: formula_tagsCreateNestedManyWithoutFormulaInput
    favourties?: favouritesCreateNestedManyWithoutFormulaInput
  }

  export type formulasUncheckedCreateWithoutConversationsInput = {
    formula_id?: string
    session_id: string
    latex_code: string
    recognized_by: string
    confidence?: number | null
    name?: string | null
    description?: string | null
    created_at?: Date | string
    interpretations?: formula_interpretationsUncheckedCreateNestedManyWithoutFormulaInput
    tags?: formula_tagsUncheckedCreateNestedManyWithoutFormulaInput
    favourties?: favouritesUncheckedCreateNestedManyWithoutFormulaInput
  }

  export type formulasCreateOrConnectWithoutConversationsInput = {
    where: formulasWhereUniqueInput
    create: XOR<formulasCreateWithoutConversationsInput, formulasUncheckedCreateWithoutConversationsInput>
  }

  export type messagesCreateWithoutConversationInput = {
    message_id?: string
    role: string
    content: string
    created_at?: Date | string
  }

  export type messagesUncheckedCreateWithoutConversationInput = {
    message_id?: string
    role: string
    content: string
    created_at?: Date | string
  }

  export type messagesCreateOrConnectWithoutConversationInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutConversationInput, messagesUncheckedCreateWithoutConversationInput>
  }

  export type messagesCreateManyConversationInputEnvelope = {
    data: messagesCreateManyConversationInput | messagesCreateManyConversationInput[]
  }

  export type formulasUpsertWithoutConversationsInput = {
    update: XOR<formulasUpdateWithoutConversationsInput, formulasUncheckedUpdateWithoutConversationsInput>
    create: XOR<formulasCreateWithoutConversationsInput, formulasUncheckedCreateWithoutConversationsInput>
    where?: formulasWhereInput
  }

  export type formulasUpdateToOneWithWhereWithoutConversationsInput = {
    where?: formulasWhereInput
    data: XOR<formulasUpdateWithoutConversationsInput, formulasUncheckedUpdateWithoutConversationsInput>
  }

  export type formulasUpdateWithoutConversationsInput = {
    formula_id?: StringFieldUpdateOperationsInput | string
    latex_code?: StringFieldUpdateOperationsInput | string
    recognized_by?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: formula_sessionsUpdateOneRequiredWithoutFormulasNestedInput
    interpretations?: formula_interpretationsUpdateManyWithoutFormulaNestedInput
    tags?: formula_tagsUpdateManyWithoutFormulaNestedInput
    favourties?: favouritesUpdateManyWithoutFormulaNestedInput
  }

  export type formulasUncheckedUpdateWithoutConversationsInput = {
    formula_id?: StringFieldUpdateOperationsInput | string
    session_id?: StringFieldUpdateOperationsInput | string
    latex_code?: StringFieldUpdateOperationsInput | string
    recognized_by?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    interpretations?: formula_interpretationsUncheckedUpdateManyWithoutFormulaNestedInput
    tags?: formula_tagsUncheckedUpdateManyWithoutFormulaNestedInput
    favourties?: favouritesUncheckedUpdateManyWithoutFormulaNestedInput
  }

  export type messagesUpsertWithWhereUniqueWithoutConversationInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutConversationInput, messagesUncheckedUpdateWithoutConversationInput>
    create: XOR<messagesCreateWithoutConversationInput, messagesUncheckedCreateWithoutConversationInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutConversationInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutConversationInput, messagesUncheckedUpdateWithoutConversationInput>
  }

  export type messagesUpdateManyWithWhereWithoutConversationInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutConversationInput>
  }

  export type messagesScalarWhereInput = {
    AND?: messagesScalarWhereInput | messagesScalarWhereInput[]
    OR?: messagesScalarWhereInput[]
    NOT?: messagesScalarWhereInput | messagesScalarWhereInput[]
    message_id?: StringFilter<"messages"> | string
    conversation_id?: StringFilter<"messages"> | string
    role?: StringFilter<"messages"> | string
    content?: StringFilter<"messages"> | string
    created_at?: DateTimeFilter<"messages"> | Date | string
  }

  export type formula_conversationsCreateWithoutMessagesInput = {
    conversation_id?: string
    started_at?: Date | string
    updated_at?: Date | string
    formula: formulasCreateNestedOneWithoutConversationsInput
  }

  export type formula_conversationsUncheckedCreateWithoutMessagesInput = {
    conversation_id?: string
    formula_id: string
    started_at?: Date | string
    updated_at?: Date | string
  }

  export type formula_conversationsCreateOrConnectWithoutMessagesInput = {
    where: formula_conversationsWhereUniqueInput
    create: XOR<formula_conversationsCreateWithoutMessagesInput, formula_conversationsUncheckedCreateWithoutMessagesInput>
  }

  export type formula_conversationsUpsertWithoutMessagesInput = {
    update: XOR<formula_conversationsUpdateWithoutMessagesInput, formula_conversationsUncheckedUpdateWithoutMessagesInput>
    create: XOR<formula_conversationsCreateWithoutMessagesInput, formula_conversationsUncheckedCreateWithoutMessagesInput>
    where?: formula_conversationsWhereInput
  }

  export type formula_conversationsUpdateToOneWithWhereWithoutMessagesInput = {
    where?: formula_conversationsWhereInput
    data: XOR<formula_conversationsUpdateWithoutMessagesInput, formula_conversationsUncheckedUpdateWithoutMessagesInput>
  }

  export type formula_conversationsUpdateWithoutMessagesInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    formula?: formulasUpdateOneRequiredWithoutConversationsNestedInput
  }

  export type formula_conversationsUncheckedUpdateWithoutMessagesInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    formula_id?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formulasCreateManySessionInput = {
    formula_id?: string
    latex_code: string
    recognized_by: string
    confidence?: number | null
    name?: string | null
    description?: string | null
    created_at?: Date | string
  }

  export type formulasUpdateWithoutSessionInput = {
    formula_id?: StringFieldUpdateOperationsInput | string
    latex_code?: StringFieldUpdateOperationsInput | string
    recognized_by?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    interpretations?: formula_interpretationsUpdateManyWithoutFormulaNestedInput
    conversations?: formula_conversationsUpdateManyWithoutFormulaNestedInput
    tags?: formula_tagsUpdateManyWithoutFormulaNestedInput
    favourties?: favouritesUpdateManyWithoutFormulaNestedInput
  }

  export type formulasUncheckedUpdateWithoutSessionInput = {
    formula_id?: StringFieldUpdateOperationsInput | string
    latex_code?: StringFieldUpdateOperationsInput | string
    recognized_by?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    interpretations?: formula_interpretationsUncheckedUpdateManyWithoutFormulaNestedInput
    conversations?: formula_conversationsUncheckedUpdateManyWithoutFormulaNestedInput
    tags?: formula_tagsUncheckedUpdateManyWithoutFormulaNestedInput
    favourties?: favouritesUncheckedUpdateManyWithoutFormulaNestedInput
  }

  export type formulasUncheckedUpdateManyWithoutSessionInput = {
    formula_id?: StringFieldUpdateOperationsInput | string
    latex_code?: StringFieldUpdateOperationsInput | string
    recognized_by?: StringFieldUpdateOperationsInput | string
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formula_interpretationsCreateManyFormulaInput = {
    interpretation_id?: string
    explanation: string
    engine_used: string
    generated_at?: Date | string
  }

  export type formula_conversationsCreateManyFormulaInput = {
    conversation_id?: string
    started_at?: Date | string
    updated_at?: Date | string
  }

  export type formula_tagsCreateManyFormulaInput = {
    tag_id: string
    created_at?: Date | string
  }

  export type favouritesCreateManyFormulaInput = {
    favourite_id?: string
    created_at?: Date | string
  }

  export type formula_interpretationsUpdateWithoutFormulaInput = {
    interpretation_id?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    engine_used?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formula_interpretationsUncheckedUpdateWithoutFormulaInput = {
    interpretation_id?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    engine_used?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formula_interpretationsUncheckedUpdateManyWithoutFormulaInput = {
    interpretation_id?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    engine_used?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formula_conversationsUpdateWithoutFormulaInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: messagesUpdateManyWithoutConversationNestedInput
  }

  export type formula_conversationsUncheckedUpdateWithoutFormulaInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: messagesUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type formula_conversationsUncheckedUpdateManyWithoutFormulaInput = {
    conversation_id?: StringFieldUpdateOperationsInput | string
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formula_tagsUpdateWithoutFormulaInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: tagsUpdateOneRequiredWithoutFormulasNestedInput
  }

  export type formula_tagsUncheckedUpdateWithoutFormulaInput = {
    tag_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formula_tagsUncheckedUpdateManyWithoutFormulaInput = {
    tag_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type favouritesUpdateWithoutFormulaInput = {
    favourite_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type favouritesUncheckedUpdateWithoutFormulaInput = {
    favourite_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type favouritesUncheckedUpdateManyWithoutFormulaInput = {
    favourite_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formula_tagsCreateManyTagInput = {
    formula_id: string
    created_at?: Date | string
  }

  export type formula_tagsUpdateWithoutTagInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    formula?: formulasUpdateOneRequiredWithoutTagsNestedInput
  }

  export type formula_tagsUncheckedUpdateWithoutTagInput = {
    formula_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type formula_tagsUncheckedUpdateManyWithoutTagInput = {
    formula_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesCreateManyConversationInput = {
    message_id?: string
    role: string
    content: string
    created_at?: Date | string
  }

  export type messagesUpdateWithoutConversationInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUncheckedUpdateWithoutConversationInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUncheckedUpdateManyWithoutConversationInput = {
    message_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}