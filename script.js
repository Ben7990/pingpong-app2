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
        'print': '🖨 ПЕЧАТЬ ПРОТОКОЛА',
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
        'side_change': '↔ Смена сторон',
        'accelerate_on': '⚡ Включена система ускорения',
        'timeout_event': '⏸ Тайм-аут взят игроком {player}',
        'timeout_error': '❌ У игрока {player} нет тайм-аутов',
        'warning_event': '⚠️ Предупреждение игроку {player}',
        'yellow_event': '🟨 Желтая карточка игроку {player}',
        'red_event': '🟥 КРАСНАЯ КАРТОЧКА игроку {player} - дисквалификация!',
        'undo': '↩ Отмена последнего очка',
        'match_start': '🏓 Матч официально начат',
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
        'endTime': 'Время окончания'
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
        'print': '🖨 PRINT PROTOCOL',
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
        'side_change': '↔ Side change',
        'accelerate_on': '⚡ Acceleration system activated',
        'timeout_event': '⏸ Timeout taken by player {player}',
        'timeout_error': '❌ Player {player} has no timeouts left',
        'warning_event': '⚠️ Warning to player {player}',
        'yellow_event': '🟨 Yellow card to player {player}',
        'red_event': '🟥 RED CARD to player {player} - disqualification!',
        'undo': '↩ Last point undone',
        'match_start': '🏓 Match officially started',
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
        'endTime': 'End time'
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
        'startMatch': '🎬 SPIEL STARTEN',
        'finishMatch': '🏁 BEENDEN',
        'pointToPlayer1': '➕ PUNKT SPIELER 1',
        'pointToPlayer2': '➕ PUNKT SPIELER 2',
        'timeout': '⏸ AUSZEIT',
        'warning': '⚠️ VERWARNUNG',
        'yellow': '🟨 GELBE KARTE',
        'red': '🟥 ROTE KARTE',
        'changeServe': '🔄 AUFSCHLAG WECHSELN',
        'changeSide': '↔ SEITEN WECHSELN',
        'undoPoint': '↩ PUNKT ZURÜCKNEHMEN',
        'accelerate': '⚡ BESCHLEUNIGUNG',
        'protocol': '📋 SPIELPROTOKOLL',
        'referee': 'Schiedsrichter:',
        'startTime': 'Startzeit:',
        'currentTime': 'Aktuelle Zeit:',
        'status': 'Status:',
        'eventLog': 'EREIGNISPROTOKOLL',
        'exportJSON': '💾 EXPORT JSON',
        'exportCSV': '📊 EXPORT CSV (ANSI)',
        'exportCSVUtf8': '📊 EXPORT CSV (UTF-8)',
        'print': '🖨 PROTOKOLL DRUCKEN',
        'resetPassword': '🔑 Passwort vergessen?',
        'sendCode': 'Code senden',
        'changePassword': 'Passwort ändern',
        'enterEmail': 'E-Mail-Adresse eingeben',
        'enterCode': 'Code aus der E-Mail eingeben',
        'newPassword': 'Neues Passwort',
        'codeSent': 'Code wurde gesendet',
        'privacy': '📄 Datenschutz',
        'emailPlaceholder': 'E-Mail',
        'passwordPlaceholder': 'Passwort',
        'namePlaceholder': 'Name',
        'point': '🎾 Punkt für Spieler {player}',
        'set_end': '🏆 Satz {set} beendet. Spieler {winner} gewinnt',
        'set_start': '🎬 Beginn von Satz {set}. Spieler {server} schlägt auf',
        'serve_auto_change': '🔄 Automatischer Aufschlagwechsel. Spieler {server} schlägt jetzt auf',
        'serve_manual_change': '🖐️ Manueller Aufschlagwechsel. Spieler {server} schlägt jetzt auf',
        'side_change': '↔ Seitenwechsel',
        'accelerate_on': '⚡ Beschleunigungssystem aktiviert',
        'timeout_event': '⏸ Auszeit genommen von Spieler {player}',
        'timeout_error': '❌ Spieler {player} hat keine Auszeiten mehr',
        'warning_event': '⚠️ Verwarnung für Spieler {player}',
        'yellow_event': '🟨 Gelbe Karte für Spieler {player}',
        'red_event': '🟥 ROTE KARTE für Spieler {player} - Disqualifikation!',
        'undo': '↩ Letzter Punkt zurückgenommen',
        'match_start': '🏓 Spiel offiziell gestartet',
        'match_end_sporting': '🏁 Spiel beendet. Sieger: Spieler {winner}. Ergebnis: {sets}',
        'match_end_early': '🏁 Spiel vorzeitig beendet. Grund: {reason}',
        'error_not_started': '❌ Spiel noch nicht gestartet! Klicken Sie "SPIEL STARTEN"',
        'error_finished': '❌ Spiel beendet, keine weiteren Punkte',
        'exportTitle': 'Spielprotokoll',
        'tournament': 'Turnier',
        'date': 'Datum',
        'table': 'Tisch',
        'refereeName': 'Schiedsrichter',
        'result': 'Ergebnis',
        'eventLogTitle': 'Ereignisprotokoll',
        'time': 'Zeit',
        'event': 'Ereignis',
        'score': 'Punktstand',
        'vs': 'gegen',
        'winner': 'Sieger',
        'endTime': 'Endzeit'
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
        'cancel': 'Cancelar',
        'injury': 'Lesión',
        'forfeit': 'No presentado',
        'technical': 'Técnico',
        'finishMatchTitle': 'Finalizar partido',
        'finishMatchText': 'Seleccione razón:',
        'player1Title': 'JUGADOR 1',
        'player2Title': 'JUGADOR 2',
        'serve': 'SACAR',
        'newMatch': '🔄 NUEVO PARTIDO',
        'startMatch': '🎬 COMENZAR PARTIDO',
        'finishMatch': '🏁 FINALIZAR',
        'pointToPlayer1': '➕ PUNTO JUGADOR 1',
        'pointToPlayer2': '➕ PUNTO JUGADOR 2',
        'timeout': '⏸ TIEMPO MUERTO',
        'warning': '⚠️ ADVERTENCIA',
        'yellow': '🟨 TARJETA AMARILLA',
        'red': '🟥 TARJETA ROJA',
        'changeServe': '🔄 CAMBIAR SAQUE',
        'changeSide': '↔ CAMBIAR LADOS',
        'undoPoint': '↩ DESHACER PUNTO',
        'accelerate': '⚡ ACELERACIÓN',
        'protocol': '📋 PROTOCOLO DEL PARTIDO',
        'referee': 'Árbitro:',
        'startTime': 'Hora de inicio:',
        'currentTime': 'Hora actual:',
        'status': 'Estado:',
        'eventLog': 'REGISTRO DE EVENTOS',
        'exportJSON': '💾 EXPORTAR JSON',
        'exportCSV': '📊 EXPORTAR CSV (ANSI)',
        'exportCSVUtf8': '📊 EXPORTAR CSV (UTF-8)',
        'print': '🖨 IMPRIMIR PROTOCOLO',
        'resetPassword': '🔑 ¿Olvidó su contraseña?',
        'sendCode': 'Enviar código',
        'changePassword': 'Cambiar contraseña',
        'enterEmail': 'Ingrese el email de registro',
        'enterCode': 'Ingrese el código del email',
        'newPassword': 'Nueva contraseña',
        'codeSent': 'Código enviado',
        'privacy': '📄 Política de privacidad',
        'emailPlaceholder': 'Correo electrónico',
        'passwordPlaceholder': 'Contraseña',
        'namePlaceholder': 'Nombre',
        'point': '🎾 Punto anotado por jugador {player}',
        'set_end': '🏆 Set {set} completado. Jugador {winner} gana',
        'set_start': '🎬 Inicio del set {set}. Saca el jugador {server}',
        'serve_auto_change': '🔄 Cambio automático de saque. Ahora saca el jugador {server}',
        'serve_manual_change': '🖐️ Cambio manual de saque. Ahora saca el jugador {server}',
        'side_change': '↔ Cambio de lado',
        'accelerate_on': '⚡ Sistema de aceleración activado',
        'timeout_event': '⏸ Tiempo muerto solicitado por jugador {player}',
        'timeout_error': '❌ El jugador {player} no tiene tiempos muertos',
        'warning_event': '⚠️ Advertencia al jugador {player}',
        'yellow_event': '🟨 Tarjeta amarilla al jugador {player}',
        'red_event': '🟥 TARJETA ROJA al jugador {player} - descalificación!',
        'undo': '↩ Último punto deshecho',
        'match_start': '🏓 Partido oficialmente iniciado',
        'match_end_sporting': '🏁 Partido finalizado. Ganador: jugador {winner}. Resultado: {sets}',
        'match_end_early': '🏁 Partido finalizado anticipadamente. Razón: {reason}',
        'error_not_started': '❌ Partido no iniciado! Haga clic en "COMENZAR PARTIDO"',
        'error_finished': '❌ Partido finalizado, no se pueden anotar más puntos',
        'exportTitle': 'Protocolo del Partido',
        'tournament': 'Torneo',
        'date': 'Fecha',
        'table': 'Mesa',
        'refereeName': 'Árbitro',
        'result': 'Resultado',
        'eventLogTitle': 'Registro de Eventos',
        'time': 'Hora',
        'event': 'Evento',
        'score': 'Marcador',
        'vs': 'contra',
        'winner': 'Ganador',
        'endTime': 'Hora final'
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
        'cancel': 'Annulla',
        'injury': 'Infortunio',
        'forfeit': 'Forfait',
        'technical': 'Tecnico',
        'finishMatchTitle': 'Termina partita',
        'finishMatchText': 'Seleziona motivo:',
        'player1Title': 'GIOCATORE 1',
        'player2Title': 'GIOCATORE 2',
        'serve': 'BATTUTA',
        'newMatch': '🔄 NUOVA PARTITA',
        'startMatch': '🎬 INIZIA PARTITA',
        'finishMatch': '🏁 TERMINA',
        'pointToPlayer1': '➕ PUNTO GIOCATORE 1',
        'pointToPlayer2': '➕ PUNTO GIOCATORE 2',
        'timeout': '⏸ TIME OUT',
        'warning': '⚠️ AMMONIZIONE',
        'yellow': '🟨 CARTELLINO GIALLO',
        'red': '🟥 CARTELLINO ROSSO',
        'changeServe': '🔄 CAMBIA BATTUTA',
        'changeSide': '↔ CAMBIA LATO',
        'undoPoint': '↩ ANNULLA PUNTO',
        'accelerate': '⚡ ACCELERAZIONE',
        'protocol': '📋 PROTOCOLLO PARTITA',
        'referee': 'Arbitro:',
        'startTime': 'Ora inizio:',
        'currentTime': 'Ora corrente:',
        'status': 'Stato:',
        'eventLog': 'REGISTRO EVENTI',
        'exportJSON': '💾 ESPORTA JSON',
        'exportCSV': '📊 ESPORTA CSV (ANSI)',
        'exportCSVUtf8': '📊 ESPORTA CSV (UTF-8)',
        'print': '🖨 STAMPA PROTOCOLLO',
        'resetPassword': '🔑 Password dimenticata?',
        'sendCode': 'Invia codice',
        'changePassword': 'Cambia password',
        'enterEmail': 'Inserisci email di registrazione',
        'enterCode': 'Inserisci il codice ricevuto',
        'newPassword': 'Nuova password',
        'codeSent': 'Codice inviato',
        'privacy': '📄 Politica sulla privacy',
        'emailPlaceholder': 'Email',
        'passwordPlaceholder': 'Password',
        'namePlaceholder': 'Nome',
        'point': '🎾 Punto segnato dal giocatore {player}',
        'set_end': '🏆 Set {set} completato. Giocatore {winner} vince',
        'set_start': '🎬 Inizio del set {set}. Batte il giocatore {server}',
        'serve_auto_change': '🔄 Cambio automatico di battuta. Ora batte il giocatore {server}',
        'serve_manual_change': '🖐️ Cambio manuale di battuta. Ora batte il giocatore {server}',
        'side_change': '↔ Cambio di lato',
        'accelerate_on': '⚡ Sistema di accelerazione attivato',
        'timeout_event': '⏸ Time out richiesto dal giocatore {player}',
        'timeout_error': '❌ Il giocatore {player} non ha time out',
        'warning_event': '⚠️ Ammonizione al giocatore {player}',
        'yellow_event': '🟨 Cartellino giallo al giocatore {player}',
        'red_event': '🟥 CARTELLINO ROSSO al giocatore {player} - squalifica!',
        'undo': '↩ Ultimo punto annullato',
        'match_start': '🏓 Partita ufficialmente iniziata',
        'match_end_sporting': '🏁 Partita terminata. Vincitore: giocatore {winner}. Risultato: {sets}',
        'match_end_early': '🏁 Partita terminata anticipatamente. Motivo: {reason}',
        'error_not_started': '❌ Partita non iniziata! Clicca "INIZIA PARTITA"',
        'error_finished': '❌ Partita terminata, non si possono assegnare punti',
        'exportTitle': 'Protocollo Partita',
        'tournament': 'Torneo',
        'date': 'Data',
        'table': 'Tavolo',
        'refereeName': 'Arbitro',
        'result': 'Risultato',
        'eventLogTitle': 'Registro Eventi',
        'time': 'Ora',
        'event': 'Evento',
        'score': 'Punteggio',
        'vs': 'contro',
        'winner': 'Vincitore',
        'endTime': 'Ora fine'
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
        'cancel': 'Annuler',
        'injury': 'Blessure',
        'forfeit': 'Forfait',
        'technical': 'Technique',
        'finishMatchTitle': 'Terminer le match',
        'finishMatchText': 'Choisissez la raison:',
        'player1Title': 'JOUEUR 1',
        'player2Title': 'JOUEUR 2',
        'serve': 'SERVICE',
        'newMatch': '🔄 NOUVEAU MATCH',
        'startMatch': '🎬 COMMENCER',
        'finishMatch': '🏁 TERMINER',
        'pointToPlayer1': '➕ POINT JOUEUR 1',
        'pointToPlayer2': '➕ POINT JOUEUR 2',
        'timeout': '⏸ TEMPS MORT',
        'warning': '⚠️ AVERTISSEMENT',
        'yellow': '🟨 CARTON JAUNE',
        'red': '🟥 CARTON ROUGE',
        'changeServe': '🔄 CHANGER SERVICE',
        'changeSide': '↔ CHANGER DE CÔTÉ',
        'undoPoint': '↩ ANNULER LE POINT',
        'accelerate': '⚡ ACCÉLÉRATION',
        'protocol': '📋 PROTOCOLE DU MATCH',
        'referee': 'Arbitre:',
        'startTime': 'Heure de début:',
        'currentTime': 'Heure actuelle:',
        'status': 'Statut:',
        'eventLog': 'JOURNAL DES ÉVÉNEMENTS',
        'exportJSON': '💾 EXPORTER JSON',
        'exportCSV': '📊 EXPORTER CSV (ANSI)',
        'exportCSVUtf8': '📊 EXPORTER CSV (UTF-8)',
        'print': '🖨 IMPRIMER LE PROTOCOLE',
        'resetPassword': '🔑 Mot de passe oublié?',
        'sendCode': 'Envoyer le code',
        'changePassword': 'Changer le mot de passe',
        'enterEmail': 'Entrez l\'email d\'inscription',
        'enterCode': 'Entrez le code reçu',
        'newPassword': 'Nouveau mot de passe',
        'codeSent': 'Code envoyé',
        'privacy': '📄 Politique de confidentialité',
        'emailPlaceholder': 'Email',
        'passwordPlaceholder': 'Mot de passe',
        'namePlaceholder': 'Nom',
        'point': '🎾 Point marqué par le joueur {player}',
        'set_end': '🏆 Set {set} terminé. Joueur {winner} gagne',
        'set_start': '🎬 Début du set {set}. Le joueur {server} sert',
        'serve_auto_change': '🔄 Changement de service automatique. Le joueur {server} sert maintenant',
        'serve_manual_change': '🖐️ Changement de service manuel. Le joueur {server} sert maintenant',
        'side_change': '↔ Changement de côté',
        'accelerate_on': '⚡ Système d\'accélération activé',
        'timeout_event': '⏸ Temps mort pris par le joueur {player}',
        'timeout_error': '❌ Le joueur {player} n\'a plus de temps mort',
        'warning_event': '⚠️ Avertissement au joueur {player}',
        'yellow_event': '🟨 Carton jaune au joueur {player}',
        'red_event': '🟥 CARTON ROUGE au joueur {player} - disqualification!',
        'undo': '↩ Dernier point annulé',
        'match_start': '🏓 Match officiellement commencé',
        'match_end_sporting': '🏁 Match terminé. Vainqueur: joueur {winner}. Score: {sets}',
        'match_end_early': '🏁 Match terminé prématurément. Raison: {reason}',
        'error_not_started': '❌ Match non commencé! Cliquez sur "COMMENCER"',
        'error_finished': '❌ Match terminé, plus de points possibles',
        'exportTitle': 'Protocole du Match',
        'tournament': 'Tournoi',
        'date': 'Date',
        'table': 'Table',
        'refereeName': 'Arbitre',
        'result': 'Résultat',
        'eventLogTitle': 'Journal des Événements',
        'time': 'Heure',
        'event': 'Événement',
        'score': 'Score',
        'vs': 'contre',
        'winner': 'Vainqueur',
        'endTime': 'Heure de fin'
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
        'startMatch': '🎬 开始比赛',
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
        'print': '🖨 打印记录表',
        'resetPassword': '🔑 忘记密码？',
        'sendCode': '发送验证码',
        'changePassword': '修改密码',
        'enterEmail': '输入注册邮箱',
        'enterCode': '输入邮件中的验证码',
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
        'side_change': '↔ 交换场地',
        'accelerate_on': '⚡ 加速系统已开启',
        'timeout_event': '⏸ 选手{player}请求暂停',
        'timeout_error': '❌ 选手{player}没有暂停机会了',
        'warning_event': '⚠️ 警告选手{player}',
        'yellow_event': '🟨 黄牌警告选手{player}',
        'red_event': '🟥 红牌罚下选手{player} - 取消比赛资格！',
        'undo': '↩ 撤销最后一分',
        'match_start': '🏓 比赛正式开始',
        'match_end_sporting': '🏁 比赛结束。获胜者：选手{winner}。比分：{sets}',
        'match_end_early': '🏁 比赛提前结束。原因：{reason}',
        'error_not_started': '❌ 比赛尚未开始！请点击"开始比赛"',
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
        'endTime': '结束时间'
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
        'cancel': 'Cancelar',
        'injury': 'Lesão',
        'forfeit': 'Desistência',
        'technical': 'Técnico',
        'finishMatchTitle': 'Finalizar partida',
        'finishMatchText': 'Selecione o motivo:',
        'player1Title': 'JOGADOR 1',
        'player2Title': 'JOGADOR 2',
        'serve': 'SAQUE',
        'newMatch': '🔄 NOVA PARTIDA',
        'startMatch': '🎬 INICIAR',
        'finishMatch': '🏁 FINALIZAR',
        'pointToPlayer1': '➕ PONTO JOGADOR 1',
        'pointToPlayer2': '➕ PONTO JOGADOR 2',
        'timeout': '⏸ TEMPO TÉCNICO',
        'warning': '⚠️ ADVERTÊNCIA',
        'yellow': '🟨 CARTÃO AMARELO',
        'red': '🟥 CARTÃO VERMELHO',
        'changeServe': '🔄 TROCAR SAQUE',
        'changeSide': '↔ TROCAR LADOS',
        'undoPoint': '↩ DESFAZER PONTO',
        'accelerate': '⚡ ACELERAÇÃO',
        'protocol': '📋 PROTOCOLO DA PARTIDA',
        'referee': 'Árbitro:',
        'startTime': 'Hora de início:',
        'currentTime': 'Hora atual:',
        'status': 'Status:',
        'eventLog': 'REGISTRO DE EVENTOS',
        'exportJSON': '💾 EXPORTAR JSON',
        'exportCSV': '📊 EXPORTAR CSV (ANSI)',
        'exportCSVUtf8': '📊 EXPORTAR CSV (UTF-8)',
        'print': '🖨 IMPRIMIR PROTOCOLO',
        'resetPassword': '🔑 Esqueceu a senha?',
        'sendCode': 'Enviar código',
        'changePassword': 'Alterar senha',
        'enterEmail': 'Digite o email de registro',
        'enterCode': 'Digite o código recebido',
        'newPassword': 'Nova senha',
        'codeSent': 'Código enviado',
        'privacy': '📄 Política de privacidade',
        'emailPlaceholder': 'E-mail',
        'passwordPlaceholder': 'Senha',
        'namePlaceholder': 'Nome',
        'point': '🎾 Ponto marcado pelo jogador {player}',
        'set_end': '🏆 Set {set} concluído. Jogador {winner} vence',
        'set_start': '🎬 Início do set {set}. Jogador {server} saca',
        'serve_auto_change': '🔄 Mudança automática de saque. Agora o jogador {server} saca',
        'serve_manual_change': '🖐️ Mudança manual de saque. Agora o jogador {server} saca',
        'side_change': '↔ Mudança de lado',
        'accelerate_on': '⚡ Sistema de aceleração ativado',
        'timeout_event': '⏸ Tempo técnico solicitado pelo jogador {player}',
        'timeout_error': '❌ Jogador {player} não tem mais tempos técnicos',
        'warning_event': '⚠️ Advertência ao jogador {player}',
        'yellow_event': '🟨 Cartão amarelo para o jogador {player}',
        'red_event': '🟥 CARTÃO VERMELHO para o jogador {player} - desclassificação!',
        'undo': '↩ Último ponto desfeito',
        'match_start': '🏓 Partida oficialmente iniciada',
        'match_end_sporting': '🏁 Partida finalizada. Vencedor: jogador {winner}. Placar: {sets}',
        'match_end_early': '🏁 Partida finalizada antecipadamente. Motivo: {reason}',
        'error_not_started': '❌ Partida não iniciada! Clique em "INICIAR"',
        'error_finished': '❌ Partida finalizada, não é possível marcar pontos',
        'exportTitle': 'Protocolo da Partida',
        'tournament': 'Torneio',
        'date': 'Data',
        'table': 'Mesa',
        'refereeName': 'Árbitro',
        'result': 'Resultado',
        'eventLogTitle': 'Registro de Eventos',
        'time': 'Hora',
        'event': 'Evento',
        'score': 'Placar',
        'vs': 'contra',
        'winner': 'Vencedor',
        'endTime': 'Hora final'
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
    
    // ========== КНОПКИ "ВХОД" И "РЕГИСТРАЦИЯ" ==========
    const authTabs = document.querySelectorAll('.auth-tab');
    if (authTabs.length >= 2) {
        authTabs[0].textContent = trans.login;
        authTabs[1].textContent = trans.register;
    }
    
    // Основные элементы интерфейса (НЕ включая имена и страны игроков)
    const elements = {
        'mainTitle': trans.appName,
        'authTitle': '🏓 ' + trans.appName,
        'doLogin': trans.loginBtn,
        'doRegister': trans.registerBtn,
        'logoutBtn': trans.logout,
        'subscriptionBtn': trans.support,
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
    
    // ========== НЕ ПЕРЕВОДИМ ИМЕНА И СТРАНЫ ИГРОКОВ ==========
    // Оставляем их как есть, ничего не меняем
    
    // ПЕРЕВОД ПЛЕЙСХОЛДЕРОВ
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
    
    // ПЕРЕВОД ССЫЛКИ "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ"
    const privacyLink = document.querySelector('.auth-card a[href="privacy.html"]');
    if (privacyLink) {
        privacyLink.textContent = trans.privacy;
    }
    
    // ПЕРЕВОД ТЕКСТА В МОДАЛЬНОМ ОКНЕ
    const resetModalTitle = document.querySelector('#resetPasswordModal h2');
    if (resetModalTitle) resetModalTitle.textContent = '🔑 ' + trans.resetPassword;
    
    const resetModalText = document.querySelector('#resetPasswordModal p');
    if (resetModalText) resetModalText.textContent = trans.enterEmail;
    
    const resetStep2Text = document.querySelector('#resetStep2 p');
    if (resetStep2Text) resetStep2Text.textContent = trans.codeSent;
    
    // Обновляем статус матча
    const statusEl = document.getElementById('matchStatus');
    if (statusEl && window.match) {
        if (!window.match.isStarted) statusEl.textContent = '● ' + trans.waiting;
        else if (window.match.isFinished) statusEl.textContent = '● ' + trans.finished;
        else statusEl.textContent = '● ' + trans.playing;
    }
    
    // При смене языка ПЕРЕВОДИМ ВЕСЬ ЖУРНАЛ СОБЫТИЙ
    if (window.match && window.match.events) {
        window.match.refreshEventLog();
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
            isPro: false,
            matchesUsed: 0,
            matchesLimit: 999999,
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
        return (this.currentUser.matchesUsed || 0) < (this.currentUser.matchesLimit || 999999);
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
        const limit = this.currentUser.matchesLimit || 999999;
        const used = this.currentUser.matchesUsed || 0;
        return Math.max(0, limit - used);
    }
    
    isPro() { return true; }
    
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
        this.players = { 1: { name: '', country: '', score: 0, sets: 0, warnings: [], timeouts: 0 }, 2: { name: '', country: '', score: 0, sets: 0, warnings: [], timeouts: 0 } };
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
    
    startMatch() {
        if (this.isStarted) return false;
        this.isStarted = true;
        this.startTime = new Date().toLocaleTimeString('ru-RU');
        this.addEvent('match_start', {});
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
        this.currentSet++;
        this.currentServer = this.currentServer === 1 ? 2 : 1;
        this.pointsInCurrentServe = 0;
        this.changeSide();
        this.addEvent('set_start', { set: this.currentSet, server: this.currentServer }, this.currentServer);
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
        if (window.auth && !window.auth.isPro() && this.isStarted) {
            window.auth.incrementMatchesUsed();
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
        this.addEvent('undo', {}, lastPoint.player);
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
        this.addEvent('side_change', {}); 
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
    if (!auth) return false;
    match = new TableTennisMatch();
    window.match = match;
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
    const startBtn = document.getElementById('startMatch');
    if (startBtn) startBtn.onclick = () => { if (!match.isStarted) { match.startMatch(); document.getElementById('startTime').textContent = match.startTime; updateUI(); } };
    
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
            <table><th>Время</th><th>Событие</th><th>Счет</th><tr>
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
    
    // Настройка кнопок авторизации
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