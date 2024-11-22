export type AccountType = "credit" | "debit";

export class Account {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly aliases: string,
    readonly type: AccountType,
  ) { }

  static GetDummyAccount(): Account {
    return new Account("0", "Dummy Account", "dummy", "debit");
  }
}
