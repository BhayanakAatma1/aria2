module.exports = Object.freeze({
  TOKEN: '1217032597:AAHLvxfP-ZG4lQUworrkkUFuMzHiUwep23w', //Telegramm Bot token!
  ARIA_SECRET: 'Lucky@582596', //Enter the secret key you entered in `aria.sh` file while editing
  ARIA_DOWNLOAD_LOCATION: '/app/dn', //This is for heroku on termux change it to your directory of cloned repo using "pwd" command
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //"No need to touch this!" The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: ['yts', 'YTS', 'cruzing.xyz', 'eztv.ag', 'YIFY'], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: ['YIFY'], // Files/top level directories with these substrings in the filename won't be downloaded
  GDRIVE_PARENT_DIR_ID: '1TM26iFTtBstzm-YqHP03pL901eDRez6F',
  SUDO_USERS: [806259523, 401643149],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [23543, 3535],	// Telegram chat IDs. Anyone in these chats can use the bot.
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  } 
});
