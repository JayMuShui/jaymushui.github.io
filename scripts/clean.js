import { rimraf } from 'rimraf'
import { join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const rootDir = join(__dirname, '..')

const filesToDelete = [
  'public/feed.xml',
  'public/atom.xml',
  'public/feed.json',
  'public/valaxy-fuse-list.json',
  'dist'
]

async function clean() {
  console.log('🧹 Starting to clean build files...')
  
  for (const file of filesToDelete) {
    const filePath = join(rootDir, file)
    try {
      await rimraf(filePath)
      console.log(`✅ Deleted: ${file}`)
    } catch (error) {
      console.error(`❌ Failed to delete ${file}:`, error.message)
    }
  }
  
  console.log('✨ Clean completed!')
}

clean().catch(console.error) 