const videoPlayer = document.getElementById('videoPlayer');
const messageContainer = document.getElementById('messageContainer');
const messageText = document.getElementById('messageText');

const message = "May mga gabing tahimik ang mundo pero maingay ang isip ko, Erika. Matagal ko nang dala ito, kaya gusto ko nang maging tapat. Isang awitin ang sinulat ko para masabi sayo na gusto kita, at mas gusto pa kitang makilala. Wala akong hinihinging kapalit at wala ring inaasahan. Ayoko lang hayaang manatiling lihim ang isang bagay na sa tingin ko'y dapat mong malaman.";

// Display message when video ends
videoPlayer.addEventListener('ended', function() {
    messageText.textContent = message;
    messageContainer.classList.remove('hidden');
});

// Close message function
function closeMessage() {
    messageContainer.classList.add('hidden');
    videoPlayer.currentTime = 0;
}

// Close message when clicking outside the message box
messageContainer.addEventListener('click', function(event) {
    if (event.target === messageContainer) {
        closeMessage();
    }
});