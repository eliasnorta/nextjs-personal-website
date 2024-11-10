// @ts-check

const NotionParse = require('@kodaps/notion-parse');
const dotenv = require('dotenv');

dotenv.config();

const go = async () => {

  if (process.env.SECRET_NOTION_SECRET) {
    await NotionParse.parseNotion(process.env.SECRET_NOTION_SECRET, './src/content', [
      {
        databaseId: process.env.SECRET_NOTION_BLOG_DATABASE_ID || '',
        contentType: 'Blog'
      },
    ])
  } else {
    console.error('Missing NOTION_SECRET environment variable');
  }

};

go().then(() => {
  console.log('Done');
});
