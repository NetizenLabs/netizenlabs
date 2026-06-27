import snoowrap from 'snoowrap';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Load environment variables from .env
dotenv.config();

const {
  REDDIT_CLIENT_ID,
  REDDIT_CLIENT_SECRET,
  REDDIT_USERNAME,
  REDDIT_PASSWORD,
  GEMINI_API_KEY
} = process.env;

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// Repositories to scan
const REPOSITORIES = [
  { name: 'webtoolkit-pro', domain: 'https://webtoolkit.pro', blogPath: 'content/blog' },
  { name: 'tradeconvert', domain: 'https://tradeconvert.com', blogPath: 'content/blog' },
  { name: 'severance-calculator-repo', domain: 'https://severancecalc.com', blogPath: 'src/content/blog' },
  { name: 'freelance-tax-calculator', domain: 'https://freelancetaxcalc.com', blogPath: 'src/content/blog' },
  { name: 'SLA breach calculator', domain: 'https://slabreachcalc.com', blogPath: 'content/blog' },
  { name: 'studynova', domain: 'https://studynova.com', blogPath: 'src/content/blog' },
  { name: 'quran-tracker', domain: 'https://qurantracker.com', blogPath: 'content/blog' },
  { name: 'abusufyan-xyz', domain: 'https://abusufyan.xyz', blogPath: 'src/content/blog' }
];

async function runEcosystemRedditBot() {
  console.log('🌐 Starting Netizen Labs Ecosystem Reddit Bot...');

  if (!GEMINI_API_KEY) {
    console.error('❌ Missing GEMINI_API_KEY in .env');
    process.exit(1);
  }

  if (!REDDIT_CLIENT_ID || !REDDIT_CLIENT_SECRET || !REDDIT_USERNAME || !REDDIT_PASSWORD) {
    console.error('❌ Missing Reddit API credentials in .env');
    process.exit(1);
  }

  // 1. Find the latest blog post across ALL ecosystem repositories
  console.log('🔍 Scanning ecosystem for the newest blog post...');
  let latestPost = null;

  for (const repo of REPOSITORIES) {
    const fullPath = path.join('..', repo.name, repo.blogPath);
    if (!fs.existsSync(fullPath)) continue;

    const files = fs.readdirSync(fullPath).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
    for (const file of files) {
      const filePath = path.join(fullPath, file);
      const stat = fs.statSync(filePath);
      
      if (!latestPost || stat.mtimeMs > latestPost.mtimeMs) {
        latestPost = {
          repo: repo.name,
          domain: repo.domain,
          file: file,
          filePath: filePath,
          mtimeMs: stat.mtimeMs
        };
      }
    }
  }

  if (!latestPost) {
    console.log('⚠️ No blog posts found in the entire ecosystem.');
    return;
  }

  console.log(`📝 Found latest post in ${latestPost.repo}: ${latestPost.file}`);
  const fileContent = fs.readFileSync(latestPost.filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const slug = latestPost.file.replace(/\.mdx?$/, '');
  const postUrl = `${latestPost.domain}/blog/${slug}`;

  // 2. Load Reddit Skills into the AI Prompt
  console.log('🧠 Loading Netizen Labs Reddit Skills Suite...');
  const postWriterSkill = fs.readFileSync(path.join('..', '.agents', 'skills', 'reddit-post-writer', 'SKILL.md'), 'utf8');
  const humanizerSkill = fs.readFileSync(path.join('..', '.agents', 'skills', 'reddit-humanizer', 'SKILL.md'), 'utf8');

  // 3. Generate the Reddit Post using Gemini
  console.log('✨ Generating native Reddit post using Gemini AI...');
  
  const prompt = `
You are an expert community builder executing the Netizen Labs Reddit Skills Suite.
We have a new blog post that we want to share on Reddit.

Blog Post Title: ${data.title}
Blog Post Content:
${content}
URL: ${postUrl}

Task:
Read the blog post and determine the SINGLE best subreddit to post this to. 
Then, using the principles from the reddit-post-writer and reddit-humanizer skills, write a highly authentic, native text post. The text post MUST NOT sound like marketing. 
It must be a "Type A: Story/Lesson" or "Type B: Show-and-Tell" post.
At the very end of the post body, include the URL organically.

Return your answer strictly in JSON format matching this schema:
{
  "target_subreddit": "subreddit name without r/",
  "title": "The post title following the title engineering rules",
  "body": "The full markdown body of the post"
}
`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
      contents: prompt,
      config: {
        systemInstruction: `You must strictly follow these instructions:\n\n### POST WRITER SKILL ###\n${postWriterSkill}\n\n### HUMANIZER SKILL ###\n${humanizerSkill}`,
        responseMimeType: "application/json"
      }
    });

    const resultText = response.text();
    const result = JSON.parse(resultText);

    console.log(`\n✅ Generated Post for r/${result.target_subreddit}`);
    console.log(`📌 Title: ${result.title}`);
    console.log(`📖 Body preview: ${result.body.substring(0, 100)}...\n`);

    // 4. Publish to Reddit
    console.log(`🚀 Publishing to r/${result.target_subreddit} via Snoowrap...`);
    const r = new snoowrap({
      userAgent: 'NetizenLabs-Ecosystem-Bot v2.0',
      clientId: REDDIT_CLIENT_ID,
      clientSecret: REDDIT_CLIENT_SECRET,
      username: REDDIT_USERNAME,
      password: REDDIT_PASSWORD
    });

    await r.getSubreddit(result.target_subreddit).submitSelfpost({
      title: result.title,
      text: result.body
    });

    console.log(`🎉 SUCCESS! Post published to r/${result.target_subreddit}.`);

  } catch (error) {
    console.error('❌ Error during generation or publishing:', error);
  }
}

runEcosystemRedditBot();
