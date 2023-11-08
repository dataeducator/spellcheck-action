const fs = require('fs');
const axios = require('axios');

// Read the spellcheck results
const results = fs.readFileSync('spellcheck-results.txt', 'utf8');

// Extract the misspelled words
const misspelledWords = results.split('\n').filter(line => line.includes(' - Unknown word'));

// Format the misspelled words as a comment body
const commentBody = `## Spellcheck Results\n\nMisspelled words:\n\n${misspelledWords.join('\n')}`;

// Post the comment to the pull request
axios({
  method: 'post',
  url: `https://api.github.com/repos/{owner}/{repo}/issues/{pull_number}/comments`,
  headers: {
    'Authorization': `token ${process.env.GITHUB_TOKEN}`
  },
  data: {
    body: commentBody
  }
}).catch(error => console.error(error));
