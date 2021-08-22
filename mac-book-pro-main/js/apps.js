// extra memory calculation
function memoryCost (memory) {
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    if (memory == 'memory-8gb') {
      return extraMemoryCost.innerText = 0;
    }
    else {
      return extraMemoryCost.innerText = 180;
    }
  }

  // extra storage calculation
  function storageCost (storage) {
    const extraStorageCost = document.getElementById('extra-storage-cost');
    if (storage == 'ssd-storage-256gb') {
      return extraStorageCost.innerText = 0;
    }
    else if (storage == 'ssd-storag-512gb') {
      return extraStorageCost.innerText = 100;
    }
    else {
      return extraStorageCost.innerText = 180;
    }
  }

  // delivery charge calculation

  function deliveryChargeCost (delivery) {
    const deliveryCharge = document.getElementById('delivery-charge');
    if (delivery == 'aug-25') {
      return deliveryCharge.innerText = 0;
    }
    else {
      return deliveryCharge.innerText = 20;
    }
  }

  // extra memory return
  document.getElementById('memory-8gb').addEventListener('click', function () {
    memoryCost('memory-8gb');
    
  })
  document.getElementById('memory-16gb').addEventListener('click', function () {
    memoryCost('memory-16gb'); 
  })

  // extra storage calculation
  document.getElementById('ssd-storage-256gb').addEventListener('click', function () {
    storageCost('ssd-storage-256gb');
    
  })
  document.getElementById('ssd-storage-512gb').addEventListener('click', function () {
    storageCost('ssd-storag-512gb'); 
  })
  document.getElementById('ssd-storage-1tb').addEventListener('click', function () {
    storageCost('ssd-storage-1tb'); 
  })

  
  // delivery charge return
  document.getElementById('aug-25').addEventListener('click', function () {
    deliveryChargeCost('aug-25');
    
  })
  document.getElementById('aug-21').addEventListener('click', function () {
    deliveryChargeCost('aug-21'); 
  })

  // total price calculation
  

  function getBestPrice () {
    const bestPrice = document.getElementById('best-price').innerText;
    const bestPriceNumber = parseFloat(bestPrice);
    return bestPriceNumber;
  }

  
  function updateTotalMemoryPrice (memory) {
    
    const totalPrice = document.getElementById('total-price');
    if (memory == 'memory-8gb') {
      totalPrice.innerText = getBestPrice () + 0;
    }
    else if (memory == 'memory-16gb') {
      totalPrice.innerText = getBestPrice () + 180;
    }
    return totalPrice;
  }

  
  
  function updateTotalStoragePrice (storage) {
    const totalPrice = document.getElementById('total-price');
    if (storage == 'ssd-storage-256gb') {
      totalPrice.innerText = getBestPrice () + 0;
    }
    else if (storage == 'ssd-storag-512gb') {
      totalPrice.innerText = getBestPrice () + 100;
    }
    else if (storage == 'ssd-storage-1tb') {
      totalPrice.innerText = getBestPrice () + 180;
    }
    return totalPrice;
  }
  function updateTotalDeliveryCharge (charge) {
    const totalPrice = document.getElementById('total-price');
    if (charge == 'aug-25') {
      totalPrice.innerText = getBestPrice () + 0;
    }
    else if (charge == 'aug-21') {
      totalPrice.innerText = getBestPrice () + 20;
    }
    return totalPrice;
  }

  // promo code 
  document.getElementById('promo-btn').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input').value;
    promoInput.value = '';
    if (promoInput == 'stevekaku') {
      const discount = document.getElementById('discounted-price');
      const discountNumber = parseFloat(discount.innerText);
      const finalDiscountAmount = Math.round(discountNumber * .80);
      discount.innerText = finalDiscountAmount;
      console.log(finalDiscountAmount);
    }
    else {
      'Please enter valid promo code'
    }
    
  })