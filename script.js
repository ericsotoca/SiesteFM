// Liste complète des pistes (la propriété 'categorie' n'est plus utilisée fonctionnellement)
const sunoTracks = [
    { "id": "674e86cb-0395-414a-a291-a4c11a9efc4d", "title": "50 decimal places of pi", "artist": "Suno AI", "categorie": "Esprit Aiguisé", "duration": 180 },
    { "id": "1be45c7f-efee-4288-bb46-24bc4ac633a6", "title": "A Walk in the Park", "artist": "Suno AI", "categorie": "Calme Puissant", "duration": 131 },
    { "id": "25a32452-1bfd-4791-b378-7584a0be64f5", "title": "Aerial Awakening", "artist": "Zneip.", "categorie": "Calme Puissant", "duration": 214 },
    { "id": "295f7691-9fe1-40d0-bd6d-e7a047d32b64", "title": "After the rain", "artist": "sonoa", "categorie": "Esprit Aiguisé", "duration": 169 },
    { "id": "afd7cad2-6112-4670-9274-378468a1c59d", "title": "After the rain", "artist": "RareRecordLabels1439", "categorie": "Calme Puissant", "duration": 239 },
    { "id": "137ba8ff-3d61-4d79-acfe-7644999cdba8", "title": "Are You Not Entertained?", "artist": "Rattvisa.", "categorie": "Horizon Infini", "duration": 230 },
    { "id": "3a09ffcc-f677-42ad-9ec0-dd2e01b7adca", "title": "Aurora Dance (Instrumental)", "artist": "Xian - ExclusiveKnob421", "categorie": "Calme Puissant", "duration": 140 },
    { "id": "f8373d7f-c0a3-4a7d-81e0-9313e1309fa0", "title": "Banana Republic", "artist": "YouNoWhooIs", "categorie": "Esprit Aiguisé", "duration": 165 },
    { "id": "533b9834-52a5-4100-8d05-9ef605a4e715", "title": "Blues in the light of dawn", "artist": "GROOVEBOT.", "categorie": "Calme Puissant", "duration": 183 },
    { "id": "16555cd3-3aab-4f6d-b02c-8c15ebf6a8f1", "title": "Cade la neve", "artist": "Jazz56", "categorie": "Calme Puissant", "duration": 240 },
    { "id": "d2002f05-15f7-4490-bc84-dfdb6f033b90", "title": "Caminhos da Vida", "artist": "Sueli.", "categorie": "Horizon Infini", "duration": 240 },
    { "id": "948b8276-6714-460f-b526-033354e094ce", "title": "Cancer", "artist": "Joy'elle", "categorie": "Quête Sauvage", "duration": 157 },
    { "id": "a3bc664e-8ac0-4072-b340-2e847b240081", "title": "Cese y Desista", "artist": "Tiborio.", "categorie": "Quête Sauvage", "duration": 265 },
    { "id": "4ec14116-ac9b-49e3-ae62-99eb2f1ac0c2", "title": "Circles (Remastered)", "artist": "Claraco.", "categorie": "Esprit Aiguisé", "duration": 239 },
    { "id": "6f9a9ed2-0082-4536-8db9-6cfca9c621ef", "title": "Corner lights", "artist": "HiddenHand.", "categorie": "Décollage Express", "duration": 184 },
    { "id": "d012de10-e877-43f1-92f4-9bd2e706f52d", "title": "🎶 Darlin', Don't You Go 🎶", "artist": "RetroDream.", "categorie": "Calme Puissant", "duration": 206 },
    { "id": "5a285fbc-f64a-418a-8b2e-05e3e7990899", "title": "Deep Night", "artist": "Moisty.", "categorie": "Décollage Express", "duration": 185 },
    { "id": "e48c0ee8-24c8-459b-8d91-469dbd6fc3a5", "title": "Dialectic (accept it)", "artist": "yolkhead", "categorie": "Calme Puissant", "duration": 239 },
    { "id": "a3e445c8-b7e6-4f11-9c5c-2e7281c8a68e", "title": "Ethereal Journey", "artist": "GROOVEBOT.", "categorie": "Calme Puissant", "duration": 160 },
    { "id": "b4661e87-97c3-4b6e-87ca-f31f47ac40ef", "title": "Eu Não Ando Sumido", "artist": "Roberto na Área.", "categorie": "Calme Puissant", "duration": 168 },
    { "id": "2160a428-d7c4-4892-b250-9a739a60e475", "title": "Fuja de quem não quer te perder mas não sabe te amar", "artist": "Roberto na Área.", "categorie": "Calme Puissant", "duration": 157 },
    { "id": "176e197f-0656-4351-9516-1ebc05d4855f", "title": "Her First Heartbreak", "artist": "Brandon Luke.", "categorie": "Calme Puissant", "duration": 185 },
    { "id": "3107d309-3316-4b00-bc7c-f590038d9e5b", "title": "I Can Wait 100 Years", "artist": "Wetcircuit.", "categorie": "Esprit Aiguisé", "duration": 265 },
    { "id": "0e09c799-1259-48a0-9810-c8b9b6dab30d", "title": "I Miss You Remix", "artist": "Eclonix.", "categorie": "Horizon Infini", "duration": 238 },
    { "id": "ffa48fbf-ac87-4a02-8cf2-f3766f518d58", "title": "I Spent 3000 Credits on This Song", "artist": "Nanashi_Zero🀄️", "categorie": "Décollage Express", "duration": 194 },
    { "id": "fd95f5af-5b7f-493b-918c-8c2cf7380db4", "title": "Inclusive Backdoor Man (Pilloe mix)", "artist": "CelticSemitone.", "categorie": "Quête Sauvage", "duration": 190 },
    { "id": "3899e808-d76f-48d4-b850-3ab3c6da6a88", "title": "Island Breeze", "artist": "DrollFire383.", "categorie": "Calme Puissant", "duration": 240 },
    { "id": "1892cdb4-3eca-41fe-b341-e4cdc3fca285", "title": "Jetzt waßt wi da oalles besser (Remastered)", "artist": "Jenseits der Grenzen", "categorie": "Quête Sauvage", "duration": 187 },
    { "id": "e9e6a0fb-d175-4678-a1a0-b8ab100e3d37", "title": "Kangaroo Rock", "artist": "JeanMiK2.", "categorie": "Quête Sauvage", "duration": 165 },
    { "id": "4d8aac83-9cf6-48ce-af71-0b818df806db", "title": "康德之桥", "artist": "ReservedTremolo210.", "categorie": "Horizon Infini", "duration": 229 },
    { "id": "75b62359-9b3e-4ffe-839b-0eb7c11de71e", "title": "Let's Take a Chance", "artist": "MyDreamSongs.", "categorie": "Calme Puissant", "duration": 213 },
    { "id": "4ed9cd17-d8e9-4ab9-9514-e83e7597886a", "title": "Lokah samastah sukhino bhavantu", "artist": "Sotoca AI.", "categorie": "Horizon Infini", "duration": 118 },
    { "id": "b50869d5-fd45-4219-987b-22d68621178e", "title": "Love and Peace", "artist": "Vibe Music Ai Records.", "categorie": "Calme Puissant", "duration": 194 },
    { "id": "6805b1a2-1700-41b3-80db-c285045e99e8", "title": "Maylo", "artist": "Jenseits der Grenzen", "categorie": "Horizon Infini", "duration": 223 },
    { "id": "ed4bc352-89f2-4f08-b21c-3fef7cb86245", "title": "Minute By Minute", "artist": "Brado with the face for radio", "categorie": "Esprit Aiguisé", "duration": 205 },
    { "id": "917b4a0f-a658-4476-a00d-a8b1ba08f242", "title": "My Gal Done Got Crazy", "artist": "BrainBendersBanter.", "categorie": "Quête Sauvage", "duration": 227 },
    { "id": "1f54ea49-dddd-47b3-a3d3-264f1579caa0", "title": "No apologies (Remastered)", "artist": "Ovi", "categorie": "Esprit Aiguisé", "duration": 151 },
    { "id": "9d601e01-1282-4a76-afb5-b710edc38f8f", "title": "Onde cristalline de sérénité", "artist": "JeanMiK2.", "categorie": "Calme Puissant", "duration": 144 },
    { "id": "aa0febaa-6c8b-444b-a34f-db5155272b2b", "title": "Peaceful Meadow", "artist": "Suno AI", "categorie": "Calme Puissant", "duration": 152 },
    // { "id": "6805b1a2-1700-41b3-80db-c285045e99e8", "title": "PODŁOŻE BUJANE", "artist": "ZoleMusicAI.", "categorie": "Calme Puissant", "duration": 223 }, // ID dupliqué, commenté
    { "id": "72fd52d4-bb7e-48aa-a5e3-0115540c5a62", "title": "Pulse Beneath the Waves", "artist": "Sotoca AI.", "categorie": "Calme Puissant", "duration": 240 },
    { "id": "67764712-b129-4f78-bab2-1c03e2014655", "title": "Rambling Railroad", "artist": "JeanMiK2.", "categorie": "Horizon Infini", "duration": 133 },
    { "id": "d4cd5909-e7cc-4751-a6e1-f7a28f44808a", "title": "Reflections in Solitude", "artist": "Henryhan", "categorie": "Calme Puissant", "duration": 179 },
    { "id": "5d4edb40-0565-4142-9758-6b3a90f6a2fd", "title": "Reggae Love Vibes", "artist": "Suno AI.", "categorie": "Horizon Infini", "duration": 225 },
    { "id": "1dba28fb-3dfa-41b6-b438-cc81b587d40c", "title": "Saudade", "artist": "GROOVEBOT.", "categorie": "Horizon Infini", "duration": 219 },
    { "id": "8cc87e22-af6f-46fb-9d8a-ed1623547c31", "title": "Serene Lake", "artist": "Suno AI", "categorie": "Esprit Aiguisé", "duration": 223 },
    { "id": "3cc18362-3842-405b-9368-3a651cc0f9d1", "title": "Slow Groove Horizon", "artist": "Sotoca AI.", "categorie": "Esprit Aiguisé", "duration": 240 },
    { "id": "b9d4abb4-1df8-40c5-952c-10e72f16df54", "title": "Sunrise Symphony", "artist": "Suno AI", "categorie": "Calme Puissant", "duration": 198 },
    { "id": "70d69e22-05ce-477e-942e-cde1cd4da747", "title": "Sunset in early November", "artist": "WryConductor408.", "categorie": "Horizon Infini", "duration": 240 },
    { "id": "990e18ee-59a7-4e4a-88fe-5300347faa31", "title": "Сила Думки", "artist": "Tosik.", "categorie": "Horizon Infini", "duration": 240 },
    { "id": "cf95498e-1031-466d-95bc-b8e8c067d2f4", "title": "The Last Dance", "artist": "Suno AI", "categorie": "Horizon Infini", "duration": 219 },
    { "id": "b6fcebe0-7eb9-4829-98c2-159602f24161", "title": "The Journey Begins", "artist": "Suno AI.", "categorie": "Horizon Infini", "duration": 253 },
    { "id": "754c51f6-790f-44dd-868c-c89a7d16e2f3", "title": "The Ocean's Call", "artist": "Suno AI.", "categorie": "Horizon Infini", "duration": 194 },
    { "id": "a200b759-03e4-47c2-b724-6683187e0b3f", "title": "The Whispering Pines", "artist": "Suno AI", "categorie": "Quête Sauvage", "duration": 206 },
    { "id": "d0def131-ec26-498a-9fd9-89952c2f060b", "title": "Tongue Twisters part two", "artist": "STEVE VAN GULICK-HILL", "categorie": "Esprit Aiguisé", "duration": 135 },
    { "id": "997e0359-8457-4c24-9b6a-42ba76a7ee0d", "title": "Victory Unveiled", "artist": "GROOVEBOT.", "categorie": "Décollage Express", "duration": 180 },
    { "id": "501f08e0-47b5-457c-b4ba-72b02fe033a2", "title": "Voyage Galactique", "artist": "JeanMiK2.", "categorie": "Horizon Infini", "duration": 240 },
    { "id": "60035e3c-4024-4438-a0bf-85bea5b5fcd3", "title": "Well Well Well", "artist": "Vibe Music Ai Records.", "categorie": "Calme Puissant", "duration": 223 },
    { "id": "11e0e768-b87b-4fae-b0b4-4e8dc6374e44", "title": "Where the Hell Am I?", "artist": "Vrthtbox.", "categorie": "Esprit Aiguisé", "duration": 228 },
    { "id": "569c8380-bacf-4bd3-a35c-7d468c7b9602", "title": "Whispers of the Delta", "artist": "Sotoca AI.", "categorie": "Esprit Aiguisé", "duration": 70 },
    { "id": "379a2b6a-d9fb-44f2-b3c3-9f608e223d04", "title": "You Need to Learn to Drive", "artist": "The Hulkster.", "categorie": "Esprit Aiguisé", "duration": 281 },
    { "id": "65738b12-6995-4421-be9f-e3083e97ae2b", "title": "𝕀𝕟𝕤𝕥𝕣𝕦𝕞𝕖𝕟𝕥𝕒𝕝", "artist": "𝐑𝐞𝐧𝐡𝐚𝐋 🔞.", "categorie": "Esprit Aiguisé", "duration": 117 },
    { "id": "e1917ac3-d715-457a-b17c-e21982141a53", "title": "🇷🇺Mellstroy Плаки плаки", "artist": "Wondarlove", "categorie": "Calme Puissant", "duration": 164 }
];

// Variables globales
let currentTrackId = null;
let nextTrackTimer = null;
let radioHasStarted = false;
let isLoading = false;
let startTime = null;
let progressInterval = null; // Pour garder une référence à l'intervalle de progression
let nextTrackPreload = null;

// Éléments du DOM
const preloader = document.getElementById('preloader');
const playerContainer = document.getElementById('player-container');
const initialOverlay = document.getElementById('initial-play-overlay');
const startButton = document.getElementById('start-radio-button');
const iframeTarget = document.getElementById('iframe-target');
const nowPlayingText = document.getElementById('now-playing-text');
const nextTrackButton = document.getElementById('next-track');
const progressBar = document.getElementById('progress-bar');

// Fonction de préchargement
function preloadNextTrack() {
    nextTrackPreload = selectRandomTrack();
    // Optionnel: précharger l'iframe elle-même peut être tenté mais complexe
    // const preloadLink = document.createElement('link');
    // preloadLink.rel = 'preload';
    // preloadLink.href = `https://suno.com/embed/${nextTrackPreload.id}`;
    // preloadLink.as = 'document';
    // document.head.appendChild(preloadLink); // Attention à la gestion de ces liens
}

// Fonctions Utilitaires
function getPlayHistory() {
    try {
        const history = localStorage.getItem('sunoRadioHistory');
        return history ? JSON.parse(history) : [];
    } catch (e) {
        console.error("Erreur lecture historique:", e);
        return [];
    }
}

function updatePlayHistory(trackId) {
    if (!trackId) return;
    let history = getPlayHistory();
    const track = sunoTracks.find(t => t.id === trackId);
    if (track) {
        // On vide le texte ici pour effacer "Chargement...", "Erreur...", etc.
        nowPlayingText.textContent = '';

        // Logique historique
        if (history.length === 0 || history[0].id !== trackId) {
            history.unshift({
                id: trackId,
                title: track.title,
                artist: track.artist,
                timestamp: new Date().toISOString()
            });
            if (history.length > 15) history = history.slice(0, 15);
            try {
                localStorage.setItem('sunoRadioHistory', JSON.stringify(history));
            } catch (e) {
                console.error("Erreur sauvegarde historique:", e);
            }
        }
    }
}


function selectRandomTrack() {
    const history = getPlayHistory();
    let availableTracks = [...sunoTracks];

    if (availableTracks.length === 0) {
        console.warn(`Aucun morceau disponible.`);
        return null;
    }

    // Exclure la piste actuelle et la précédente si possible
    const tracksToExclude = [];
    if (currentTrackId) {
        tracksToExclude.push(currentTrackId);
    }
    if (history.length > 0) {
        tracksToExclude.push(history[0].id); // La dernière jouée enregistrée
    }
     if (history.length > 1) { // Optionnel: exclure aussi l'avant-dernière
        tracksToExclude.push(history[1].id);
    }

    const uniqueExclusions = [...new Set(tracksToExclude)]; // IDs uniques à exclure

    if (availableTracks.length > uniqueExclusions.length) { // S'il reste des pistes après exclusion
        const filteredTracks = availableTracks.filter(track => !uniqueExclusions.includes(track.id));
        if (filteredTracks.length > 0) {
            availableTracks = filteredTracks;
        }
    }
    // Si après filtrage il ne reste rien (ou pas assez de pistes au départ), on choisit parmi toutes

    return availableTracks[Math.floor(Math.random() * availableTracks.length)];
}


function updateProgress(track) {
    if (progressInterval) clearInterval(progressInterval); // Nettoie l'ancien intervalle
    progressBar.style.width = '0%';
    progressBar.style.transition = 'none'; // Désactive la transition pour la réinitialisation

    if (track && track.duration && track.duration > 0) {
        startTime = Date.now();
        const durationMs = track.duration * 1000;

        // Force un reflow pour que la transition s'applique après la réinitialisation
        void progressBar.offsetWidth;
        progressBar.style.transition = `width ${track.duration}s linear`; // Applique la transition pour la durée de la piste
        progressBar.style.width = '100%'; // Lance la barre de progression

        // L'intervalle est moins précis que la transition CSS pour la barre elle-même,
        // mais on garde le setTimeout pour déclencher la piste suivante.
        if (nextTrackTimer) clearTimeout(nextTrackTimer);
        nextTrackTimer = setTimeout(() => {
            // Assurer que la barre est bien à 100% à la fin (au cas où le timer serait légèrement désynchronisé)
            progressBar.style.transition = 'none'; // Désactive la transition pour la fin
            progressBar.style.width = '100%';
            loadNextTrack();
        }, durationMs + 1000); // +1s de marge pour finir la lecture

    } else {
        // Pas de durée, pas de progression, pas de timer automatique
        startTime = null;
        progressBar.style.width = '0%';
        if (nextTrackTimer) clearTimeout(nextTrackTimer);
        nextTrackTimer = null;
    }
}


// Chargement de la piste
function loadTrack(track) {
    if (!track || !track.id) {
        console.error("Tentative de chargement d'une piste invalide:", track);
        nowPlayingText.textContent = 'Erreur de sélection de piste.';
        setTimeout(loadNextTrack, 3000); // Essaye à nouveau
        return;
    }

    // Nettoyage avant de charger la nouvelle piste
    if (nextTrackTimer) clearTimeout(nextTrackTimer);
    if (progressInterval) clearInterval(progressInterval);
    startTime = null;
    progressBar.style.transition = 'none'; // Stoppe toute transition en cours
    progressBar.style.width = '0%';       // Réinitialise la barre visuellement


    currentTrackId = track.id;
    isLoading = true; // Marque comme en chargement
    // Affichage message chargement pendant la création de l'iframe
    iframeTarget.innerHTML = '<p class="loading-message">Chargement...</p>';


    const iframe = document.createElement('iframe');
    iframe.id = 'suno-iframe';
    // Forcer l'autoplay est crucial ici
    iframe.src = `https://suno.com/embed/${track.id}?autoplay=true`;
    iframe.title = `Lecteur Suno pour ${track.title}`;
    iframe.allow = 'autoplay; encrypted-media'; // Permissions
    iframe.loading = 'eager'; // Charger immédiatement
    iframe.sandbox = "allow-scripts allow-same-origin allow-presentation"; // Sandbox pour sécurité, ajuster si besoin

    iframe.onload = () => {
        console.log(`Iframe chargée pour ${track.title} (ID: ${track.id})`);
        isLoading = false; // Fin du chargement principal de l'iframe
        updatePlayHistory(track.id); // Met à jour l'historique et efface le message "Chargement..."
        updateProgress(track);       // Démarre la progression et le timer suivant
        preloadNextTrack();          // Précharge la piste suivante
    };

    iframe.onerror = () => {
        console.error(`Erreur chargement iframe pour piste ID: ${track.id}`);
        iframeTarget.innerHTML = '<p class="loading-message">Erreur chargement morceau. Passage au suivant...</p>';
        isLoading = false;
        if (nextTrackTimer) clearTimeout(nextTrackTimer); // Annule le timer prévu
        setTimeout(loadNextTrack, 3000); // Tente de charger une autre piste
    };

    // Remplace le contenu précédent par la nouvelle iframe
    iframeTarget.innerHTML = ''; // Vide le conteneur explicitement
    iframeTarget.appendChild(iframe);
}


function loadNextTrack() {
    // Vérifications pour éviter chargements multiples ou inutiles
    if (isLoading || !radioHasStarted) {
        // console.log(`Chargement suivant annulé (isLoading: ${isLoading}, radioHasStarted: ${radioHasStarted})`);
        return;
    }
    isLoading = true; // Marque le début du processus de chargement

    // Affichage immédiat du statut
    nowPlayingText.textContent = 'Sélection du prochain morceau...';
    iframeTarget.innerHTML = '<p class="loading-message">Chargement...</p>'; // Message dans la zone iframe
    progressBar.style.transition = 'none'; // Stoppe transition
    progressBar.style.width = '0%';       // Réinitialise barre

    // Nettoyage timers précédents
    if (nextTrackTimer) clearTimeout(nextTrackTimer);
    if (progressInterval) clearInterval(progressInterval);
    startTime = null;

    // Sélection et chargement différé pour laisser l'UI se mettre à jour
    setTimeout(() => {
        const trackToLoad = nextTrackPreload || selectRandomTrack();
        nextTrackPreload = null; // Réinitialise la piste préchargée

        if (trackToLoad) {
            loadTrack(trackToLoad);
             // isLoading sera remis à false dans le iframe.onload
        } else {
            iframeTarget.innerHTML = '<p class="loading-message">Erreur : Aucun morceau disponible.</p>';
            nowPlayingText.textContent = 'Erreur de sélection';
            isLoading = false; // Pas de chargement en cours si erreur de sélection
        }
    }, 150); // Délai court
}


function startRadioFirstTime() {
    if (radioHasStarted) return;
    console.log("Démarrage de la radio...");
    radioHasStarted = true;
    initialOverlay.classList.add('hidden');
    // On précharge puis on lance directement loadNextTrack
    preloadNextTrack();
    loadNextTrack();
}

// Écouteurs d'événements
function setupEventListeners() {
    initialOverlay.addEventListener('click', startRadioFirstTime);

    nextTrackButton.addEventListener('click', () => {
        if (isLoading) return;
        if (!radioHasStarted) {
             startRadioFirstTime();
        } else {
             loadNextTrack();
        }
    });

    window.addEventListener('offline', () => {
        console.log("Connexion perdue.");
        if (nextTrackTimer) clearTimeout(nextTrackTimer);
        if (progressInterval) clearInterval(progressInterval);
        isLoading = true; // Bloque les chargements futurs tant qu'offline
        iframeTarget.innerHTML = '<p class="loading-message">Connexion Internet perdue...</p>';
        nowPlayingText.textContent = 'Mode hors ligne';
        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';
    });

    window.addEventListener('online', () => {
        console.log("Connexion rétablie.");
        isLoading = false; // Permet à nouveau les chargements
        nowPlayingText.textContent = 'Connexion rétablie. Reprise...';
        if (radioHasStarted) {
             // On peut choisir de reprendre où ça s'est arrêté ou charger une nouvelle piste
             loadNextTrack(); // Charge une nouvelle piste
        } else {
            // Si la radio n'avait pas démarré, on nettoie juste les messages
            iframeTarget.innerHTML = '';
            nowPlayingText.textContent = '';
        }
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Chargé. Initialisation...");
    if (!sunoTracks || sunoTracks.length === 0) {
        console.error("Liste de morceaux vide ! Application inutilisable.");
        initialOverlay.innerHTML = '<p class="loading-message" style="color: red;">Erreur: Liste de morceaux vide ! Impossible de démarrer.</p>';
        if (startButton) startButton.disabled = true;
        if (nextTrackButton) nextTrackButton.disabled = true;
        preloader.classList.add('hidden'); // Cacher le preloader même si erreur
        return;
    }

    setupEventListeners();

    // Cacher le preloader une fois que tout est prêt (DOM + potentiellement ressources critiques)
    window.addEventListener('load', () => {
        console.log("Fenêtre chargée (ressources incluses).");
        preloader.classList.add('hidden');
    });

    // Enregistrement du Service Worker
    if ('serviceWorker' in navigator) {
        // Charger sw.js après le chargement de la page pour ne pas ralentir le rendu initial
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => console.log('Service Worker enregistré avec succès:', registration.scope))
                .catch(err => console.error('Erreur enregistrement Service Worker:', err));
        });
    }
});