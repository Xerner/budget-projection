export interface IPlannedTransaction {
  id: string;
  createdTime: string;
  fields: {
    Active: boolean;
    "Is Income": string;
    "Autopay?": boolean;
    Priority: string;
    Amount: number;
    Category: string;
    "Day of month": number;
    Description: string;
    Account: string[];
    "Date Of Transaction": string;
  };
}
