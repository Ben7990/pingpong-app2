console.log('Скрипт загружен');

// ==================== ПЕРЕВОДЫ (упрощённые для проверки) ====================
const translations = {
    ru: {
        'appName': 'СУДЕЙСКИЙ ПРОТОКОЛ',
        'login': 'Вход',
        'register': 'Регистрация',
        'loginBtn': 'Войти',
        'registerBtn': 'Зарегистрироваться',
        'logout': '🚪 Выход',
        'support': '🙏 Поддержать',
        'waiting': 'ОЖИДАНИЕ НАЧАЛА',
        'playing': 'В ИГРЕ',
        'finished': 'ЗАВЕРШЕН',
        'disqualified': 'ДИСКВАЛИФИКАЦИЯ',
        'limitWarning': '⚠️ У вас осталось ',
        'limitWarning2': ' матчей. Поддержите проект!',
        'cancel': 'Отмена',
        'injury': 'Травма',
        'forfeit': 'Неявка',
        'technical': 'Техпроблема',
        'finishMatchTitle': 'Завершение матча',
        'finishMatchText': 'Выберите причину:'
    },
    en: {
        'appName': 'REFEREE PROTOCOL',
        'login': 'Login',
        'register': 'Register',
        'loginBtn': 'Login',
        'registerBtn': 'Register',
        'logout': '🚪 Logout',
        'support': '🙏 Support',
        'waiting': 'WAITING',
        'playing': 'PLAYING',
        'finished': 'FINISHED',
        'disqualified': 'DISQUALIFIED',
        'limitWarning': '⚠️ You have ',
        'limitWarning2': ' matches left. Support the project!',
        'cancel': 'Cancel',
        'injury': 'Injury',
        'forfeit': 'Forfeit',
        'technical': 'Technical',
        'finishMatchTitle': 'Finish Match',
        'finishMatchText': 'Select reason:'
    }
};

let currentLang = localStorage.getItem('app_language') || 'ru';

function t(key, params = {}) {
    const text = translations[currentLang][key] || translations['ru'][key] || key;
    let result = text;
    for (const [k, v] of Object.entries(params)) {
        result = result.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
    }
    return result;
}

function applyTranslations() {
    const elements = {
        'mainTitle': t('appName'),
        'authTitle': '🏓 ' + t('appName'),
        'loginTab': t('login'),
        'registerTab': t('register'),
        'doLogin': t('loginBtn'),
        'doRegister': t('registerBtn'),
        'logoutBtn': t('logout'),
        'subscriptionBtn': t('support'),
        'upgradeFromBanner': t('support')
    };
    
    for (const [id, text] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    }
    
    const statusEl = document.getElementById('matchStatus');
    if (statusEl && window.match && window.match) {
        const status = statusEl.textContent.replace('● ', '');
        const statusMap = { 'ОЖИДАНИЕ НАЧАЛА': t('waiting'), 'В ИГРЕ': t('playing'), 'ЗАВЕРШЕН': t('finished'), 'ДИСКВАЛИФИКАЦИЯ': t('disqualified') };
        statusEl.textContent = '● ' + (statusMap[status] || status);
    }
}

function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        localStorage.setItem('app_language', lang);
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('data-lang', lang);
        applyTranslations();
        const langNames = { ru: 'Русский', en: 'English' };
        document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
            btn.innerHTML = `🌐 ${langNames[lang]}`;
        });
        if (window.match && window.match.events) {
            updateEventLog();
        }
    }
}

function showLanguageMenu() {
    const languages = [
        { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        { code: 'en', name: 'English', flag: '🇬🇧' }
    ];
    
    const menu = document.createElement('div');
    menu.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:white;border-radius:15px;padding:20px;box-shadow:0 10px 40px rgba(0,0,0,0.3);z-index:2000;min-width:200px;`;
    menu.innerHTML = `<h3 style="margin-bottom:15px;text-align:center;">🌐 Выберите язык</h3>
        ${languages.map(lang => `<button class="lang-option" data-lang="${lang.code}" style="display:block;width:100%;padding:12px;margin:5px 0;border:none;background:${currentLang === lang.code ? '#3498db' : '#f0f0f0'};color:${currentLang === lang.code ? 'white' : '#333'};border-radius:8px;cursor:pointer;">${lang.flag} ${lang.name}</button>`).join('')}
        <button id="closeLangMenu" style="display:block;width:100%;padding:10px;margin-top:10px;border:none;background:#e74c3c;color:white;border-radius:8px;cursor:pointer;">✖ Закрыть</button>`;
    document.body.appendChild(menu);
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => { setLanguage(btn.dataset.lang); menu.remove(); });
    });
    document.getElementById('closeLangMenu').addEventListener('click', () => menu.remove());
}

// ==================== АВТОРИЗАЦИЯ ====================
class AuthSystem {
    constructor() {
        this.currentUser = null;
        this.users = JSON.parse(localStorage.getItem('pingpong_users') || '[]');
        this.init();
    }
    
    init() {
        console.log('AuthSystem.init() started');
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
            isPro: false,
            matchesUsed: 0,
            matchesLimit: 99,
            createdAt: new Date().toISOString()
        };
        this.users.push(newUser);
        localStorage.setItem('pingpong_users', JSON.stringify(this.users));
        return { success: true, user: newUser };
    }
    
    login(email, password) {
        const encryptedPassword = btoa(password);
        const user = this.users.find(u => u.email === email && u.password === encryptedPassword);
        if (!user) {
            return { success: false, error: 'Неверный email или пароль' };
        }
        this.currentUser = user;
        localStorage.setItem('pingpong_session', JSON.stringify({ email: user.email }));
        return { success: true, user: user };
    }
    
    logout() {
        this.currentUser = null;
        localStorage.removeItem('pingpong_session');
        this.showAuth();
    }
    
    canStartNewMatch() {
        if (!this.currentUser) return false;
        return (this.currentUser.matchesUsed || 0) < (this.currentUser.matchesLimit || 99);
    }
    
    incrementMatchesUsed() {
        if (!this.currentUser) return false;
        this.currentUser.matchesUsed++;
        const userIndex = this.users.findIndex(u => u.id === this.currentUser.id);
        if (userIndex !== -1) this.users[userIndex] = this.currentUser;
        localStorage.setItem('pingpong_users', JSON.stringify(this.users));
        return true;
    }
    
    getMatchesLeft() {
        if (!this.currentUser) return 0;
        const limit = this.currentUser.matchesLimit || 99;
        const used = this.currentUser.matchesUsed || 0;
        return Math.max(0, limit - used);
    }
    
    isPro() { return false; }
    
    updateMatchesDisplay() {
        const matchesLeft = this.getMatchesLeft();
        const display = document.getElementById('matchesCountDisplay');
        if (display) display.textContent = `🎾 ${matchesLeft}/99`;
    }
    
    showAuth() {
        document.getElementById('authScreen').style.display = 'flex';
        document.getElementById('mainApp').style.display = 'none';
    }
    
    showMainApp() {
        console.log('showMainApp called');
        document.getElementById('authScreen').style.display = 'none';
        document.getElementById('mainApp').style.display = 'block';
        document.getElementById('userNameDisplay').textContent = this.currentUser.name;
        this.updateMatchesDisplay();
        
        // Показываем баннер
        const banner = document.getElementById('freeBanner');
        if (banner) banner.style.display = 'flex';
        
        // Инициализируем матч
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
        this.players = { 1: { name: '', country: '', score: 0, sets: 0, warnings: [], timeouts: 0 }, 2: { name: '', country: '', score: 0, sets: 0, warnings: [], timeouts: 0 } };
        this.currentSet = 1;
        this.setHistory = [];
        this.pointHistory = [];
    }
    
    logEvent(eventKey, params = {}, player = null) {
        this.events.push({ 
            id: this.events.length + 1, 
            timestamp: new Date().toISOString(), 
            time: new Date().toLocaleTimeString('ru-RU'), 
            eventKey: eventKey,
            params: params,
            player: player, 
            set: this.currentSet, 
            score: `${this.players[1].score}:${this.players[2].score}`, 
            setsScore: `${this.players[1].sets}:${this.players[2].sets}` 
        });
        updateEventLog();
        return this.events[this.events.length - 1];
    }
    
    getEventDescription(event) {
        if (event.eventKey === 'point') return `🎾 Очко заработал игрок ${event.params.player} (${event.score})`;
        if (event.eventKey === 'set_end') return `🏆 Партия ${event.params.set} завершена. Победил игрок ${event.params.winner}`;
        if (event.eventKey === 'set_start') return `🎬 Начало ${event.params.set}-й партии. Подает игрок ${event.params.server}`;
        if (event.eventKey === 'serve_auto_change') return `🔄 Автоматическая смена подачи. Теперь подает игрок ${event.params.server}`;
        if (event.eventKey === 'serve_manual_change') return `🖐️ Ручная смена подачи. Теперь подает игрок ${event.params.server}`;
        if (event.eventKey === 'side_change') return `↔ Смена сторон`;
        if (event.eventKey === 'accelerate_on') return `⚡ Включена система ускорения`;
        if (event.eventKey === 'timeout') return `⏸ Тайм-аут взят игроком ${event.params.player}`;
        if (event.eventKey === 'timeout_error') return `❌ У игрока ${event.params.player} нет тайм-аутов`;
        if (event.eventKey === 'warning') return `⚠️ Предупреждение игроку ${event.params.player}`;
        if (event.eventKey === 'yellow') return `🟨 Желтая карточка игроку ${event.params.player}`;
        if (event.eventKey === 'red') return `🟥 КРАСНАЯ КАРТОЧКА игроку ${event.params.player} - дисквалификация!`;
        if (event.eventKey === 'undo') return `↩ Отмена последнего очка`;
        if (event.eventKey === 'match_start') return `🏓 Матч официально начат`;
        if (event.eventKey === 'match_end_sporting') return `🏁 Матч завершен. Победитель: игрок ${event.params.winner}. Счет: ${event.params.sets}`;
        if (event.eventKey === 'match_end_early') return `🏁 Матч завершен досрочно. Причина: ${event.params.reason}`;
        if (event.eventKey === 'error_not_started') return `❌ Матч еще не начат! Нажмите "НАЧАТЬ МАТЧ"`;
        if (event.eventKey === 'error_finished') return `❌ Матч завершен, очки не начисляются`;
        return event.eventKey;
    }
    
    startMatch() {
        if (this.isStarted) return false;
        this.isStarted = true;
        this.startTime = new Date().toLocaleTimeString('ru-RU');
        this.logEvent('match_start', {});
        document.getElementById('matchStatus').textContent = '● ' + t('playing');
        enableGameControls(true);
        return true;
    }
    
    isAlternateServe() { return this.players[1].score >= 10 && this.players[2].score >= 10; }
    
    autoChangeServe() {
        if (!this.isStarted) return;
        this.pointsInCurrentServe++;
        let shouldChangeServe = this.isAlternateServe() || this.pointsInCurrentServe >= 2;
        if (shouldChangeServe) {
            this.currentServer = this.currentServer === 1 ? 2 : 1;
            this.pointsInCurrentServe = 0;
            this.logEvent('serve_auto_change', { server: this.currentServer }, this.currentServer);
            this.updateServeIndicator();
        }
    }
    
    addPoint(playerId) {
        if (!this.isStarted) { 
            alert('Сначала нажмите НАЧАТЬ МАТЧ');
            return false; 
        }
        if (this.isFinished) { 
            alert('Матч завершен');
            return false; 
        }
        
        this.players[playerId].score++;
        this.pointHistory.push({ player: playerId, time: new Date().toLocaleTimeString('ru-RU'), score: `${this.players[1].score}:${this.players[2].score}` });
        this.logEvent('point', { player: playerId }, playerId);
        this.autoChangeServe();
        
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
        this.logEvent('set_end', { set: this.currentSet, winner: winner }, winner);
        this.players[1].score = 0; this.players[2].score = 0;
        this.currentSet++;
        this.currentServer = this.currentServer === 1 ? 2 : 1;
        this.pointsInCurrentServe = 0;
        this.changeSide();
        this.logEvent('set_start', { set: this.currentSet, server: this.currentServer }, this.currentServer);
        updateUI();
    }
    
    checkMatchWinner() { return this.players[1].sets === 3 || this.players[2].sets === 3; }
    
    endMatch(reason, eventKey, params) {
        if (this.isFinished) return;
        this.isFinished = true;
        this.endTime = new Date().toLocaleTimeString('ru-RU');
        this.finishReason = reason;
        this.logEvent(eventKey, params, null);
        document.getElementById('matchStatus').textContent = '● ' + t('finished');
        enableGameControls(false);
        if (window.auth && !window.auth.isPro() && this.isStarted) {
            window.auth.incrementMatchesUsed();
            window.auth.updateMatchesDisplay();
        }
    }
    
    forceFinish(reason) {
        const reasonMap = { 'INJURY': 'Травма игрока', 'FORFEIT': 'Неявка/отказ', 'TECHNICAL': 'Техническая проблема' };
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
        this.logEvent('undo', {}, lastPoint.player);
        updateUI();
        return true;
    }
    
    addWarning(playerId, type) {
        if (!this.isStarted || this.isFinished) return false;
        let eventKey = '';
        if (type === 'WARNING') eventKey = 'warning';
        if (type === 'YELLOW') eventKey = 'yellow';
        if (type === 'RED') eventKey = 'red';
        
        this.players[playerId].warnings.push({ type, time: new Date().toLocaleTimeString('ru-RU') });
        this.logEvent(eventKey, { player: playerId }, playerId);
        if (type === 'RED') { 
            this.endMatch('DISQUALIFICATION', 'red', { player: playerId }); 
            document.getElementById('matchStatus').textContent = '● ' + t('disqualified');
        }
        updateUI();
        return true;
    }
    
    addTimeout(playerId) {
        if (!this.isStarted || this.isFinished) return false;
        if (this.players[playerId].timeouts >= 1) { 
            this.logEvent('timeout_error', { player: playerId }, playerId);
            return false; 
        }
        this.players[playerId].timeouts++;
        this.logEvent('timeout', { player: playerId }, playerId);
        updateUI();
        return true;
    }
    
    changeServe() {
        if (!this.isStarted || this.isFinished) return false;
        this.currentServer = this.currentServer === 1 ? 2 : 1;
        this.pointsInCurrentServe = 0;
        this.logEvent('serve_manual_change', { server: this.currentServer }, this.currentServer);
        this.updateServeIndicator();
        updateUI();
        return true;
    }
    
    changeSide() { 
        if (!this.isStarted || this.isFinished) return false; 
        this.currentSide = this.currentSide === 1 ? 2 : 1; 
        this.logEvent('side_change', {}); 
        updateUI();
        return true; 
    }
    
    accelerate() { 
        if (!this.isStarted || this.isFinished) return false; 
        if (!this.isAccelerated) { 
            this.isAccelerated = true; 
            this.logEvent('accelerate_on', {}); 
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
            description: this.getEventDescription(e),
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
            players: { 1: { name: this.players[1].name, sets: this.players[1].sets }, 2: { name: this.players[2].name, sets: this.players[2].sets } },
            events: exportedEvents
        };
    }
}

let match = null;
let auth = null;

function enableGameControls(enabled) {
    const ids = ['point1', 'point2', 'timeout1', 'timeout2', 'warning1', 'warning2', 'yellowCard1', 'yellowCard2', 'redCard1', 'redCard2', 'changeServe', 'changeSide', 'undoPoint', 'accelerate', 'forceFinish'];
    ids.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) { btn.disabled = !enabled; }
    });
}

function initializeMatch() {
    console.log('initializeMatch called');
    if (!auth) {
        console.error('auth is null!');
        return false;
    }
    if (!auth.canStartNewMatch() && !auth.isPro()) {
        alert('Вы использовали все бесплатные матчи. Поддержите проект!');
        return false;
    }
    match = new TableTennisMatch();
    document.getElementById('startTime').textContent = '--:--:--';
    
    const p1Name = document.getElementById('player1Name');
    const p2Name = document.getElementById('player2Name');
    if (p1Name) match.players[1].name = p1Name.value;
    if (p2Name) match.players[2].name = p2Name.value;
    
    document.getElementById('matchStatus').textContent = '● ' + t('waiting');
    updateUI();
    enableGameControls(false);
    return true;
}

function setupEventListeners() {
    console.log('setupEventListeners called');
    
    const startBtn = document.getElementById('startMatch');
    if (startBtn) startBtn.onclick = () => { if (!match.isStarted) { match.startMatch(); document.getElementById('startTime').textContent = match.startTime; updateUI(); } };
    
    const p1Btn = document.getElementById('point1');
    if (p1Btn) p1Btn.onclick = () => { match.addPoint(1); updateUI(); };
    
    const p2Btn = document.getElementById('point2');
    if (p2Btn) p2Btn.onclick = () => { match.addPoint(2); updateUI(); };
    
    const undoBtn = document.getElementById('undoPoint');
    if (undoBtn) undoBtn.onclick = () => { match.undoPoint(); updateUI(); };
    
    const t1Btn = document.getElementById('timeout1');
    if (t1Btn) t1Btn.onclick = () => { match.addTimeout(1); updateUI(); };
    
    const t2Btn = document.getElementById('timeout2');
    if (t2Btn) t2Btn.onclick = () => { match.addTimeout(2); updateUI(); };
    
    const w1Btn = document.getElementById('warning1');
    if (w1Btn) w1Btn.onclick = () => { match.addWarning(1, 'WARNING'); updateUI(); };
    
    const w2Btn = document.getElementById('warning2');
    if (w2Btn) w2Btn.onclick = () => { match.addWarning(2, 'WARNING'); updateUI(); };
    
    const y1Btn = document.getElementById('yellowCard1');
    if (y1Btn) y1Btn.onclick = () => { match.addWarning(1, 'YELLOW'); updateUI(); };
    
    const y2Btn = document.getElementById('yellowCard2');
    if (y2Btn) y2Btn.onclick = () => { match.addWarning(2, 'YELLOW'); updateUI(); };
    
    const r1Btn = document.getElementById('redCard1');
    if (r1Btn) r1Btn.onclick = () => { match.addWarning(1, 'RED'); updateUI(); };
    
    const r2Btn = document.getElementById('redCard2');
    if (r2Btn) r2Btn.onclick = () => { match.addWarning(2, 'RED'); updateUI(); };
    
    const csBtn = document.getElementById('changeServe');
    if (csBtn) csBtn.onclick = () => { match.changeServe(); updateUI(); };
    
    const csdBtn = document.getElementById('changeSide');
    if (csdBtn) csdBtn.onclick = () => { match.changeSide(); updateUI(); };
    
    const accBtn = document.getElementById('accelerate');
    if (accBtn) accBtn.onclick = () => { match.accelerate(); updateUI(); };
    
    const ffBtn = document.getElementById('forceFinish');
    if (ffBtn) ffBtn.onclick = () => showFinishDialog();
    
    const resetBtn = document.getElementById('resetMatch');
    if (resetBtn) resetBtn.onclick = () => { if (confirm('Сбросить матч?')) initializeMatch(); };
    
    const jsonBtn = document.getElementById('exportJSON');
    if (jsonBtn) jsonBtn.onclick = () => exportJSON();
    
    const csvBtn = document.getElementById('exportCSV');
    if (csvBtn) csvBtn.onclick = () => exportCSV(false);
    
    const csvUtf8Btn = document.getElementById('exportCSV_UTF8');
    if (csvUtf8Btn) csvUtf8Btn.onclick = () => exportCSV(true);
    
    const printBtn = document.getElementById('printProtocol');
    if (printBtn) printBtn.onclick = () => printProtocol();
    
    const p1Name = document.getElementById('player1Name');
    if (p1Name) p1Name.onchange = (e) => { if (match) match.players[1].name = e.target.value; updateUI(); };
    
    const p2Name = document.getElementById('player2Name');
    if (p2Name) p2Name.onchange = (e) => { if (match) match.players[2].name = e.target.value; updateUI(); };
}

function showFinishDialog() {
    const modal = document.createElement('div');
    modal.style.cssText = `position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);display:flex;justify-content:center;align-items:center;z-index:1000;`;
    modal.innerHTML = `<div style="background:white;padding:30px;border-radius:15px;max-width:400px;text-align:center;">
        <h2 style="margin-bottom:20px;color:#e74c3c;">⚠️ ${t('finishMatchTitle')}</h2>
        <p style="margin-bottom:20px;">${t('finishMatchText')}</p>
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
    
    updateEventLog();
}

function updateEventLog() {
    if (!match) return;
    const log = document.getElementById('eventLog');
    if (log) {
        log.innerHTML = match.events.slice().reverse().slice(0, 20).map(e => {
            const description = match.getEventDescription(e);
            return `<div style="padding:5px;border-bottom:1px solid #34495e;font-size:11px;">
                <span style="color:#3498db;">[${e.time}]</span> 
                <span style="color:#ecf0f1;">${description}</span>
                <span style="color:#95a5a6;">(${e.score})</span>
            </div>`;
        }).join('');
    }
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
    let csv = `Турнир,Дата,Стол,Судья,Время начала,Время окончания,Статус\n"${data.tournament}","${data.date}","${data.tableNumber}","${data.referee}","${data.startTime || '-'}","${data.endTime || '-'}","${data.isFinished ? 'Завершен' : (data.isStarted ? 'В процессе' : 'Не начат')}"\n\n`;
    csv += `Игрок 1,Игрок 2,Победитель\n"${data.players[1].name}","${data.players[2].name}","${data.players[1].sets > data.players[2].sets ? data.players[1].name : data.players[2].name}"\n\n`;
    csv += `Счет по партиям: ${data.players[1].sets}:${data.players[2].sets}\n\nВремя,Событие,Счет\n`;
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
            ${data.events.map(e => `<tr><td>${e.time}</td><td>${e.description}</td><td>${e.score}</tr></tr>`).join('')}
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

function openBoosty() {
    window.open('https://boosty.to/ben7990', '_blank');
}

// ==================== ИНИЦИАЛИЗАЦИЯ ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded fired');
    
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('data-lang', currentLang);
    
    // Создаем глобальный объект auth
    window.auth = new AuthSystem();
    auth = window.auth;
    
    // Настройка кнопок авторизации
    const regBtn = document.getElementById('doRegister');
    if (regBtn) {
        regBtn.onclick = () => {
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
    }
    
    const loginBtn = document.getElementById('doLogin');
    if (loginBtn) {
        loginBtn.onclick = () => {
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const res = auth.login(email, password);
            if (res.success) {
                auth.showMainApp();
            } else {
                alert(res.error);
            }
        };
    }
    
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.onclick = () => auth.logout();
    
    const supportBtns = document.querySelectorAll('#subscriptionBtn, #upgradeFromBanner');
    supportBtns.forEach(btn => {
        if (btn) btn.onclick = openBoosty;
    });
    
    // Переключение табов
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.onclick = function() {
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const isLogin = this.dataset.tab === 'login';
            document.getElementById('loginForm').classList.toggle('active', isLogin);
            document.getElementById('registerForm').classList.toggle('active', !isLogin);
        };
    });
    
    // Переключение пароля
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
    
    // Переключение языка
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => btn.onclick = showLanguageMenu);
    
    applyTranslations();
    updateTime();
    setInterval(updateTime, 1000);
    
    console.log('Initialization complete');
});