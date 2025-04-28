
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.Formula_sessionsScalarFieldEnum = {
  session_id: 'session_id',
  input_type: 'input_type',
  source_content: 'source_content',
  created_at: 'created_at'
};

exports.Prisma.FormulasScalarFieldEnum = {
  formula_id: 'formula_id',
  session_id: 'session_id',
  latex_code: 'latex_code',
  recognized_by: 'recognized_by',
  confidence: 'confidence',
  name: 'name',
  description: 'description',
  created_at: 'created_at'
};

exports.Prisma.Formula_interpretationsScalarFieldEnum = {
  interpretation_id: 'interpretation_id',
  formula_id: 'formula_id',
  explanation: 'explanation',
  engine_used: 'engine_used',
  generated_at: 'generated_at'
};

exports.Prisma.TagsScalarFieldEnum = {
  tag_id: 'tag_id',
  name: 'name',
  description: 'description',
  color: 'color',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Formula_tagsScalarFieldEnum = {
  formula_id: 'formula_id',
  tag_id: 'tag_id',
  created_at: 'created_at'
};

exports.Prisma.FavouritesScalarFieldEnum = {
  favourite_id: 'favourite_id',
  formula_id: 'formula_id',
  created_at: 'created_at'
};

exports.Prisma.Formula_conversationsScalarFieldEnum = {
  conversation_id: 'conversation_id',
  formula_id: 'formula_id',
  started_at: 'started_at',
  updated_at: 'updated_at'
};

exports.Prisma.MessagesScalarFieldEnum = {
  message_id: 'message_id',
  conversation_id: 'conversation_id',
  role: 'role',
  content: 'content',
  created_at: 'created_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  formula_sessions: 'formula_sessions',
  formulas: 'formulas',
  formula_interpretations: 'formula_interpretations',
  tags: 'tags',
  formula_tags: 'formula_tags',
  favourites: 'favourites',
  formula_conversations: 'formula_conversations',
  messages: 'messages'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\likey\\Documents\\Codes\\GitHub\\FormuLaTeX\\src\\server\\database\\generated",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\likey\\Documents\\Codes\\GitHub\\FormuLaTeX\\src\\server\\database\\schema\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../../.env"
  },
  "relativePath": "../schema",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlite",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": null,
        "value": "file:./dev.db"
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\n// Database design: https://github.com/Leo204-LKY/FormuLaTeX/issues/13\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/\"\n}\n\ndatasource db {\n  provider = \"sqlite\"\n  url      = \"file:./dev.db\" // Use only as a placeholder, real database path will be provided at runtime\n}\n\n/// formula_sessions - Session log for each formula operation\nmodel formula_sessions {\n  /// Unique identifier\n  session_id     String   @id @default(uuid())\n  /// Input type (image/handwritting/text)\n  input_type     String\n  /// Original input content (file path, text, etc.)\n  source_content String\n  /// Create time\n  created_at     DateTime @default(now())\n\n  formulas formulas[]\n}\n\n/// formula - Recognised or generated LaTeX formulas\nmodel formulas {\n  /// Unique identifier\n  formula_id    String   @id @default(uuid())\n  /// Source session UUID\n  session_id    String\n  /// Standard LaTeX code\n  latex_code    String\n  /// Used recognition API name (e.g., SimpleTex)\n  recognized_by String\n  /// (Optional) Recognition confidence\n  confidence    Float?\n  /// (Optional) Formula name by user\n  name          String?\n  /// (Optional) Description by user\n  description   String?\n  /// Create time\n  created_at    DateTime @default(now())\n\n  session         formula_sessions          @relation(fields: [session_id], references: [session_id])\n  interpretations formula_interpretations[]\n  conversations   formula_conversations[]\n  tags            formula_tags[]\n  favourties      favourites[]\n}\n\n/// formula_interpretations - Semantic interpretation of formulas by AI\nmodel formula_interpretations {\n  /// Unique identifier\n  interpretation_id String   @id @default(uuid())\n  /// Related formula UUID\n  formula_id        String\n  /// Semantic interpretation generated by AI\n  explanation       String\n  /// Used AI models (e.g., OpenAI GPT-4o/4.5 or DeepSeek-V3/R1)\n  engine_used       String\n  /// Generate time\n  generated_at      DateTime @default(now())\n\n  formula formulas @relation(fields: [formula_id], references: [formula_id])\n}\n\n/// tags - Formula tags\nmodel tags {\n  /// Unique identifier\n  tag_id      String   @id\n  /// Tag name (Unique)\n  name        String   @unique\n  /// (Optional) Tag description\n  description String?\n  /// Tag color for front-end display\n  color       String   @default(\"#FFFFFF\")\n  /// Tag create time\n  created_at  DateTime @default(now())\n  /// Tag last update time\n  updated_at  DateTime @updatedAt\n\n  formulas formula_tags[]\n}\n\n/// formula_tags - Formulas & tags many-to-many mapping\nmodel formula_tags {\n  /// Affiliated formulas\n  formula_id String\n  /// Related tags\n  tag_id     String\n  /// Tag add time\n  created_at DateTime @default(now())\n\n  formula formulas @relation(fields: [formula_id], references: [formula_id])\n  tag     tags     @relation(fields: [tag_id], references: [tag_id])\n\n  @@id([formula_id, tag_id])\n}\n\n/// favourites - User favourited formulas\nmodel favourites {\n  /// Unique identifier\n  favourite_id String   @id @default(uuid())\n  /// Favourited formula UUID\n  formula_id   String   @unique\n  /// Favourite time\n  created_at   DateTime @default(now())\n\n  formula formulas @relation(fields: [formula_id], references: [formula_id])\n}\n\n/// formula_conversations - Conversation record for each conversation\nmodel formula_conversations {\n  /// Conversation unique identifier\n  conversation_id String   @id\n  /// Related formula UUID\n  formula_id      String\n  /// Conversation start time\n  started_at      DateTime @default(now())\n  /// Conversation last update time\n  updated_at      DateTime @updatedAt\n\n  formula  formulas   @relation(fields: [formula_id], references: [formula_id])\n  messages messages[]\n}\n\n/// messages - Conversation messages\nmodel messages {\n  /// Message unique identifier\n  message_id      String   @id @default(uuid())\n  /// Related conversation UUID\n  conversation_id String\n  /// system/user/assistant\n  role            String\n  /// Message content\n  content         String\n  /// Send time\n  created_at      DateTime\n\n  conversation formula_conversations @relation(fields: [conversation_id], references: [conversation_id])\n}\n",
  "inlineSchemaHash": "7045e7e6fb42de04e2ae07db6f895d0fbebb0e52068cee5b6713d27ec3850d6a",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"formula_sessions\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"session_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Unique identifier\"},{\"name\":\"input_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Input type (image/handwritting/text)\"},{\"name\":\"source_content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Original input content (file path, text, etc.)\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Create time\"},{\"name\":\"formulas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"formulas\",\"nativeType\":null,\"relationName\":\"formula_sessionsToformulas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"formula_sessions - Session log for each formula operation\"},\"formulas\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"formula_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Unique identifier\"},{\"name\":\"session_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Source session UUID\"},{\"name\":\"latex_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Standard LaTeX code\"},{\"name\":\"recognized_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Used recognition API name (e.g., SimpleTex)\"},{\"name\":\"confidence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"(Optional) Recognition confidence\"},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"(Optional) Formula name by user\"},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"(Optional) Description by user\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Create time\"},{\"name\":\"session\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"formula_sessions\",\"nativeType\":null,\"relationName\":\"formula_sessionsToformulas\",\"relationFromFields\":[\"session_id\"],\"relationToFields\":[\"session_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"interpretations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"formula_interpretations\",\"nativeType\":null,\"relationName\":\"formula_interpretationsToformulas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conversations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"formula_conversations\",\"nativeType\":null,\"relationName\":\"formula_conversationsToformulas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"formula_tags\",\"nativeType\":null,\"relationName\":\"formula_tagsToformulas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"favourties\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"favourites\",\"nativeType\":null,\"relationName\":\"favouritesToformulas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"formula - Recognised or generated LaTeX formulas\"},\"formula_interpretations\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"interpretation_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Unique identifier\"},{\"name\":\"formula_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Related formula UUID\"},{\"name\":\"explanation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Semantic interpretation generated by AI\"},{\"name\":\"engine_used\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Used AI models (e.g., OpenAI GPT-4o/4.5 or DeepSeek-V3/R1)\"},{\"name\":\"generated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Generate time\"},{\"name\":\"formula\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"formulas\",\"nativeType\":null,\"relationName\":\"formula_interpretationsToformulas\",\"relationFromFields\":[\"formula_id\"],\"relationToFields\":[\"formula_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"formula_interpretations - Semantic interpretation of formulas by AI\"},\"tags\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"tag_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Unique identifier\"},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Tag name (Unique)\"},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"(Optional) Tag description\"},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"#FFFFFF\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Tag color for front-end display\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Tag create time\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true,\"documentation\":\"Tag last update time\"},{\"name\":\"formulas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"formula_tags\",\"nativeType\":null,\"relationName\":\"formula_tagsTotags\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"tags - Formula tags\"},\"formula_tags\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"formula_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Affiliated formulas\"},{\"name\":\"tag_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Related tags\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Tag add time\"},{\"name\":\"formula\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"formulas\",\"nativeType\":null,\"relationName\":\"formula_tagsToformulas\",\"relationFromFields\":[\"formula_id\"],\"relationToFields\":[\"formula_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tag\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tags\",\"nativeType\":null,\"relationName\":\"formula_tagsTotags\",\"relationFromFields\":[\"tag_id\"],\"relationToFields\":[\"tag_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"formula_id\",\"tag_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"formula_tags - Formulas & tags many-to-many mapping\"},\"favourites\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"favourite_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Unique identifier\"},{\"name\":\"formula_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Favourited formula UUID\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Favourite time\"},{\"name\":\"formula\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"formulas\",\"nativeType\":null,\"relationName\":\"favouritesToformulas\",\"relationFromFields\":[\"formula_id\"],\"relationToFields\":[\"formula_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"favourites - User favourited formulas\"},\"formula_conversations\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"conversation_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Conversation unique identifier\"},{\"name\":\"formula_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Related formula UUID\"},{\"name\":\"started_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Conversation start time\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true,\"documentation\":\"Conversation last update time\"},{\"name\":\"formula\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"formulas\",\"nativeType\":null,\"relationName\":\"formula_conversationsToformulas\",\"relationFromFields\":[\"formula_id\"],\"relationToFields\":[\"formula_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"messages\",\"nativeType\":null,\"relationName\":\"formula_conversationsTomessages\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"formula_conversations - Conversation record for each conversation\"},\"messages\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"message_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Message unique identifier\"},{\"name\":\"conversation_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Related conversation UUID\"},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"system/user/assistant\"},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Message content\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Send time\"},{\"name\":\"conversation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"formula_conversations\",\"nativeType\":null,\"relationName\":\"formula_conversationsTomessages\",\"relationFromFields\":[\"conversation_id\"],\"relationToFields\":[\"conversation_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"messages - Conversation messages\"}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {}
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

