import { execSync } from 'child_process';
import * as path from 'path';

const projectRoot = path.resolve(__dirname, '../');
const schemaPath = path.join(
  projectRoot,
  'src',
  'server',
  'database',
  'schema',
  'schema.prisma'
);
const generatedPath = path.join(projectRoot, 'scripts', 'dev.db');

console.log('Generating database...');
try {
  execSync(`npx prisma db push --force-reset --schema=${schemaPath}`, {
    stdio: 'inherit',
  });
  console.log('Database generated successfully at ', generatedPath);
} catch (e) {
  console.error('Error generating database: ', e);
  process.exit(1);
}
