### `/scripts`

- This path stores scripts for debugging.
- Run in project's root dir to use these scripts.
  ```shell
  npx ts-node scripts/<script name>.ts
  ```

### Scripts List

- For database
  - `db-generate.ts` - Generate a not-decrypted SQLite3 database `dev.db` file in `scripts/` path.
  - `db-encrypt.ts` - Encrypt the `scripts/dev.db` database to app's data directory
  - `db-decrypt.ts` - Decrypt the encrypted database in app's data directory to `scripts/dev.db`
