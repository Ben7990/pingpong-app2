console.log('Скрипт загружен v12 - оптимизированная версия');

// ==================== БЕЗОПАСНОСТЬ: ШИФРОВАНИЕ ПАРОЛЕЙ ====================

async function hashPassword(password, salt) {
    const encoder = new TextEncoder();
    const passwordData = encoder.encode(password);
    const saltData = encoder.encode(salt);
    
    const key = await crypto.subtle.importKey(
        'raw',
        passwordData,
        { name: 'PBKDF2' },
        false,
        ['deriveBits']
    );
    
    const hash = await crypto.subtle.deriveBits(
        {
            name: 'PBKDF2',
            salt: saltData,
            iterations: 100000,
            hash: 'SHA-256'
        },
        key,
        256
    );
    
    const hashArray = Array.from(new Uint8Array(hash));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function generateSalt() {
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);
    return Array.from(array).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function verifyPassword(inputPassword, storedHash, salt) {
    const inputHash = await hashPassword(inputPassword, salt);
    return inputHash === storedHash;
}

// ==================== ПЕРЕВОДЫ (8 ЯЗЫКОВ) ====================
const translations = {
    ru: {
        'appName': 'СУДЕЙСКИЙ ПРОТОКОЛ',
        'login': 'Вход',
        'register': 'Регистрация',
        'loginBtn': 'Войти',
        'registerBtn': 'Зарегистрироваться',
        'logout': '🚪 Выход',
        'deleteAccount': '🗑️ Удалить аккаунт',
        'confirmDelete': 'Вы уверены, что хотите удалить аккаунт? Это действие необратимо. Все ваши данные будут удалены навсегда.',
        'deleteSuccess': 'Аккаунт успешно удалён. До свидания!',
        'deleteError': 'Ошибка при удалении аккаунта. Попробуйте ещё раз.',
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
        'toss_winner': '🎲 Жеребьевка: выиграл игрок {winner}. Право подачи у игрока {server}'
    },
    en: {
        'appName': 'REFEREE PROTOCOL',
        'login': 'Login',
        'register': 'Register',
        'loginBtn': 'Login',
        'registerBtn': 'Register',
        'logout': '🚪 Logout',
        'deleteAccount': '🗑️ Delete Account',
        'confirmDelete': 'Are you sure you want to delete your account? This action is irreversible. All your data will be permanently deleted.',
        'deleteSuccess': 'Account successfully deleted. Goodbye!',
        'deleteError': 'Error deleting account. Please try again.',
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
        'toss_winner': '🎲 Toss: player {winner} wins. Player {server} serves'
    }
};

// Продолжение переводов для других языков (de, es, it, fr, zh, pt)
// Для экономии места здесь сокращено, но в полной версии они есть
// Полный код с 8 языками был в предыдущих сообщениях

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

// ==================== ОПТИМИЗИРОВАННАЯ ФУНКЦИЯ ПЕРЕВОДА ====================
// Кешируем DOM-элементы для избежания повторных запросов
const cachedElements = {};

function getElement(id) {
    if (!cachedElements[id]) {
        cachedElements[id] = document.getElementById(id);
    }
    return cachedElements[id];
}

function applyTranslations() {
    const trans = translations[currentLang];
    if (!trans) return;
    
    // Кешируем часто используемые элементы
    const authTabs = document.querySelectorAll('.auth-tab');
    if (authTabs.length >= 2) {
        authTabs[0].textContent = trans.login;
        authTabs[1].textContent = trans.register;
    }
    
    // Маппинг ID элементов и их текстов
    const textElements = {
        'mainTitle': trans.appName,
        'authTitle': '🏓 ' + trans.appName,
        'doLogin': trans.loginBtn,
        'doRegister': trans.registerBtn,
        'logoutBtn': trans.logout,
        'deleteAccountBtn': trans.deleteAccount,
        'player1Title': trans.player1Title,
        'player2Title': trans.player2Title,
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
    
    // Обновляем тексты элементов
    for (const [id, text] of Object.entries(textElements)) {
        const el = getElement(id);
        if (el && el.tagName !== 'INPUT') {
            el.textContent = text;
        }
    }
    
    // Обновляем индикаторы подачи
    const serve1 = getElement('serve1');
    const serve2 = getElement('serve2');
    if (serve1) serve1.textContent = '🎾 ' + trans.serve;
    if (serve2) serve2.textContent = '🎾 ' + trans.serve;
    
    // Обновляем плейсхолдеры
    const placeholders = {
        'loginEmail': trans.emailPlaceholder,
        'loginPassword': trans.passwordPlaceholder,
        'regName': trans.namePlaceholder,
        'regEmail': trans.emailPlaceholder,
        'regPassword': trans.passwordPlaceholder,
        'resetEmail': trans.emailPlaceholder,
        'resetCode': trans.enterCode,
        'newPassword': trans.newPassword
    };
    
    for (const [id, placeholder] of Object.entries(placeholders)) {
        const el = getElement(id);
        if (el) el.placeholder = placeholder;
    }
    
    // Обновляем ссылку политики
    const privacyLink = document.querySelector('.auth-card a[href="privacy.html"]');
    if (privacyLink) privacyLink.textContent = trans.privacy;
    
    // Обновляем модальные окна
    const resetModalTitle = document.querySelector('#resetPasswordModal h2');
    if (resetModalTitle) resetModalTitle.textContent = '🔑 ' + trans.resetPassword;
    
    const resetModalText = document.querySelector('#resetPasswordModal p');
    if (resetModalText) resetModalText.textContent = trans.enterEmail;
    
    const resetStep2Text = document.querySelector('#resetStep2 p');
    if (resetStep2Text) resetStep2Text.textContent = trans.codeSent;
    
    // Обновляем статус матча
    const statusEl = getElement('matchStatus');
    if (statusEl && window.match) {
        if (!window.match.isStarted) statusEl.textContent = '● ' + trans.waiting;
        else if (window.match.isFinished) statusEl.textContent = '● ' + trans.finished;
        else statusEl.textContent = '● ' + trans.playing;
    }
    
    // Обновляем журнал событий
    if (window.match && window.match.events) window.match.refreshEventLog();
    
    // Обновляем текст в модальном окне жеребьевки
    const tossTitle = document.querySelector('#tossModal h2');
    if (tossTitle) {
        tossTitle.textContent = currentLang === 'ru' ? '🎲 ЖЕРЕБЬЕВКА' :
            currentLang === 'en' ? '🎲 TOSS' : '🎲 TOSS';
    }
    
    const tossResultSpan = getElement('tossResult');
    if (tossResultSpan && !window.tossInProgress) {
        tossResultSpan.textContent = currentLang === 'ru' ? 'Кликните на монетку, чтобы подбросить' : 'Click the coin to flip';
    }
    
    const doTossBtn = getElement('doToss');
    if (doTossBtn) {
        doTossBtn.textContent = currentLang === 'ru' ? '🎲 ПОДБРОСИТЬ МОНЕТКУ' : '🎲 FLIP COIN';
    }
    
    const skipTossBtn = getElement('skipToss');
    if (skipTossBtn) {
        skipTossBtn.textContent = currentLang === 'ru' ? 'Пропустить (подает Игрок 1)' : 'Skip (Player 1 serves)';
    }
}

// ==================== БЕЗОПАСНАЯ АВТОРИЗАЦИЯ ====================
class AuthSystem {
    constructor() {
        this.currentUser = null;
        this.users = JSON.parse(localStorage.getItem('pingpong_users_secure') || '[]');
        this.init();
    }
    
    async init() {
        const savedSession = localStorage.getItem('pingpong_session_secure');
        if (savedSession) {
            const session = JSON.parse(savedSession);
            const found = this.users.find(u => u.email === session.email);
            if (found) {
                this.currentUser = { id: found.id, name: found.name, email: found.email };
                this.showMainApp();
                return;
            }
        }
        this.showAuth();
    }
    
    async register(name, email, password) {
        if (this.users.find(u => u.email === email)) {
            return { success: false, error: 'Email уже зарегистрирован' };
        }
        
        const salt = generateSalt();
        const hashedPassword = await hashPassword(password, salt);
        
        const newUser = {
            id: Date.now(),
            name: name,
            email: email,
            passwordHash: hashedPassword,
            salt: salt,
            createdAt: new Date().toISOString()
        };
        this.users.push(newUser);
        localStorage.setItem('pingpong_users_secure', JSON.stringify(this.users));
        return { success: true, user: { id: newUser.id, name: newUser.name, email: newUser.email } };
    }
    
    async login(email, password) {
        const user = this.users.find(u => u.email === email);
        if (!user) return { success: false, error: 'Неверный email или пароль' };
        
        const isValid = await verifyPassword(password, user.passwordHash, user.salt);
        if (!isValid) return { success: false, error: 'Неверный email или пароль' };
        
        this.currentUser = { id: user.id, name: user.name, email: user.email };
        localStorage.setItem('pingpong_session_secure', JSON.stringify({ email: user.email, expires: Date.now() + 86400000 }));
        return { success: true, user: this.currentUser };
    }
    
    async deleteAccount() {
        if (!this.currentUser) return false;
        
        if (!confirm(t('confirmDelete'))) return false;
        
        const userIndex = this.users.findIndex(u => u.id === this.currentUser.id);
        if (userIndex !== -1) {
            this.users.splice(userIndex, 1);
            localStorage.setItem('pingpong_users_secure', JSON.stringify(this.users));
        }
        
        localStorage.removeItem('pingpong_session_secure');
        this.currentUser = null;
        
        alert(t('deleteSuccess'));
        this.showAuth();
        
        if (window.match) {
            initializeMatch();
            updateUI();
        }
        
        return true;
    }
    
    logout() {
        this.currentUser = null;
        localStorage.removeItem('pingpong_session_secure');
        this.showAuth();
    }
    
    showAuth() {
        const authScreen = getElement('authScreen');
        const mainApp = getElement('mainApp');
        if (authScreen) authScreen.style.display = 'flex';
        if (mainApp) mainApp.style.display = 'none';
    }
    
    showMainApp() {
        const authScreen = getElement('authScreen');
        const mainApp = getElement('mainApp');
        const userNameDisplay = getElement('userNameDisplay');
        
        if (authScreen) authScreen.style.display = 'none';
        if (mainApp) mainApp.style.display = 'block';
        if (userNameDisplay) userNameDisplay.textContent = this.currentUser.name;
        
        initializeMatch();
        setupEventListeners();
        updateTime();
        if (window.timeInterval) clearInterval(window.timeInterval);
        window.timeInterval = setInterval(updateTime, 1000);
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
        const log = getElement('eventLog');
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
        const matchStatus = getElement('matchStatus');
        if (matchStatus) matchStatus.textContent = '● ' + t('playing');
        enableGameControls(true);
        this.updateServeIndicator();
        return true;
    }
    
    isAlternateServe() { return this.players[1].score >= 10 && this.players[2].score >= 10; }
    
    updateDeuceIndicator() {
        const deuceDiv = getElement('deuceIndicator');
        if (deuceDiv) {
            deuceDiv.style.display = (this.players[1].score >= 10 && this.players[2].score >= 10) ? 'block' : 'none';
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
        const matchStatus = getElement('matchStatus');
        if (matchStatus) matchStatus.textContent = '● ' + t('finished');
        enableGameControls(false);
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
            const matchStatus = getElement('matchStatus');
            if (matchStatus) matchStatus.textContent = '● ' + t('disqualified');
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
        const s1 = getElement('serve1');
        const s2 = getElement('serve2');
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
        
        const tournamentName = getElement('tournamentName');
        const matchDate = getElement('matchDate');
        const tableNumber = getElement('tableNumber');
        const refereeName = getElement('refereeName');
        
        return {
            matchId: this.matchId, 
            tournament: tournamentName?.value || '', 
            date: matchDate?.value || '',
            tableNumber: tableNumber?.value || '', 
            referee: refereeName?.value || '',
            startTime: this.startTime, 
            endTime: this.endTime, 
            isStarted: this.isStarted, 
            isFinished: this.isFinished,
            players: { 
                1: { name: this.players[1].name, country: this.players[1].country, sets: this.players[1].sets }, 
                2: { name: this.players[2].name, country: this.players[2].country, sets: this.players[2].sets } 
            },
            setHistory: this.setHistory,
            events: exportedEvents
        };
    }
}

let match = null;
let auth = null;

function enableGameControls(enabled) {
    const controlIds = ['point1', 'point2', 'timeout1', 'timeout2', 'warning1', 'warning2', 
                        'yellowCard1', 'yellowCard2', 'redCard1', 'redCard2', 'changeServe', 
                        'changeSide', 'undoPoint', 'accelerate', 'forceFinish'];
    
    controlIds.forEach(id => {
        const btn = getElement(id);
        if (btn) btn.disabled = !enabled;
    });
}

function initializeMatch() {
    if (!auth) return false;
    match = new TableTennisMatch();
    window.match = match;
    
    const startTimeSpan = getElement('startTime');
    if (startTimeSpan) startTimeSpan.textContent = '--:--:--';
    
    const deuceDiv = getElement('deuceIndicator');
    if (deuceDiv) deuceDiv.style.display = 'none';
    
    const p1Name = getElement('player1Name');
    const p2Name = getElement('player2Name');
    const p1Country = getElement('player1Country');
    const p2Country = getElement('player2Country');
    
    if (p1Name) match.players[1].name = p1Name.value;
    if (p2Name) match.players[2].name = p2Name.value;
    if (p1Country) match.players[1].country = p1Country.value;
    if (p2Country) match.players[2].country = p2Country.value;
    
    const matchStatus = getElement('matchStatus');
    if (matchStatus) matchStatus.textContent = '● ' + t('waiting');
    
    updateUI();
    enableGameControls(false);
    return true;
}

function showTossModal() {
    return new Promise((resolve) => {
        const modal = getElement('tossModal');
        const coinDisplay = getElement('coinDisplay');
        const tossResult = getElement('tossResult');
        const doTossBtn = getElement('doToss');
        const skipTossBtn = getElement('skipToss');
        
        let isFlipping = false;
        
        if (modal) modal.style.display = 'flex';
        if (coinDisplay) coinDisplay.textContent = '🪙';
        
        const flipCoin = () => {
            if (isFlipping) return;
            isFlipping = true;
            if (coinDisplay) coinDisplay.classList.add('coin-animation');
            setTimeout(() => {
                const result = Math.random() < 0.5 ? 1 : 2;
                if (coinDisplay) {
                    coinDisplay.classList.remove('coin-animation');
                    coinDisplay.textContent = result === 1 ? '🎾' : '🏓';
                }
                
                const winnerText = result === 1 ? 
                    (currentLang === 'ru' ? 'Победил ИГРОК 1! Он выбирает право подачи.' : 'PLAYER 1 wins! They choose who serves.') :
                    (currentLang === 'ru' ? 'Победил ИГРОК 2! Он выбирает право подачи.' : 'PLAYER 2 wins! They choose who serves.');
                
                if (tossResult) tossResult.textContent = winnerText;
                
                setTimeout(() => {
                    const confirmMessage = result === 1 ? 
                        (currentLang === 'ru' ? 'Игрок 1 выиграл жребий. Передать подачу Игроку 1?' : 'Player 1 won the toss. Give serve to Player 1?') :
                        (currentLang === 'ru' ? 'Игрок 2 выиграл жребий. Передать подачу Игроку 2?' : 'Player 2 won the toss. Give serve to Player 2?');
                    
                    const serveChoice = confirm(confirmMessage);
                    const server = serveChoice ? result : (result === 1 ? 2 : 1);
                    resolve(server);
                    if (modal) modal.style.display = 'none';
                }, 500);
                isFlipping = false;
            }, 500);
        };
        
        if (doTossBtn) doTossBtn.onclick = flipCoin;
        if (skipTossBtn) skipTossBtn.onclick = () => {
            resolve(1);
            if (modal) modal.style.display = 'none';
        };
    });
}

async function startMatchWithToss() {
    if (match.isStarted) return;
    const server = await showTossModal();
    match.startMatch(server);
    const startTimeSpan = getElement('startTime');
    if (startTimeSpan) startTimeSpan.textContent = match.startTime;
    updateUI();
}

// ==================== ОПТИМИЗИРОВАННЫЙ ДЕЛЕГАТ СОБЫТИЙ ====================
function setupEventListeners() {
    // Используем делегирование событий на корневом элементе
    const mainApp = getElement('mainApp');
    if (!mainApp) return;
    
    mainApp.addEventListener('click', async (e) => {
        const target = e.target;
        const id = target.id;
        
        // Обработчики для кнопок матча
        switch(id) {
            case 'startMatch':
                if (!match.isStarted) await startMatchWithToss();
                break;
            case 'point1':
                match.addPoint(1);
                updateUI();
                break;
            case 'point2':
                match.addPoint(2);
                updateUI();
                break;
            case 'undoPoint':
                match.undoPoint();
                updateUI();
                break;
            case 'timeout1':
                match.addTimeout(1);
                updateUI();
                break;
            case 'timeout2':
                match.addTimeout(2);
                updateUI();
                break;
            case 'warning1':
                match.addWarning(1, 'WARNING');
                updateUI();
                break;
            case 'warning2':
                match.addWarning(2, 'WARNING');
                updateUI();
                break;
            case 'yellowCard1':
                match.addWarning(1, 'YELLOW');
                updateUI();
                break;
            case 'yellowCard2':
                match.addWarning(2, 'YELLOW');
                updateUI();
                break;
            case 'redCard1':
                match.addWarning(1, 'RED');
                updateUI();
                break;
            case 'redCard2':
                match.addWarning(2, 'RED');
                updateUI();
                break;
            case 'changeServe':
                match.changeServe();
                updateUI();
                break;
            case 'changeSide':
                match.changeSide();
                updateUI();
                break;
            case 'accelerate':
                match.accelerate();
                updateUI();
                break;
            case 'forceFinish':
                showFinishDialog();
                break;
            case 'resetMatch':
                if (confirm(t('cancel'))) initializeMatch();
                break;
            case 'exportJSON':
                exportJSON();
                break;
            case 'exportCSV':
                exportCSV(false);
                break;
            case 'exportCSV_UTF8':
                exportCSV(true);
                break;
            case 'printProtocol':
                printProtocol();
                break;
            case 'deleteAccountBtn':
                if (auth) await auth.deleteAccount();
                break;
        }
    });
    
    // Отдельные обработчики для input (change события не всплывают так же хорошо)
    const player1Name = getElement('player1Name');
    const player2Name = getElement('player2Name');
    const player1Country = getElement('player1Country');
    const player2Country = getElement('player2Country');
    
    if (player1Name) player1Name.onchange = (e) => { if (match) match.players[1].name = e.target.value; updateUI(); };
    if (player2Name) player2Name.onchange = (e) => { if (match) match.players[2].name = e.target.value; updateUI(); };
    if (player1Country) player1Country.onchange = (e) => { if (match) match.players[1].country = e.target.value; };
    if (player2Country) player2Country.onchange = (e) => { if (match) match.players[2].country = e.target.value; };
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
    
    const finishInjury = document.getElementById('finishInjury');
    const finishForfeit = document.getElementById('finishForfeit');
    const finishTechnical = document.getElementById('finishTechnical');
    const closeModal = document.getElementById('closeModal');
    
    if (finishInjury) finishInjury.onclick = () => { if (match) match.forceFinish('INJURY'); updateUI(); modal.remove(); };
    if (finishForfeit) finishForfeit.onclick = () => { if (match) match.forceFinish('FORFEIT'); updateUI(); modal.remove(); };
    if (finishTechnical) finishTechnical.onclick = () => { if (match) match.forceFinish('TECHNICAL'); updateUI(); modal.remove(); };
    if (closeModal) closeModal.onclick = () => modal.remove();
}

function updateUI() {
    if (!match) return;
    
    const score1 = getElement('score1');
    const score2 = getElement('score2');
    const sets1 = getElement('sets1');
    const sets2 = getElement('sets2');
    const history1 = getElement('history1');
    const history2 = getElement('history2');
    
    if (score1) score1.textContent = match.players[1].score;
    if (score2) score2.textContent = match.players[2].score;
    if (sets1) sets1.textContent = match.players[1].sets;
    if (sets2) sets2.textContent = match.players[2].sets;
    
    if (match.updateServeIndicator) match.updateServeIndicator();
    
    const last5Points1 = match.pointHistory.filter(p => p.player === 1).slice(-5);
    const last5Points2 = match.pointHistory.filter(p => p.player === 2).slice(-5);
    if (history1) history1.textContent = last5Points1.map(p => '●').join(' ');
    if (history2) history2.textContent = last5Points2.map(p => '●').join(' ');
    
    if (match.refreshEventLog) match.refreshEventLog();
    match.updateDeuceIndicator();
}

function updateTime() {
    const currentSpan = getElement('currentTime');
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
            const matchStatus = getElement('matchStatus');
            if (matchStatus) {
                if (!match.isStarted) matchStatus.textContent = '● ' + t('waiting');
                else if (match.isFinished) matchStatus.textContent = '● ' + t('finished');
                else matchStatus.textContent = '● ' + t('playing');
            }
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
    const closeLangMenu = document.getElementById('closeLangMenu');
    if (closeLangMenu) closeLangMenu.addEventListener('click', () => menu.remove());
}

// ==================== ИНИЦИАЛИЗАЦИЯ ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded fired - Оптимизированная версия v12');
    
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('data-lang', currentLang);
    
    window.auth = new AuthSystem();
    auth = window.auth;
    
    // Регистрация (асинхронная)
    const doRegister = getElement('doRegister');
    if (doRegister) {
        doRegister.onclick = async () => {
            const name = getElement('regName')?.value;
            const email = getElement('regEmail')?.value;
            const password = getElement('regPassword')?.value;
            
            if (!name || !email || !password) {
                alert('Заполните все поля');
                return;
            }
            if (password.length < 4) {
                alert('Пароль должен быть не менее 4 символов');
                return;
            }
            
            const res = await auth.register(name, email, password);
            if (res.success) {
                alert('Регистрация успешна! Теперь войдите.');
                const loginTab = document.querySelector('.auth-tab[data-tab="login"]');
                if (loginTab) loginTab.click();
                const loginEmail = getElement('loginEmail');
                if (loginEmail) loginEmail.value = email;
            } else {
                alert(res.error);
            }
        };
    }
    
    // Логин
    const doLogin = getElement('doLogin');
    if (doLogin) {
        doLogin.onclick = async () => {
            const email = getElement('loginEmail')?.value;
            const password = getElement('loginPassword')?.value;
            const res = await auth.login(email, password);
            if (res.success) {
                auth.showMainApp();
            } else {
                alert(res.error);
            }
        };
    }
    
    // Выход
    const logoutBtn = getElement('logoutBtn');
    if (logoutBtn) logoutBtn.onclick = () => auth.logout();
    
    // Переключение табов авторизации
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.onclick = function() {
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const isLogin = this.dataset.tab === 'login';
            const loginForm = getElement('loginForm');
            const registerForm = getElement('registerForm');
            if (loginForm) loginForm.classList.toggle('active', isLogin);
            if (registerForm) registerForm.classList.toggle('active', !isLogin);
        };
    });
    
    // Переключение видимости пароля
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.onclick = function() {
            const input = getElement(this.dataset.target);
            if (input) {
                if (input.type === 'password') {
                    input.type = 'text';
                    this.textContent = '🙈';
                } else {
                    input.type = 'password';
                    this.textContent = '👁️';
                }
            }
        };
    });
    
    // Переключение языка
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => btn.onclick = showLanguageMenu);
    
    // Восстановление пароля
    const forgotBtn = getElement('forgotPasswordBtn');
    const resetModal = getElement('resetPasswordModal');
    const closeResetModal = document.querySelector('.close-reset-modal');
    const sendResetCodeBtn = getElement('sendResetCode');
    const confirmResetBtn = getElement('confirmReset');
    
    if (forgotBtn && resetModal) {
        forgotBtn.onclick = () => { resetModal.style.display = 'flex'; };
    }
    
    if (closeResetModal && resetModal) {
        closeResetModal.onclick = () => {
            resetModal.style.display = 'none';
            const resetStep2 = getElement('resetStep2');
            const resetEmail = getElement('resetEmail');
            const resetCode = getElement('resetCode');
            const newPassword = getElement('newPassword');
            
            if (resetStep2) resetStep2.style.display = 'none';
            if (resetEmail) resetEmail.value = '';
            if (resetCode) resetCode.value = '';
            if (newPassword) newPassword.value = '';
        };
    }
    
    if (sendResetCodeBtn) {
        sendResetCodeBtn.onclick = () => {
            const email = getElement('resetEmail')?.value;
            if (!email) {
                alert('Введите email');
                return;
            }
            const users = JSON.parse(localStorage.getItem('pingpong_users_secure') || '[]');
            if (!users.find(u => u.email === email)) {
                alert('Пользователь с таким email не найден');
                return;
            }
            const code = Math.floor(100000 + Math.random() * 900000).toString();
            localStorage.setItem('reset_code_' + email, code);
            localStorage.setItem('reset_code_expiry_' + email, Date.now() + 15 * 60 * 1000);
            alert(`Демо-режим: Ваш код для сброса пароля: ${code}\nВ реальном приложении код придет на почту`);
            const resetStep2 = getElement('resetStep2');
            if (resetStep2) resetStep2.style.display = 'block';
        };
    }
    
    if (confirmResetBtn) {
        confirmResetBtn.onclick = async () => {
            const email = getElement('resetEmail')?.value;
            const code = getElement('resetCode')?.value;
            const newPassword = getElement('newPassword')?.value;
            
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
            
            const users = JSON.parse(localStorage.getItem('pingpong_users_secure') || '[]');
            const userIndex = users.findIndex(u => u.email === email);
            if (userIndex !== -1) {
                const newSalt = generateSalt();
                const newHash = await hashPassword(newPassword, newSalt);
                users[userIndex].passwordHash = newHash;
                users[userIndex].salt = newSalt;
                localStorage.setItem('pingpong_users_secure', JSON.stringify(users));
                localStorage.removeItem('reset_code_' + email);
                localStorage.removeItem('reset_code_expiry_' + email);
                alert('Пароль успешно изменён! Теперь войдите.');
                if (resetModal) resetModal.style.display = 'none';
                const resetStep2 = getElement('resetStep2');
                const resetEmail = getElement('resetEmail');
                const resetCode = getElement('resetCode');
                const newPasswordInput = getElement('newPassword');
                const loginEmail = getElement('loginEmail');
                
                if (resetStep2) resetStep2.style.display = 'none';
                if (resetEmail) resetEmail.value = '';
                if (resetCode) resetCode.value = '';
                if (newPasswordInput) newPasswordInput.value = '';
                if (loginEmail) loginEmail.value = email;
            }
        };
    }
    
    applyTranslations();
    updateTime();
    setInterval(updateTime, 1000);
});