    let selectedSeats = [];
    let seatPrice = 550;
    let couponCode = "DISCOUNT10";
    let appliedCoupon = false;

    function bookSeat(seatId) {
        const index = selectedSeats.indexOf(seatId);

        if (index === -1) {
            selectedSeats.push(seatId);
        } else {
            
            selectedSeats.splice(index, 1);
        }

    
        updateTotalPrice();
    }

    function updateTotalPrice() {
        let total = selectedSeats.length * seatPrice;

        if (appliedCoupon) {
            total *= 0.9; 
        }

        document.getElementById('totalPrice').innerText = total;
    }

    function applyCoupon() {
        const userCoupon = prompt('Enter coupon code:');

        if (userCoupon === couponCode) {
            appliedCoupon = true;
            alert('Coupon code applied successfully!');
        } else {
            alert('Invalid coupon code. Try again.');
        }
        updateTotalPrice();
    }