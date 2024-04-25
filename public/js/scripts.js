document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');

    startButton.addEventListener('click', async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
            const videoElement = document.createElement('video');
            videoElement.srcObject = stream;
            videoElement.autoplay = true;

            const popup = window.open('', '_blank', 'width=640,height=480');
            popup.document.body.appendChild(videoElement);
        } catch (error) {
            console.error('Error accessing the camera:', error);
            alert('Error accessing the camera. Please ensure camera access is allowed.');
        }
    });
});
