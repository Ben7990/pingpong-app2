console.log('Скрипт загружен v9');

// ==================== ПЕРЕВОДЫ (8 ЯЗЫКОВ - ВСЕ РАБОТАЮТ) ====================
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
        'toss_winner': '🎲 Жеребьевка: выиграл игрок {winner}. Право подачи у игрока {server}'
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
        'toss_winner': '🎲 Toss: player {winner} wins. Player {server} serves'
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
        'exportCSV': '📊 EXPORT CSV (ANSI)',
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
        'toss_winner': '🎲 Los: Spieler {winner} gewinnt. Spieler {server} schlägt auf'
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
        'exportCSV': '📊 EXPORTAR CSV (ANSI)',
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
        'toss_winner': '🎲 Sorteo: gana jugador {winner}. Saca jugador {server}'
    },
    it: {
        'appName': 'PROTOCOLLO ARBITRALE',
        'login': 'Accedi',
        'register': 'Registrati',
        'loginBtn': 'Accedi',
        'registerBtn': 'Registrati',
        'logout': '🚪 Esci',
        'waiting': 'IN ATTESA',
        'playing': 'IN GIOCO',
        'finished': 'TERMINATA',
        'disqualified': 'SQUALIFICATO',
        'cancel': 'Annulla',
        'injury': 'Infortunio',
        'forfeit': 'Forfait',
        'technical': 'Tecnico',
        'finishMatchTitle': 'Termina partita',
        'finishMatchText': 'Motivo:',
        'player1Title': 'GIOCATORE 1',
        'player2Title': 'GIOCATORE 2',
        'serve': 'BATTUTA',
        'newMatch': '🔄 NUOVA PARTITA',
        'startMatch': '🎬 INIZIA',
        'finishMatch': '🏁 TERMINA',
        'pointToPlayer1': '➕ PUNTO G1',
        'pointToPlayer2': '➕ PUNTO G2',
        'timeout': '⏸ TIME OUT',
        'warning': '⚠️ AMMONIZIONE',
        'yellow': '🟨 CARTELLINO GIALLO',
        'red': '🟥 CARTELLINO ROSSO',
        'changeServe': '🔄 CAMBIA BATTUTA',
        'changeSide': '↔ CAMBIA LATO',
        'undoPoint': '↩ ANNULLA',
        'accelerate': '⚡ ACCELERAZIONE',
        'protocol': '📋 PROTOCOLLO',
        'referee': 'Arbitro:',
        'startTime': 'Inizio:',
        'currentTime': 'Ora:',
        'status': 'Stato:',
        'eventLog': 'REGISTRO',
        'exportJSON': '💾 ESPORTA JSON',
        'exportCSV': '📊 ESPORTA CSV (ANSI)',
        'exportCSVUtf8': '📊 ESPORTA CSV (UTF-8)',
        'print': '🖨 STAMPA',
        'resetPassword': '🔑 Password dimenticata?',
        'sendCode': 'Invia codice',
        'changePassword': 'Cambia password',
        'enterEmail': 'Email di registrazione',
        'enterCode': 'Codice ricevuto',
        'newPassword': 'Nuova password',
        'codeSent': 'Codice inviato',
        'privacy': '📄 Privacy',
        'emailPlaceholder': 'Email',
        'passwordPlaceholder': 'Password',
        'namePlaceholder': 'Nome',
        'point': '🎾 Punto giocatore {player}',
        'set_end': '🏆 Set {set} completato. Vince giocatore {winner}',
        'set_start': '🎬 Set {set}. Batte giocatore {server}',
        'serve_auto_change': '🔄 Cambio battuta. Batte giocatore {server}',
        'serve_manual_change': '🖐️ Cambio manuale. Batte giocatore {server}',
        'side_change': '↔ Cambio lato (set {set})',
        'accelerate_on': '⚡ Accelerazione attivata',
        'timeout_event': '⏸ Time out giocatore {player}',
        'timeout_error': '❌ Nessun time out',
        'warning_event': '⚠️ Ammonizione giocatore {player}',
        'yellow_event': '🟨 Cartellino giallo giocatore {player}',
        'red_event': '🟥 CARTELLINO ROSSO - squalifica!',
        'undo': '↩ Ultimo punto annullato',
        'match_start': '🏓 Partita iniziata. Batte giocatore {server}',
        'match_end_sporting': '🏁 Partita terminata. Vince giocatore {winner}. {sets}',
        'match_end_early': '🏁 Terminata anticipatamente. Motivo: {reason}',
        'error_not_started': '❌ Partita non iniziata!',
        'error_finished': '❌ Partita terminata',
        'exportTitle': 'Protocollo',
        'tournament': 'Torneo',
        'date': 'Data',
        'table': 'Tavolo',
        'refereeName': 'Arbitro',
        'result': 'Risultato',
        'eventLogTitle': 'Registro',
        'time': 'Ora',
        'event': 'Evento',
        'score': 'Punteggio',
        'vs': 'vs',
        'winner': 'Vincitore',
        'endTime': 'Fine',
        'toss_winner': '🎲 Sorteggio: vince giocatore {winner}. Batte giocatore {server}'
    },
    fr: {
        'appName': 'PROTOCOLE ARBITRAL',
        'login': 'Connexion',
        'register': 'Inscription',
        'loginBtn': 'Se connecter',
        'registerBtn': "S'inscrire",
        'logout': '🚪 Déconnexion',
        'waiting': 'EN ATTENTE',
        'playing': 'EN COURS',
        'finished': 'TERMINÉ',
        'disqualified': 'DISQUALIFIÉ',
        'cancel': 'Annuler',
        'injury': 'Blessure',
        'forfeit': 'Forfait',
        'technical': 'Technique',
        'finishMatchTitle': 'Terminer le match',
        'finishMatchText': 'Raison:',
        'player1Title': 'JOUEUR 1',
        'player2Title': 'JOUEUR 2',
        'serve': 'SERVICE',
        'newMatch': '🔄 NOUVEAU MATCH',
        'startMatch': '🎬 COMMENCER',
        'finishMatch': '🏁 TERMINER',
        'pointToPlayer1': '➕ POINT J1',
        'pointToPlayer2': '➕ POINT J2',
        'timeout': '⏸ TEMPS MORT',
        'warning': '⚠️ AVERTISSEMENT',
        'yellow': '🟨 CARTON JAUNE',
        'red': '🟥 CARTON ROUGE',
        'changeServe': '🔄 CHANGER SERVICE',
        'changeSide': '↔ CHANGER CÔTÉ',
        'undoPoint': '↩ ANNULER',
        'accelerate': '⚡ ACCÉLÉRATION',
        'protocol': '📋 PROTOCOLE',
        'referee': 'Arbitre:',
        'startTime': 'Début:',
        'currentTime': 'Actuel:',
        'status': 'Statut:',
        'eventLog': 'JOURNAL',
        'exportJSON': '💾 EXPORTER JSON',
        'exportCSV': '📊 EXPORTER CSV (ANSI)',
        'exportCSVUtf8': '📊 EXPORTER CSV (UTF-8)',
        'print': '🖨 IMPRIMER',
        'resetPassword': '🔑 Mot de passe oublié?',
        'sendCode': 'Envoyer code',
        'changePassword': 'Changer mot de passe',
        'enterEmail': 'Email inscription',
        'enterCode': 'Code reçu',
        'newPassword': 'Nouveau mot de passe',
        'codeSent': 'Code envoyé',
        'privacy': '📄 Confidentialité',
        'emailPlaceholder': 'Email',
        'passwordPlaceholder': 'Mot de passe',
        'namePlaceholder': 'Nom',
        'point': '🎾 Point joueur {player}',
        'set_end': '🏆 Set {set} terminé. Joueur {winner} gagne',
        'set_start': '🎬 Set {set}. Joueur {server} sert',
        'serve_auto_change': '🔄 Changement service. Joueur {server} sert',
        'serve_manual_change': '🖐️ Changement manuel. Joueur {server} sert',
        'side_change': '↔ Changement côté (set {set})',
        'accelerate_on': '⚡ Accélération activée',
        'timeout_event': '⏸ Temps mort joueur {player}',
        'timeout_error': '❌ Plus de temps mort',
        'warning_event': '⚠️ Avertissement joueur {player}',
        'yellow_event': '🟨 Carton jaune joueur {player}',
        'red_event': '🟥 CARTON ROUGE - disqualification!',
        'undo': '↩ Dernier point annulé',
        'match_start': '🏓 Match commencé. Joueur {server} sert',
        'match_end_sporting': '🏁 Match terminé. Vainqueur: joueur {winner}. {sets}',
        'match_end_early': '🏁 Terminé tôt. Raison: {reason}',
        'error_not_started': '❌ Match non commencé!',
        'error_finished': '❌ Match terminé',
        'exportTitle': 'Protocole',
        'tournament': 'Tournoi',
        'date': 'Date',
        'table': 'Table',
        'refereeName': 'Arbitre',
        'result': 'Résultat',
        'eventLogTitle': 'Journal',
        'time': 'Heure',
        'event': 'Événement',
        'score': 'Score',
        'vs': 'vs',
        'winner': 'Vainqueur',
        'endTime': 'Fin',
        'toss_winner': '🎲 Tirage: joueur {winner} gagne. Joueur {server} sert'
    },
    zh: {
        'appName': '裁判记录表',
        'login': '登录',
        'register': '注册',
        'loginBtn': '登录',
        'registerBtn': '注册',
        'logout': '🚪 退出',
        'waiting': '等待开始',
        'playing': '比赛中',
        'finished': '已结束',
        'disqualified': '取消资格',
        'cancel': '取消',
        'injury': '受伤',
        'forfeit': '弃权',
        'technical': '技术问题',
        'finishMatchTitle': '结束比赛',
        'finishMatchText': '选择原因：',
        'player1Title': '选手 1',
        'player2Title': '选手 2',
        'serve': '发球',
        'newMatch': '🔄 新比赛',
        'startMatch': '🎬 开始',
        'finishMatch': '🏁 结束',
        'pointToPlayer1': '➕ 选手1得分',
        'pointToPlayer2': '➕ 选手2得分',
        'timeout': '⏸ 暂停',
        'warning': '⚠️ 警告',
        'yellow': '🟨 黄牌',
        'red': '🟥 红牌',
        'changeServe': '🔄 换发球',
        'changeSide': '↔ 交换场地',
        'undoPoint': '↩ 撤销得分',
        'accelerate': '⚡ 加速',
        'protocol': '📋 比赛记录表',
        'referee': '主裁判：',
        'startTime': '开始时间：',
        'currentTime': '当前时间：',
        'status': '状态：',
        'eventLog': '事件日志',
        'exportJSON': '💾 导出 JSON',
        'exportCSV': '📊 导出 CSV (ANSI)',
        'exportCSVUtf8': '📊 导出 CSV (UTF-8)',
        'print': '🖨 打印',
        'resetPassword': '🔑 忘记密码？',
        'sendCode': '发送验证码',
        'changePassword': '修改密码',
        'enterEmail': '输入注册邮箱',
        'enterCode': '输入验证码',
        'newPassword': '新密码',
        'codeSent': '验证码已发送',
        'privacy': '📄 隐私政策',
        'emailPlaceholder': '电子邮箱',
        'passwordPlaceholder': '密码',
        'namePlaceholder': '姓名',
        'point': '🎾 选手{player}得分',
        'set_end': '🏆 第{set}局结束。选手{winner}获胜',
        'set_start': '🎬 第{set}局开始。选手{server}发球',
        'serve_auto_change': '🔄 自动换发球。现在选手{server}发球',
        'serve_manual_change': '🖐️ 手动换发球。现在选手{server}发球',
        'side_change': '↔ 交换场地（第{set}局后）',
        'accelerate_on': '⚡ 加速系统已开启',
        'timeout_event': '⏸ 选手{player}请求暂停',
        'timeout_error': '❌ 选手{player}没有暂停机会了',
        'warning_event': '⚠️ 警告选手{player}',
        'yellow_event': '🟨 黄牌警告选手{player}',
        'red_event': '🟥 红牌罚下选手{player} - 取消比赛资格！',
        'undo': '↩ 撤销最后一分',
        'match_start': '🏓 比赛正式开始。选手{server}先发球',
        'match_end_sporting': '🏁 比赛结束。获胜者：选手{winner}。比分：{sets}',
        'match_end_early': '🏁 比赛提前结束。原因：{reason}',
        'error_not_started': '❌ 比赛尚未开始！请点击"开始"',
        'error_finished': '❌ 比赛已结束，不能再得分',
        'exportTitle': '比赛记录表',
        'tournament': '比赛名称',
        'date': '日期',
        'table': '球台号',
        'refereeName': '主裁判',
        'result': '比赛结果',
        'eventLogTitle': '事件日志',
        'time': '时间',
        'event': '事件',
        'score': '比分',
        'vs': '对阵',
        'winner': '获胜者',
        'endTime': '结束时间',
        'toss_winner': '🎲 抽签：选手{winner}获胜。选手{server}发球'
    },
    pt: {
        'appName': 'PROTOCOLO ARBITRAL',
        'login': 'Entrar',
        'register': 'Registrar',
        'loginBtn': 'Entrar',
        'registerBtn': 'Registrar',
        'logout': '🚪 Sair',
        'waiting': 'AGUARDANDO',
        'playing': 'EM JOGO',
        'finished': 'FINALIZADO',
        'disqualified': 'DESCLASSIFICADO',
        'cancel': 'Cancelar',
        'injury': 'Lesão',
        'forfeit': 'Desistência',
        'technical': 'Técnico',
        'finishMatchTitle': 'Finalizar partida',
        'finishMatchText': 'Motivo:',
        'player1Title': 'JOGADOR 1',
        'player2Title': 'JOGADOR 2',
        'serve': 'SAQUE',
        'newMatch': '🔄 NOVA PARTIDA',
        'startMatch': '🎬 INICIAR',
        'finishMatch': '🏁 FINALIZAR',
        'pointToPlayer1': '➕ PONTO J1',
        'pointToPlayer2': '➕ PONTO J2',
        'timeout': '⏸ TEMPO',
        'warning': '⚠️ ADVERTÊNCIA',
        'yellow': '🟨 CARTÃO AMARELO',
        'red': '🟥 CARTÃO VERMELHO',
        'changeServe': '🔄 TROCAR SAQUE',
        'changeSide': '↔ TROCAR LADO',
        'undoPoint': '↩ DESFAZER',
        'accelerate': '⚡ ACELERAÇÃO',
        'protocol': '📋 PROTOCOLO',
        'referee': 'Árbitro:',
        'startTime': 'Início:',
        'currentTime': 'Agora:',
        'status': 'Status:',
        'eventLog': 'REGISTRO',
        'exportJSON': '💾 EXPORTAR JSON',
        'exportCSV': '📊 EXPORTAR CSV (ANSI)',
        'exportCSVUtf8': '📊 EXPORTAR CSV (UTF-8)',
        'print': '🖨 IMPRIMIR',
        'resetPassword': '🔑 Esqueceu a senha?',
        'sendCode': 'Enviar código',
        'changePassword': 'Alterar senha',
        'enterEmail': 'Email de registro',
        'enterCode': 'Código recebido',
        'newPassword': 'Nova senha',
        'codeSent': 'Código enviado',
        'privacy': '📄 Privacidade',
        'emailPlaceholder': 'Email',
        'passwordPlaceholder': 'Senha',
        'namePlaceholder': 'Nome',
        'point': '🎾 Ponto jogador {player}',
        'set_end': '🏆 Set {set} concluído. Jogador {winner} vence',
        'set_start': '🎬 Set {set}. Jogador {server} saca',
        'serve_auto_change': '🔄 Troca de saque. Jogador {server} saca',
        'serve_manual_change': '🖐️ Troca manual. Jogador {server} saca',
        'side_change': '↔ Troca de lado (set {set})',
        'accelerate_on': '⚡ Aceleração ativada',
        'timeout_event': '⏸ Tempo jogador {player}',
        'timeout_error': '❌ Sem tempos',
        'warning_event': '⚠️ Advertência jogador {player}',
        'yellow_event': '🟨 Cartão amarelo jogador {player}',
        'red_event': '🟥 CARTÃO VERMELHO - desclassificado!',
        'undo': '↩ Último ponto desfeito',
        'match_start': '🏓 Partida iniciada. Jogador {server} saca',
        'match_end_sporting': '🏁 Partida finalizada. Vencedor: jogador {winner}. {sets}',
        'match_end_early': '🏁 Finalizada cedo. Motivo: {reason}',
        'error_not_started': '❌ Partida não iniciada!',
        'error_finished': '❌ Partida finalizada',
        'exportTitle': 'Protocolo',
        'tournament': 'Torneio',
        'date': 'Data',
        'table': 'Mesa',
        'refereeName': 'Árbitro',
        'result': 'Resultado',
        'eventLogTitle': 'Registro',
        'time': 'Hora',
        'event': 'Evento',
        'score': 'Placar',
        'vs': 'vs',
        'winner': 'Vencedor',
        'endTime': 'Fim',
        'toss_winner': '🎲 Sorteio: jogador {winner} vence. Jogador {server} saca'
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
    
    // Обновляем текст в модальном окне жеребьевки
    const tossTitle = document.querySelector('#tossModal h2');
    if (tossTitle) tossTitle.textContent = '🎲 ' + (currentLang === 'ru' ? 'ЖЕРЕБЬЕВКА' : 
        currentLang === 'en' ? 'TOSS' :
        currentLang === 'de' ? 'LOS' :
        currentLang === 'es' ? 'SORTEO' :
        currentLang === 'it' ? 'SORTEGGIO' :
        currentLang === 'fr' ? 'TIRAGE' :
        currentLang === 'zh' ? '抽签' : 'SORTEIO');
    
    const tossResultSpan = document.getElementById('tossResult');
    if (tossResultSpan && !window.tossInProgress) {
        tossResultSpan.textContent = currentLang === 'ru' ? 'Кликните на монетку, чтобы подбросить' :
            currentLang === 'en' ? 'Click the coin to flip' :
            currentLang === 'de' ? 'Klicken Sie auf die Münze' :
            currentLang === 'es' ? 'Haz clic en la moneda' :
            currentLang === 'it' ? 'Clicca sulla moneta' :
            currentLang === 'fr' ? 'Cliquez sur la pièce' :
            currentLang === 'zh' ? '点击硬币抛掷' : 'Clique na moeda';
        
        const skipTossBtn = document.getElementById('skipToss');
        if (skipTossBtn) {
            skipTossBtn.textContent = currentLang === 'ru' ? 'Пропустить (подает Игрок 1)' :
                currentLang === 'en' ? 'Skip (Player 1 serves)' :
                currentLang === 'de' ? 'Überspringen (Spieler 1 schlägt auf)' :
                currentLang === 'es' ? 'Saltar (Jugador 1 saca)' :
                currentLang === 'it' ? 'Salta (Giocatore 1 batte)' :
                currentLang === 'fr' ? 'Ignorer (Joueur 1 sert)' :
                currentLang === 'zh' ? '跳过（选手1发球）' : 'Pular (Jogador 1 saca)';
        }
    }
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
        
        // Правильная смена сторон: только после нечетных партий (1->2, 3->4)
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
        
        // Обновляем текст на текущем языке
        tossResult.textContent = currentLang === 'ru' ? 'Кликните на монетку, чтобы подбросить' :
            currentLang === 'en' ? 'Click the coin to flip' :
            currentLang === 'de' ? 'Klicken Sie auf die Münze' :
            currentLang === 'es' ? 'Haz clic en la moneda' :
            currentLang === 'it' ? 'Clicca sulla moneta' :
            currentLang === 'fr' ? 'Cliquez sur la pièce' :
            currentLang === 'zh' ? '点击硬币抛掷' : 'Clique na moeda';
        
        skipTossBtn.textContent = currentLang === 'ru' ? 'Пропустить (подает Игрок 1)' :
            currentLang === 'en' ? 'Skip (Player 1 serves)' :
            currentLang === 'de' ? 'Überspringen (Spieler 1 schlägt auf)' :
            currentLang === 'es' ? 'Saltar (Jugador 1 saca)' :
            currentLang === 'it' ? 'Salta (Giocatore 1 batte)' :
            currentLang === 'fr' ? 'Ignorer (Joueur 1 sert)' :
            currentLang === 'zh' ? '跳过（选手1发球）' : 'Pular (Jogador 1 saca)';
        
        const flipCoin = () => {
            if (isFlipping) return;
            isFlipping = true;
            coinDisplay.classList.add('coin-animation');
            setTimeout(() => {
                const result = Math.random() < 0.5 ? 1 : 2;
                coinDisplay.classList.remove('coin-animation');
                coinDisplay.textContent = result === 1 ? '🎾' : '🏓';
                
                const winnerText = result === 1 ? 
                    (currentLang === 'ru' ? 'Победил ИГРОК 1! Он выбирает право подачи.' :
                     currentLang === 'en' ? 'PLAYER 1 wins! They choose who serves.' :
                     currentLang === 'de' ? 'SPIELER 1 gewinnt! Er wählt den Aufschlag.' :
                     currentLang === 'es' ? '¡Gana el JUGADOR 1! Elige quien saca.' :
                     currentLang === 'it' ? 'Vince il GIOCATORE 1! Sceglie chi batte.' :
                     currentLang === 'fr' ? 'Le JOUEUR 1 gagne! Il choisit qui sert.' :
                     currentLang === 'zh' ? '选手1获胜！他选择谁发球。' : 'JOGADOR 1 vence! Ele escolhe quem saca.') :
                    (currentLang === 'ru' ? 'Победил ИГРОК 2! Он выбирает право подачи.' :
                     currentLang === 'en' ? 'PLAYER 2 wins! They choose who serves.' :
                     currentLang === 'de' ? 'SPIELER 2 gewinnt! Er wählt den Aufschlag.' :
                     currentLang === 'es' ? '¡Gana el JUGADOR 2! Elige quien saca.' :
                     currentLang === 'it' ? 'Vince il GIOCATORE 2! Sceglie chi batte.' :
                     currentLang === 'fr' ? 'Le JOUEUR 2 gagne! Il choisit qui sert.' :
                     currentLang === 'zh' ? '选手2获胜！他选择谁发球。' : 'JOGADOR 2 vence! Ele escolhe quem saca.');
                
                tossResult.textContent = winnerText;
                
                setTimeout(() => {
                    const serveChoice = confirm(result === 1 ? 
                        (currentLang === 'ru' ? 'Игрок 1 выиграл жребий. Передать подачу Игроку 1?' :
                         currentLang === 'en' ? 'Player 1 won the toss. Give serve to Player 1?' :
                         currentLang === 'de' ? 'Spieler 1 gewann den Münzwurf. Aufschlag an Spieler 1?' :
                         currentLang === 'es' ? 'El Jugador 1 ganó el sorteo. ¿Dar saque al Jugador 1?' :
                         currentLang === 'it' ? 'Il Giocatore 1 ha vinto il sorteggio. Dare la battuta al Giocatore 1?' :
                         currentLang === 'fr' ? 'Le Joueur 1 a gagné le tirage. Donner le service au Joueur 1?' :
                         currentLang === 'zh' ? '选手1赢得了抛硬币。让选手1发球？' : 'Jogador 1 venceu o sorteio. Dar saque para o Jogador 1?') :
                        (currentLang === 'ru' ? 'Игрок 2 выиграл жребий. Передать подачу Игроку 2?' :
                         currentLang === 'en' ? 'Player 2 won the toss. Give serve to Player 2?' :
                         currentLang === 'de' ? 'Spieler 2 gewann den Münzwurf. Aufschlag an Spieler 2?' :
                         currentLang === 'es' ? 'El Jugador 2 ganó el sorteo. ¿Dar saque al Jugador 2?' :
                         currentLang === 'it' ? 'Il Giocatore 2 ha vinto il sorteggio. Dare la battuta al Giocatore 2?' :
                         currentLang === 'fr' ? 'Le Joueur 2 a gagné le tirage. Donner le service au Joueur 2?' :
                         currentLang === 'zh' ? '选手2赢得了抛硬币。让选手2发球？' : 'Jogador 2 venceu o sorteio. Dar saque para o Jogador 2?'));
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
    });
}

async function startMatchWithToss() {
    if (match.isStarted) return;
    const server = await showTossModal();
    match.startMatch(server);
    document.getElementById('startTime').textContent = match.startTime;
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
    document.getElementById('exportJSON').onclick = () => exportJSON();
    document.getElementById('exportCSV').onclick = () => exportCSV(false);
    document.getElementById('exportCSV_UTF8').onclick = () => exportCSV(true);
    document.getElementById('printProtocol').onclick = () => printProtocol();
    
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