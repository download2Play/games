var downloadCount = 12030;
setInterval(showNotification, Math.floor(Math.random() * 10000) + 5000); // Random interval between 5 to 15 seconds

setInterval(sendRandomMessage, Math.floor(Math.random() * 10000) + 5000);
function startDownload() {
  var progressBar = document.querySelector('.progress-bar');
  var stepIndicator = document.querySelector('.step-indicator');
  var width = 0;
  var steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];
  var stepIndex = 0;
  var interval = setInterval(function () {
    width += 20;
    progressBar.style.width = width + '%';
    stepIndicator.textContent = steps[stepIndex];
    stepIndex++;
    if (stepIndex === steps.length) {
      clearInterval(interval);
      progressBar.style.backgroundColor = '#4caf50'; // Change progress bar color when download completes
      og_load();
    }
  }, 1000);
}

function showNotification() {
  var notification = document.getElementById('notification');
  var usernameSpan = document.getElementById('username');
  var usernames = [
    'Player123',
    'GamerGirl',
    'NinjaPlayer',
    'ProGamer',
    'MasterPlayer',
  ];
  updateDownloadCount();
  var randomUsername = usernames[Math.floor(Math.random() * usernames.length)];
  usernameSpan.textContent = randomUsername;
  notification.style.display = 'block';
  setTimeout(function () {
    notification.style.display = 'none';
  }, 5000); // Adjust the duration of notification display (in milliseconds)
}

function updateDownloadCount() {
  downloadCount++;
  document.getElementById('downloadCount').textContent = downloadCount;
}

var fakeComments = [
  {
    avatar: 'https://download2play.github.io/games/images/avatar/1.jpg',
    username: 'ShadowWarrior',
    text: "This game is awesome! Can't stop playing it.",
  },
  {
    avatar: 'https://download2play.github.io/games/images/avatar/2.jpg',
    username: 'IronMage',
    text: 'The graphics are stunning. Definitely worth checking out.',
  },
  {
    avatar: 'https://download2play.github.io/games/images/avatar/3.jpg',
    username: 'EpicGamer',
    text: 'Just completed the main questline. What an epic journey!',
  },
  {
    avatar: 'https://download2play.github.io/games/images/avatar/4.jpg',
    username: 'GamingQueen',
    text: 'The soundtrack is mesmerizing. Gets me in the gaming mood.',
  },
  {
    avatar: 'https://download2play.github.io/games/images/avatar/5.jpg',
    username: 'AdventureSeeker',
    text: 'The open world is vast and beautiful. So much to explore!',
  },
  {
    avatar: 'https://download2play.github.io/games/images/avatar/6.jpg',
    username: 'PixelMaster',
    text: "I'm impressed by the attention to detail in every pixel.",
  },
  {
    avatar: 'https://download2play.github.io/games/images/avatar/7.jpg',
    username: 'QuestHunter',
    text: 'Completing side quests is just as rewarding as the main storyline.',
  },
  {
    avatar: 'https://download2play.github.io/games/images/avatar/8.jpg',
    username: 'MysticPlayer',
    text: 'The lore and mythology behind this game are captivating.',
  },
  {
    avatar: 'https://download2play.github.io/games/images/avatar/9.jpg',
    username: 'LegendaryGamer',
    text: 'Legendary difficulty mode is no joke! But I love the challenge.',
  },
  {
    avatar: 'https://download2play.github.io/games/images/avatar/10.jpg',
    username: 'DigitalNomad',
    text: 'Gaming from different virtual worlds is my kind of adventure.',
  },
  // Add more comments here
];

function displayComments() {
  var commentList = document.getElementById('commentList');
  fakeComments.forEach(function (comment) {
    var li = document.createElement('li');
    li.classList.add('comment-item');
    li.innerHTML = `
        <div class="comment-avatar">
            <img src=${comment.avatar} alt="User Avatar">
        </div>
        <div class="comment-content">
            <p class="comment-text">${comment.text}</p>
            <span class="comment-username">${comment.username}</span>
        </div>`;
    commentList.appendChild(li);
  });
}

displayComments(); // Display comments when the page loads

function sendMessage() {
  var messageInput = document.getElementById('messageInput');
  var message = messageInput.value.trim();

  if (message !== '') {
    displayMessage('You', message);
    messageInput.value = '';
  }
}

function sendRandomMessage() {
  var usernames = [
    'ShadowWarrior',
    'IronMage',
    'EpicGamer',
    'GamingQueen',
    'AdventureSeeker',
    'PixelMaster',
    'QuestHunter',
    'MysticPlayer',
    'LegendaryGamer',
    'DigitalNomad',
  ];
  var randomUsername = usernames[Math.floor(Math.random() * usernames.length)];
  var randomMessage = getRandomMessage();
  displayMessage(randomUsername, randomMessage);
}

function displayMessage(username, message) {
  var chatMessages = document.getElementById('chatMessages');
  var messageElement = document.createElement('div');
  messageElement.classList.add('chat-message');
  messageElement.innerHTML = `<span class="username">${username}:</span> <span class="message">${message}</span>`;
  chatMessages.appendChild(messageElement);
}

function getRandomMessage() {
  var messages = [
    'Hi there!',
    'How are you?',
    "What's up?",
    "I'm good, thanks!",
    'This chat looks cool!',
    "I'm enjoying this game a lot.",
    'Do you have any tips for me?',
    'Sure, let me help you!',
    'Have you explored the secret area?',
    'I found a hidden treasure yesterday!',
    "Let's team up and play together!",
    'That sounds like a plan!',
    "I'll be online tomorrow too.",
    "Can't wait to chat with you again!",
    'See you later!',
    'Bye for now!',
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

//SCRIPT
var locker_url = `https://og.download2play.com/cl/v/${OG_ID}`;

var iframecontents;
var old_display;

function og_load(options) {
  if (options) {
    var query_vars = Object.keys(options)
      .map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(options[key]);
      })
      .join('&');

    locker_url += '?' + query_vars;
  }

  // preload
  var xhr = new XMLHttpRequest();
  xhr.open('GET', locker_url, true);
  xhr.onreadystatechange = function () {
    if (this.readyState !== 4) {
      return;
    }
    if (this.status !== 200) {
      iframecontents = false;
      return;
    }

    iframecontents = this.responseText;
  };
  xhr.send();

  ogEditBody();
}

function ogEditBody() {
  var body = document.getElementsByTagName('body')[0];

  if (document.getElementsByTagName('body')[0] === undefined) {
    setTimeout(ogEditBody, 100);
    return;
  }

  var old_overflow = body.style.overflow;
  old_display = body.style.display;

  ogMakeLocker();
}

function ogMakeLocker() {
  var body = document.getElementsByTagName('body')[0];

  if (iframecontents === undefined) {
    setTimeout(ogMakeLocker, 100);
    return;
  }

  if (iframecontents !== false) {
    var body = document.getElementsByTagName('body')[0];

    var iframe = document.createElement('iframe');
    iframe.name = 'iframe';
    iframe.scrolling = 'yes';
    iframe.frameborder = '0';
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.position = 'fixed';
    iframe.style.top = 0;
    iframe.style.left = 0;
    iframe.style.zIndex = 16777271;
    iframe.id = 'test_iframe';
    body.appendChild(iframe);
    iframe = document.getElementById('test_iframe');
    iframe.contentDocument.write(iframecontents);
  }
}

function og_getScriptURL() {
  var scripts = document.getElementsByTagName('script');
  var index = scripts.length - 1;
  var myScript = scripts[index];
  var src = myScript.src;
  return src.split('?')[0];
}

function call_locker(options) {
  og_load(options);
}

function og_call(options) {
  og_load(options);
}

var ogblock = false;

//TITLEee
var contentTitle = document.querySelector('.main-title');
contentTitle.textContent = WEB_TITLE;

//GAME LOGO09
var logoContainer = document.querySelector('.logo-container');
var logoImage = document.createElement('img');
logoImage.src = GAME_LOGO; // Set the image source
logoImage.alt = WEB_TITLE; // Set the alt attribute
logoImage.classList.add('logo'); // Add the 'logo' class

logoContainer.appendChild(logoImage);

// Set the background image URL
document.documentElement.style.setProperty(
  '--background-url',
  'url("' + IMAGE_URL + '")'
);
