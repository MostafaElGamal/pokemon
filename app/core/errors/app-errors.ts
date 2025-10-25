export class AppErrorIncorrectId extends Error {
  constructor(message: string = 'Invalid ID provided') {
    super(message);
    this.name = 'AppErrorIncorrectId';
  }
}

export class AppError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AppError';
  }
}