import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const HOST_URL = 'https://atp-sync.pages.dev/';
export const GITHUB_URL = 'https://github.com/confusedbuffalo/atp-sync/';
export const SAFE_EDITS_DIR = path.join(__dirname, '..', 'safe-edits');
