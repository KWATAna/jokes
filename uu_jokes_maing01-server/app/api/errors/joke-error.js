"use strict";
const JokesMainUseCaseError = require("./jokes-main-use-case-error.js");
const JOKE_ERROR_PREFIX = `${JokesMainUseCaseError.ERROR_PREFIX}joke/`;
const Create = {
  UC_CODE: `${JOKE_ERROR_PREFIX}create/`,

  InvalidDtoIn: class extends JokesMainUseCaseError {
      constructor() {
          super(...arguments);
          this.code = `${Create.UC_CODE}invalidDtoIn`;
          this.message = "DtoIn is not valid.";
      }
    },

  jokesDoesNotExist: class extends JokesMainUseCaseError {
      constructor() {
          super(...arguments);
          this.code = `${Create.UC_CODE}invalidDtoIn`;
          this.message = "jokes does not exist";
      }
    },

    
  jokesIsNotInCorrectState: class extends JokesMainUseCaseError {
      constructor() {
          super(...arguments);
          this.code = `${Create.UC_CODE}invalidDtoIn`;
          this.message = "jokes is not in correct state.";
      }
    },

  CreateJoke: class extends JokesMainUseCaseError {
  constructor() {
    super(...arguments);
    this.code = `${Create.UC_CODE}createJokeFailed`;
    this.message = "Joke food .";
  }
  }
}

const Get = {
  UC_CODE: `${JOKE_ERROR_PREFIX}get/`,

  jokesDoesNotExist: class extends JokesMainUseCaseError {
    constructor() {
        super(...arguments);
        this.code = `${Get.UC_CODE}jokesDoesNotExist`;
        this.message = "jokes does not exist";
    }
  },

  jokesIsNotInCorrectState: class extends JokesMainUseCaseError {
    constructor() {
        super(...arguments);
        this.code = `${Get.UC_CODE}jokesIsNotInCorrectState`;
        this.message = "jokes is not in correct state.";
    }
  },
  InvalidDtoIn: class extends JokesMainUseCaseError {
    constructor() {
        super(...arguments);
        this.code = `${Get.UC_CODE}invalidDtoIn`;
        this.message = "DtoIn is not valid.";
    }
  },
  JokeDoesNotExist: class extends JokesMainUseCaseError {
    constructor(){
      super(...arguments)
      this.code = `${Get.UC_CODE}jokeDoesNotExist`;
      this.message = "Joke doesn't exist"

    }
  }



}

module.exports = {
  Create,
  Get
};
