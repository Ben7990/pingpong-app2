// ==================== СИСТЕМА ПЕРЕВОДОВ (8 ЯЗЫКОВ) ====================
const translations = {
    ru: {
        'appName': 'СУДЕЙСКИЙ ПРОТОКОЛ',
        'login': 'Вход',
        'register': 'Регистрация',
        'loginBtn': 'Войти',
        'registerBtn': 'Зарегистрироваться',
        'logout': '🚪 Выход',
        'pro': '💎 PRO',
        'adBanner': '📢 Реклама • Подписка PRO убирает рекламу и снимает лимиты →',
        'buyPro': 'Купить PRO',
        'player1Title': 'ИГРОК 1',
        'player2Title': 'ИГРОК 2',
        'serve': 'ПОДАЧА',
        'newMatch': '🔄 НОВЫЙ МАТЧ',
        'startMatch': '🎬 НАЧАТЬ МАТЧ',
        'pointToPlayer1': '➕ ОЧКО ИГРОКУ 1',
        'pointToPlayer2': '➕ ОЧКО ИГРОКУ 2',
        'timeout1': '⏸ ТАЙМ-АУТ ИГРОК 1',
        'timeout2': '⏸ ТАЙМ-АУТ ИГРОК 2',
        'warning1': '⚠ ПРЕДУПРЕЖДЕНИЕ ИГРОК 1',
        'warning2': '⚠ ПРЕДУПРЕЖДЕНИЕ ИГРОК 2',
        'yellow1': '🟨 ЖЕЛТАЯ КАРТА ИГРОК 1',
        'yellow2': '🟨 ЖЕЛТАЯ КАРТА ИГРОК 2',
        'red1': '🟥 КРАСНАЯ КАРТА ИГРОК 1',
        'red2': '🟥 КРАСНАЯ КАРТА ИГРОК 2',
        'changeServe': '🔄 СМЕНА ПОДАЧИ',
        'changeSide': '↔ СМЕНА СТОРОН',
        'undoPoint': '↩ ОТМЕНА ОЧКА',
        'accelerate': '⚡ УСКОРЕНИЕ',
        'finishMatch': '🏁 ЗАВЕРШИТЬ',
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
        'waiting': 'ОЖИДАНИЕ НАЧАЛА',
        'playing': 'В ИГРЕ',
        'finished': 'ЗАВЕРШЕН',
        'disqualified': 'ДИСКВАЛИФИКАЦИЯ',
        'proSubscription': '💎 PRO подписка',
        'selectTariff': 'Выберите тариф:',
        'plan1Name': '📱 Базовый PRO',
        'plan1Period': '/ месяц',
        'plan2Name': '👑 PRO Безлимит',
        'plan2Period': '/ месяц',
        'plan3Name': '🎯 PRO Годовой',
        'plan3Period': '/ год (экономия 17%)',
        'popular': '🔥 ПОПУЛЯРНЫЙ',
        'select': 'Выбрать',
        'restore': 'Восстановить покупки',
        'limitWarning': '⚠️ У вас осталось ',
        'limitWarning2': ' матчей в бесплатной версии. Оформите PRO подписку!',
        'matchesLeft': 'матчей осталось',
        'unlimited': '♾️ Безлимит PRO',
        'matchesCount': 'матчей',
        'finishMatchTitle': '⚠️ Завершение матча',
        'finishMatchText': 'Выберите причину:',
        'injury': '🏥 Травма',
        'forfeit': '🚫 Неявка',
        'technical': '🔧 Техпроблема',
        'cancel': 'Отмена',
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
        'status': 'Статус',
        'endTime': 'Время окончания',
        'match_start': '🏓 Матч официально начат',
        'set_end': '🏆 Партия {set} завершена. Победил игрок {winner}',
        'set_start': '🎬 Начало {set}-й партии. Подает игрок {server}',
        'point': '🎾 Очко заработал игрок {player}',
        'serve_auto_change': '🔄 Автоматическая смена подачи. Теперь подает игрок {server}',
        'serve_manual_change': '🖐️ Ручная смена подачи. Теперь подает игрок {server}',
        'side_change': '↔ Смена сторон',
        'accelerate_on': '⚡ Включена система ускорения',
        'timeout': '⏸ Тайм-аут взят игроком {player}',
        'timeout_error': '❌ У игрока {player} нет тайм-аутов',
        'warning': '⚠️ Предупреждение игроку {player}',
        'yellow': '🟨 Желтая карточка игроку {player}',
        'red': '🟥 КРАСНАЯ КАРТОЧКА игроку {player} - дисквалификация!',
        'match_end_sporting': '🏁 Матч завершен. Победитель: игрок {winner}. Счет: {sets}',
        'match_end_early': '🏁 Матч завершен досрочно. Причина: {reason}',
        'undo': '↩ Отмена последнего очка',
        'error_not_started': '❌ Матч еще не начат! Нажмите "НАЧАТЬ МАТЧ"',
        'error_finished': '❌ Матч завершен, очки не начисляются'
    },
    en: {
        'appName': 'REFEREE PROTOCOL',
        'login': 'Login',
        'register': 'Register',
        'loginBtn': 'Login',
        'registerBtn': 'Register',
        'logout': '🚪 Logout',
        'pro': '💎 PRO',
        'adBanner': '📢 Ad • PRO removes ads and limits →',
        'buyPro': 'Get PRO',
        'player1Title': 'PLAYER 1',
        'player2Title': 'PLAYER 2',
        'serve': 'SERVE',
        'newMatch': '🔄 NEW MATCH',
        'startMatch': '🎬 START MATCH',
        'pointToPlayer1': '➕ POINT TO PLAYER 1',
        'pointToPlayer2': '➕ POINT TO PLAYER 2',
        'timeout1': '⏸ TIMEOUT PLAYER 1',
        'timeout2': '⏸ TIMEOUT PLAYER 2',
        'warning1': '⚠ WARNING PLAYER 1',
        'warning2': '⚠ WARNING PLAYER 2',
        'yellow1': '🟨 YELLOW CARD PLAYER 1',
        'yellow2': '🟨 YELLOW CARD PLAYER 2',
        'red1': '🟥 RED CARD PLAYER 1',
        'red2': '🟥 RED CARD PLAYER 2',
        'changeServe': '🔄 CHANGE SERVE',
        'changeSide': '↔ CHANGE SIDES',
        'undoPoint': '↩ UNDO POINT',
        'accelerate': '⚡ ACCELERATION',
        'finishMatch': '🏁 FINISH',
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
        'waiting': 'WAITING TO START',
        'playing': 'IN PLAY',
        'finished': 'FINISHED',
        'disqualified': 'DISQUALIFIED',
        'proSubscription': '💎 PRO SUBSCRIPTION',
        'selectTariff': 'Select tariff:',
        'plan1Name': '📱 Basic PRO',
        'plan1Period': '/ month',
        'plan2Name': '👑 PRO Unlimited',
        'plan2Period': '/ month',
        'plan3Name': '🎯 PRO Yearly',
        'plan3Period': '/ year (save 17%)',
        'popular': '🔥 POPULAR',
        'select': 'Select',
        'restore': 'Restore purchases',
        'limitWarning': '⚠️ You have ',
        'limitWarning2': ' matches left in free version. Upgrade to PRO!',
        'matchesLeft': 'matches left',
        'unlimited': '♾️ Unlimited PRO',
        'matchesCount': 'matches',
        'finishMatchTitle': '⚠️ Finish Match',
        'finishMatchText': 'Select reason:',
        'injury': '🏥 Injury',
        'forfeit': '🚫 Forfeit',
        'technical': '🔧 Technical',
        'cancel': 'Cancel',
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
        'status': 'Status',
        'endTime': 'End time',
        'match_start': '🏓 Match officially started',
        'set_end': '🏆 Set {set} completed. Player {winner} wins',
        'set_start': '🎬 Start of set {set}. Player {server} serves',
        'point': '🎾 Point scored by player {player}',
        'serve_auto_change': '🔄 Automatic serve change. Player {server} now serves',
        'serve_manual_change': '🖐️ Manual serve change. Player {server} now serves',
        'side_change': '↔ Side change',
        'accelerate_on': '⚡ Acceleration system activated',
        'timeout': '⏸ Timeout taken by player {player}',
        'timeout_error': '❌ Player {player} has no timeouts left',
        'warning': '⚠️ Warning to player {player}',
        'yellow': '🟨 Yellow card to player {player}',
        'red': '🟥 RED CARD to player {player} - disqualification!',
        'match_end_sporting': '🏁 Match finished. Winner: player {winner}. Score: {sets}',
        'match_end_early': '🏁 Match finished early. Reason: {reason}',
        'undo': '↩ Last point undone',
        'error_not_started': '❌ Match not started yet! Click "START MATCH"',
        'error_finished': '❌ Match finished, no more points'
    },
    de: {
        'appName': 'SCHIEDSRICHTERPROTOKOLL',
        'login': 'Anmelden',
        'register': 'Registrieren',
        'loginBtn': 'Anmelden',
        'registerBtn': 'Registrieren',
        'logout': '🚪 Abmelden',
        'pro': '💎 PRO',
        'adBanner': '📢 Werbung • PRO entfernt Werbung und Limits →',
        'buyPro': 'PRO kaufen',
        'player1Title': 'SPIELER 1',
        'player2Title': 'SPIELER 2',
        'serve': 'AUFSCHLAG',
        'newMatch': '🔄 NEUES SPIEL',
        'startMatch': '🎬 SPIEL STARTEN',
        'pointToPlayer1': '➕ PUNKT FÜR SPIELER 1',
        'pointToPlayer2': '➕ PUNKT FÜR SPIELER 2',
        'timeout1': '⏸ AUSZEIT SPIELER 1',
        'timeout2': '⏸ AUSZEIT SPIELER 2',
        'warning1': '⚠ VERWARNUNG SPIELER 1',
        'warning2': '⚠ VERWARNUNG SPIELER 2',
        'yellow1': '🟨 GELBE KARTE SPIELER 1',
        'yellow2': '🟨 GELBE KARTE SPIELER 2',
        'red1': '🟥 ROTE KARTE SPIELER 1',
        'red2': '🟥 ROTE KARTE SPIELER 2',
        'changeServe': '🔄 AUFSCHLAG WECHSELN',
        'changeSide': '↔ SEITEN WECHSELN',
        'undoPoint': '↩ PUNKT ZURÜCKNEHMEN',
        'accelerate': '⚡ BESCHLEUNIGUNG',
        'finishMatch': '🏁 BEENDEN',
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
        'waiting': 'WARTEN AUF START',
        'playing': 'IM SPIEL',
        'finished': 'BEENDET',
        'disqualified': 'DISQUALIFIZIERT',
        'proSubscription': '💎 PRO ABONNEMENT',
        'selectTariff': 'Tarif wählen:',
        'plan1Name': '📱 Basis PRO',
        'plan1Period': '/ Monat',
        'plan2Name': '👑 PRO Unbegrenzt',
        'plan2Period': '/ Monat',
        'plan3Name': '🎯 PRO Jährlich',
        'plan3Period': '/ Jahr (17% sparen)',
        'popular': '🔥 BELIEBT',
        'select': 'Wählen',
        'restore': 'Käufe wiederherstellen',
        'limitWarning': '⚠️ Sie haben noch ',
        'limitWarning2': ' Spiele in der kostenlosen Version. Holen Sie sich PRO!',
        'matchesLeft': 'Spiele übrig',
        'unlimited': '♾️ Unbegrenzt PRO',
        'matchesCount': 'Spiele',
        'finishMatchTitle': '⚠️ Spiel beenden',
        'finishMatchText': 'Grund wählen:',
        'injury': '🏥 Verletzung',
        'forfeit': '🚫 Nichtantritt',
        'technical': '🔧 Technisch',
        'cancel': 'Abbrechen',
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
        'status': 'Status',
        'endTime': 'Endzeit',
        'match_start': '🏓 Spiel offiziell gestartet',
        'set_end': '🏆 Satz {set} beendet. Spieler {winner} gewinnt',
        'set_start': '🎬 Beginn von Satz {set}. Spieler {server} schlägt auf',
        'point': '🎾 Punkt für Spieler {player}',
        'serve_auto_change': '🔄 Automatischer Aufschlagwechsel. Spieler {server} schlägt jetzt auf',
        'serve_manual_change': '🖐️ Manueller Aufschlagwechsel. Spieler {server} schlägt jetzt auf',
        'side_change': '↔ Seitenwechsel',
        'accelerate_on': '⚡ Beschleunigungssystem aktiviert',
        'timeout': '⏸ Auszeit genommen von Spieler {player}',
        'timeout_error': '❌ Spieler {player} hat keine Auszeiten mehr',
        'warning': '⚠️ Verwarnung für Spieler {player}',
        'yellow': '🟨 Gelbe Karte für Spieler {player}',
        'red': '🟥 ROTE KARTE für Spieler {player} - Disqualifikation!',
        'match_end_sporting': '🏁 Spiel beendet. Sieger: Spieler {winner}. Ergebnis: {sets}',
        'match_end_early': '🏁 Spiel vorzeitig beendet. Grund: {reason}',
        'undo': '↩ Letzter Punkt zurückgenommen',
        'error_not_started': '❌ Spiel noch nicht gestartet! Klicken Sie "SPIEL STARTEN"',
        'error_finished': '❌ Spiel beendet, keine weiteren Punkte'
    },
    es: {
        'appName': 'PROTOCOLO DE ÁRBITRO',
        'login': 'Iniciar sesión',
        'register': 'Registrarse',
        'loginBtn': 'Iniciar sesión',
        'registerBtn': 'Registrarse',
        'logout': '🚪 Cerrar sesión',
        'pro': '💎 PRO',
        'adBanner': '📢 Anuncios • PRO elimina anuncios y límites →',
        'buyPro': 'Comprar PRO',
        'player1Title': 'JUGADOR 1',
        'player2Title': 'JUGADOR 2',
        'serve': 'SACAR',
        'newMatch': '🔄 NUEVO PARTIDO',
        'startMatch': '🎬 COMENZAR PARTIDO',
        'pointToPlayer1': '➕ PUNTO JUGADOR 1',
        'pointToPlayer2': '➕ PUNTO JUGADOR 2',
        'timeout1': '⏸ TIEMPO MUERTO JUGADOR 1',
        'timeout2': '⏸ TIEMPO MUERTO JUGADOR 2',
        'warning1': '⚠ ADVERTENCIA JUGADOR 1',
        'warning2': '⚠ ADVERTENCIA JUGADOR 2',
        'yellow1': '🟨 TARJETA AMARILLA JUGADOR 1',
        'yellow2': '🟨 TARJETA AMARILLA JUGADOR 2',
        'red1': '🟥 TARJETA ROJA JUGADOR 1',
        'red2': '🟥 TARJETA ROJA JUGADOR 2',
        'changeServe': '🔄 CAMBIAR SAQUE',
        'changeSide': '↔ CAMBIAR LADOS',
        'undoPoint': '↩ DESHACER PUNTO',
        'accelerate': '⚡ ACELERACIÓN',
        'finishMatch': '🏁 FINALIZAR',
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
        'waiting': 'ESPERANDO INICIO',
        'playing': 'EN JUEGO',
        'finished': 'FINALIZADO',
        'disqualified': 'DESCALIFICADO',
        'proSubscription': '💎 SUSCRIPCIÓN PRO',
        'selectTariff': 'Seleccione tarifa:',
        'plan1Name': '📱 PRO Básico',
        'plan1Period': '/ mes',
        'plan2Name': '👑 PRO Ilimitado',
        'plan2Period': '/ mes',
        'plan3Name': '🎯 PRO Anual',
        'plan3Period': '/ año (ahorra 17%)',
        'popular': '🔥 POPULAR',
        'select': 'Seleccionar',
        'restore': 'Restaurar compras',
        'limitWarning': '⚠️ Te quedan ',
        'limitWarning2': ' partidos en versión gratuita. ¡Actualiza a PRO!',
        'matchesLeft': 'partidos restantes',
        'unlimited': '♾️ PRO Ilimitado',
        'matchesCount': 'partidos',
        'finishMatchTitle': '⚠️ Finalizar partido',
        'finishMatchText': 'Seleccione razón:',
        'injury': '🏥 Lesión',
        'forfeit': '🚫 No presentado',
        'technical': '🔧 Técnico',
        'cancel': 'Cancelar',
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
        'status': 'Estado',
        'endTime': 'Hora final',
        'match_start': '🏓 Partido oficialmente iniciado',
        'set_end': '🏆 Set {set} completado. Jugador {winner} gana',
        'set_start': '🎬 Inicio del set {set}. Saca el jugador {server}',
        'point': '🎾 Punto anotado por jugador {player}',
        'serve_auto_change': '🔄 Cambio automático de saque. Ahora saca el jugador {server}',
        'serve_manual_change': '🖐️ Cambio manual de saque. Ahora saca el jugador {server}',
        'side_change': '↔ Cambio de lado',
        'accelerate_on': '⚡ Sistema de aceleración activado',
        'timeout': '⏸ Tiempo muerto solicitado por jugador {player}',
        'timeout_error': '❌ El jugador {player} no tiene tiempos muertos',
        'warning': '⚠️ Advertencia al jugador {player}',
        'yellow': '🟨 Tarjeta amarilla al jugador {player}',
        'red': '🟥 TARJETA ROJA al jugador {player} - descalificación!',
        'match_end_sporting': '🏁 Partido finalizado. Ganador: jugador {winner}. Resultado: {sets}',
        'match_end_early': '🏁 Partido finalizado anticipadamente. Razón: {reason}',
        'undo': '↩ Último punto deshecho',
        'error_not_started': '❌ Partido no iniciado! Haga clic en "COMENZAR PARTIDO"',
        'error_finished': '❌ Partido finalizado, no se pueden anotar más puntos'
    },
    it: {
        'appName': 'PROTOCOLLO ARBITRALE',
        'login': 'Accedi',
        'register': 'Registrati',
        'loginBtn': 'Accedi',
        'registerBtn': 'Registrati',
        'logout': '🚪 Esci',
        'pro': '💎 PRO',
        'adBanner': '📢 Pubblicità • PRO rimuove pubblicità e limiti →',
        'buyPro': 'Acquista PRO',
        'player1Title': 'GIOCATORE 1',
        'player2Title': 'GIOCATORE 2',
        'serve': 'BATTUTA',
        'newMatch': '🔄 NUOVA PARTITA',
        'startMatch': '🎬 INIZIA PARTITA',
        'pointToPlayer1': '➕ PUNTO GIOCATORE 1',
        'pointToPlayer2': '➕ PUNTO GIOCATORE 2',
        'timeout1': '⏸ TIME OUT GIOCATORE 1',
        'timeout2': '⏸ TIME OUT GIOCATORE 2',
        'warning1': '⚠ AMMONIZIONE GIOCATORE 1',
        'warning2': '⚠ AMMONIZIONE GIOCATORE 2',
        'yellow1': '🟨 CARTELLINO GIALLO GIOCATORE 1',
        'yellow2': '🟨 CARTELLINO GIALLO GIOCATORE 2',
        'red1': '🟥 CARTELLINO ROSSO GIOCATORE 1',
        'red2': '🟥 CARTELLINO ROSSO GIOCATORE 2',
        'changeServe': '🔄 CAMBIA BATTUTA',
        'changeSide': '↔ CAMBIA LATO',
        'undoPoint': '↩ ANNULLA PUNTO',
        'accelerate': '⚡ ACCELERAZIONE',
        'finishMatch': '🏁 TERMINA',
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
        'waiting': 'IN ATTESA INIZIO',
        'playing': 'IN GIOCO',
        'finished': 'TERMINATA',
        'disqualified': 'SQUALIFICATO',
        'proSubscription': '💎 ABBONAMENTO PRO',
        'selectTariff': 'Seleziona tariffa:',
        'plan1Name': '📱 PRO Base',
        'plan1Period': '/ mese',
        'plan2Name': '👑 PRO Illimitato',
        'plan2Period': '/ mese',
        'plan3Name': '🎯 PRO Annuale',
        'plan3Period': '/ anno (risparmia 17%)',
        'popular': '🔥 POPOLARE',
        'select': 'Seleziona',
        'restore': 'Ripristina acquisti',
        'limitWarning': '⚠️ Hai ancora ',
        'limitWarning2': ' partite nella versione gratuita. Passa a PRO!',
        'matchesLeft': 'partite rimaste',
        'unlimited': '♾️ PRO Illimitato',
        'matchesCount': 'partite',
        'finishMatchTitle': '⚠️ Termina partita',
        'finishMatchText': 'Seleziona motivo:',
        'injury': '🏥 Infortunio',
        'forfeit': '🚫 Forfait',
        'technical': '🔧 Tecnico',
        'cancel': 'Annulla',
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
        'status': 'Stato',
        'endTime': 'Ora fine',
        'match_start': '🏓 Partita ufficialmente iniziata',
        'set_end': '🏆 Set {set} completato. Giocatore {winner} vince',
        'set_start': '🎬 Inizio del set {set}. Batte il giocatore {server}',
        'point': '🎾 Punto segnato dal giocatore {player}',
        'serve_auto_change': '🔄 Cambio automatico di battuta. Ora batte il giocatore {server}',
        'serve_manual_change': '🖐️ Cambio manuale di battuta. Ora batte il giocatore {server}',
        'side_change': '↔ Cambio di lato',
        'accelerate_on': '⚡ Sistema di accelerazione attivato',
        'timeout': '⏸ Time out richiesto dal giocatore {player}',
        'timeout_error': '❌ Il giocatore {player} non ha time out',
        'warning': '⚠️ Ammonizione al giocatore {player}',
        'yellow': '🟨 Cartellino giallo al giocatore {player}',
        'red': '🟥 CARTELLINO ROSSO al giocatore {player} - squalifica!',
        'match_end_sporting': '🏁 Partita terminata. Vincitore: giocatore {winner}. Risultato: {sets}',
        'match_end_early': '🏁 Partita terminata anticipatamente. Motivo: {reason}',
        'undo': '↩ Ultimo punto annullato',
        'error_not_started': '❌ Partita non iniziata! Clicca "INIZIA PARTITA"',
        'error_finished': '❌ Partita terminata, non si possono assegnare punti'
    },
    fr: {
        'appName': 'PROTOCOLE D\'ARBITRAGE',
        'login': 'Connexion',
        'register': 'Inscription',
        'loginBtn': 'Se connecter',
        'registerBtn': 'S\'inscrire',
        'logout': '🚪 Déconnexion',
        'pro': '💎 PRO',
        'adBanner': '📢 Publicité • PRO supprime pub et limites →',
        'buyPro': 'Acheter PRO',
        'player1Title': 'JOUEUR 1',
        'player2Title': 'JOUEUR 2',
        'serve': 'SERVICE',
        'newMatch': '🔄 NOUVEAU MATCH',
        'startMatch': '🎬 COMMENCER LE MATCH',
        'pointToPlayer1': '➕ POINT JOUEUR 1',
        'pointToPlayer2': '➕ POINT JOUEUR 2',
        'timeout1': '⏸ TEMPS MORT JOUEUR 1',
        'timeout2': '⏸ TEMPS MORT JOUEUR 2',
        'warning1': '⚠ AVERTISSEMENT JOUEUR 1',
        'warning2': '⚠ AVERTISSEMENT JOUEUR 2',
        'yellow1': '🟨 CARTON JAUNE JOUEUR 1',
        'yellow2': '🟨 CARTON JAUNE JOUEUR 2',
        'red1': '🟥 CARTON ROUGE JOUEUR 1',
        'red2': '🟥 CARTON ROUGE JOUEUR 2',
        'changeServe': '🔄 CHANGER SERVICE',
        'changeSide': '↔ CHANGER DE CÔTÉ',
        'undoPoint': '↩ ANNULER LE POINT',
        'accelerate': '⚡ ACCÉLÉRATION',
        'finishMatch': '🏁 TERMINER',
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
        'waiting': 'EN ATTENTE DE DÉBUT',
        'playing': 'EN COURS',
        'finished': 'TERMINÉ',
        'disqualified': 'DISQUALIFIÉ',
        'proSubscription': '💎 ABONNEMENT PRO',
        'selectTariff': 'Choisissez votre formule:',
        'plan1Name': '📱 PRO De Base',
        'plan1Period': '/ mois',
        'plan2Name': '👑 PRO Illimité',
        'plan2Period': '/ mois',
        'plan3Name': '🎯 PRO Annuel',
        'plan3Period': '/ an (économie 17%)',
        'popular': '🔥 POPULAIRE',
        'select': 'Choisir',
        'restore': 'Restaurer les achats',
        'limitWarning': '⚠️ Il vous reste ',
        'limitWarning2': ' matchs en version gratuite. Passez à PRO!',
        'matchesLeft': 'matchs restants',
        'unlimited': '♾️ PRO Illimité',
        'matchesCount': 'matchs',
        'finishMatchTitle': '⚠️ Terminer le match',
        'finishMatchText': 'Choisissez la raison:',
        'injury': '🏥 Blessure',
        'forfeit': '🚫 Forfait',
        'technical': '🔧 Technique',
        'cancel': 'Annuler',
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
        'status': 'Statut',
        'endTime': 'Heure de fin',
        'match_start': '🏓 Match officiellement commencé',
        'set_end': '🏆 Set {set} terminé. Joueur {winner} gagne',
        'set_start': '🎬 Début du set {set}. Le joueur {server} sert',
        'point': '🎾 Point marqué par le joueur {player}',
        'serve_auto_change': '🔄 Changement de service automatique. Le joueur {server} sert maintenant',
        'serve_manual_change': '🖐️ Changement de service manuel. Le joueur {server} sert maintenant',
        'side_change': '↔ Changement de côté',
        'accelerate_on': '⚡ Système d\'accélération activé',
        'timeout': '⏸ Temps mort pris par le joueur {player}',
        'timeout_error': '❌ Le joueur {player} n\'a plus de temps mort',
        'warning': '⚠️ Avertissement au joueur {player}',
        'yellow': '🟨 Carton jaune au joueur {player}',
        'red': '🟥 CARTON ROUGE au joueur {player} - disqualification!',
        'match_end_sporting': '🏁 Match terminé. Vainqueur: joueur {winner}. Score: {sets}',
        'match_end_early': '🏁 Match terminé prématurément. Raison: {reason}',
        'undo': '↩ Dernier point annulé',
        'error_not_started': '❌ Match non commencé! Cliquez sur "COMMENCER LE MATCH"',
        'error_finished': '❌ Match terminé, plus de points possibles'
    },
    zh: {
        'appName': '裁判记录表',
        'login': '登录',
        'register': '注册',
        'loginBtn': '登录',
        'registerBtn': '注册',
        'logout': '🚪 退出',
        'pro': '💎 PRO',
        'adBanner': '📢 广告 • PRO去除广告和限制 →',
        'buyPro': '购买PRO',
        'player1Title': '选手 1',
        'player2Title': '选手 2',
        'serve': '发球',
        'newMatch': '🔄 新比赛',
        'startMatch': '🎬 开始比赛',
        'pointToPlayer1': '➕ 选手1得分',
        'pointToPlayer2': '➕ 选手2得分',
        'timeout1': '⏸ 暂停 选手1',
        'timeout2': '⏸ 暂停 选手2',
        'warning1': '⚠ 警告 选手1',
        'warning2': '⚠ 警告 选手2',
        'yellow1': '🟨 黄牌 选手1',
        'yellow2': '🟨 黄牌 选手2',
        'red1': '🟥 红牌 选手1',
        'red2': '🟥 红牌 选手2',
        'changeServe': '🔄 换发球',
        'changeSide': '↔ 交换场地',
        'undoPoint': '↩ 撤销得分',
        'accelerate': '⚡ 加速',
        'finishMatch': '🏁 结束',
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
        'waiting': '等待开始',
        'playing': '比赛中',
        'finished': '已结束',
        'disqualified': '取消资格',
        'proSubscription': '💎 PRO订阅',
        'selectTariff': '选择套餐：',
        'plan1Name': '📱 基础PRO',
        'plan1Period': '/月',
        'plan2Name': '👑 PRO无限版',
        'plan2Period': '/月',
        'plan3Name': '🎯 PRO年付版',
        'plan3Period': '/年 (节省17%)',
        'popular': '🔥 热门',
        'select': '选择',
        'restore': '恢复购买',
        'limitWarning': '⚠️ 您还剩 ',
        'limitWarning2': ' 场免费比赛。升级到PRO！',
        'matchesLeft': '场比赛剩余',
        'unlimited': '♾️ 无限PRO',
        'matchesCount': '场比赛',
        'finishMatchTitle': '⚠️ 结束比赛',
        'finishMatchText': '选择原因：',
        'injury': '🏥 受伤',
        'forfeit': '🚫 弃权',
        'technical': '🔧 技术问题',
        'cancel': '取消',
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
        'status': '状态',
        'endTime': '结束时间',
        'match_start': '🏓 比赛正式开始',
        'set_end': '🏆 第{set}局结束。选手{winner}获胜',
        'set_start': '🎬 第{set}局开始。选手{server}发球',
        'point': '🎾 选手{player}得分',
        'serve_auto_change': '🔄 自动换发球。现在选手{server}发球',
        'serve_manual_change': '🖐️ 手动换发球。现在选手{server}发球',
        'side_change': '↔ 交换场地',
        'accelerate_on': '⚡ 加速系统已开启',
        'timeout': '⏸ 选手{player}请求暂停',
        'timeout_error': '❌ 选手{player}没有暂停机会了',
        'warning': '⚠️ 警告选手{player}',
        'yellow': '🟨 黄牌警告选手{player}',
        'red': '🟥 红牌罚下选手{player} - 取消比赛资格！',
        'match_end_sporting': '🏁 比赛结束。获胜者：选手{winner}。比分：{sets}',
        'match_end_early': '🏁 比赛提前结束。原因：{reason}',
        'undo': '↩ 撤销最后一分',
        'error_not_started': '❌ 比赛尚未开始！请点击"开始比赛"',
        'error_finished': '❌ 比赛已结束，不能再得分'
    },
    pt: {
        'appName': 'PROTOCOLO DO ÁRBITRO',
        'login': 'Entrar',
        'register': 'Registrar',
        'loginBtn': 'Entrar',
        'registerBtn': 'Registrar',
        'logout': '🚪 Sair',
        'pro': '💎 PRO',
        'adBanner': '📢 Anúncios • PRO remove anúncios e limites →',
        'buyPro': 'Comprar PRO',
        'player1Title': 'JOGADOR 1',
        'player2Title': 'JOGADOR 2',
        'serve': 'SAQUE',
        'newMatch': '🔄 NOVA PARTIDA',
        'startMatch': '🎬 INICIAR PARTIDA',
        'pointToPlayer1': '➕ PONTO JOGADOR 1',
        'pointToPlayer2': '➕ PONTO JOGADOR 2',
        'timeout1': '⏸ TEMPO TÉCNICO JOGADOR 1',
        'timeout2': '⏸ TEMPO TÉCNICO JOGADOR 2',
        'warning1': '⚠ ADVERTÊNCIA JOGADOR 1',
        'warning2': '⚠ ADVERTÊNCIA JOGADOR 2',
        'yellow1': '🟨 CARTÃO AMARELO JOGADOR 1',
        'yellow2': '🟨 CARTÃO AMARELO JOGADOR 2',
        'red1': '🟥 CARTÃO VERMELHO JOGADOR 1',
        'red2': '🟥 CARTÃO VERMELHO JOGADOR 2',
        'changeServe': '🔄 TROCAR SAQUE',
        'changeSide': '↔ TROCAR LADOS',
        'undoPoint': '↩ DESFAZER PONTO',
        'accelerate': '⚡ ACELERAÇÃO',
        'finishMatch': '🏁 FINALIZAR',
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
        'waiting': 'AGUARDANDO INÍCIO',
        'playing': 'EM JOGO',
        'finished': 'FINALIZADA',
        'disqualified': 'DESCLASSIFICADO',
        'proSubscription': '💎 ASSINATURA PRO',
        'selectTariff': 'Selecione o plano:',
        'plan1Name': '📱 PRO Básico',
        'plan1Period': '/ mês',
        'plan2Name': '👑 PRO Ilimitado',
        'plan2Period': '/ mês',
        'plan3Name': '🎯 PRO Anual',
        'plan3Period': '/ ano (economize 17%)',
        'popular': '🔥 POPULAR',
        'select': 'Selecionar',
        'restore': 'Restaurar compras',
        'limitWarning': '⚠️ Você tem ',
        'limitWarning2': ' partidas restantes na versão gratuita. Atualize para PRO!',
        'matchesLeft': 'partidas restantes',
        'unlimited': '♾️ PRO Ilimitado',
        'matchesCount': 'partidas',
        'finishMatchTitle': '⚠️ Finalizar partida',
        'finishMatchText': 'Selecione o motivo:',
        'injury': '🏥 Lesão',
        'forfeit': '🚫 Desistência',
        'technical': '🔧 Técnico',
        'cancel': 'Cancelar',
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
        'status': 'Status',
        'endTime': 'Hora final',
        'match_start': '🏓 Partida oficialmente iniciada',
        'set_end': '🏆 Set {set} concluído. Jogador {winner} vence',
        'set_start': '🎬 Início do set {set}. Jogador {server} saca',
        'point': '🎾 Ponto marcado pelo jogador {player}',
        'serve_auto_change': '🔄 Mudança automática de saque. Agora o jogador {server} saca',
        'serve_manual_change': '🖐️ Mudança manual de saque. Agora o jogador {server} saca',
        'side_change': '↔ Mudança de lado',
        'accelerate_on': '⚡ Sistema de aceleração ativado',
        'timeout': '⏸ Tempo técnico solicitado pelo jogador {player}',
        'timeout_error': '❌ Jogador {player} não tem mais tempos técnicos',
        'warning': '⚠️ Advertência ao jogador {player}',
        'yellow': '🟨 Cartão amarelo para o jogador {player}',
        'red': '🟥 CARTÃO VERMELHO para o jogador {player} - desclassificação!',
        'match_end_sporting': '🏁 Partida finalizada. Vencedor: jogador {winner}. Placar: {sets}',
        'match_end_early': '🏁 Partida finalizada antecipadamente. Motivo: {reason}',
        'undo': '↩ Último ponto desfeito',
        'error_not_started': '❌ Partida não iniciada! Clique em "INICIAR PARTIDA"',
        'error_finished': '❌ Partida finalizada, não é possível marcar pontos'
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
            proPlan: null,
            proExpiry: null,
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
        if (user.isPro && user.proExpiry && new Date(user.proExpiry) < new Date()) {
            user.isPro = false;
            user.proPlan = null;
            user.proExpiry = null;
            user.matchesLimit = 99;
            localStorage.setItem('pingpong_users', JSON.stringify(this.users));
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
    
    upgradeToPro(plan) {
        if (!this.currentUser) return false;
        const plans = { 
            'monthly_99': { months: 1, limit: 99, name: 'Базовый PRO' },
            'monthly_unlimited': { months: 1, limit: -1, name: 'PRO Безлимит' },
            'yearly': { months: 12, limit: -1, name: 'PRO Годовой' }
        };
        const selectedPlan = plans[plan];
        if (!selectedPlan) return false;
        
        this.currentUser.isPro = true;
        this.currentUser.proPlan = plan;
        this.currentUser.proPlanName = selectedPlan.name;
        const expiry = new Date();
        expiry.setMonth(expiry.getMonth() + selectedPlan.months);
        this.currentUser.proExpiry = expiry.toISOString();
        this.currentUser.matchesLimit = selectedPlan.limit;
        if (selectedPlan.limit !== -1) this.currentUser.matchesUsed = 0;
        
        const userIndex = this.users.findIndex(u => u.id === this.currentUser.id);
        if (userIndex !== -1) this.users[userIndex] = this.currentUser;
        localStorage.setItem('pingpong_users', JSON.stringify(this.users));
        localStorage.setItem('pingpong_session', JSON.stringify({ email: this.currentUser.email }));
        return true;
    }
    
    incrementMatchesUsed() {
        if (!this.currentUser) return false;
        if (this.isPro() && this.currentUser.matchesLimit === -1) return true;
        this.currentUser.matchesUsed++;
        const userIndex = this.users.findIndex(u => u.id === this.currentUser.id);
        if (userIndex !== -1) this.users[userIndex] = this.currentUser;
        localStorage.setItem('pingpong_users', JSON.stringify(this.users));
        return true;
    }
    
    canStartNewMatch() {
        if (!this.currentUser) return false;
        if (this.isPro() && this.currentUser.matchesLimit === -1) return true;
        return (this.currentUser.matchesUsed || 0) < (this.currentUser.matchesLimit || 99);
    }
    
    getMatchesLeft() {
        if (!this.currentUser) return 0;
        if (this.isPro() && this.currentUser.matchesLimit === -1) return -1;
        const limit = this.currentUser.matchesLimit || 99;
        const used = this.currentUser.matchesUsed || 0;
        return Math.max(0, limit - used);
    }
    
    isPro() {
        if (!this.currentUser) return false;
        if (this.currentUser.isPro && this.currentUser.proExpiry && new Date(this.currentUser.proExpiry) < new Date()) {
            this.currentUser.isPro = false;
            this.currentUser.proPlan = null;
            this.currentUser.proExpiry = null;
            this.currentUser.matchesLimit = 99;
            const userIndex = this.users.findIndex(u => u.id === this.currentUser.id);
            if (userIndex !== -1) this.users[userIndex] = this.currentUser;
            localStorage.setItem('pingpong_users', JSON.stringify(this.users));
            return false;
        }
        return this.currentUser.isPro;
    }
    
    showAuth() {
        document.getElementById('authScreen').style.display = 'flex';
        document.getElementById('mainApp').style.display = 'none';
    }
    
    showMainApp() {
        document.getElementById('authScreen').style.display = 'none';
        document.getElementById('mainApp').style.display = 'block';
        document.getElementById('userNameDisplay').textContent = this.currentUser.name;
        
        this.updateMatchesDisplay();
        
        const banner = document.getElementById('freeBanner');
        const limitWarning = document.getElementById('limitWarning');
        
        if (this.isPro()) {
            if (banner) banner.style.display = 'none';
            if (limitWarning) limitWarning.style.display = 'none';
        } else {
            if (banner) banner.style.display = 'flex';
            const matchesLeft = this.getMatchesLeft();
            if (matchesLeft <= 5 && matchesLeft > 0 && limitWarning) {
                limitWarning.style.display = 'block';
                document.getElementById('matchesLeft').textContent = matchesLeft;
            } else if (limitWarning) {
                limitWarning.style.display = 'none';
            }
        }
        
        initializeMatch();
        setupEventListeners();
        updateTime();
        setInterval(updateTime, 1000);
    }
    
    updateMatchesDisplay() {
        const matchesLeft = this.getMatchesLeft();
        const display = document.getElementById('matchesCountDisplay');
        if (display) {
            if (this.isPro()) {
                if (this.currentUser.matchesLimit === -1) {
                    display.textContent = translations[currentLang]?.unlimited || '♾️ Безлимит PRO';
                } else {
                    display.textContent = `${matchesLeft} ${translations[currentLang]?.matchesLeft || 'матчей осталось'}`;
                }
            } else {
                display.textContent = `🎾 ${matchesLeft}/${this.currentUser.matchesLimit || 99}`;
            }
        }
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
        return t(event.eventKey, event.params);
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
        if (auth && !auth.isPro() && this.isStarted) {
            auth.incrementMatchesUsed();
            auth.updateMatchesDisplay();
            if (!auth.canStartNewMatch()) alert(t('limitWarning') + ' ' + t('limitWarning2'));
        }
    }
    
    forceFinish(reason) {
        const reasonMap = { 'INJURY': 'injury', 'FORFEIT': 'forfeit', 'TECHNICAL': 'technical' };
        const reasonText = t(reasonMap[reason]);
        this.endMatch(reason, 'match_end_early', { reason: reasonText });
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
            finishReason: this.finishReason, 
            isStarted: this.isStarted, 
            isFinished: this.isFinished,
            players: { 
                1: { name: this.players[1].name, country: this.players[1].country, sets: this.players[1].sets }, 
                2: { name: this.players[2].name, country: this.players[2].country, sets: this.players[2].sets } 
            },
            setHistory: this.setHistory, 
            events: exportedEvents,
            isAccelerated: this.isAccelerated
        };
    }
    
    getPrintHTML() {
        const data = this.getExportData();
        
        return `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <title>${t('exportTitle')}</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; margin: 0; }
                    h1 { color: #1e3c72; text-align: center; }
                    .info { margin: 20px 0; padding: 15px; background: #f5f5f5; border-radius: 8px; }
                    .info p { margin: 8px 0; }
                    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                    th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
                    th { background: #1e3c72; color: white; }
                    .result { font-size: 18px; font-weight: bold; text-align: center; margin: 20px 0; }
                    @media print {
                        body { padding: 0; }
                    }
                </style>
            </head>
            <body>
                <h1>${t('exportTitle')}</h1>
                <div class="info">
                    <p><strong>${t('tournament')}:</strong> ${data.tournament}</p>
                    <p><strong>${t('date')}:</strong> ${data.date}</p>
                    <p><strong>${t('table')}:</strong> ${data.tableNumber}</p>
                    <p><strong>${t('refereeName')}:</strong> ${data.referee}</p>
                    <p><strong>${t('startTime')}:</strong> ${data.startTime || '--:--:--'}</p>
                    <p><strong>${t('endTime')}:</strong> ${data.endTime || '--:--:--'}</p>
                    <p><strong>${t('status')}:</strong> ${data.isFinished ? t('finished') : (data.isStarted ? t('playing') : t('waiting'))}</p>
                </div>
                <div class="result">
                    ${data.players[1].name} ${t('vs')} ${data.players[2].name}<br>
                    ${t('result')}: ${data.players[1].sets}:${data.players[2].sets}
                </div>
                <h2>${t('eventLogTitle')}</h2>
                <table>
                    <thead>
                        <tr><th>${t('time')}</th><th>${t('event')}</th><th>${t('score')}</th></tr>
                    </thead>
                    <tbody>
                        ${data.events.map(e => `<tr><td>${e.time}</td><td>${e.description}</td><td>${e.score}</td></tr>`).join('')}
                    </tbody>
                </table>
                <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #888;">
                    ${t('exportTitle')} — ${new Date().toLocaleString()}
                </div>
            </body>
            </html>
        `;
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
    if (!auth.canStartNewMatch() && !auth.isPro()) {
        alert(t('limitWarning') + ' ' + t('limitWarning2'));
        document.getElementById('subscriptionBtn').click();
        return false;
    }
    match = new TableTennisMatch();
    document.getElementById('startTime').textContent = '--:--:--';
    
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
}

function setupEventListeners() {
    document.getElementById('startMatch').onclick = () => { 
        if (!match.isStarted) { 
            match.startMatch(); 
            document.getElementById('startTime').textContent = match.startTime; 
            updateUI(); 
        } 
    };
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
    document.getElementById('currentTime').textContent = new Date().toLocaleTimeString('ru-RU');
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
    const html = match.getPrintHTML();
    const w = window.open('', '_blank');
    if (w) {
        w.document.write(html);
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

function applyTranslations() {
    const elements = {
        'mainTitle': t('appName'),
        'authTitle': '🏓 ' + t('appName'),
        'loginTab': t('login'),
        'registerTab': t('register'),
        'doLogin': t('loginBtn'),
        'doRegister': t('registerBtn'),
        'logoutBtn': t('logout'),
        'subscriptionBtn': t('pro'),
        'adBannerText': t('adBanner'),
        'upgradeFromBanner': t('buyPro'),
        'player1Title': t('player1Title'),
        'player2Title': t('player2Title'),
        'serve1': '🎾 ' + t('serve'),
        'serve2': '🎾 ' + t('serve'),
        'resetMatch': t('newMatch'),
        'startMatch': t('startMatch'),
        'point1': t('pointToPlayer1'),
        'point2': t('pointToPlayer2'),
        'timeout1': t('timeout1'),
        'timeout2': t('timeout2'),
        'warning1': t('warning1'),
        'warning2': t('warning2'),
        'yellowCard1': t('yellow1'),
        'yellowCard2': t('yellow2'),
        'redCard1': t('red1'),
        'redCard2': t('red2'),
        'changeServe': t('changeServe'),
        'changeSide': t('changeSide'),
        'undoPoint': t('undoPoint'),
        'accelerate': t('accelerate'),
        'forceFinish': t('finishMatch'),
        'protocolTitle': t('protocol'),
        'refereeLabel': t('referee'),
        'startTimeLabel': t('startTime'),
        'currentTimeLabel': t('currentTime'),
        'statusLabel': t('status'),
        'eventLogTitle': t('eventLog'),
        'exportJSON': t('exportJSON'),
        'exportCSV': t('exportCSV'),
        'exportCSV_UTF8': t('exportCSVUtf8'),
        'printProtocol': t('print'),
        'modalTitle': t('proSubscription'),
        'modalSubtitle': t('selectTariff'),
        'plan1Name': t('plan1Name'),
        'plan1Period': t('plan1Period'),
        'plan2Name': t('plan2Name'),
        'plan2Period': t('plan2Period'),
        'plan3Name': t('plan3Name'),
        'plan3Period': t('plan3Period'),
        'popularBadge': t('popular'),
        'restoreBtn': t('restore'),
        'limitWarningText': t('limitWarning'),
        'limitWarningText2': t('limitWarning2')
    };
    
    for (const [id, text] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    }
    
    document.querySelectorAll('.select-plan-btn').forEach(btn => {
        btn.textContent = t('select');
    });
    
    const statusMap = {
        'ОЖИДАНИЕ НАЧАЛА': t('waiting'),
        'В ИГРЕ': t('playing'),
        'ЗАВЕРШЕН': t('finished'),
        'ДИСКВАЛИФИКАЦИЯ': t('disqualified')
    };
    const statusEl = document.getElementById('matchStatus');
    if (statusEl) {
        const currentStatus = statusEl.textContent.replace('● ', '');
        statusEl.textContent = `● ${statusMap[currentStatus] || currentStatus}`;
    }
    
    if (auth && auth.currentUser) auth.updateMatchesDisplay();
}

function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        localStorage.setItem('app_language', lang);
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('data-lang', lang);
        applyTranslations();
        const langNames = { 
            ru: 'Русский', en: 'English', de: 'Deutsch', es: 'Español', 
            it: 'Italiano', fr: 'Français', zh: '中文', pt: 'Português' 
        };
        document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
            btn.innerHTML = `🌐 ${langNames[lang]}`;
        });
        if (match && match.events) {
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
    menu.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:white;border-radius:15px;padding:20px;box-shadow:0 10px 40px rgba(0,0,0,0.3);z-index:2000;min-width:300px;`;
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

// ==================== ИНИЦИАЛИЗАЦИЯ ====================
document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('data-lang', currentLang);
    
    auth = new AuthSystem();
    
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', function() {
            const input = document.getElementById(this.dataset.target);
            if (input) { 
                input.type = input.type === 'password' ? 'text' : 'password'; 
                this.textContent = input.type === 'password' ? '👁️' : '🙈'; 
            }
        });
    });
    
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const tabName = tab.dataset.tab;
            document.getElementById('loginForm').classList.toggle('active', tabName === 'login');
            document.getElementById('registerForm').classList.toggle('active', tabName === 'register');
        });
    });
    
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
    document.getElementById('subscriptionBtn').onclick = openBoosty;
    document.getElementById('upgradeFromBanner').onclick = openBoosty;
    
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => btn.onclick = showLanguageMenu);
    
    applyTranslations();
    updateTime();
    setInterval(updateTime, 1000);
});