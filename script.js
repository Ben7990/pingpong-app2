console.log('Скрипт загружен');

// ==================== ПЕРЕВОДЫ (8 ЯЗЫКОВ) ====================
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
    },
    de: {
        'appName': 'SCHIEDSRICHTERPROTOKOLL',
        'login': 'Anmelden',
        'register': 'Registrieren',
        'loginBtn': 'Anmelden',
        'registerBtn': 'Registrieren',
        'logout': '🚪 Abmelden',
        'support': '🙏 Unterstützen',
        'waiting': 'WARTEN AUF START',
        'playing': 'IM SPIEL',
        'finished': 'BEENDET',
        'disqualified': 'DISQUALIFIZIERT',
        'limitWarning': '⚠️ Sie haben noch ',
        'limitWarning2': ' Spiele übrig. Unterstützen Sie das Projekt!',
        'cancel': 'Abbrechen',
        'injury': 'Verletzung',
        'forfeit': 'Nichtantritt',
        'technical': 'Technisch',
        'finishMatchTitle': 'Spiel beenden',
        'finishMatchText': 'Grund wählen:'
    },
    es: {
        'appName': 'PROTOCOLO DE ÁRBITRO',
        'login': 'Iniciar sesión',
        'register': 'Registrarse',
        'loginBtn': 'Iniciar sesión',
        'registerBtn': 'Registrarse',
        'logout': '🚪 Cerrar sesión',
        'support': '🙏 Apoyar',
        'waiting': 'ESPERANDO INICIO',
        'playing': 'EN JUEGO',
        'finished': 'FINALIZADO',
        'disqualified': 'DESCALIFICADO',
        'limitWarning': '⚠️ Te quedan ',
        'limitWarning2': ' partidos. ¡Apoya el proyecto!',
        'cancel': 'Cancelar',
        'injury': 'Lesión',
        'forfeit': 'No presentado',
        'technical': 'Técnico',
        'finishMatchTitle': 'Finalizar partido',
        'finishMatchText': 'Seleccione razón:'
    },
    it: {
        'appName': 'PROTOCOLLO ARBITRALE',
        'login': 'Accedi',
        'register': 'Registrati',
        'loginBtn': 'Accedi',
        'registerBtn': 'Registrati',
        'logout': '🚪 Esci',
        'support': '🙏 Supporta',
        'waiting': 'IN ATTESA INIZIO',
        'playing': 'IN GIOCO',
        'finished': 'TERMINATA',
        'disqualified': 'SQUALIFICATO',
        'limitWarning': '⚠️ Hai ancora ',
        'limitWarning2': ' partite. Supporta il progetto!',
        'cancel': 'Annulla',
        'injury': 'Infortunio',
        'forfeit': 'Forfait',
        'technical': 'Tecnico',
        'finishMatchTitle': 'Termina partita',
        'finishMatchText': 'Seleziona motivo:'
    },
    fr: {
        'appName': 'PROTOCOLE D\'ARBITRAGE',
        'login': 'Connexion',
        'register': 'Inscription',
        'loginBtn': 'Se connecter',
        'registerBtn': 'S\'inscrire',
        'logout': '🚪 Déconnexion',
        'support': '🙏 Soutenir',
        'waiting': 'EN ATTENTE',
        'playing': 'EN COURS',
        'finished': 'TERMINÉ',
        'disqualified': 'DISQUALIFIÉ',
        'limitWarning': '⚠️ Il vous reste ',
        'limitWarning2': ' matchs. Soutenez le projet!',
        'cancel': 'Annuler',
        'injury': 'Blessure',
        'forfeit': 'Forfait',
        'technical': 'Technique',
        'finishMatchTitle': 'Terminer le match',
        'finishMatchText': 'Choisissez la raison:'
    },
    zh: {
        'appName': '裁判记录表',
        'login': '登录',
        'register': '注册',
        'loginBtn': '登录',
        'registerBtn': '注册',
        'logout': '🚪 退出',
        'support': '🙏 支持项目',
        'waiting': '等待开始',
        'playing': '比赛中',
        'finished': '已结束',
        'disqualified': '取消资格',
        'limitWarning': '⚠️ 您还剩 ',
        'limitWarning2': ' 场比赛。支持项目！',
        'cancel': '取消',
        'injury': '受伤',
        'forfeit': '弃权',
        'technical': '技术问题',
        'finishMatchTitle': '结束比赛',
        'finishMatchText': '选择原因：'
    },
    pt: {
        'appName': 'PROTOCOLO DO ÁRBITRO',
        'login': 'Entrar',
        'register': 'Registrar',
        'loginBtn': 'Entrar',
        'registerBtn': 'Registrar',
        'logout': '🚪 Sair',
        'support': '🙏 Apoiar',
        'waiting': 'AGUARDANDO',
        'playing': 'EM JOGO',
        'finished': 'FINALIZADA',
        'disqualified': 'DESCLASSIFICADO',
        'limitWarning': '⚠️ Você tem ',
        'limitWarning2': ' partidas. Apoie o projeto!',
        'cancel': 'Cancelar',
        'injury': 'Lesão',
        'forfeit': 'Desistência',
        'technical': 'Técnico',
        'finishMatchTitle': 'Finalizar partida',
        'finishMatchText': 'Selecione o motivo:'
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
        let status = statusEl.textContent.replace('● ', '');
        if (status === 'ОЖИДАНИЕ НАЧАЛА' || status === 'WAITING' || status === 'WARTEN AUF START' || status === 'ESPERANDO INICIO' || status === 'IN ATTESA INIZIO' || status === 'EN ATTENTE' || status === '等待开始' || status === 'AGUARDANDO') status = t('waiting');
        else if (status === 'В ИГРЕ' || status === 'PLAYING' || status === 'IM SPIEL' || status === 'EN JUEGO' || status === 'IN GIOCO' || status === 'EN COURS' || status === '比赛中' || status === 'EM JOGO') status = t('playing');
        else if (status === 'ЗАВЕРШЕН' || status === 'FINISHED' || status === 'BEENDET' || status === 'FINALIZADO' || status === 'TERMINATA' || status === 'TERMINÉ' || status === '已结束' || status === 'FINALIZADA') status = t('finished');
        else if (status === 'ДИСКВАЛИФИКАЦИЯ' || status === 'DISQUALIFIED' || status === 'DISQUALIFIZIERT' || status === 'DESCALIFICADO' || status === 'SQUALIFICATO' || status === 'DISQUALIFIÉ' || status === '取消资格' || status === 'DESCLASSIFICADO') status = t('disqualified');
        statusEl.textContent = '● ' + status;
    }
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
        if (window.match && window.match.events) {
            updateEventLog();
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
    menu.innerHTML = `<h3 style="margin-bottom:15px;text-align:center;">🌐 Выберите язык</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            ${languages.map(lang => `<button class="lang-option" data-lang="${lang.code}" style="padding:10px;border:none;background:${currentLang === lang.code ? '#3498db' : '#f0f0f0'};color:${currentLang === lang.code ? 'white' : '#333'};border-radius:8px;cursor:pointer;text-align:center;">${lang.flag} ${lang.name}</button>`).join('')}
        </div>
        <button id="closeLangMenu" style="display:block;width:100%;padding:10px;margin-top:15px;border:none;background:#e74c3c;color:white;border-radius:8px;cursor:pointer;">✖ Закрыть</button>`;
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
        
        const banner = document.getElementById('freeBanner');
        if (banner) banner.style.display = 'flex';
        
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
        if (event.eventKey === 'point') return `🎾 ${t('point')} ${event.params.player} (${event.score})`;
        if (event.eventKey === 'set_end') return `🏆 ${t('set_end').replace('{set}', event.params.set).replace('{winner}', event.params.winner)}`;
        if (event.eventKey === 'set_start') return `🎬 ${t('set_start').replace('{set}', event.params.set).replace('{server}', event.params.server)}`;
        if (event.eventKey === 'serve_auto_change') return `🔄 ${t('serve_auto_change').replace('{server}', event.params.server)}`;
        if (event.eventKey === 'serve_manual_change') return `🖐️ ${t('serve_manual_change').replace('{server}', event.params.server)}`;
        if (event.eventKey === 'side_change') return `↔ ${t('side_change')}`;
        if (event.eventKey === 'accelerate_on') return `⚡ ${t('accelerate_on')}`;
        if (event.eventKey === 'timeout') return `⏸ ${t('timeout').replace('{player}', event.params.player)}`;
        if (event.eventKey === 'timeout_error') return `❌ ${t('timeout_error').replace('{player}', event.params.player)}`;
        if (event.eventKey === 'warning') return `⚠️ ${t('warning').replace('{player}', event.params.player)}`;
        if (event.eventKey === 'yellow') return `🟨 ${t('yellow').replace('{player}', event.params.player)}`;
        if (event.eventKey === 'red') return `🟥 ${t('red').replace('{player}', event.params.player)}`;
        if (event.eventKey === 'undo') return `↩ ${t('undo')}`;
        if (event.eventKey === 'match_start') return `🏓 ${t('match_start')}`;
        if (event.eventKey === 'match_end_sporting') return `🏁 ${t('match_end_sporting').replace('{winner}', event.params.winner).replace('{sets}', event.params.sets)}`;
        if (event.eventKey === 'match_end_early') return `🏁 ${t('match_end_early').replace('{reason}', event.params.reason)}`;
        if (event.eventKey === 'error_not_started') return `❌ ${t('error_not_started')}`;
        if (event.eventKey === 'error_finished') return `❌ ${t('error_finished')}`;
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
            alert(t('error_not_started'));
            return false; 
        }
        if (this.isFinished) { 
            alert(t('error_finished'));
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
        alert(t('limitWarning') + '99 ' + t('limitWarning2'));
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
    if (resetBtn) resetBtn.onclick = () => { if (confirm(t('cancel'))) initializeMatch(); };
    
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

function openBoosty() {
    window.open('https://boosty.to/ben7990', '_blank');
}

// ==================== ДОБАВЛЯЕМ НЕДОСТАЮЩИЕ ПЕРЕВОДЫ ДЛЯ СОБЫТИЙ ====================
// Расширяем переводы для всех языков
const eventTranslations = {
    ru: {
        'point': 'Очко заработал игрок',
        'set_end': 'Партия {set} завершена. Победил игрок {winner}',
        'set_start': 'Начало {set}-й партии. Подает игрок {server}',
        'serve_auto_change': 'Автоматическая смена подачи. Теперь подает игрок {server}',
        'serve_manual_change': 'Ручная смена подачи. Теперь подает игрок {server}',
        'side_change': 'Смена сторон',
        'accelerate_on': 'Включена система ускорения',
        'timeout': 'Тайм-аут взят игроком {player}',
        'timeout_error': 'У игрока {player} нет тайм-аутов',
        'warning': 'Предупреждение игроку {player}',
        'yellow': 'Желтая карточка игроку {player}',
        'red': 'КРАСНАЯ КАРТОЧКА игроку {player} - дисквалификация!',
        'undo': 'Отмена последнего очка',
        'match_start': 'Матч официально начат',
        'match_end_sporting': 'Матч завершен. Победитель: игрок {winner}. Счет: {sets}',
        'match_end_early': 'Матч завершен досрочно. Причина: {reason}',
        'error_not_started': 'Матч еще не начат! Нажмите "НАЧАТЬ МАТЧ"',
        'error_finished': 'Матч завершен, очки не начисляются'
    },
    en: {
        'point': 'Point scored by player',
        'set_end': 'Set {set} completed. Player {winner} wins',
        'set_start': 'Start of set {set}. Player {server} serves',
        'serve_auto_change': 'Automatic serve change. Player {server} now serves',
        'serve_manual_change': 'Manual serve change. Player {server} now serves',
        'side_change': 'Side change',
        'accelerate_on': 'Acceleration system activated',
        'timeout': 'Timeout taken by player {player}',
        'timeout_error': 'Player {player} has no timeouts left',
        'warning': 'Warning to player {player}',
        'yellow': 'Yellow card to player {player}',
        'red': 'RED CARD to player {player} - disqualification!',
        'undo': 'Last point undone',
        'match_start': 'Match officially started',
        'match_end_sporting': 'Match finished. Winner: player {winner}. Score: {sets}',
        'match_end_early': 'Match finished early. Reason: {reason}',
        'error_not_started': 'Match not started yet! Click "START MATCH"',
        'error_finished': 'Match finished, no more points'
    },
    de: {
        'point': 'Punkt für Spieler',
        'set_end': 'Satz {set} beendet. Spieler {winner} gewinnt',
        'set_start': 'Beginn von Satz {set}. Spieler {server} schlägt auf',
        'serve_auto_change': 'Automatischer Aufschlagwechsel. Spieler {server} schlägt jetzt auf',
        'serve_manual_change': 'Manueller Aufschlagwechsel. Spieler {server} schlägt jetzt auf',
        'side_change': 'Seitenwechsel',
        'accelerate_on': 'Beschleunigungssystem aktiviert',
        'timeout': 'Auszeit genommen von Spieler {player}',
        'timeout_error': 'Spieler {player} hat keine Auszeiten mehr',
        'warning': 'Verwarnung für Spieler {player}',
        'yellow': 'Gelbe Karte für Spieler {player}',
        'red': 'ROTE KARTE für Spieler {player} - Disqualifikation!',
        'undo': 'Letzter Punkt zurückgenommen',
        'match_start': 'Spiel offiziell gestartet',
        'match_end_sporting': 'Spiel beendet. Sieger: Spieler {winner}. Ergebnis: {sets}',
        'match_end_early': 'Spiel vorzeitig beendet. Grund: {reason}',
        'error_not_started': 'Spiel noch nicht gestartet! Klicken Sie "SPIEL STARTEN"',
        'error_finished': 'Spiel beendet, keine weiteren Punkte'
    },
    es: {
        'point': 'Punto anotado por jugador',
        'set_end': 'Set {set} completado. Jugador {winner} gana',
        'set_start': 'Inicio del set {set}. Saca el jugador {server}',
        'serve_auto_change': 'Cambio automático de saque. Ahora saca el jugador {server}',
        'serve_manual_change': 'Cambio manual de saque. Ahora saca el jugador {server}',
        'side_change': 'Cambio de lado',
        'accelerate_on': 'Sistema de aceleración activado',
        'timeout': 'Tiempo muerto solicitado por jugador {player}',
        'timeout_error': 'El jugador {player} no tiene tiempos muertos',
        'warning': 'Advertencia al jugador {player}',
        'yellow': 'Tarjeta amarilla al jugador {player}',
        'red': 'TARJETA ROJA al jugador {player} - descalificación!',
        'undo': 'Último punto deshecho',
        'match_start': 'Partido oficialmente iniciado',
        'match_end_sporting': 'Partido finalizado. Ganador: jugador {winner}. Resultado: {sets}',
        'match_end_early': 'Partido finalizado anticipadamente. Razón: {reason}',
        'error_not_started': 'Partido no iniciado! Haga clic en "COMENZAR PARTIDO"',
        'error_finished': 'Partido finalizado, no se pueden anotar más puntos'
    },
    it: {
        'point': 'Punto segnato dal giocatore',
        'set_end': 'Set {set} completato. Giocatore {winner} vince',
        'set_start': 'Inizio del set {set}. Batte il giocatore {server}',
        'serve_auto_change': 'Cambio automatico di battuta. Ora batte il giocatore {server}',
        'serve_manual_change': 'Cambio manuale di battuta. Ora batte il giocatore {server}',
        'side_change': 'Cambio di lato',
        'accelerate_on': 'Sistema di accelerazione attivato',
        'timeout': 'Time out richiesto dal giocatore {player}',
        'timeout_error': 'Il giocatore {player} non ha time out',
        'warning': 'Ammonizione al giocatore {player}',
        'yellow': 'Cartellino giallo al giocatore {player}',
        'red': 'CARTELLINO ROSSO al giocatore {player} - squalifica!',
        'undo': 'Ultimo punto annullato',
        'match_start': 'Partita ufficialmente iniziata',
        'match_end_sporting': 'Partita terminata. Vincitore: giocatore {winner}. Risultato: {sets}',
        'match_end_early': 'Partita terminata anticipatamente. Motivo: {reason}',
        'error_not_started': 'Partita non iniziata! Clicca "INIZIA PARTITA"',
        'error_finished': 'Partita terminata, non si possono assegnare punti'
    },
    fr: {
        'point': 'Point marqué par le joueur',
        'set_end': 'Set {set} terminé. Joueur {winner} gagne',
        'set_start': 'Début du set {set}. Le joueur {server} sert',
        'serve_auto_change': 'Changement de service automatique. Le joueur {server} sert maintenant',
        'serve_manual_change': 'Changement de service manuel. Le joueur {server} sert maintenant',
        'side_change': 'Changement de côté',
        'accelerate_on': 'Système d\'accélération activé',
        'timeout': 'Temps mort pris par le joueur {player}',
        'timeout_error': 'Le joueur {player} n\'a plus de temps mort',
        'warning': 'Avertissement au joueur {player}',
        'yellow': 'Carton jaune au joueur {player}',
        'red': 'CARTON ROUGE au joueur {player} - disqualification!',
        'undo': 'Dernier point annulé',
        'match_start': 'Match officiellement commencé',
        'match_end_sporting': 'Match terminé. Vainqueur: joueur {winner}. Score: {sets}',
        'match_end_early': 'Match terminé prématurément. Raison: {reason}',
        'error_not_started': 'Match non commencé! Cliquez sur "COMMENCER LE MATCH"',
        'error_finished': 'Match terminé, plus de points possibles'
    },
    zh: {
        'point': '选手得分',
        'set_end': '第{set}局结束。选手{winner}获胜',
        'set_start': '第{set}局开始。选手{server}发球',
        'serve_auto_change': '自动换发球。现在选手{server}发球',
        'serve_manual_change': '手动换发球。现在选手{server}发球',
        'side_change': '交换场地',
        'accelerate_on': '加速系统已开启',
        'timeout': '选手{player}请求暂停',
        'timeout_error': '选手{player}没有暂停机会了',
        'warning': '警告选手{player}',
        'yellow': '黄牌警告选手{player}',
        'red': '红牌罚下选手{player} - 取消比赛资格！',
        'undo': '撤销最后一分',
        'match_start': '比赛正式开始',
        'match_end_sporting': '比赛结束。获胜者：选手{winner}。比分：{sets}',
        'match_end_early': '比赛提前结束。原因：{reason}',
        'error_not_started': '比赛尚未开始！请点击"开始比赛"',
        'error_finished': '比赛已结束，不能再得分'
    },
    pt: {
        'point': 'Ponto marcado pelo jogador',
        'set_end': 'Set {set} concluído. Jogador {winner} vence',
        'set_start': 'Início do set {set}. Jogador {server} saca',
        'serve_auto_change': 'Mudança automática de saque. Agora o jogador {server} saca',
        'serve_manual_change': 'Mudança manual de saque. Agora o jogador {server} saca',
        'side_change': 'Mudança de lado',
        'accelerate_on': 'Sistema de aceleração ativado',
        'timeout': 'Tempo técnico solicitado pelo jogador {player}',
        'timeout_error': 'Jogador {player} não tem mais tempos técnicos',
        'warning': 'Advertência ao jogador {player}',
        'yellow': 'Cartão amarelo para o jogador {player}',
        'red': 'CARTÃO VERMELHO para o jogador {player} - desclassificação!',
        'undo': 'Último ponto desfeito',
        'match_start': 'Partida oficialmente iniciada',
        'match_end_sporting': 'Partida finalizada. Vencedor: jogador {winner}. Placar: {sets}',
        'match_end_early': 'Partida finalizada antecipadamente. Motivo: {reason}',
        'error_not_started': 'Partida não iniciada! Clique em "INICIAR PARTIDA"',
        'error_finished': 'Partida finalizada, não é possível marcar pontos'
    }
};

// Обновляем функцию getEventDescription для использования переводов
// (код выше уже обновлен)

// ==================== ИНИЦИАЛИЗАЦИЯ ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded fired');
    
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('data-lang', currentLang);
    
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
    
    // Восстановление пароля
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
        sendResetCodeBtn.onclick = async () => {
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
            
            // Имитация отправки кода (в реальности нужен EmailJS)
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
    
    console.log('Initialization complete');
});