export class ClientError extends Error {
  constructor(msg: string) {
    super(msg);
  }
}

export class ServiceError extends Error {
  readonly service: string;

  constructor(msg: string, service: string) {
    super(msg);
    this.service = service;
  }
}
