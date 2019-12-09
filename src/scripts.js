export class Age {
  constructor(age) {
     this.age = age;
   }

   ageMercury() {
     let mercuryAge = this.age / 0.24;
     return parseInt(mercuryAge);
   }

   ageVenus() {
     let venusAge = this.age / 0.62;
     return parseInt(venusAge);
   }

   ageMars() {
     let marsAge = this.age / 1.88;
     return parseInt(marsAge);
   }

   ageJupiter() {
     let jupiterAge = this.age / 11.86;
     return parseInt(jupiterAge);
   }

   lifeMercury() {
      const lifeSpan = 100;
      let planetAge = parseInt(this.ageMercury());
      let aboveAverage = planetAge - lifeSpan;
      let belowAverage = lifeSpan - planetAge;
      if (lifeSpan > planetAge) {
        return "Your life span on Mercury is " + belowAverage + " more years.";
      } if (lifeSpan < planetAge) {
        return "You have lived " + aboveAverage + " more years than an average human.";
      }}

  lifeVenus() {
     const lifeSpan = 100;
     let planetAge = parseInt(this.ageVenus());
     let aboveAverage = planetAge - lifeSpan;
     let belowAverage = lifeSpan - planetAge;
     if (lifeSpan > planetAge) {
       return "Your life span on Venus is " + belowAverage + " more years.";
     } if (lifeSpan < planetAge) {
       return "You have lived " + aboveAverage + " more years than an average human.";
     }}

   lifeMars() {
      const lifeSpan = 100;
      let planetAge = parseInt(this.ageMars());
      let aboveAverage = planetAge - lifeSpan;
      let belowAverage = lifeSpan - planetAge;
      if (lifeSpan > planetAge) {
        return "Your life span on Mars is " + belowAverage + " more years.";
      } if (lifeSpan < planetAge) {
        return "You have lived " + aboveAverage + " more years than an average human.";
      }}

    lifeJupiter() {
       const lifeSpan = 100;
       let planetAge = parseInt(this.ageJupiter());
       let aboveAverage = planetAge - lifeSpan;
       let belowAverage = lifeSpan - planetAge;
       if (lifeSpan > planetAge) {
         return "Your life span on Jupiter is " + belowAverage + " more years.";
       } if (lifeSpan < planetAge) {
         return "You have lived " + aboveAverage + " more years than an average human.";
       }}
  }
