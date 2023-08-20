(function (Scratch) {
  'use strict';
  
  const dogFacts = [
    "A labrador retriever has been on the AKC's top 10 most popular breeds for longer than any other breed.";
    "A dog's nost print is unique, much like a human's fingerprint.";
    "Forty-five perccent of dogs sleep in their owner's bed.";
    "Puppies and senior dogs tend to dream more than adult dogs.";
    "Seventy-five percent of people sign their dog's name on their holiday cards.";
    "A dog's sense of smell is 60x better than a human's.";
    "Rin Tin Tin, the famous German Shepherd dog, was nominated for an Academy Award.";
    "The French Bulldog was first named the mose popular dog breed of 2022.";
    "The name Collie means black.";
    "The Basenji breed cannot bark, instead it yodels.";
    "The Australian Shepherd dog breed is not from Australia, it is from America!";
    "A person who hunts beagles is called a beagler.";
    "All puppies are born deaf.";
    "Dogs are not color blind. They can see blue and yellow.";
    "Dalmatians are born without spots. They get them as they age.";
  ];  
  class CURIOUS {
    getInfo() {
      return {
        id: 'aidencuriousity',
        name: 'Curiousity',
        color1: '#71b569',
        color2: '#51814b',
        color3: '#375634',
        blocks: [
          {
            opcode: 'randomdogfact',
            blockType: Scratch.BlockType.REPORTER,
            text: 'random dog fact',
          }
        ],
      };
    }
    randomdogfact(args) {
        return dogFacts[Math.floor(Math.random() * dogFacts.length)]
      }
    }
  }
  Scratch.extensions.register(new CURIOUS());
})(Scratch);
