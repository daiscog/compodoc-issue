function foo() {
  return { question: 'ultimate', answer: 42 };
}

export const {
  /**
   * The question
   */
  question,
  /**
   * The answer
   */
  answer,
} = foo();
