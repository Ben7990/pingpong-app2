console.log('Скрипт загружен v8');

// ==================== ПЕРЕВОДЫ (8 ЯЗЫКОВ) ====================
const translations = {
    ru: {
        'appName': 'СУДЕЙСКИЙ ПРОТОКОЛ',
        'login': 'Вход',
        'register': 'Регистрация',
        'loginBtn': 'Войти',
        'registerBtn': 'Зарегистрироваться',
        'logout': '🚪 Выход',
        'waiting': 'ОЖИДАНИЕ НАЧАЛА',
        'playing': 'В ИГРЕ',
        'finished': 'ЗАВЕРШЕН',
        'disqualified': 'ДИСКВАЛИФИКАЦИЯ',
        'cancel': 'Отмена',
        'injury': 'Травма',
        'forfeit': 'Неявка',
        'technical': 'Техпроблема',
        'finishMatchTitle': 'Завершение матча',
        'finishMatchText': 'Выберите причину:',
        'player1Title': 'ИГРОК 1',
        'player2Title': 'ИГРОК 2',
        'serve': 'ПОДАЧА',
        'newMatch': '🔄 НОВЫЙ МАТЧ',
        'startMatch': '🎬 НАЧАТЬ МАТЧ',
        'finishMatch': '🏁 ЗАВЕРШИТЬ',
        'pointToPlayer1': '➕ ОЧКО ИГРОКУ 1',
        'pointToPlayer2': '➕ ОЧКО ИГРОКУ 2',
        'timeout': '⏸ ТАЙМ-АУТ',
        'warning': '⚠️ ПРЕДУПРЕЖДЕНИЕ',
        'yellow': '🟨 ЖЕЛТАЯ КАРТА',
        'red': '🟥 КРАСНАЯ КАРТА',
        'changeServe': '🔄 СМЕНА ПОДАЧИ',
        'changeSide': '↔ СМЕНА СТОРОН',
        'undoPoint': '↩ ОТМЕНА ОЧКА',
        'accelerate': '⚡ УСКОРЕНИЕ',
        'protocol': '📋 СУДЕЙСКИЙ ПРОТОКОЛ',
        'referee': 'Главный судья:',
        'startTime': 'Время начала:',
        'currentTime': 'Текущее время:',
        'status': 'Статус:',
        'eventLog': 'ЖУРНАЛ СОБЫТИЙ',
        'exportJSON': '💾 ЭКСПОРТ JSON',
        'exportCSV': '📊 ЭКСПОРТ CSV (ANSI)',
        'exportCSVUtf8': '📊 ЭКСПОРТ CSV (UTF-8)',
        'print': '🖨 ПЕЧАТЬ',
        'resetPassword': '🔑 Забыли пароль?',
        'sendCode': 'Отправить код',
        'changePassword': 'Сменить пароль',
        'enterEmail': 'Введите email, указанный при регистрации',
        'enterCode': 'Введите код из письма',
        'newPassword': 'Новый пароль',
        'codeSent': 'Код отправлен на почту',
        'privacy': '📄 Политика конфиденциальности',
        'emailPlaceholder': 'Email',
        'passwordPlaceholder': 'Пароль',
        'namePlaceholder': 'Имя',
        'point': '🎾 Очко заработал игрок {player}',
        'set_end': '🏆 Партия {set} завершена. Победил игрок {winner}',
        'set_start': '🎬 Начало {set}-й партии. Подает игрок {server}',
        'serve_auto_change': '🔄 Автоматическая смена подачи. Теперь подает игрок {server}',
        'serve_manual_change': '🖐️ Ручная смена подачи. Теперь подает игрок {server}',
        'side_change': '↔ Смена сторон (после {set}-й партии)',
        'accelerate_on': '⚡ Включена система ускорения',
        'timeout_event': '⏸ Тайм-аут взят игроком {player}',
        'timeout_error': '❌ У игрока {player} нет тайм-аутов',
        'warning_event': '⚠️ Предупреждение игроку {player}',
        'yellow_event': '🟨 Желтая карточка игроку {player}',
        'red_event': '🟥 КРАСНАЯ КАРТОЧКА игроку {player} - дисквалификация!',
        'undo': '↩ Отмена последнего очка',
        'match_start': '🏓 Матч официально начат. Первым подает игрок {server}',
        'match_end_sporting': '🏁 Матч завершен. Победитель: игрок {winner}. Счет: {sets}',
        'match_end_early': '🏁 Матч завершен досрочно. Причина: {reason}',
        'error_not_started': '❌ Матч еще не начат! Нажмите "НАЧАТЬ МАТЧ"',
        'error_finished': '❌ Матч завершен, очки не начисляются',
        'exportTitle': 'Судейский протокол',
        'tournament': 'Турнир',
        'date': 'Дата',
        'table': 'Стол',
        'refereeName': 'Судья',
        'result': 'Результат',
        'eventLogTitle': 'Журнал событий',
        'time': 'Время',
        'event': 'Событие',
        'score': 'Счет',
        'vs': 'против',
        'winner': 'Победитель',
        'endTime': 'Время окончания',
        'toss_winner': '🎲 Жеребьевка: выиграл игрок {winner}. Право подачи у игрока {server}',
        'match_saved': '💾 Протокол матча сохранен в архиве',
        'saved_matches': 'Архив матчей'
    },
    en: {
        'appName': 'REFEREE PROTOCOL',
        'login': 'Login',
        'register': 'Register',
        'loginBtn': 'Login',
        'registerBtn': 'Register',
        'logout': '🚪 Logout',
        'waiting': 'WAITING',
        'playing': 'PLAYING',
        'finished': 'FINISHED',
        'disqualified': 'DISQUALIFIED',
        'cancel': 'Cancel',
        'injury': 'Injury',
        'forfeit': 'Forfeit',
        'technical': 'Technical',
        'finishMatchTitle': 'Finish Match',
        'finishMatchText': 'Select reason:',
        'player1Title': 'PLAYER 1',
        'player2Title': 'PLAYER 2',
        'serve': 'SERVE',
        'newMatch': '🔄 NEW MATCH',
        'startMatch': '🎬 START MATCH',
        'finishMatch': '🏁 FINISH',
        'pointToPlayer1': '➕ POINT PLAYER 1',
        'pointToPlayer2': '➕ POINT PLAYER 2',
        'timeout': '⏸ TIMEOUT',
        'warning': '⚠️ WARNING',
        'yellow': '🟨 YELLOW CARD',
        'red': '🟥 RED CARD',
        'changeServe': '🔄 CHANGE SERVE',
        'changeSide': '↔ CHANGE SIDES',
        'undoPoint': '↩ UNDO POINT',
        'accelerate': '⚡ ACCELERATION',
        'protocol': '📋 MATCH PROTOCOL',
        'referee': 'Referee:',
        'startTime': 'Start time:',
        'currentTime': 'Current time:',
        'status': 'Status:',
        'eventLog': 'EVENT LOG',
        'exportJSON': '💾 EXPORT JSON',
        'exportCSV': '📊 EXPORT CSV (ANSI)',
        'exportCSVUtf8': '📊 EXPORT CSV (UTF-8)',
        'print': '🖨 PRINT',
        'resetPassword': '🔑 Forgot password?',
        'sendCode': 'Send code',
        'changePassword': 'Change password',
        'enterEmail': 'Enter email address used during registration',
        'enterCode': 'Enter the code from the email',
        'newPassword': 'New password',
        'codeSent': 'Code sent to email',
        'privacy': '📄 Privacy Policy',
        'emailPlaceholder': 'Email',
        'passwordPlaceholder': 'Password',
        'namePlaceholder': 'Name',
        'point': '🎾 Point scored by player {player}',
        'set_end': '🏆 Set {set} completed. Player {winner} wins',
        'set_start': '🎬 Start of set {set}. Player {server} serves',
        'serve_auto_change': '🔄 Automatic serve change. Player {server} now serves',
        'serve_manual_change': '🖐️ Manual serve change. Player {server} now serves',
        'side_change': '↔ Side change (after set {set})',
        'accelerate_on': '⚡ Acceleration system activated',
        'timeout_event': '⏸ Timeout taken by player {player}',
        'timeout_error': '❌ Player {player} has no timeouts left',
        'warning_event': '⚠️ Warning to player {player}',
        'yellow_event': '🟨 Yellow card to player {player}',
        'red_event': '🟥 RED CARD to player {player} - disqualification!',
        'undo': '↩ Last point undone',
        'match_start': '🏓 Match officially started. Player {server} serves first',
        'match_end_sporting': '🏁 Match finished. Winner: player {winner}. Score: {sets}',
        'match_end_early': '🏁 Match finished early. Reason: {reason}',
        'error_not_started': '❌ Match not started yet! Click "START MATCH"',
        'error_finished': '❌ Match finished, no more points',
        'exportTitle': 'Match Protocol',
        'tournament': 'Tournament',
        'date': 'Date',
        'table': 'Table',
        'refereeName': 'Referee',
        'result': 'Result',
        'eventLogTitle': 'Event Log',
        'time': 'Time',
        'event': 'Event',
        'score': 'Score',
        'vs': 'vs',
        'winner': 'Winner',
        'endTime': 'End time',
        'toss_winner': '🎲 Toss: player {winner} wins. Player {server} serves',
        'match_saved': '💾 Match protocol saved to archive',
        'saved_matches': 'Match Archive'
    },
    de: {
        'appName': 'SCHIEDSRICHTERPROTOKOLL',
        'login': 'Anmelden',
        'register': 'Registrieren',
        'loginBtn': 'Anmelden',
        'registerBtn': 'Registrieren',
        'logout': '🚪 Abmelden',
        'waiting': 'WARTEN',
        'playing': 'IM SPIEL',
        'finished': 'BEENDET',
        'disqualified': 'DISQUALIFIZIERT',
        'cancel': 'Abbrechen',
        'injury': 'Verletzung',
        'forfeit': 'Nichtantritt',
        'technical': 'Technisch',
        'finishMatchTitle': 'Spiel beenden',
        'finishMatchText': 'Grund wählen:',
        'player1Title': 'SPIELER 1',
        'player2Title': 'SPIELER 2',
        'serve': 'AUFSCHLAG',
        'newMatch': '🔄 NEUES SPIEL',
        'startMatch': '🎬 STARTEN',
        'finishMatch': '🏁 BEENDEN',
        'pointToPlayer1': '➕ PUNKT SPIELER 1',
        'pointToPlayer2': '➕ PUNKT SPIELER 2',
        'timeout': '⏸ AUSZEIT',
        'warning': '⚠️ VERWARNUNG',
        'yellow': '🟨 GELBE KARTE',
        'red': '🟥 ROTE KARTE',
        'changeServe': '🔄 AUFSCHLAG WECHSELN',
        'changeSide': '↔ SEITEN WECHSELN',
        'undoPoint': '↩ PUNKT ZURÜCK',
        'accelerate': '⚡ BESCHLEUNIGUNG',
        'protocol': '📋 SPIELPROTOKOLL',
        'referee': 'Schiedsrichter:',
        'startTime': 'Startzeit:',
        'currentTime': 'Aktuelle Zeit:',
        'status': 'Status:',
        'eventLog': 'EREIGNISSE',
        'exportJSON': '💾 EXPORT JSON',
        'exportCSV': '📊 EXPORT CSV',
        'exportCSVUtf8': '📊 EXPORT CSV (UTF-8)',
        'print': '🖨 DRUCKEN',
        'resetPassword': '🔑 Passwort vergessen?',
        'sendCode': 'Code senden',
        'changePassword': 'Passwort ändern',
        'enterEmail': 'E-Mail eingeben',
        'enterCode': 'Code eingeben',
        'newPassword': 'Neues Passwort',
        'codeSent': 'Code gesendet',
        'privacy': '📄 Datenschutz',
        'emailPlaceholder': 'E-Mail',
        'passwordPlaceholder': 'Passwort',
        'namePlaceholder': 'Name',
        'point': '🎾 Punkt für Spieler {player}',
        'set_end': '🏆 Satz {set} beendet. Spieler {winner} gewinnt',
        'set_start': '🎬 Satz {set} beginnt. Spieler {server} schlägt auf',
        'serve_auto_change': '🔄 Aufschlagwechsel. Spieler {server} schlägt auf',
        'serve_manual_change': '🖐️ Manueller Aufschlagwechsel. Spieler {server} schlägt auf',
        'side_change': '↔ Seitenwechsel (nach Satz {set})',
        'accelerate_on': '⚡ Beschleunigung aktiviert',
        'timeout_event': '⏸ Auszeit Spieler {player}',
        'timeout_error': '❌ Spieler {player} hat keine Auszeit',
        'warning_event': '⚠️ Verwarnung Spieler {player}',
        'yellow_event': '🟨 Gelbe Karte Spieler {player}',
        'red_event': '🟥 ROTE KARTE Spieler {player} - Disqualifikation!',
        'undo': '↩ Letzter Punkt zurück',
        'match_start': '🏓 Spiel gestartet. Spieler {server} schlägt auf',
        'match_end_sporting': '🏁 Spiel beendet. Sieger: Spieler {winner}. {sets}',
        'match_end_early': '🏁 Vorzeitig beendet. Grund: {reason}',
        'error_not_started': '❌ Spiel nicht gestartet!',
        'error_finished': '❌ Spiel beendet',
        'exportTitle': 'Spielprotokoll',
        'tournament': 'Turnier',
        'date': 'Datum',
        'table': 'Tisch',
        'refereeName': 'Schiedsrichter',
        'result': 'Ergebnis',
        'eventLogTitle': 'Ereignisse',
        'time': 'Zeit',
        'event': 'Ereignis',
        'score': 'Stand',
        'vs': 'gegen',
        'winner': 'Sieger',
        'endTime': 'Endzeit',
        'toss_winner': '🎲 Los: Spieler {winner} gewinnt. Spieler {server} schlägt auf',
        'match_saved': '💾 Spiel gespeichert',
        'saved_matches': 'Spielarchiv'
    },
    es: {
        'appName': 'PROTOCOLO ARBITRAL',
        'login': 'Iniciar sesión',
        'register': 'Registrarse',
        'loginBtn': 'Iniciar',
        'registerBtn': 'Registrar',
        'logout': '🚪 Salir',
        'waiting': 'ESPERANDO',
        'playing': 'JUGANDO',
        'finished': 'FINALIZADO',
        'disqualified': 'DESCALIFICADO',
        'cancel': 'Cancelar',
        'injury': 'Lesión',
        'forfeit': 'No presentado',
        'technical': 'Técnico',
        'finishMatchTitle': 'Finalizar partido',
        'finishMatchText': 'Motivo:',
        'player1Title': 'JUGADOR 1',
        'player2Title': 'JUGADOR 2',
        'serve': 'SAQUE',
        'newMatch': '🔄 NUEVO',
        'startMatch': '🎬 INICIAR',
        'finishMatch': '🏁 FINALIZAR',
        'pointToPlayer1': '➕ PUNTO J1',
        'pointToPlayer2': '➕ PUNTO J2',
        'timeout': '⏸ TIEMPO',
        'warning': '⚠️ ADVERTENCIA',
        'yellow': '🟨 TARJETA AMARILLA',
        'red': '🟥 TARJETA ROJA',
        'changeServe': '🔄 CAMBIAR SAQUE',
        'changeSide': '↔ CAMBIAR LADO',
        'undoPoint': '↩ DESHACER',
        'accelerate': '⚡ ACELERACIÓN',
        'protocol': '📋 PROTOCOLO',
        'referee': 'Árbitro:',
        'startTime': 'Inicio:',
        'currentTime': 'Ahora:',
        'status': 'Estado:',
        'eventLog': 'REGISTRO',
        'exportJSON': '💾 EXPORTAR JSON',
        'exportCSV': '📊 EXPORTAR CSV',
        'exportCSVUtf8': '📊 EXPORTAR CSV (UTF-8)',
        'print': '🖨 IMPRIMIR',
        'resetPassword': '🔑 ¿Olvidó contraseña?',
        'sendCode': 'Enviar código',
        'changePassword': 'Cambiar contraseña',
        'enterEmail': 'Email de registro',
        'enterCode': 'Código del email',
        'newPassword': 'Nueva contraseña',
        'codeSent': 'Código enviado',
        'privacy': '📄 Privacidad',
        'emailPlaceholder': 'Email',
        'passwordPlaceholder': 'Contraseña',
        'namePlaceholder': 'Nombre',
        'point': '🎾 Punto jugador {player}',
        'set_end': '🏆 Set {set} completado. Gana jugador {winner}',
        'set_start': '🎬 Set {set}. Saca jugador {server}',
        'serve_auto_change': '🔄 Cambio de saque. Saca jugador {server}',
        'serve_manual_change': '🖐️ Cambio manual. Saca jugador {server}',
        'side_change': '↔ Cambio de lado (set {set})',
        'accelerate_on': '⚡ Aceleración activada',
        'timeout_event': '⏸ Tiempo jugador {player}',
        'timeout_error': '❌ Sin tiempos',
        'warning_event': '⚠️ Advertencia jugador {player}',
        'yellow_event': '🟨 Tarjeta amarilla jugador {player}',
        'red_event': '🟥 TARJETA ROJA - descalificado!',
        'undo': '↩ Último punto anulado',
        'match_start': '🏓 Partido iniciado. Saca jugador {server}',
        'match_end_sporting': '🏁 Finalizado. Ganador: jugador {winner}. {sets}',
        'match_end_early': '🏁 Finalizado anticipado. Motivo: {reason}',
        'error_not_started': '❌ Partido no iniciado!',
        'error_finished': '❌ Partido finalizado',
        'exportTitle': 'Protocolo',
        'tournament': 'Torneo',
        'date': 'Fecha',
        'table': 'Mesa',
        'refereeName': 'Árbitro',
        'result': 'Resultado',
        'eventLogTitle': 'Registro',
        'time': 'Hora',
        'event': 'Evento',
        'score': 'Marcador',
        'vs': 'vs',
        'winner': 'Ganador',
        'endTime': 'Fin',
        'toss_winner': '🎲 Sorteo: gana jugador {winner}. Saca jugador {server}',
        'match_saved': '💾 Partido guardado',
        'saved_matches': 'Archivo'
    }
};

let currentLang = localStorage.getItem('app_language') || 'ru';

function t(key, params = {}) {
    let text = translations[currentLang][key];
    if (!text) text = translations['ru'][key] || key;
    let result = text;
    for (const [k, v] of Object.entries(params)) {
        result = result.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
    }
    return result;
}

function applyTranslations() {
    const trans = translations[currentLang];
    if (!trans) return;
    
    const authTabs = document.querySelectorAll('.auth-tab');
    if (authTabs.length >= 2) {
        authTabs[0].textContent = trans.login;
        authTabs[1].textContent = trans.register;
    }
    
    const elements = {
        'mainTitle': trans.appName,
        'authTitle': '🏓 ' + trans.appName,
        'doLogin': trans.loginBtn,
        'doRegister': trans.registerBtn,
        'logoutBtn': trans.logout,
        'player1Title': trans.player1Title,
        'player2Title': trans.player2Title,
        'serve1': '🎾 ' + trans.serve,
        'serve2': '🎾 ' + trans.serve,
        'resetMatch': trans.newMatch,
        'startMatch': trans.startMatch,
        'forceFinish': trans.finishMatch,
        'point1': trans.pointToPlayer1,
        'point2': trans.pointToPlayer2,
        'timeout1': trans.timeout,
        'timeout2': trans.timeout,
        'warning1': trans.warning,
        'warning2': trans.warning,
        'yellowCard1': trans.yellow,
        'yellowCard2': trans.yellow,
        'redCard1': trans.red,
        'redCard2': trans.red,
        'changeServe': trans.changeServe,
        'changeSide': trans.changeSide,
        'undoPoint': trans.undoPoint,
        'accelerate': trans.accelerate,
        'protocolTitle': trans.protocol,
        'refereeLabel': trans.referee,
        'startTimeLabel': trans.startTime,
        'currentTimeLabel': trans.currentTime,
        'statusLabel': trans.status,
        'eventLogTitle': trans.eventLog,
        'exportJSON': trans.exportJSON,
        'exportCSV': trans.exportCSV,
        'exportCSV_UTF8': trans.exportCSVUtf8,
        'printProtocol': trans.print,
        'forgotPasswordBtn': trans.resetPassword,
        'sendResetCode': trans.sendCode,
        'confirmReset': trans.changePassword
    };
    
    for (const [id, text] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el && el.tagName !== 'INPUT') {
            el.textContent = text;
        }
    }
    
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    const regName = document.getElementById('regName');
    const regEmail = document.getElementById('regEmail');
    const regPassword = document.getElementById('regPassword');
    const resetEmail = document.getElementById('resetEmail');
    const resetCode = document.getElementById('resetCode');
    const newPassword = document.getElementById('newPassword');
    
    if (loginEmail) loginEmail.placeholder = trans.emailPlaceholder;
    if (loginPassword) loginPassword.placeholder = trans.passwordPlaceholder;
    if (regName) regName.placeholder = trans.namePlaceholder;
    if (regEmail) regEmail.placeholder = trans.emailPlaceholder;
    if (regPassword) regPassword.placeholder = trans.passwordPlaceholder;
    if (resetEmail) resetEmail.placeholder = trans.emailPlaceholder;
    if (resetCode) resetCode.placeholder = trans.enterCode;
    if (newPassword) newPassword.placeholder = trans.newPassword;
    
    const privacyLink = document.querySelector('.auth-card a[href="privacy.html"]');
    if (privacyLink) privacyLink.textContent = trans.privacy;
    
    const resetModalTitle = document.querySelector('#resetPasswordModal h2');
    if (resetModalTitle) resetModalTitle.textContent = '🔑 ' + trans.resetPassword;
    
    const resetModalText = document.querySelector('#resetPasswordModal p');
    if (resetModalText) resetModalText.textContent = trans.enterEmail;
    
    const resetStep2Text = document.querySelector('#resetStep2 p');
    if (resetStep2Text) resetStep2Text.textContent = trans.codeSent;
    
    const statusEl = document.getElementById('matchStatus');
    if (statusEl && window.match) {
        if (!window.match.isStarted) statusEl.textContent = '● ' + trans.waiting;
        else if (window.match.isFinished) statusEl.textContent = '● ' + trans.finished;
        else statusEl.textContent = '● ' + trans.playing;
    }
    
    if (window.match && window.match.events) window.match.refreshEventLog();
}

// ==================== АВТОРИЗАЦИЯ ====================
class AuthSystem {
    constructor() {
        this.currentUser = null;
        this.users = JSON.parse(localStorage.getItem('pingpong_users') || '[]');
        this.init();
    }
    
    init() {
        const savedSession = localStorage.getItem('pingpong_session');
        if (savedSession) {
            const user = JSON.parse(savedSession);
            const found = this.users.find(u => u.email === user.email);
            if (found) {
                this.currentUser = found;
                this.showMainApp();
                return;
            }
        }
        this.showAuth();
    }
    
    register(name, email, password) {
        if (this.users.find(u => u.email === email)) {
            return { success: false, error: 'Email уже зарегистрирован' };
        }
        const encryptedPassword = btoa(password);
        const newUser = {
            id: Date.now(),
            name: name,
            email: email,
            password: encryptedPassword,
            createdAt: new Date().toISOString()
        };
        this.users.push(newUser);
        localStorage.setItem('pingpong_users', JSON.stringify(this.users));
        return { success: true, user: newUser };
    }
    
    login(email, password) {
        const encryptedPassword = btoa(password);
        const user = this.users.find(u => u.email === email && u.password === encryptedPassword);
        if (!user) return { success: false, error: 'Неверный email или пароль' };
        this.currentUser = user;
        localStorage.setItem('pingpong_session', JSON.stringify({ email: user.email }));
        return { success: true, user: user };
    }
    
    logout() {
        this.currentUser = null;
        localStorage.removeItem('pingpong_session');
        this.showAuth();
    }
    
    showAuth() {
        document.getElementById('authScreen').style.display = 'flex';
        document.getElementById('mainApp').style.display = 'none';
    }
    
    showMainApp() {
        document.getElementById('authScreen').style.display = 'none';
        document.getElementById('mainApp').style.display = 'block';
        document.getElementById('userNameDisplay').textContent = this.currentUser.name;
        
        initializeMatch();
        setupEventListeners();
        updateTime();
        if (window.timeInterval) clearInterval(window.timeInterval);
        window.timeInterval = setInterval(updateTime, 1000);
        loadSavedMatchesList();
    }
}

// ==================== КЛАСС МАТЧА ====================
class TableTennisMatch {
    constructor() {
        this.matchId = Date.now();
        this.startTime = null;
        this.endTime = null;
        this.isAccelerated = false;
        this.isFinished = false;
        this.isStarted = false;
        this.finishReason = null;
        this.currentServer = 1;
        this.currentSide = 1;
        this.pointsInCurrentServe = 0;
        this.events = [];
        this.players = { 
            1: { name: '', country: '', score: 0, sets: 0, warnings: [], timeouts: 0 }, 
            2: { name: '', country: '', score: 0, sets: 0, warnings: [], timeouts: 0 } 
        };
        this.currentSet = 1;
        this.setHistory = [];
        this.pointHistory = [];
        this.sideChangeLastSet = 0;
    }
    
    getEventDescription(eventKey, params) {
        return t(eventKey, params);
    }
    
    addEvent(eventKey, params = {}, player = null) {
        const description = this.getEventDescription(eventKey, params);
        this.events.push({
            id: this.events.length + 1,
            timestamp: new Date().toISOString(),
            time: new Date().toLocaleTimeString('ru-RU'),
            eventKey: eventKey,
            params: { ...params },
            description: description,
            player: player,
            set: this.currentSet,
            score: `${this.players[1].score}:${this.players[2].score}`,
            setsScore: `${this.players[1].sets}:${this.players[2].sets}`
        });
        this.refreshEventLog();
        return this.events[this.events.length - 1];
    }
    
    refreshEventLog() {
        const log = document.getElementById('eventLog');
        if (log) {
            const translatedEvents = this.events.map(e => ({
                ...e,
                description: this.getEventDescription(e.eventKey, e.params)
            }));
            
            log.innerHTML = translatedEvents.slice().reverse().slice(0, 30).map(e => 
                `<div style="padding:5px;border-bottom:1px solid #34495e;font-size:11px;">
                    <span style="color:#3498db;">[${e.time}]</span> 
                    <span style="color:#ecf0f1;">${e.description}</span>
                    <span style="color:#95a5a6;">(${e.score})</span>
                </div>`
            ).join('');
        }
    }
    
    startMatch(server = null) {
        if (this.isStarted) return false;
        this.isStarted = true;
        if (server !== null) this.currentServer = server;
        this.startTime = new Date().toLocaleTimeString('ru-RU');
        this.addEvent('match_start', { server: this.currentServer });
        document.getElementById('matchStatus').textContent = '● ' + t('playing');
        enableGameControls(true);
        this.updateServeIndicator();
        document.getElementById('saveMatch').disabled = false;
        return true;
    }
    
    isAlternateServe() { return this.players[1].score >= 10 && this.players[2].score >= 10; }
    
    updateDeuceIndicator() {
        const deuceDiv = document.getElementById('deuceIndicator');
        if (deuceDiv) {
            if (this.players[1].score >= 10 && this.players[2].score >= 10) {
                deuceDiv.style.display = 'block';
            } else {
                deuceDiv.style.display = 'none';
            }
        }
    }
    
    autoChangeServe() {
        if (!this.isStarted) return;
        this.pointsInCurrentServe++;
        let shouldChangeServe = this.isAlternateServe() || this.pointsInCurrentServe >= 2;
        if (shouldChangeServe) {
            this.currentServer = this.currentServer === 1 ? 2 : 1;
            this.pointsInCurrentServe = 0;
            this.addEvent('serve_auto_change', { server: this.currentServer }, this.currentServer);
            this.updateServeIndicator();
        }
    }
    
    addPoint(playerId) {
        if (!this.isStarted) { 
            alert(t('error_not_started'));
            return false; 
        }
        if (this.isFinished) { 
            alert(t('error_finished'));
            return false; 
        }
        
        this.players[playerId].score++;
        this.pointHistory.push({ player: playerId, time: new Date().toLocaleTimeString('ru-RU'), score: `${this.players[1].score}:${this.players[2].score}` });
        this.addEvent('point', { player: playerId }, playerId);
        this.autoChangeServe();
        this.updateDeuceIndicator();
        
        if (this.checkSetWinner()) this.endSet();
        if (this.checkMatchWinner()) {
            const winner = this.players[1].sets === 3 ? 1 : 2;
            this.endMatch('SPORTING', 'match_end_sporting', { winner: winner, sets: `${this.players[1].sets}:${this.players[2].sets}` });
        }
        updateUI();
        return true;
    }
    
    checkSetWinner() {
        const p1 = this.players[1].score, p2 = this.players[2].score;
        if (this.isAccelerated) return (p1 >= 11 || p2 >= 11) && Math.abs(p1 - p2) >= 2;
        return (p1 >= 11 || p2 >= 11) && Math.abs(p1 - p2) >= 2;
    }
    
    endSet() {
        const winner = this.players[1].score > this.players[2].score ? 1 : 2;
        this.players[winner].sets++;
        this.setHistory.push({ set: this.currentSet, winner, score: `${this.players[1].score}:${this.players[2].score}` });
        this.addEvent('set_end', { set: this.currentSet, winner: winner }, winner);
        this.players[1].score = 0; this.players[2].score = 0;
        
        // ПРАВИЛЬНАЯ СМЕНА СТОРОН: только после нечетных партий (1->2, 3->4)
        if (this.currentSet % 2 === 1) {
            this.changeSide();
        }
        
        this.currentSet++;
        this.currentServer = this.currentServer === 1 ? 2 : 1;
        this.pointsInCurrentServe = 0;
        this.addEvent('set_start', { set: this.currentSet, server: this.currentServer }, this.currentServer);
        this.updateDeuceIndicator();
        updateUI();
    }
    
    checkMatchWinner() { return this.players[1].sets === 3 || this.players[2].sets === 3; }
    
    endMatch(reason, eventKey, params) {
        if (this.isFinished) return;
        this.isFinished = true;
        this.endTime = new Date().toLocaleTimeString('ru-RU');
        this.finishReason = reason;
        this.addEvent(eventKey, params, null);
        document.getElementById('matchStatus').textContent = '● ' + t('finished');
        enableGameControls(false);
        document.getElementById('saveMatch').disabled = false;
    }
    
    forceFinish(reason) {
        const reasonMap = { 'INJURY': t('injury'), 'FORFEIT': t('forfeit'), 'TECHNICAL': t('technical') };
        this.endMatch(reason, 'match_end_early', { reason: reasonMap[reason] });
        updateUI();
        return true;
    }
    
    undoPoint() {
        if (!this.isStarted || this.isFinished || this.pointHistory.length === 0) return false;
        const lastPoint = this.pointHistory.pop();
        this.players[lastPoint.player].score--;
        this.pointsInCurrentServe--;
        if (this.pointsInCurrentServe < 0) { this.pointsInCurrentServe = 1; this.currentServer = this.currentServer === 1 ? 2 : 1; }
        this.addEvent('undo', {}, lastPoint.player);
        this.updateDeuceIndicator();
        updateUI();
        return true;
    }
    
    addWarning(playerId, type) {
        if (!this.isStarted || this.isFinished) return false;
        let eventKey = '';
        if (type === 'WARNING') eventKey = 'warning_event';
        if (type === 'YELLOW') eventKey = 'yellow_event';
        if (type === 'RED') eventKey = 'red_event';
        
        this.players[playerId].warnings.push({ type, time: new Date().toLocaleTimeString('ru-RU') });
        this.addEvent(eventKey, { player: playerId }, playerId);
        if (type === 'RED') { 
            this.endMatch('DISQUALIFICATION', 'red_event', { player: playerId }); 
            document.getElementById('matchStatus').textContent = '● ' + t('disqualified');
        }
        updateUI();
        return true;
    }
    
    addTimeout(playerId) {
        if (!this.isStarted || this.isFinished) return false;
        if (this.players[playerId].timeouts >= 1) { 
            this.addEvent('timeout_error', { player: playerId }, playerId);
            return false; 
        }
        this.players[playerId].timeouts++;
        this.addEvent('timeout_event', { player: playerId }, playerId);
        updateUI();
        return true;
    }
    
    changeServe() {
        if (!this.isStarted || this.isFinished) return false;
        this.currentServer = this.currentServer === 1 ? 2 : 1;
        this.pointsInCurrentServe = 0;
        this.addEvent('serve_manual_change', { server: this.currentServer }, this.currentServer);
        this.updateServeIndicator();
        updateUI();
        return true;
    }
    
    changeSide() { 
        if (!this.isStarted || this.isFinished) return false; 
        this.currentSide = this.currentSide === 1 ? 2 : 1; 
        this.addEvent('side_change', { set: this.currentSet }, null);
        updateUI();
        return true; 
    }
    
    accelerate() { 
        if (!this.isStarted || this.isFinished) return false; 
        if (!this.isAccelerated) { 
            this.isAccelerated = true; 
            this.addEvent('accelerate_on', {}); 
            updateUI();
        } 
        return true; 
    }
    
    updateServeIndicator() {
        const s1 = document.getElementById('serve1'), s2 = document.getElementById('serve2');
        if (this.isStarted && !this.isFinished) {
            if (this.currentServer === 1) { 
                if (s1) s1.style.display = 'inline-block'; 
                if (s2) s2.style.display = 'none'; 
            } else { 
                if (s1) s1.style.display = 'none'; 
                if (s2) s2.style.display = 'inline-block'; 
            }
        }
    }
    
    getExportData() {
        const exportedEvents = this.events.map(e => ({
            time: e.time,
            description: this.getEventDescription(e.eventKey, e.params),
            score: e.score
        }));
        
        return {
            matchId: this.matchId, 
            tournament: document.getElementById('tournamentName')?.value || '', 
            date: document.getElementById('matchDate')?.value || '',
            tableNumber: document.getElementById('tableNumber')?.value || '', 
            referee: document.getElementById('refereeName')?.value || '',
            startTime: this.startTime, 
            endTime: this.endTime, 
            isStarted: this.isStarted, 
            isFinished: this.isFinished,
            players: { 
                1: { name: this.players[1].name, country: this.players[1].country, sets: this.players[1].sets }, 
                2: { name: this.players[2].name, country: this.players[2].country, sets: this.players[2].sets } 
            },
            setHistory: this.setHistory,
            events: exportedEvents,
            savedAt: new Date().toISOString()
        };
    }
    
    saveToArchive() {
        const savedMatches = JSON.parse(localStorage.getItem('pingpong_saved_matches') || '[]');
        const matchData = this.getExportData();
        savedMatches.unshift(matchData);
        if (savedMatches.length > 50) savedMatches.pop();
        localStorage.setItem('pingpong_saved_matches', JSON.stringify(savedMatches));
        loadSavedMatchesList();
        alert(t('match_saved'));
    }
}

let match = null;
let auth = null;

function enableGameControls(enabled) {
    const ids = ['point1', 'point2', 'timeout1', 'timeout2', 'warning1', 'warning2', 'yellowCard1', 'yellowCard2', 'redCard1', 'redCard2', 'changeServe', 'changeSide', 'undoPoint', 'accelerate', 'forceFinish'];
    ids.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.disabled = !enabled;
    });
}

function initializeMatch() {
    if (!auth) return false;
    match = new TableTennisMatch();
    window.match = match;
    document.getElementById('startTime').textContent = '--:--:--';
    document.getElementById('deuceIndicator').style.display = 'none';
    
    const p1Name = document.getElementById('player1Name');
    const p2Name = document.getElementById('player2Name');
    const p1Country = document.getElementById('player1Country');
    const p2Country = document.getElementById('player2Country');
    
    if (p1Name) match.players[1].name = p1Name.value;
    if (p2Name) match.players[2].name = p2Name.value;
    if (p1Country) match.players[1].country = p1Country.value;
    if (p2Country) match.players[2].country = p2Country.value;
    
    document.getElementById('matchStatus').textContent = '● ' + t('waiting');
    updateUI();
    enableGameControls(false);
    document.getElementById('saveMatch').disabled = true;
    return true;
}

function showTossModal() {
    return new Promise((resolve) => {
        const modal = document.getElementById('tossModal');
        const coinDisplay = document.getElementById('coinDisplay');
        const tossResult = document.getElementById('tossResult');
        const doTossBtn = document.getElementById('doToss');
        const skipTossBtn = document.getElementById('skipToss');
        
        let isFlipping = false;
        
        const flipCoin = () => {
            if (isFlipping) return;
            isFlipping = true;
            coinDisplay.classList.add('coin-animation');
            setTimeout(() => {
                const result = Math.random() < 0.5 ? 1 : 2;
                coinDisplay.classList.remove('coin-animation');
                coinDisplay.textContent = result === 1 ? '🎾' : '🏓';
                tossResult.textContent = result === 1 ? 'Победил ИГРОК 1! Он выбирает право подачи.' : 'Победил ИГРОК 2! Он выбирает право подачи.';
                
                setTimeout(() => {
                    const serveChoice = confirm(result === 1 ? 'Игрок 1 выиграл жребий. Передать подачу Игроку 1?' : 'Игрок 2 выиграл жребий. Передать подачу Игроку 2?');
                    const server = serveChoice ? result : (result === 1 ? 2 : 1);
                    resolve(server);
                    modal.style.display = 'none';
                }, 500);
                isFlipping = false;
            }, 500);
        };
        
        doTossBtn.onclick = flipCoin;
        skipTossBtn.onclick = () => {
            resolve(1);
            modal.style.display = 'none';
        };
        
        modal.style.display = 'flex';
        coinDisplay.textContent = '🪙';
        tossResult.textContent = 'Кликните на монетку, чтобы подбросить';
    });
}

async function startMatchWithToss() {
    if (match.isStarted) return;
    const server = await showTossModal();
    match.startMatch(server);
    document.getElementById('startTime').textContent = match.startTime;
    updateUI();
}

function loadSavedMatchesList() {
    const savedMatches = JSON.parse(localStorage.getItem('pingpong_saved_matches') || '[]');
    const container = document.getElementById('savedMatchesList');
    if (!container) return;
    
    if (savedMatches.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666;">Нет сохраненных матчей</p>';
        return;
    }
    
    container.innerHTML = savedMatches.map((m, idx) => `
        <div class="saved-match-item" data-index="${idx}">
            <strong>${m.tournament || 'Турнир'}</strong><br>
            ${m.players[1].name} vs ${m.players[2].name}<br>
            <span class="match-date">📅 ${m.date || 'Дата не указана'} | 🏆 ${m.players[1].sets}:${m.players[2].sets}</span>
        </div>
    `).join('');
    
    document.querySelectorAll('.saved-match-item').forEach(item => {
        item.addEventListener('click', () => {
            const idx = parseInt(item.dataset.index);
            const matchData = savedMatches[idx];
            if (confirm('Загрузить этот матч? Текущий протокол будет потерян.')) {
                loadMatchFromArchive(matchData);
                document.getElementById('savedMatchesModal').style.display = 'none';
            }
        });
    });
}

function loadMatchFromArchive(data) {
    initializeMatch();
    match.matchId = data.matchId;
    match.startTime = data.startTime;
    match.endTime = data.endTime;
    match.isStarted = data.isStarted;
    match.isFinished = data.isFinished;
    match.players[1].sets = data.players[1].sets;
    match.players[2].sets = data.players[2].sets;
    match.players[1].name = data.players[1].name;
    match.players[2].name = data.players[2].name;
    match.players[1].country = data.players[1].country;
    match.players[2].country = data.players[2].country;
    match.events = data.events.map(e => ({ ...e, description: e.description }));
    match.setHistory = data.setHistory || [];
    
    document.getElementById('tournamentName').value = data.tournament || '';
    document.getElementById('matchDate').value = data.date || '';
    document.getElementById('tableNumber').value = data.tableNumber || '';
    document.getElementById('refereeName').value = data.referee || '';
    document.getElementById('startTime').textContent = data.startTime || '--:--:--';
    document.getElementById('player1Name').value = data.players[1].name;
    document.getElementById('player2Name').value = data.players[2].name;
    document.getElementById('player1Country').value = data.players[1].country || '';
    document.getElementById('player2Country').value = data.players[2].country || '';
    
    if (data.isStarted) {
        document.getElementById('matchStatus').textContent = '● ' + (data.isFinished ? t('finished') : t('playing'));
        enableGameControls(!data.isFinished);
        if (!data.isFinished) document.getElementById('saveMatch').disabled = false;
    }
    
    match.refreshEventLog();
    updateUI();
}

function setupEventListeners() {
    const startBtn = document.getElementById('startMatch');
    if (startBtn) startBtn.onclick = () => { if (!match.isStarted) startMatchWithToss(); };
    
    document.getElementById('point1').onclick = () => { match.addPoint(1); updateUI(); };
    document.getElementById('point2').onclick = () => { match.addPoint(2); updateUI(); };
    document.getElementById('undoPoint').onclick = () => { match.undoPoint(); updateUI(); };
    document.getElementById('timeout1').onclick = () => { match.addTimeout(1); updateUI(); };
    document.getElementById('timeout2').onclick = () => { match.addTimeout(2); updateUI(); };
    document.getElementById('warning1').onclick = () => { match.addWarning(1, 'WARNING'); updateUI(); };
    document.getElementById('warning2').onclick = () => { match.addWarning(2, 'WARNING'); updateUI(); };
    document.getElementById('yellowCard1').onclick = () => { match.addWarning(1, 'YELLOW'); updateUI(); };
    document.getElementById('yellowCard2').onclick = () => { match.addWarning(2, 'YELLOW'); updateUI(); };
    document.getElementById('redCard1').onclick = () => { match.addWarning(1, 'RED'); updateUI(); };
    document.getElementById('redCard2').onclick = () => { match.addWarning(2, 'RED'); updateUI(); };
    document.getElementById('changeServe').onclick = () => { match.changeServe(); updateUI(); };
    document.getElementById('changeSide').onclick = () => { match.changeSide(); updateUI(); };
    document.getElementById('accelerate').onclick = () => { match.accelerate(); updateUI(); };
    document.getElementById('forceFinish').onclick = () => showFinishDialog();
    document.getElementById('resetMatch').onclick = () => { if (confirm(t('cancel'))) initializeMatch(); };
    document.getElementById('saveMatch').onclick = () => { if (match) match.saveToArchive(); };
    document.getElementById('exportJSON').onclick = () => exportJSON();
    document.getElementById('exportCSV').onclick = () => exportCSV(false);
    document.getElementById('exportCSV_UTF8').onclick = () => exportCSV(true);
    document.getElementById('printProtocol').onclick = () => printProtocol();
    document.getElementById('showSavedMatches').onclick = () => {
        loadSavedMatchesList();
        document.getElementById('savedMatchesModal').style.display = 'flex';
    };
    document.getElementById('closeSavedModal').onclick = () => {
        document.getElementById('savedMatchesModal').style.display = 'none';
    };
    document.querySelector('.close-saved-modal')?.addEventListener('click', () => {
        document.getElementById('savedMatchesModal').style.display = 'none';
    });
    
    document.getElementById('player1Name').onchange = (e) => { if (match) match.players[1].name = e.target.value; updateUI(); };
    document.getElementById('player2Name').onchange = (e) => { if (match) match.players[2].name = e.target.value; updateUI(); };
    document.getElementById('player1Country').onchange = (e) => { if (match) match.players[1].country = e.target.value; };
    document.getElementById('player2Country').onchange = (e) => { if (match) match.players[2].country = e.target.value; };
}

function showFinishDialog() {
    const modal = document.createElement('div');
    modal.style.cssText = `position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);display:flex;justify-content:center;align-items:center;z-index:1000;`;
    modal.innerHTML = `<div style="background:white;padding:30px;border-radius:15px;max-width:400px;text-align:center;">
        <h2>⚠️ ${t('finishMatchTitle')}</h2>
        <p>${t('finishMatchText')}</p>
        <button id="finishInjury" style="width:100%;padding:12px;margin:10px 0;background:#e74c3c;color:white;border:none;border-radius:8px;cursor:pointer;">🏥 ${t('injury')}</button>
        <button id="finishForfeit" style="width:100%;padding:12px;margin:10px 0;background:#f39c12;color:white;border:none;border-radius:8px;cursor:pointer;">🚫 ${t('forfeit')}</button>
        <button id="finishTechnical" style="width:100%;padding:12px;margin:10px 0;background:#3498db;color:white;border:none;border-radius:8px;cursor:pointer;">🔧 ${t('technical')}</button>
        <button id="closeModal" style="width:100%;padding:12px;margin:10px 0;background:#95a5a6;color:white;border:none;border-radius:8px;cursor:pointer;">✖ ${t('cancel')}</button>
    </div>`;
    document.body.appendChild(modal);
    
    document.getElementById('finishInjury').onclick = () => { if (match) match.forceFinish('INJURY'); updateUI(); modal.remove(); };
    document.getElementById('finishForfeit').onclick = () => { if (match) match.forceFinish('FORFEIT'); updateUI(); modal.remove(); };
    document.getElementById('finishTechnical').onclick = () => { if (match) match.forceFinish('TECHNICAL'); updateUI(); modal.remove(); };
    document.getElementById('closeModal').onclick = () => modal.remove();
}

function updateUI() {
    if (!match) return;
    
    document.getElementById('score1').textContent = match.players[1].score;
    document.getElementById('score2').textContent = match.players[2].score;
    document.getElementById('sets1').textContent = match.players[1].sets;
    document.getElementById('sets2').textContent = match.players[2].sets;
    
    if (match.updateServeIndicator) match.updateServeIndicator();
    
    const last5Points1 = match.pointHistory.filter(p => p.player === 1).slice(-5);
    const last5Points2 = match.pointHistory.filter(p => p.player === 2).slice(-5);
    document.getElementById('history1').textContent = last5Points1.map(p => '●').join(' ');
    document.getElementById('history2').textContent = last5Points2.map(p => '●').join(' ');
    
    if (match.refreshEventLog) match.refreshEventLog();
    match.updateDeuceIndicator();
}

function updateTime() {
    const currentSpan = document.getElementById('currentTime');
    if (currentSpan) currentSpan.textContent = new Date().toLocaleTimeString('ru-RU');
}

function exportJSON() { 
    if (match) {
        const data = match.getExportData();
        downloadFile(JSON.stringify(data, null, 2), `match_${match.matchId}.json`, 'application/json'); 
    }
}

function exportCSV(utf8) {
    if (!match) return;
    const data = match.getExportData();
    let csv = `${t('tournament')},${t('date')},${t('table')},${t('refereeName')},${t('startTime')},${t('endTime')},${t('status')}\n`;
    csv += `"${data.tournament}","${data.date}","${data.tableNumber}","${data.referee}","${data.startTime || '-'}","${data.endTime || '-'}","${data.isFinished ? t('finished') : (data.isStarted ? t('playing') : t('waiting'))}"\n\n`;
    csv += `${t('player1Title')},${t('player2Title')},${t('winner')}\n`;
    csv += `"${data.players[1].name}","${data.players[2].name}","${data.players[1].sets > data.players[2].sets ? data.players[1].name : data.players[2].name}"\n\n`;
    csv += `${t('result')}: ${data.players[1].sets}:${data.players[2].sets}\n\n`;
    csv += `${t('time')},${t('event')},${t('score')}\n`;
    data.events.forEach(e => { csv += `"${e.time}","${e.description}","${e.score}"\n`; });
    
    if (utf8) downloadFile(new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' }), `match_${match.matchId}.csv`, 'text/csv;charset=utf-8;');
    else downloadFile(csv, `match_${match.matchId}.csv`, 'text/csv');
}

function printProtocol() {
    if (!match) return;
    const data = match.getExportData();
    const w = window.open('', '_blank');
    if (w) {
        w.document.write(`<html><head><title>Протокол матча</title><meta charset="UTF-8"><style>body{font-family:Arial;padding:20px}table{border-collapse:collapse;width:100%}th,td{border:1px solid #ddd;padding:8px}th{background:#f2f2f2}</style></head><body>
            <h1>Судейский протокол</h1>
            <p>Турнир: ${data.tournament} | Дата: ${data.date} | Стол: ${data.tableNumber} | Судья: ${data.referee}</p>
            <h2>Результат</h2>
            <p>${data.players[1].name} vs ${data.players[2].name} | Счет: ${data.players[1].sets}:${data.players[2].sets}</p>
            <h2>Журнал событий</h2>
            <table><th>Время</th><th>Событие</th><th>Счет</th></tr>
            ${data.events.map(e => `<tr><td>${e.time}</td><td>${e.description}</td><td>${e.score}</td></tr>`).join('')}
            </table>
        </body></html>`);
        w.document.close();
        w.print();
    }
}

function downloadFile(content, filename, mimeType) {
    const blob = content instanceof Blob ? content : new Blob([content], { type: mimeType });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
}

function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        localStorage.setItem('app_language', lang);
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('data-lang', lang);
        
        applyTranslations();
        
        const langNames = { ru: 'Русский', en: 'English', de: 'Deutsch', es: 'Español', it: 'Italiano', fr: 'Français', zh: '中文', pt: 'Português' };
        document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
            btn.innerHTML = `🌐 ${langNames[lang]}`;
        });
        
        if (match) {
            if (!match.isStarted) document.getElementById('matchStatus').textContent = '● ' + t('waiting');
            else if (match.isFinished) document.getElementById('matchStatus').textContent = '● ' + t('finished');
            else document.getElementById('matchStatus').textContent = '● ' + t('playing');
            match.refreshEventLog();
        }
    }
}

function showLanguageMenu() {
    const languages = [
        { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'it', name: 'Italiano', flag: '🇮🇹' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'zh', name: '中文', flag: '🇨🇳' },
        { code: 'pt', name: 'Português', flag: '🇵🇹' }
    ];
    
    const menu = document.createElement('div');
    menu.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:white;border-radius:15px;padding:20px;box-shadow:0 10px 40px rgba(0,0,0,0.3);z-index:2000;min-width:280px;`;
    menu.innerHTML = `<h3 style="margin-bottom:15px;text-align:center;">🌐 ${currentLang === 'ru' ? 'Выберите язык' : 'Select language'}</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            ${languages.map(lang => `<button class="lang-option" data-lang="${lang.code}" style="padding:10px;border:none;background:${currentLang === lang.code ? '#3498db' : '#f0f0f0'};color:${currentLang === lang.code ? 'white' : '#333'};border-radius:8px;cursor:pointer;text-align:center;">${lang.flag} ${lang.name}</button>`).join('')}
        </div>
        <button id="closeLangMenu" style="display:block;width:100%;padding:10px;margin-top:15px;border:none;background:#e74c3c;color:white;border-radius:8px;cursor:pointer;">✖ ${currentLang === 'ru' ? 'Закрыть' : 'Close'}</button>`;
    document.body.appendChild(menu);
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => { setLanguage(btn.dataset.lang); menu.remove(); });
    });
    document.getElementById('closeLangMenu').addEventListener('click', () => menu.remove());
}

// ==================== ИНИЦИАЛИЗАЦИЯ ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded fired');
    
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('data-lang', currentLang);
    
    window.auth = new AuthSystem();
    auth = window.auth;
    
    document.getElementById('doRegister').onclick = () => {
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        
        if (!name || !email || !password) {
            alert('Заполните все поля');
            return;
        }
        if (password.length < 4) {
            alert('Пароль должен быть не менее 4 символов');
            return;
        }
        
        const res = auth.register(name, email, password);
        if (res.success) {
            alert('Регистрация успешна! Теперь войдите.');
            document.querySelector('.auth-tab[data-tab="login"]').click();
            document.getElementById('loginEmail').value = email;
        } else {
            alert(res.error);
        }
    };
    
    document.getElementById('doLogin').onclick = () => {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const res = auth.login(email, password);
        if (res.success) {
            auth.showMainApp();
        } else {
            alert(res.error);
        }
    };
    
    document.getElementById('logoutBtn').onclick = () => auth.logout();
    
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.onclick = function() {
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const isLogin = this.dataset.tab === 'login';
            document.getElementById('loginForm').classList.toggle('active', isLogin);
            document.getElementById('registerForm').classList.toggle('active', !isLogin);
        };
    });
    
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.onclick = function() {
            const input = document.getElementById(this.dataset.target);
            if (input.type === 'password') {
                input.type = 'text';
                this.textContent = '🙈';
            } else {
                input.type = 'password';
                this.textContent = '👁️';
            }
        };
    });
    
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => btn.onclick = showLanguageMenu);
    
    const forgotBtn = document.getElementById('forgotPasswordBtn');
    const resetModal = document.getElementById('resetPasswordModal');
    const closeResetModal = document.querySelector('.close-reset-modal');
    const sendResetCodeBtn = document.getElementById('sendResetCode');
    const confirmResetBtn = document.getElementById('confirmReset');
    
    if (forgotBtn && resetModal) {
        forgotBtn.onclick = () => { resetModal.style.display = 'flex'; };
    }
    
    if (closeResetModal && resetModal) {
        closeResetModal.onclick = () => {
            resetModal.style.display = 'none';
            document.getElementById('resetStep2').style.display = 'none';
            document.getElementById('resetEmail').value = '';
            document.getElementById('resetCode').value = '';
            document.getElementById('newPassword').value = '';
        };
    }
    
    if (sendResetCodeBtn) {
        sendResetCodeBtn.onclick = () => {
            const email = document.getElementById('resetEmail').value;
            if (!email) {
                alert('Введите email');
                return;
            }
            const users = JSON.parse(localStorage.getItem('pingpong_users') || '[]');
            if (!users.find(u => u.email === email)) {
                alert('Пользователь с таким email не найден');
                return;
            }
            const code = Math.floor(100000 + Math.random() * 900000).toString();
            localStorage.setItem('reset_code_' + email, code);
            localStorage.setItem('reset_code_expiry_' + email, Date.now() + 15 * 60 * 1000);
            alert(`Демо-режим: Ваш код для сброса пароля: ${code}\nВ реальном приложении код придет на почту`);
            document.getElementById('resetStep2').style.display = 'block';
        };
    }
    
    if (confirmResetBtn) {
        confirmResetBtn.onclick = () => {
            const email = document.getElementById('resetEmail').value;
            const code = document.getElementById('resetCode').value;
            const newPassword = document.getElementById('newPassword').value;
            
            if (!code || !newPassword) {
                alert('Заполните все поля');
                return;
            }
            if (newPassword.length < 4) {
                alert('Пароль должен быть не менее 4 символов');
                return;
            }
            
            const savedCode = localStorage.getItem('reset_code_' + email);
            const expiry = localStorage.getItem('reset_code_expiry_' + email);
            
            if (!savedCode || !expiry) {
                alert('Код не найден. Запросите новый.');
                return;
            }
            if (Date.now() > parseInt(expiry)) {
                alert('Код истёк. Запросите новый.');
                return;
            }
            if (savedCode !== code) {
                alert('Неверный код');
                return;
            }
            
            const users = JSON.parse(localStorage.getItem('pingpong_users') || '[]');
            const userIndex = users.findIndex(u => u.email === email);
            if (userIndex !== -1) {
                users[userIndex].password = btoa(newPassword);
                localStorage.setItem('pingpong_users', JSON.stringify(users));
                localStorage.removeItem('reset_code_' + email);
                localStorage.removeItem('reset_code_expiry_' + email);
                alert('Пароль успешно изменён! Теперь войдите.');
                if (resetModal) resetModal.style.display = 'none';
                document.getElementById('resetStep2').style.display = 'none';
                document.getElementById('resetEmail').value = '';
                document.getElementById('resetCode').value = '';
                document.getElementById('newPassword').value = '';
                document.getElementById('loginEmail').value = email;
            }
        };
    }
    
    applyTranslations();
    updateTime();
    setInterval(updateTime, 1000);
});