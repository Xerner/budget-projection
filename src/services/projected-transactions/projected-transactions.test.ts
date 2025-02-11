import { DateFilterService } from "services/date-filters/date-filters.service";
import { ProjectedTransactionService } from "./projected-transactions.service";
import { PlannedTransaction } from "models/PlannedTransaction";
import dates from "./dates.json";
import plannedTransactionsRaw from "./plannedTransactions.json";
import dateFiltersRaw from "./dateFilters.json";
import { DateFilterEntity } from "models/DateFilter";
import { DateTime } from "luxon";

var dateFilterService = new DateFilterService();
var projectedTransactionService = new ProjectedTransactionService(dateFilterService);
var plannedTransactions = plannedTransactionsRaw.map(plannedTransactionRaw => PlannedTransaction.fromJson(plannedTransactionRaw));
var dateFilters = dateFiltersRaw.map<DateFilterEntity<PlannedTransaction, any>>(dateFilterRaw => DateFilterEntity.fromJson(dateFilterRaw));
var datetimes = dates.map(date => DateTime.fromISO(date));

test('get projected planned transactions', () => {
  var projectedTransactions = projectedTransactionService.getProjectedPlannedTransactions(plannedTransactions, dateFilters, datetimes[0], datetimes[dates.length - 1], 0);
  expect(projectedTransactions.length).toBeGreaterThan(0);
});
