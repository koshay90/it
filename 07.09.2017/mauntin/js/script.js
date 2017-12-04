function initMap() {
    var uluru = {lat: 49.426045, lng: 26.982853};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });
    var marker1 = new google.maps.Marker({
        position: {lat: 49.425326, lng: 26.982853},
        map: map,
        title: '!!!!!!!!!!!!',
        icon: 'img/mark.png'
    });
    var marker2 = new google.maps.Marker({
        position: {lat: 49.426289, lng: 26.981582},
        map: map,
        title: '!!!!!!!!!!!!!',
        icon: 'img/mark2.png'
    });
    var marker3 = new google.maps.Marker({
        position: {lat: 49.426202, lng: 26.982011},
        map: map,
        title: '!!!!!!!!!!!!!',
        icon: 'img/mark2.png'
    });
}