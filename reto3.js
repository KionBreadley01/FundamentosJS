function distributeGifts(packOfGifts,reindeers){
    let totalGifts = 0;
    let totalRemos = 0;
    packOfGifts.forEach(
        gift => totalGifts += gift.length
    );
    reindeers.forEach(
        reinder =>totalRemos = reinder.length * 2
    );
   
    return Math.floor (totalRemos/ totalGifts);
    }
