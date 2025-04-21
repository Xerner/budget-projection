import { DateTime } from "luxon";
import { DateFilterService } from "src/services/date-filters.service";
import { ProjectedTransactionService } from "src/services/projected-transactions/projected-transactions.service";
import { DateFilterEntity } from "src/models/DateFilterEntity";
import { PlannedTransaction } from "src/models/PlannedTransaction";
import dates from "./dates.json";
import plannedTransactionsRaw from "./plannedTransactions.json";
import dateFiltersRaw from "./dateFilters.json";

var dateFilterService = new DateFilterService();
var projectedTransactionService = new ProjectedTransactionService(dateFilterService);
var plannedTransactions = plannedTransactionsRaw.map(plannedTransactionRaw => PlannedTransaction.fromJson(plannedTransactionRaw));
var dateFilters = dateFiltersRaw.map<DateFilterEntity<PlannedTransaction, any>>(dateFilterRaw => DateFilterEntity.fromJson(dateFilterRaw));
var datetimes = dates.map(date => DateTime.fromISO(date));

test('get projected planned transactions', () => {
  var projectedTransactions = projectedTransactionService.getProjectedPlannedTransactions(plannedTransactions, dateFilters, datetimes[0], datetimes[dates.length - 1], 0);
  expect(projectedTransactions.length).toBeGreaterThan(0);
});
