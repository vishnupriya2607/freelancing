document.addEventListener('DOMContentLoaded', () => {
    const startCallButton = document.getElementById('startCall');
    const endCallButton = document.getElementById('endCall');
    const localVideo = document.getElementById('localVideo');
    const remoteVideo = document.getElementById('remoteVideo');

    // Simple placeholders for video streams
    let localStream;
    let remoteStream;

    // Request access to the user's webcam and microphone
    async function startCall() {
        try {
            localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            localVideo.srcObject = localStream;

            // Add the mirrored class to local video
            localVideo.classList.add('mirrored');

            // Simulate remote stream for demo purposes
            remoteStream = new MediaStream();
            remoteVideo.srcObject = remoteStream;

            // Here you would usually set up the WebRTC connection and handle streams
        } catch (err) {
            console.error('Error accessing media devices.', err);
        }
    }

    function endCall() {
        if (localStream) {
            localStream.getTracks().forEach(track => track.stop());
        }
        if (remoteStream) {
            remoteStream.getTracks().forEach(track => track.stop());
        }
        localVideo.srcObject = null;
        remoteVideo.srcObject = null;

        // Remove the mirrored class from local video
        localVideo.classList.remove('mirrored');
    }

    startCallButton.addEventListener('click', startCall);
    endCallButton.addEventListener('click', endCall);
});
