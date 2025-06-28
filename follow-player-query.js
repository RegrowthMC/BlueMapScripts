let params = new URLSearchParams(window.location.search);
let playerUuid = params.get('follow_player');
if (playerUuid != null) {
    let playerMarker = bluemap.mapViewer.markers.markerSets.get("bm-players").markers.get("bm-player-" + playerUuid);
    if (playerMarker != null) {
        bluemap.mapViewer.controlsManager.controls.followPlayerMarker(playerMarker);
    }
}
