// Liste complète des pistes sans catégorisation fonctionnelle nécessaire ici
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
    // { "id": "6805b1a2-1700-41b3-80db-c285045e99e8", "title": "PODŁOŻE BUJANE", "artist": "ZoleMusicAI.", "categorie": "Calme Puissant", "duration": 223 }, // Duplicate ID, commented out
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
let nextTrackPreload = null; // Nouvelle variable pour le préchargement

// Éléments du DOM
const preloader = document.getElementById('preloader');
// const categoryButtonsContainer = document.querySelector('.category-buttons'); // Supprimé
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

// Fonction mise à jour pour ne plus afficher le titre/artiste
function updatePlayHistory(trackId) {
    if (!trackId) return;
    let history = getPlayHistory();
    const track = sunoTracks.find(t => t.id === trackId);
    if (track) {
        // ****************************************************
        // ANCIENNE LIGNE (supprimée ou commentée ci-dessous) :
        // nowPlayingText.textContent = `En cours: ${track.title} par ${track.artist}`;

        // NOUVELLE APPROCHE : On vide le texte ici pour effacer
        // les messages "Chargement..." ou "Erreur..." précédents
        // lorsque la piste démarre correctement.
        nowPlayingText.textContent = '';
        // ****************************************************


        // Le reste de la logique pour l'historique localStorage reste inchangé
        if (history.length === 0 || history[0].id !== trackId) {
            history.unshift({
                id: trackId,
                title: track.title,
                artist: track.artist,
                // category: track.categorie, // Déjà commenté/supprimé
                timestamp: new Date().toISOString()
            });
            if (history.length > 15) history = history.slice(0, 15); // Garde les 15 derniers
            try {
                localStorage.setItem('sunoRadioHistory', JSON.stringify(history));
            } catch (e) {
                console.error("Erreur sauvegarde historique:", e);
            }
        }
    }
}

// Fonction getTracksByCategory supprimée car inutile sans catégories

function selectRandomTrack() {
    const history = getPlayHistory();
    let availableTracks = [...sunoTracks]; // Commence avec toutes les pistes

    if (availableTracks.length === 0) {
        console.warn(`Aucun morceau disponible.`);
        return null; // Ou gérer autrement l'absence de pistes
    }

    // Filtrer pour éviter les 2 dernières pistes jouées (si possible)
    if (history.length > 0 && availableTracks.length > 2) {
        const recentTrackIds = [...new Set(history.slice(0, 2).map(item => item.id))];
        const filteredTracks = availableTracks.filter(track => !recentTrackIds.includes(track.id));
        if (filteredTracks.length > 0) {
            availableTracks = filteredTracks;
        }
        // Si le filtrage ne laisse aucune piste (improbable mais possible), on garde la liste complète non filtrée
    }

    // Sélection aléatoire parmi les pistes disponibles
    return availableTracks[Math.floor(Math.random() * availableTracks.length)];
}

// Fonction updateCategoryButtons supprimée

function updateProgress(track) {
    progressBar.style.width = '0%';
    if (track.duration) {
        startTime = Date.now();
        // Utiliser requestAnimationFrame pour une mise à jour plus fluide serait mieux, mais setInterval est simple
        const interval = setInterval(() => {
            if (!startTime) { // Vérifie si startTime a été réinitialisé (ex: changement de piste manuel)
                 clearInterval(interval);
                 return;
            }
            const elapsed = (Date.now() - startTime) / 1000;
            const progress = Math.min((elapsed / track.duration) * 100, 100);
            progressBar.style.width = `${progress}%`;
            if (progress >= 100) {
                 clearInterval(interval);
            }
        }, 500); // Mise à jour toutes les 500ms

        // Assurer que le timer global pour la prochaine piste gère l'arrêt de l'intervalle
        if (nextTrackTimer) clearTimeout(nextTrackTimer); // Annule l'ancien timer avant d'en créer un nouveau
        nextTrackTimer = setTimeout(() => {
            clearInterval(interval); // Nettoie l'intervalle quand le timer expire
            loadNextTrack();
        }, track.duration * 1000 + 3000); // +3s de marge
    } else {
         // Si pas de durée, on ne peut pas avancer la barre ni timer la prochaine piste automatiquement
         progressBar.style.width = '0%';
         if (nextTrackTimer) clearTimeout(nextTrackTimer);
         nextTrackTimer = null; // Pas de timer si pas de durée
    }
}


// Chargement de la piste
function loadTrack(track) {
    if (!track || !track.id) {
        console.error("Tentative de chargement d'une piste invalide:", track);
        iframeTarget.innerHTML = '<p class="loading-message">Erreur : Piste invalide sélectionnée.</p>';
        nowPlayingText.textContent = 'Erreur de chargement';
        // Essayer de charger une autre piste après un délai
        setTimeout(loadNextTrack, 3000);
        return;
    }

    // Nettoyer l'ancien timer et réinitialiser startTime pour la barre de progression
    if (nextTrackTimer) clearTimeout(nextTrackTimer);
    startTime = null; // Important pour arrêter la mise à jour de la barre de progression précédente

    currentTrackId = track.id;
    const iframe = document.createElement('iframe');
    iframe.id = 'suno-iframe';
    iframe.src = `https://suno.com/embed/${track.id}?autoplay=true`;
    iframe.title = `Lecteur Suno pour ${track.title}`;
    iframe.allow = 'autoplay';
    iframe.loading = 'lazy'; // Le navigateur chargera quand il approche du viewport (peut ne pas être idéal pour préchargement audio)
    iframe.onerror = () => {
        console.error(`Erreur chargement iframe pour piste ID: ${track.id}`);
        iframeTarget.innerHTML = '<p class="loading-message">Erreur : Impossible de charger ce morceau. Passage au suivant...</p>';
        // Si une piste échoue, on passe à la suivante sans attendre la durée
        setTimeout(loadNextTrack, 2000);
    };

    iframeTarget.innerHTML = ''; // Vide le conteneur
    iframeTarget.appendChild(iframe);
    updatePlayHistory(track.id); // Met à jour l'affichage et l'historique
    updateProgress(track); // Démarre la barre de progression et le timer pour la *prochaine* piste

    // Préchargement de la piste suivante (après un court délai pour laisser la piste actuelle démarrer)
    setTimeout(preloadNextTrack, 1000);
}


function loadNextTrack() {
    if (!radioHasStarted || isLoading) return;
    isLoading = true;
    iframeTarget.innerHTML = '<p class="loading-message">Chargement du prochain morceau...</p>';
    nowPlayingText.textContent = 'Sélection en cours...';
    progressBar.style.width = '0%'; // Réinitialise la barre
    if(nextTrackTimer) clearTimeout(nextTrackTimer); // Nettoie le timer précédent s'il existe
    startTime = null; // Réinitialise startTime pour la progression

    setTimeout(() => {
        const trackToLoad = nextTrackPreload || selectRandomTrack(); // Utilise la piste préchargée si disponible
        if (trackToLoad) {
            loadTrack(trackToLoad);
            // Le préchargement de la *prochaine* piste se fait maintenant dans loadTrack
        } else {
            iframeTarget.innerHTML = '<p class="loading-message">Erreur : Aucun morceau trouvé.</p>';
            nowPlayingText.textContent = 'Erreur de sélection';
        }
        isLoading = false;
    }, 150); // Léger délai pour l'affichage du message de chargement
}

function startRadioFirstTime() {
    if (radioHasStarted) return;
    radioHasStarted = true;
    initialOverlay.classList.add('hidden');
    // Précharge la première piste avant de la charger
    preloadNextTrack();
    // Charge la piste (qui utilisera nextTrackPreload si défini)
    loadNextTrack();
}

// Écouteurs d'événements
function setupEventListeners() {
    // Écouteur pour les boutons de catégorie supprimé

    initialOverlay.addEventListener('click', startRadioFirstTime);
    nextTrackButton.addEventListener('click', () => {
        if (isLoading) return; // Empêche les clics multiples pendant le chargement
        if (!radioHasStarted) {
             startRadioFirstTime(); // Lance la radio si ce n'est pas déjà fait
        } else {
             loadNextTrack(); // Charge la piste suivante
        }
    });

    window.addEventListener('offline', () => {
        // Gérer la perte de connexion
        if (nextTrackTimer) clearTimeout(nextTrackTimer); // Arrête le timer pour la prochaine piste
        iframeTarget.innerHTML = '<p class="loading-message">Connexion perdue. Veuillez vérifier votre réseau.</p>';
        nowPlayingText.textContent = 'Mode hors ligne';
        isLoading = true; // Bloque les chargements
    });
    window.addEventListener('online', () => {
        // Gérer le retour de la connexion
        nowPlayingText.textContent = 'Connexion rétablie. Reprise...';
        isLoading = false; // Débloque les chargements
        if (radioHasStarted) {
             loadNextTrack(); // Relance la lecture
        } else {
            iframeTarget.innerHTML = ''; // Nettoie le message hors ligne si la radio n'avait pas démarré
            nowPlayingText.textContent = ''; // Efface le message
        }
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    if (!sunoTracks || sunoTracks.length === 0) {
        initialOverlay.innerHTML = '<p class="loading-message" style="color: red;">Erreur: Liste de morceaux vide !</p>';
        // Désactiver le bouton start si pas de pistes
        if (startButton) startButton.disabled = true;
        if (nextTrackButton) nextTrackButton.disabled = true;
        return;
    }
    // updateCategoryButtons(); // Supprimé
    setupEventListeners();

    // Cacher le preloader une fois la page chargée
    window.addEventListener('load', () => {
        preloader.classList.add('hidden');
    });

    // Enregistrement du Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('Service Worker enregistré avec succès:', registration.scope))
            .catch(err => console.error('Erreur enregistrement Service Worker:', err));
    }
});
