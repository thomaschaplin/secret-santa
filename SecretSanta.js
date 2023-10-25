class SecretSanta {
  constructor() {
    this.names = [];
    this.enforced = Object.create(null);
    this.blacklists = Object.create(null);
  }

  add(name) {
    if (this.names.includes(name)) {
      throw new Error(`Cannot redefine ${name}`);
    }

    this.names.push(name);

    const subapi = {
      enforce: (other) => {
        this.enforced[name] = other;
        return subapi;
      },
      blacklist: (other) => {
        if (!this.blacklists[name]) {
          this.blacklists[name] = [];
        }
        if (!this.blacklists[name].includes(other)) {
          this.blacklists[name].push(other);
        }
        return subapi;
      },
    };

    return subapi;
  }

  generate() {
    const pairings = Object.create(null);
    const candidatePairings = Object.create(null);

    this.names.forEach((name) => {
      if (this.enforced[name]) {
        const enforced = this.enforced[name];
        if (!this.names.includes(enforced)) {
          throw new Error(`${name} is paired with ${enforced}, which hasn't been declared as a possible pairing`);
        }
        for (const pairedName in pairings) {
          if (pairings[pairedName] === enforced) {
            throw new Error(`Per your rules, multiple persons are paired with ${enforced}`);
          }
        }
        candidatePairings[name] = [this.enforced[name]];
      } else {
        let candidates = this.names.filter((n) => n !== name);
        if (this.blacklists[name]) {
          candidates = candidates.filter((n) => !this.blacklists[name].includes(n));
        }
        candidatePairings[name] = candidates;
      }
    });

    const findNextGifter = () => {
      const names = Object.keys(candidatePairings);
      const minCandidateCount = Math.min(...names.map((n) => candidatePairings[n].length));
      const potentialGifters = names.filter((n) => candidatePairings[n].length === minCandidateCount);
      return potentialGifters[Math.floor(Math.random() * potentialGifters.length)];
    };

    while (Object.keys(candidatePairings).length > 0) {
      const name = findNextGifter();
      if (candidatePairings[name].length === 0) {
        throw new Error(`We haven't been able to find a match for ${name}! Press "Generate" to try again and, if it still doesn't work, try removing some exclusions from your rules. Sorry for the inconvenience!`);
      }
      const pairing = candidatePairings[name][Math.floor(Math.random() * candidatePairings[name].length)];
      delete candidatePairings[name];

      for (const pairedName in candidatePairings) {
        candidatePairings[pairedName] = candidatePairings[pairedName].filter((n) => n !== pairing);
      }
      pairings[name] = pairing;
    }

    return pairings;
  }
}
