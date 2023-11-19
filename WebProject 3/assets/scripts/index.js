
$("#currentYear").html(new Date().getFullYear());

class Reservation{
    constructor(fullName,email,checkInDate,checkOutDate,guests,room){
        this.fullName = fullName;
        this.email = email;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.guests = guests;
        this.room = room;
    }
}

// Redirect to Reservation Page
$('#reservationBtn').click( function() {
    window.location.href = 'reservation.html'; 
    
});

$(document).ready(function () {
    const reservations = JSON.parse(localStorage.getItem('reservations')) || [];

    function displayReservations() {
        const tableBody = $('#reservationTable tbody');
        tableBody.empty();

        reservations.forEach((reservation, index) => {
            const row = $('<tr></tr>');
            row.html(`
                <td>${reservation.fullName}</td>
                <td>${reservation.email}</td>
                <td>${reservation.checkInDate}</td>
                <td>${reservation.checkOutDate}</td>
                <td>${reservation.guests}</td>
                <td>${reservation.room}</td>
                <td><button class="deleteBtn" data-index="${index}">Delete</button></td>
            `);
            tableBody.append(row);
        });

        $('.deleteBtn').on('click', function () {
            const index = $(this).data('index');
            reservations.splice(index, 1);
            localStorage.setItem('reservations', JSON.stringify(reservations));
            displayReservations();
        });
    }

    $('#submitBtn').on('click', function (e) {
        e.preventDefault();

        var fullName = $('#fullName').val();
        var email = $('#email').val();
        var checkInDate = $('#checkInDate').val();
        var checkOutDate = $('#checkOutDate').val();
        var guests = $('#guests').val();
        var selectedRoom = $('#rooms').val();

        if (!fullName || !email || !checkInDate || !checkOutDate || !guests || !selectedRoom) {
            alert("Please fill in all fields.");
            return;
        }

        if(fullName.length < 3){
            alert("Full name must be at least 3 characters long!");
            return;
        }

        if(!email.endsWith("@gmail.com")){
            alert("Invalid email address!");
            return;
        }

        var reservation = new Reservation(fullName, email, checkInDate, checkOutDate, guests, selectedRoom);
        reservations.push(reservation);

        localStorage.setItem('reservations', JSON.stringify(reservations));

        alert('Reservation submitted successfully!');
        $('#reservationForm')[0].reset();
        displayReservations();
    });

    displayReservations();
});