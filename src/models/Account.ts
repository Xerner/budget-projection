import { STRINGS } from "common/library";

export type AccountType = "Credit" | "Debit";

export class Account {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly aliases: string[] | undefined,
    readonly owner: string,
    readonly type: AccountType,
  ) { }

  doesNameRepresent(accountName: string): boolean {
    return STRINGS.compare(accountName, this.name, this.aliases) === 0;
  }

  static UnknownAccount(): Account {
    return new Account("0", "Unknown Account", undefined, "", "Debit");
  }
}
