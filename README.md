# Discord Nuke Bot (For Educational Use Only)

This is a self-hosted Discord bot built using Node.js and discord.js. It provides a single `!!nuke` command that, when used by the server owner, will ban all members and delete all channels. This bot is intended strictly for educational and testing purposes on private servers.

## Disclaimer

This project is for educational and self-testing use only.  
Running this bot on any server you do not own or manage with explicit permission is a violation of Discord's Terms of Service and may result in account suspension or legal consequences.

## Features

- Bans all members except the bot and the owner
- Deletes all channels from the server
- Restricted to the server owner's command only
- Hosted using Railway (GitHub-connected deployment)

## Project Structure

```
discord-nuke-bot/
├── index.js         # Main bot script
├── package.json     # Project metadata and start command
└── .gitignore       # Node and environment ignores
```

## Requirements

- Discord bot token
- Your Discord user ID (OWNER_ID)
- GitHub account
- Railway account

## Local Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/YOUR_USERNAME/discord-nuke-bot.git
    cd discord-nuke-bot
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file for local testing:
    ```
    TOKEN=your-discord-bot-token
    OWNER_ID=your-discord-user-id
    ```

4. Run the bot locally:
    ```bash
    npm start
    ```

## Railway Deployment Guide

1. Push your code to GitHub:

    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/discord-nuke-bot.git
    git push -u origin main
    ```

2. Go to [https://railway.app](https://railway.app)

3. Click "New Project" → "Deploy from GitHub Repo" → Select your repository

4. In your Railway project dashboard, go to the "Variables" tab and add:
    ```
    TOKEN=your-discord-bot-token
    OWNER_ID=your-discord-user-id
    ```

## Bot Invitation

1. Go to [https://discord.com/developers/applications](https://discord.com/developers/applications)

2. Open your bot → Navigate to OAuth2 > URL Generator

3. Select:
    - Scopes: `bot`
    - Permissions: `Administrator`

4. Copy and paste the generated URL in your browser to invite the bot to your server

## Usage

After deployment and bot invitation, in any server channel where the bot has access, type:

```
!!nuke
```

The bot will:
- Ban all users except the bot and the specified OWNER_ID
- Delete all channels in the server

## Future Enhancements (Optional)

- Add `!!nuke confirm` as a safety step
- Add `!!restore` to recreate default channels
- Log actions to a specific channel or external file

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute it with attribution.
