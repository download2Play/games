var downloadCount = 12030;

var STEPS;
var COMMENTS;
var YOU;
var MESSAGES;

if (CURRENT_LANGUAGE == 'english') {
  STEPS = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];
  COMMENTS = [
    "This game is awesome! Can't stop playing it.",
    'The graphics are stunning. Definitely worth checking out.',
    'Just completed the main questline. What an epic journey!',
    'The soundtrack is mesmerizing. Gets me in the gaming mood.',
    'The open world is vast and beautiful. So much to explore!',
    "I'm impressed by the attention to detail in every pixel.",
    'Completing side quests is just as rewarding as the main storyline.',
    'The lore and mythology behind this game are captivating.',
    'Legendary difficulty mode is no joke! But I love the challenge.',
    'Gaming from different virtual worlds is my kind of adventure.',
  ];
  YOU = 'You';
  MESSAGES = [
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
}

if (CURRENT_LANGUAGE == 'french') {
  STEPS = ['Étape 1', 'Étape 2', 'Étape 3', 'Étape 4', 'Étape 5'];
  COMMENTS = [
    "Ce jeu est génial! Je ne peux pas m'arrêter d'y jouer.",
    "Les graphismes sont époustouflants. Ça vaut vraiment le coup d'œil.",
    'Je viens de terminer la quête principale. Quel voyage épique!',
    "La bande-son est hypnotisante. Ça me met dans l'ambiance de jeu.",
    'Le monde ouvert est vaste et magnifique. Tellement à explorer!',
    "Je suis impressionné par l'attention portée aux détails dans chaque pixel.",
    "Terminer les quêtes secondaires est aussi gratifiant que l'intrigue principale.",
    'La mythologie et la lore derrière ce jeu sont captivantes.',
    "Le mode difficulté légendaire est sérieux! Mais j'adore le défi.",
    "Jouer depuis différents mondes virtuels, c'est mon genre d'aventure.",
  ];
  YOU = 'Tu';
  MESSAGES = [
    'Salut !',
    'Comment ça va ?',
    'Quoi de neuf ?',
    'Je vais bien, merci !',
    'Cette conversation a l’air cool !',
    'Je prends beaucoup de plaisir à jouer à ce jeu.',
    'As-tu des astuces pour moi ?',
    "Bien sûr, laisse-moi t'aider !",
    'As-tu exploré la zone secrète ?',
    'J’ai trouvé un trésor caché hier !',
    'Soyons coéquipiers et jouons ensemble !',
    'Ça me semble être une bonne idée !',
    'Je serai en ligne demain aussi.',
    "J'ai hâte de discuter à nouveau avec toi !",
    'À plus tard !',
    'À bientôt !',
  ];
}

if (CURRENT_LANGUAGE == 'norwegian') {
  STEPS = ['Trinn 1', 'Trinn 2', 'Trinn 3', 'Trinn 4', 'Trinn 5'];
  COMMENTS = [
    'Dette spillet er fantastisk! Kan ikke slutte å spille det.',
    'Grafikken er fantastisk. Absolutt verdt å sjekke ut.',
    'Nettopp fullført hovedoppdraget. For en episk reise!',
    'Lydsporet er hypnotiserende. Får meg i spillhumør.',
    'Det åpne verden er vid og vakker. Så mye å utforske!',
    'Jeg er imponert over oppmerksomheten til detaljer i hvert piksel.',
    'Å fullføre sideoppdrag er like givende som hovedhistorien.',
    'Lore og mytologi bak dette spillet er fengslende.',
    'Legendarisk vanskelighetsmodus er ingen spøk! Men jeg elsker utfordringen.',
    'Gaming fra forskjellige virtuelle verdener er min type eventyr.',
  ];
  YOU = 'Du';
  MESSAGES = [
    'Hei der!',
    'Hvordan går det?',
    'Hva skjer?',
    'Jeg har det bra, takk!',
    'Denne samtalen ser kult ut!',
    'Jeg nyter dette spillet veldig mye.',
    'Har du noen tips for meg?',
    'Selvfølgelig, la meg hjelpe deg!',
    'Har du utforsket det hemmelige området?',
    'Jeg fant en skjult skatt i går!',
    'La oss samarbeide og spille sammen!',
    'Det høres ut som en plan!',
    'Jeg vil være på nettet i morgen også.',
    'Gleder meg til å chatte med deg igjen!',
    'Vi snakkes senere!',
    'Ha det for nå!',
  ];
}

if (CURRENT_LANGUAGE == 'german') {
  STEPS = ['Schritt 1', 'Schritt 2', 'Schritt 3', 'Schritt 4', 'Schritt 5'];
  COMMENTS = [
    'Dieses Spiel ist fantastisch! Kann nicht aufhören, es zu spielen.',
    'Die Grafik ist atemberaubend. Auf jeden Fall einen Blick wert.',
    'Gerade den Hauptquest abgeschlossen. Was für eine epische Reise!',
    'Der Soundtrack ist fesselnd. Bringt mich in die Gaming-Stimmung.',
    'Die offene Welt ist weitläufig und wunderschön. So viel zu erkunden!',
    'Ich bin beeindruckt von der Liebe zum Detail in jedem Pixel.',
    'Das Abschließen von Nebenquests ist genauso belohnend wie die Hauptgeschichte.',
    'Die Lore und Mythologie hinter diesem Spiel sind faszinierend.',
    'Der legendäre Schwierigkeitsgrad ist kein Witz! Aber ich liebe die Herausforderung.',
    'Gaming aus verschiedenen virtuellen Welten ist meine Art von Abenteuer.',
  ];
  YOU = 'Du';
  MESSAGES = [
    'Hallo!',
    'Wie geht es dir?',
    'Was geht ab?',
    'Mir geht es gut, danke!',
    'Dieser Chat sieht cool aus!',
    'Ich genieße dieses Spiel sehr.',
    'Hast du irgendwelche Tipps für mich?',
    'Sicher, lass mich dir helfen!',
    'Hast du das geheime Gebiet erkundet?',
    'Ich habe gestern einen versteckten Schatz gefunden!',
    'Lass uns zusammen spielen und ein Team bilden!',
    'Das klingt nach einem Plan!',
    'Ich werde auch morgen online sein.',
    'Ich freue mich schon darauf, wieder mit dir zu chatten!',
    'Bis später!',
    'Tschüss für jetzt!',
  ];
}
if (CURRENT_LANGUAGE == 'swedish') {
  STEPS = ['Steg 1', 'Steg 2', 'Steg 3', 'Steg 4', 'Steg 5'];
  COMMENTS = [
    'Det här spelet är fantastiskt! Kan inte sluta spela det.',
    'Grafiken är fantastisk. Definitivt värt att kolla in.',
    'Precis avslutat huvuduppdraget. Vilken episk resa!',
    'Soundtracket är hypnotiserande. Får mig att vilja spela.',
    'Den öppna världen är vidsträckt och vacker. Så mycket att utforska!',
    'Jag är imponerad av uppmärksamheten på detaljer i varje pixel.',
    'Att slutföra sidouppdrag är lika belönande som huvudhistorien.',
    'Lore och mytologi bakom detta spel är fängslande.',
    'Legendära svårighetsgraden är ingen skämt! Men jag älskar utmaningen.',
    'Att spela från olika virtuella världar är min sorts äventyr.',
  ];
  YOU = 'Du';
  MESSAGES = [
    'Hej där!',
    'Hur mår du?',
    'Vad händer?',
    'Jag mår bra, tack!',
    'Denna chatt ser bra ut!',
    'Jag gillar verkligen det här spelet.',
    'Har du några tips för mig?',
    'Självklart, låt mig hjälpa dig!',
    'Har du utforskat det hemliga området?',
    'Jag hittade en gömd skatt igår!',
    'Låt oss bilda lag och spela tillsammans!',
    'Det låter som en plan!',
    'Jag kommer att vara online imorgon också.',
    'Ser fram emot att chatta med dig igen!',
    'Vi ses senare!',
    'Hej då för nu!',
  ];
}

if (CURRENT_LANGUAGE == 'dutch') {
  STEPS = ['Stap 1', 'Stap 2', 'Stap 3', 'Stap 4', 'Stap 5'];
  COMMENTS = [
    'Dit spel is geweldig! Kan niet stoppen met spelen.',
    'De graphics zijn verbluffend. Zeker de moeite waard om te bekijken.',
    'Net de hoofdmissie voltooid. Wat een epische reis!',
    'De soundtrack is betoverend. Brengt me in de stemming om te gamen.',
    'De open wereld is uitgestrekt en prachtig. Zo veel te verkennen!',
    'Ik ben onder de indruk van de aandacht voor detail in elke pixel.',
    'Het voltooien van zijmissies is even bevredigend als het hoofdverhaal.',
    'De lore en mythologie achter dit spel zijn fascinerend.',
    'De legendarische moeilijkheidsgraad is geen grap! Maar ik hou van de uitdaging.',
    'Gamen vanuit verschillende virtuele werelden is mijn soort avontuur.',
  ];
  YOU = 'Jij';
  MESSAGES = [
    'Hallo daar!',
    'Hoe gaat het?',
    'Wat is er aan de hand?',
    'Ik ben goed, bedankt!',
    'Deze chat ziet er cool uit!',
    'Ik geniet erg van dit spel.',
    'Heb je nog tips voor me?',
    'Natuurlijk, laat me je helpen!',
    'Heb je het geheime gebied al verkend?',
    'Ik heb gisteren een verborgen schat gevonden!',
    'Laten we samen spelen en een team vormen!',
    'Dat klinkt als een plan!',
    'Ik zal morgen ook online zijn.',
    'Ik kan niet wachten om weer met je te chatten!',
    'Tot later!',
    'Dag voor nu!',
  ];
}

if (CURRENT_LANGUAGE == 'spanish') {
  STEPS = ['Paso 1', 'Paso 2', 'Paso 3', 'Paso 4', 'Paso 5'];
  COMMENTS = [
    '¡Este juego es increíble! No puedo dejar de jugarlo.',
    'Los gráficos son impresionantes. Definitivamente vale la pena echarle un vistazo.',
    'Acabo de completar la misión principal. ¡Qué viaje épico!',
    'La banda sonora es cautivadora. Me pone en el estado de ánimo para jugar.',
    'El mundo abierto es vasto y hermoso. ¡Hay mucho por explorar!',
    'Estoy impresionado por la atención al detalle en cada píxel.',
    'Completar las misiones secundarias es tan gratificante como la historia principal.',
    'La historia y mitología detrás de este juego son cautivadoras.',
    '¡El modo de dificultad legendario no es una broma! Pero me encanta el desafío.',
    'Jugar desde diferentes mundos virtuales es mi tipo de aventura.',
  ];
  YOU = 'Tú';
  MESSAGES = [
    '¡Hola!',
    '¿Cómo estás?',
    '¿Qué tal?',
    '¡Estoy bien, gracias!',
    '¡Este chat parece genial!',
    'Me está gustando mucho este juego.',
    '¿Tienes algún consejo para mí?',
    '¡Claro, déjame ayudarte!',
    '¿Has explorado la zona secreta?',
    '¡Encontré un tesoro oculto ayer!',
    '¡Unámonos y juguemos juntos!',
    '¡Eso suena como un plan!',
    'Estaré en línea mañana también.',
    '¡No puedo esperar para chatear contigo de nuevo!',
    '¡Nos vemos luego!',
    '¡Adiós por ahora!',
  ];
}

if (CURRENT_LANGUAGE == 'portuguese') {
  STEPS = ['Passo 1', 'Passo 2', 'Passo 3', 'Passo 4', 'Passo 5'];
  COMMENTS = [
    'Este jogo é incrível! Não consigo parar de jogar.',
    'Os gráficos são deslumbrantes. Definitivamente vale a pena conferir.',
    'Acabei de completar a missão principal. Que jornada épica!',
    'A trilha sonora é cativante. Me coloca no clima para jogar.',
    'O mundo aberto é vasto e bonito. Tanto para explorar!',
    'Estou impressionado com a atenção aos detalhes em cada pixel.',
    'Completar missões secundárias é tão gratificante quanto a história principal.',
    'A lore e a mitologia por trás deste jogo são cativantes.',
    'O modo de dificuldade lendário não é brincadeira! Mas eu adoro o desafio.',
    'Jogar de diferentes mundos virtuais é o meu tipo de aventura.',
  ];
  YOU = 'Você';
  MESSAGES = [
    'Olá!',
    'Como vai?',
    'O que está acontecendo?',
    'Estou bem, obrigado!',
    'Este chat parece legal!',
    'Estou gostando muito deste jogo.',
    'Você tem alguma dica para mim?',
    'Claro, deixe-me ajudar você!',
    'Você explorou a área secreta?',
    'Eu encontrei um tesouro escondido ontem!',
    'Vamos formar uma equipe e jogar juntos!',
    'Isso parece um plano!',
    'Estarei online amanhã também.',
    'Mal posso esperar para conversar com você novamente!',
    'Até mais tarde!',
    'Até logo por enquanto!',
  ];
}

if (CURRENT_LANGUAGE == 'greek') {
  STEPS = ['Βήμα 1', 'Βήμα 2', 'Βήμα 3', 'Βήμα 4', 'Βήμα 5'];
  COMMENTS = [
    'Αυτό το παιχνίδι είναι εκπληκτικό! Δεν μπορώ να σταματήσω να το παίζω.',
    'Τα γραφικά είναι εντυπωσιακά. Σίγουρα αξίζει να το τσεκάρετε.',
    'Μόλις ολοκλήρωσα την κύρια αποστολή. Τι επικό ταξίδι!',
    'Το soundtrack είναι μαγευτικό. Με βάζει στο κλίμα για gaming.',
    'Ο ανοιχτός κόσμος είναι τεράστιος και όμορφος. Τόσα πολλά να εξερευνήσετε!',
    'Εντυπωσιάστηκα από την προσοχή στη λεπτομέρεια σε κάθε pixel.',
    'Η ολοκλήρωση των παραπλευρών αποστολών είναι εξίσου επιβραβευτική όσο το κύριο σενάριο.',
    'Η λόρε και η μυθολογία πίσω από αυτό το παιχνίδι είναι συναρπαστική.',
    'Η λεγόμενη λειτουργία δυσκολίας είναι σοβαρή! Αλλά λατρεύω την πρόκληση.',
    'Το gaming από διάφορα εικονικά κόσμους είναι το είδος της περιπέτειας μου.',
  ];
  YOU = 'Εσύ';
  MESSAGES = [
    'Γεια!',
    'Τι κάνεις;',
    'Τι νέα;',
    'Καλά είμαι, ευχαριστώ!',
    'Αυτή η συνομιλία φαίνεται καλή!',
    'Απολαμβάνω πολύ αυτό το παιχνίδι.',
    'Έχεις κάποιες συμβουλές για μένα;',
    'Φυσικά, αφήστε με να σας βοηθήσω!',
    'Έχετε εξερευνήσει τη μυστική περιοχή;',
    'Βρήκα ένα κρυμμένο θησαυρό χθες!',
    'Ας συνεργαστούμε και να παίξουμε μαζί!',
    'Αυτό ακούγεται σαν ένα σχέδιο!',
    'Θα είμαι online και αύριο.',
    'Ανυπομονώ να συνομιλήσω μαζί σας ξανά!',
    'Τα λέμε αργότερα!',
    'Αντίο για τώρα!',
  ];
}

if (CURRENT_LANGUAGE == 'irish') {
  STEPS = ['Céim 1', 'Céim 2', 'Céim 3', 'Céim 4', 'Céim 5'];
  COMMENTS = [
    'Is iontach an cluiche é seo! Ní féidir liom stad a chur leis a imirt.',
    'Tá na grafaicí dochreidte. Tá sé fiú breathnú air.',
    'Níos déanaí, chríochnaigh mé an príomh-imeacht. Cén turas epiceach!',
    'Tá an ceol cliste. Cuireann sé mé sa chaoi is go mbeidh mé ag imirt cluichí.',
    'Tá an domhan oscailte fairsing agus álainn. Tá go leor le himirt ann!',
    'Tá mé tógtha leis an aird ar an mionsonraí i ngach pixel.',
    'Is é a chríochnú na tascanna taobhleathana chomh spreagúil leis an scéal príomháideach.',
    'Tá an loireacht agus an miotaseolaíocht taobh thiar den chluiche seo iontach taitneamhach.',
    'Ní heol duit ach an deacair é an mód deacrachta ceannródaíoch! Ach is breá liom an dúshlán.',
    'Is é mo chineál eachtra cluiche ó dhomhain é mo chineál.',
  ];
  YOU = 'Tusa';
  MESSAGES = [
    'Dia dhuit!',
    'Conas atá tú?',
    'Cad é atá ag tarlú?',
    'Tá mé go maith, go raibh maith agat!',
    'Tá an caint seo iontach!',
    'Tá mé ag baint an-taitneamh as an gcluiche seo.',
    'An bhfuil aon leideanna agat dom?',
    'Ar aon nós, lig dom cuidiú leat!',
    'An ndearna tú an limistéar rúnda a fheiceáil?',
    'Fuair mé ciseán folamh inné!',
    'Tar éis dúinn comhoibriú agus imirt le chéile!',
    'Sé sin an plean a chloiseann sé!',
    'Beidh mé ar líne amárach freisin.',
    "Can't wait to chat with you again!",
    'Slán go fóill!',
    'Slán go dtí anois!',
  ];
}

if (CURRENT_LANGUAGE == 'japanese') {
  STEPS = ['ステップ1', 'ステップ2', 'ステップ3', 'ステップ4', 'ステップ5'];
  COMMENTS = [
    'このゲームは素晴らしいです！やめられません。',
    'グラフィックスは見事です。ぜひチェックする価値があります。',
    'メインクエストを完了しました。エポックメイキングな旅です！',
    'サウンドトラックは魅力的です。ゲームの気分に浸ります。',
    'オープンワールドは広大で美しいです。探索することがたくさんあります！',
    'すべてのピクセルに細心の注意が払われているのに感銘を受けます。',
    'サイドクエストを完了することは、メインストーリーと同じくらい満足感があります。',
    'このゲームのロアと神話は魅力的です。',
    '伝説の難易度モードは冗談ではありません！でも、挑戦を愛しています。',
    '異なる仮想世界からのゲームは私の冒険の種類です。',
  ];
  YOU = 'あなた';
  MESSAGES = [
    'こんにちは！',
    '元気ですか？',
    '何してるの？',
    '元気です、ありがとう！',
    'このチャットは素敵ですね！',
    'このゲームをとても楽しんでいます。',
    '何かアドバイスはありますか？',
    'もちろん、手伝いますよ！',
    '秘密のエリアを探索しましたか？',
    '昨日、隠された宝物を見つけました！',
    '一緒にプレイしてチームを組みましょう！',
    'それは計画のようですね！',
    '明日もオンラインでいます。',
    'またあなたとチャットできるのを楽しみにしています！',
    '後でね！',
    'さようなら！',
  ];
}

if (CURRENT_LANGUAGE == 'italian') {
  STEPS = ['Passo 1', 'Passo 2', 'Passo 3', 'Passo 4', 'Passo 5'];
  COMMENTS = [
    'Questo gioco è fantastico! Non riesco a smettere di giocarci.',
    'La grafica è stupefacente. Merita sicuramente di essere controllata.',
    'Ho appena completato la missione principale. Che viaggio epico!',
    "La colonna sonora è ipnotica. Mi mette nello stato d'animo per giocare.",
    'Il mondo aperto è vasto e bellissimo. Così tanto da esplorare!',
    "Sono impressionato dall'attenzione ai dettagli in ogni pixel.",
    'Completare le missioni secondarie è gratificante quanto la trama principale.',
    'La lore e la mitologia dietro questo gioco sono avvincenti.',
    'La modalità di difficoltà leggendaria non è uno scherzo! Ma amo la sfida.',
    'Giochi provenienti da mondi virtuali diversi sono il mio tipo di avventura.',
  ];
  YOU = 'Tu';
  MESSAGES = [
    'Ciao!',
    'Come stai?',
    "Cosa c'è di nuovo?",
    'Sto bene, grazie!',
    'Questa chat sembra fantastica!',
    'Mi sto divertendo molto con questo gioco.',
    'Hai qualche consiglio per me?',
    'Certo, lascia che ti aiuti!',
    "Hai esplorato l'area segreta?",
    'Ieri ho trovato un tesoro nascosto!',
    'Facciamo squadra e giochiamo insieme!',
    'Sembra un piano!',
    'Sarò online anche domani.',
    "Non vedo l'ora di chattare di nuovo con te!",
    'A più tardi!',
    'Ciao per ora!',
  ];
}

if (CURRENT_LANGUAGE == 'korean') {
  STEPS = ['단계 1', '단계 2', '단계 3', '단계 4', '단계 5'];
  COMMENTS = [
    '이 게임은 놀라워요! 그만 두고 싶지 않아요.',
    '그래픽이 멋지네요. 꼭 확인할 가치가 있어요.',
    '주요 퀘스트를 완료했어요. 정말 에픽한 여정이었어요!',
    '사운드 트랙이 멋져요. 게임 분위기를 잘 만들어 줘요.',
    '오픈 월드가 넓고 아름다워요. 탐험할 것이 정말 많아요!',
    '모든 픽셀에 세심한 주의가 기울여져 있네요.',
    '사이드 퀘스트를 완료하는 것도 본 스토리만큼 만족스러워요.',
    '이 게임의 로어와 신화는 매력적이에요.',
    '전설적인 난이도 모드는 장난이 아니에요! 하지만 도전을 좋아해요.',
    '다양한 가상 세계에서의 게임은 제가 좋아하는 모험의 종류에요.',
  ];
  YOU = '당신';
  MESSAGES = [
    '안녕하세요!',
    '어떻게 지내세요?',
    '무슨 일이에요?',
    '저는 잘 지내요, 감사합니다!',
    '이 채팅은 멋져 보여요!',
    '이 게임을 정말 즐기고 있어요.',
    '제게 조언할 만한 게 있나요?',
    '물론이죠, 도와드릴게요!',
    '비밀 지역을 탐험해 보셨나요?',
    '어제 숨겨진 보물을 발견했어요!',
    '함께 팀을 이루어 함께 하고 싶어요!',
    '좋은 계획 같아요!',
    '내일도 온라인일 거예요.',
    '다시 당신과 이야기를 나누는 것을 기대하고 있어요!',
    '나중에 봐요!',
    '잠시 물러가겠습니다!',
  ];
}

if (CURRENT_LANGUAGE == 'slovene') {
  STEPS = ['Korak 1', 'Korak 2', 'Korak 3', 'Korak 4', 'Korak 5'];
  COMMENTS = [
    'Ta igra je neverjetna! Ne morem nehati igrati.',
    'Grafika je osupljiva. Zagotovo vredno ogleda.',
    'Ravno sem končal glavno misijo. Kakšno epsko potovanje!',
    'Glasba je hipnotična. Vznemirja me za igranje.',
    'Oprti svet je obsežen in čudovit. Tako veliko za raziskovanje!',
    'Impresioniran sem nad pozornostjo do podrobnosti v vsakem pikslu.',
    'Končanje stranskih nalog je enako zadovoljivo kot glavna zgodba.',
    'Lore in mitologija za to igro sta zanimivi.',
    'Legendarni način težavnosti ni šala! Ampak obožujem izziv.',
    'Igranje iz različnih virtualnih svetov je moj tip avanture.',
  ];
  YOU = 'Ti';
  MESSAGES = [
    'Zdravo!',
    'Kako si?',
    'Kaj se dogaja?',
    'V redu sem, hvala!',
    'Ta klepet izgleda super!',
    'Zelo uživam v tej igri.',
    'Imaš kakšen nasvet zame?',
    'Seveda, naj ti pomagam!',
    'Si že raziskal tajno območje?',
    'Včeraj sem našel skriti zaklad!',
    'Poveživa se in igrajva skupaj!',
    'Zveni kot načrt!',
    'Tudi jaz bom jutri na spletu.',
    'Komaj čakam, da znova klepetam s tabo!',
    'Pozneje!',
    'Nasvidenje za zdaj!',
  ];
}

if (CURRENT_LANGUAGE == 'danish') {
  STEPS = ['Trin 1', 'Trin 2', 'Trin 3', 'Trin 4', 'Trin 5'];
  COMMENTS = [
    'Dette spil er fantastisk! Kan ikke stoppe med at spille det.',
    'Grafikken er fantastisk. Absolut værd at tjekke ud.',
    'Lige færdig med hovedopgaven. Sikke en episk rejse!',
    'Lydsiden er fortryllende. Får mig i stemning til at spille.',
    'Den åbne verden er enorm og smuk. Så meget at udforske!',
    'Jeg er imponeret over opmærksomheden på detaljer i hvert pixel.',
    'At fuldføre sideopgaver er lige så tilfredsstillende som hovedhistorien.',
    'Lore og mytologi bag dette spil er fængslende.',
    'Legendarisk sværhedsgrad er ikke noget at spøge med! Men jeg elsker udfordringen.',
    'At spille fra forskellige virtuelle verdener er min slags eventyr.',
  ];
  YOU = 'Du';
  MESSAGES = [
    'Hej!',
    'Hvordan har du det?',
    'Hvad sker der?',
    'Jeg har det godt, tak!',
    'Denne chat ser cool ud!',
    'Jeg nyder virkelig dette spil.',
    'Har du nogle tips til mig?',
    'Selvfølgelig, lad mig hjælpe dig!',
    'Har du udforsket det hemmelige område?',
    'Jeg fandt en skjult skat i går!',
    'Lad os danne hold og spille sammen!',
    'Det lyder som en plan!',
    'Jeg vil også være online i morgen.',
    'Kan ikke vente med at chatte med dig igen!',
    'Vi ses senere!',
    'Hej for nu!',
  ];
}
setInterval(showNotification, Math.floor(Math.random() * 10000) + 5000); // Random interval between 5 to 15 seconds

setInterval(sendRandomMessage, Math.floor(Math.random() * 10000) + 5000);

function startDownload() {
  var progressBar = document.querySelector('.progress-bar');
  var stepIndicator = document.querySelector('.step-indicator');
  var width = 0;
  var steps = STEPS;
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
    text: COMMENTS[0],
  },
  {
    avatar: 'https://download2play.github.io/games/images/avatar/2.jpg',
    username: 'IronMage',
    text: COMMENTS[1],
  },
  {
    avatar: 'https://download2play.github.io/games/images/avatar/3.jpg',
    username: 'EpicGamer',
    text: COMMENTS[2],
  },
  {
    avatar: 'https://download2play.github.io/games/images/avatar/4.jpg',
    username: 'GamingQueen',
    text: COMMENTS[3],
  },
  {
    avatar: 'https://download2play.github.io/games/images/avatar/5.jpg',
    username: 'AdventureSeeker',
    text: COMMENTS[4],
  },
  {
    avatar: 'https://download2play.github.io/games/images/avatar/6.jpg',
    username: 'PixelMaster',
    text: COMMENTS[5],
  },
  {
    avatar: 'https://download2play.github.io/games/images/avatar/7.jpg',
    username: 'QuestHunter',
    text: COMMENTS[6],
  },
  {
    avatar: 'https://download2play.github.io/games/images/avatar/8.jpg',
    username: 'MysticPlayer',
    text: COMMENTS[7],
  },
  {
    avatar: 'https://download2play.github.io/games/images/avatar/9.jpg',
    username: 'LegendaryGamer',
    text: COMMENTS[8],
  },
  {
    avatar: 'https://download2play.github.io/games/images/avatar/10.jpg',
    username: 'DigitalNomad',
    text: COMMENTS[9],
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
    displayMessage(YOU, message);
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
  var messages = MESSAGES;
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

//TITLE
var contentTitle = document.querySelector('.main-title');
contentTitle.textContent = WEB_TITLE;

//GAME LOGO
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
